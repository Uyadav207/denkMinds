"use client"; 

import { useRouter } from "next/navigation"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BackButton() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back(); 
  };

  return (
			<button
				type="button"
				className="flex items-center space-x-2 mb-8 mt-8 underline-onhover text-[#FFA1DF] hover:text-white"
				onClick={handleBackClick}
			>
				<FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4 sm:h-5 sm:w-5" />
				<span className="hover-color-text underline-white">Back</span>
			</button>
		);
}
