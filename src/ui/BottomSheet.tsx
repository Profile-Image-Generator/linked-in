import React, { useState, useEffect } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import { createPortal } from "react-dom";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  isFullSize?: boolean;
  title?: string;
}

const enum SheetState {
  Closed = "closed",
  Half = "half",
  Full = "full",
}

const DRAG_THRESHOLD = 50;
const VELOCITY_THRESHOLD = 500;

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  children,
  title = "Bottom Sheet",
  isFullSize = false,
}) => {
  const sheetAnimation = useAnimation(); // 애니메이션 제어 객체
  const [sheetState, setSheetState] = useState<SheetState>(SheetState.Closed);

  const handleClose = () => {
    setSheetState(SheetState.Closed);
    onClose();
  };

  const heightStyle = isFullSize ? "h-screen" : "h-[50vh]";

  useEffect(() => {
    if (isOpen) {
      setSheetState(isFullSize ? SheetState.Full : SheetState.Half);
      sheetAnimation.start({ y: 0, height: "50vh" });
    } else {
      setSheetState(SheetState.Closed);
      sheetAnimation.start({ y: "100%" });
    }
  }, [isOpen, sheetAnimation, isFullSize]);

  const handleDragEnd = (_: never, info: PanInfo) => {
    const { offset, velocity } = info;
    // velocity: 드래그 속도
    const swipeUp =
      offset.y < -DRAG_THRESHOLD || velocity.y < -VELOCITY_THRESHOLD;
    // 사용자가 충분히 위로 드래그했거나 빠르게 위로 스와이프한 경우
    const swipeDown =
      offset.y > DRAG_THRESHOLD || velocity.y > VELOCITY_THRESHOLD;
    // 사용자가 충분히 아래로 드래그했거나 빠르게 아래로 스와이프한 경우

    if (sheetState === SheetState.Half) {
      if (swipeUp) {
        expandToFullScreen();
      } else if (swipeDown) {
        handleClose();
      } else {
        resetToHalfScreen();
      }
    } else if (sheetState === SheetState.Full) {
      if (swipeDown) {
        handleClose();
      } else {
        expandToFullScreen();
      }
    }
  };

  const expandToFullScreen = () => {
    setSheetState(SheetState.Full);
    sheetAnimation.start({
      y: 0,
      height: "100vh",
    });
  };

  const resetToHalfScreen = () => {
    setSheetState(SheetState.Half);
    sheetAnimation.start({
      y: 0,
      height: "50vh",
    });
  };

  const BottomSheetComp = (
    <motion.div
      drag={"y"}
      dragElastic={0.1} // 약간의 탄성을 주어 자연스러운 느낌
      dragMomentum={false} // 드래그 후 탄성 효과를 비활성화
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      initial={{ y: "100%" }}
      animate={sheetAnimation} // 애니메이션 제어 객체
      transition={{
        y: {
          type: "spring",
          damping: 30,
          stiffness: 300,
        },
        height: { duration: 0.3, ease: "easeOut" },
      }}
      className={`fixed bottom-0 left-0 right-0 w-full bg-white rounded-t-lg p-4 z-10 ${heightStyle}`}
    >
      <SheetHeader title={title} onClose={handleClose} />
      <SheetContent>{children}</SheetContent>
      <SheetFooter onClose={handleClose} />
    </motion.div>
  );
  return createPortal(BottomSheetComp, document.body);
};

const SheetHeader: React.FC<{ title: string; onClose: () => void }> = ({
  title,
  onClose,
}) => (
  <header className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-bold">{title}</h2>
    <button onClick={onClose} aria-label="Close" className="text-2xl font-bold">
      &times;
    </button>
  </header>
);

const SheetContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <section className="mb-4 overflow-y-auto h-[calc(100%-8rem)] bg-orange-600">
    {children}
  </section>
);

const SheetFooter: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <footer>
    <button
      onClick={onClose}
      className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
    >
      Close
    </button>
  </footer>
);

export default BottomSheet;
