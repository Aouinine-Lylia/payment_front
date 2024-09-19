import React from "react";

export const ProgressBar = ({ step }) => {
  if (!step) {
    step = 20;
  }
  const widthStyle = { width: `${step}%` };

  return (
    <div className="mb-6 sm:mb-0">
      <div className="flex flex-row w-full items-center justify-between mb-2 p-1">
        <div className="flex flex-row items-center gap-1">
          <img src="Arrow left.svg" alt="retour" className="w-[24px]" />
          <span className="font-Poppins text-sm sm:text-md font-medium">
            Paiement
          </span>
        </div>
        <img src="logo.svg" alt="logo" className="w-[100px] sm:w-[150px]" />
      </div>
      <div className=" sm:w-[98%] h-1 relative bg-[#eeeeee] rounded-sm mb-2">
        <div
          className="h-1 left-0 top-0 absolute rounded-sm bg-[#0056b3]"
          style={widthStyle}
        />
      </div>
    </div>
  );
};
