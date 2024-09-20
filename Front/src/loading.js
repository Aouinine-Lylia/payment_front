import React from "react";

export const Loading = () => {
    return (
        
        <div className="flex flex-col space-y-8 items-center justify-center bg-white bg-opacity-90 mt-[20%]">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-[#197CBD]"></div>
        <div className="text-center text-black text-xl font-normal font-Poppins leading-9">Opération en cours ...</div>
        </div>
        
        
    );
}