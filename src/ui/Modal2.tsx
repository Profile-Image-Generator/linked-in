import { createPortal } from "react-dom";
import React, { useEffect, useRef, useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  footer,
  title,
}: ModalProps) {
  const foods = [
    { name: "커피", image: "/images/cake.JPG" },
    { name: "만두", image: "/images/hui.JPG" },
    { name: "샌드위치", image: "/images/me.JPG" },
    { name: "보쌈", image: "/images/meat.JPG" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef<HTMLDialogElement>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? foods.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === foods.length - 1 ? 0 : prev + 1));
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  const ModalComp = (
    <dialog
      ref={modalRef}
      open
      className=" fixed  top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-80 "
      onClick={handleOutsideClick}
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className="relative bg-pink-300 p-12 rounded-lg shadow-2xl"
      >
        <header className=" flex items-center justify-center mb-4">
          <h1 className="text-3xl font-bold pr-4 ">
            내가 조아하는 음식을 아르켜줄게 🫧🫧
          </h1>
          <button
            onClick={onClose}
            className="absolute  top-4 right-3 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-40"
          >
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>
        <article className="flex flex-col items-center">
          <h2 className="text-green-200 text-2xl mb-4 mt-5">
            {foods[currentIndex].name}
          </h2>

          <img
            src={foods[currentIndex].image}
            alt={foods[currentIndex].name}
            className="w-40 h-40 object-cover rounded-full mb-4 shadow-lg"
          />

          <ul className="flex justify-between w-full">
            <li>
              <button
                onClick={prevSlide}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg"
              >
                이전
              </button>
            </li>
            <li>
              <button
                onClick={nextSlide}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg"
              >
                다음
              </button>
            </li>
          </ul>
        </article>
      </section>
    </dialog>
  );

  return createPortal(ModalComp, document.body);
}
