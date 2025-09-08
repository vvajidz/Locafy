// src/Components/Loader.tsx

import Lottie from "lottie-react";
import loaderAnimation from "../assets/loader.json"; // Update the path to your Lottie JSON

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-emerald-50">
      <Lottie 
        animationData={loaderAnimation} 
        loop={true} 
        className="w-48 h-48" // Adjust size with Tailwind as needed
      />
    </div>
  );
};

export default Loader;