import React, { useState, useRef, useEffect } from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import useDisclosure from "../hooks/useDisclosure";
import { createPortal } from "react-dom";
import BottomSheet from "../ui/BottomSheet";
import Modal2 from "../ui/Modal2";

interface BannerImageEditorProps {
  setBannerImage: (image: string) => void;
}

const BannerImageEditor: React.FC<BannerImageEditorProps> = ({
  setBannerImage,
}) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {
    isOpen: isModalOpen,
    open: handleModalOpen,
    close: handleModalClose,
  } = useDisclosure();
  const {
    isOpen: isBottomSheetOpen,
    open: handleBottomSheetOpen,
    close: handleBottomSheetClose,
  } = useDisclosure();
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // useEffect(() => {
  //     if (uploadedImage && canvasRef.current) {
  //         const canvas = canvasRef.current;
  //         const ctx = canvas.getContext('2d');
  //         const img = new Image();
  //         img.onload = () => {
  //             // Determine the size of the square
  //             const size = Math.min(img.width, img.height);
  //             // Set canvas size to 1:1 ratio
  //             canvas.width = size;
  //             canvas.height = size;
  //             // Calculate cropping
  //             const xOffset = (img.width - size) / 2;
  //             const yOffset = (img.height - size) / 2;
  //             // Draw the image on the canvas
  //             ctx?.drawImage(img, xOffset, yOffset, size, size, 0, 0, size, size);
  //             // Set the cropped image
  //             setBannerImage(canvas.toDataURL());
  //         };
  //         img.src = uploadedImage;
  //     }
  // }, [uploadedImage, setBannerImage]);

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Banner Picture</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
          />
        </div>
        {uploadedImage && (
          <div className="mt-4 flex items-center justify-center">
            <img
              alt={"Banner preview"}
              src={uploadedImage}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
        <Button onClick={handleModalOpen}>정렬 수정하기</Button>
        {/*<Button onClick={handleBottomSheetOpen}>정렬 수정하기</Button>*/}
      </div>
      {isModalOpen && (
        <Modal2
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title={"Edit Banner Image Arrangement"}
        >
          test
        </Modal2>
      )}
      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={handleBottomSheetClose}
      />
    </>
  );
};

export default BannerImageEditor;
