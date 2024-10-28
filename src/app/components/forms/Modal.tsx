import React from 'react';
import { IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSuccess: boolean;
  message?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, isSuccess, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-1/3 shadow-lg">
        <div className="flex items-center mb-4">
          {isSuccess ? (
            <IoMdCheckmarkCircleOutline className="text-green-500 text-3xl mr-2" />
          ) : (
            <IoMdCloseCircleOutline className="text-red-500 text-3xl mr-2" />
          )}
          <h2 className="text-xl font-bold">{isSuccess ? "Success!" : "Error!"}</h2>
        </div>
        <p className="mt-2 text-gray-700">
          {isSuccess ? "Thank you for your submission!" : message}
        </p>
        <div className="mt-4">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-lg hover:bg-opacity-70 transition duration-400 ${
              isSuccess ? "bg-violet-500 text-white hover:bg-violet-700" : "bg-red-500 text-white hover:bg-red-700"
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
