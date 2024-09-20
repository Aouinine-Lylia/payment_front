import React from "react";

export const SuccessScreen = (props) => {
    props = {
        method: "card"
    }

  return (
    <div>
      <div className=" flex flex-col items-center justify-center space-y-8">
        <img src="shieldIcon.svg" alt="Success" />
        <div className="text-center text-black text-xl font-normal font-['Poppins'] leading-9">
          Opération terminée avec succès
        </div>
        <img src="Vector 2.svg" alt="line" />
        {props.method === "SEPA" ? (
            
        <div className="w-full sm:w-[60%] px-10 py-8 bg-white rounded border border-[#0056b3] justify-between items-center inline-flex">
          <div className="grow shrink basis-0 text-[#1e1e1e] text-md font-medium font-Poppins ">
            Suivre l’état de votre Virement SEPA
          </div>
          <img src="Arrow right.svg" alt="Arrow right" />
        </div>
        ):(
            <div className="space-y-8 w-full sm:w-[60%] flex flex-col">
            <div className=" px-10 py-8 bg-white rounded border border-[#0056b3] justify-between items-center inline-flex">
          <div className="grow shrink basis-0 text-[#1e1e1e] text-md font-medium font-Poppins ">
          Consulter ou télécharger la facture 
          </div>
          <img src="download.svg" alt="download"/>
      </div>
      <div className="px-10 py-8 bg-white rounded border border-[#0056b3] justify-between items-center inline-flex">
          <div className="grow shrink basis-0 text-[#1e1e1e] text-md font-medium font-Poppins ">
          Envoyer facture par e-mail
          </div>
          <img src="Paper Plane.svg" alt="send" />
      </div></div>
      )}
    </div>
    </div>
  );
};
