"use client"; 

import { useRouter } from "next/navigation"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BackButton() {
  const router = useRouter();

  const handleBackClick = () => {
    console.log("back clicked");
    router.back(); 
  };

  return (
    <button
      className="flex items-center space-x-2 mb-8 mt-8 text-blue-300 hover:text-blue-500 font-bold"
      onClick={handleBackClick}
    >
      <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4 sm:h-5 sm:w-5" />
      <span>Back</span>
    </button>
  );
}
