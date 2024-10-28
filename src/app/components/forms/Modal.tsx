import React from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void; // Function type that takes no arguments and returns void
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-1/3">
        <h2 className="text-xl font-bold mb-2">Success!</h2>
        <p>Your form has been submitted successfully.</p>
        <div className="mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-700 transition duration-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
