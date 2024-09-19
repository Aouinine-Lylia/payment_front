// src/components/InvoiceSummary.js
import React from "react";

function InvoiceSummary(props) {
    if (!props.Nom) {
        props={
            Nom: "Nom de ressource",
            dateDebut: "Date Début",
            dateFin: "Date Fin",
            prix: "Prix",
        }
    }
  return (
    <div className="sm:bg-[#F6F6F6] sm:p-6 w-full rounded-lg pb-2 ">
      <h2 className="sm:text-xl text-lg font-semibold mb-4 font-Poppins">Facture</h2>
      <div>
        <div className="w-[382px] mb-2 flex-col justify-start items-start gap-0.5 inline-flex">
          <div className="w-[277px] text-[#7b7b7b] text-xs sm:text-sm font-medium font-Poppins">
            Nom de ressource
          </div>
          <div className="self-stretch text-[#1e1e1e] text-xs sm:text-sm font-normal font-Poppins">
            {props.Nom}
          </div>
        </div>
        <div className="mb-4 flex">
          <div className="w-[180px] flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="self-stretch text-[#7b7b7b] text-xs sm:text-sm font-medium font-Poppins">
              Date Début
            </div>
            <div className="self-stretch text-[#1e1e1e] text-xs sm:text-sm font-normal font-Poppins">
              {props.dateDebut}
            </div>
          </div>

          <div className="w-[180px] flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="self-stretch text-[#7b7b7b] text-xs sm:text-sm font-medium font-Poppins">
              Date Fin
            </div>
            <div className="self-stretch text-[#1e1e1e] text-xs sm:text-sm font-normal font-Poppins">
            {props.dateFin}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="w-full sm:w-[90%] px-6 py-4 bg-[#F6F6F6] sm:bg-white rounded-lg flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="self-stretch text-[#7b7b7b] text-xs sm:text-sm font-medium font-Poppins">
              Prix à payer
            </div>
            <div className="self-stretch text-[#1e1e1e] text-lg sm:text-2xl font-semibold font-Poppins">
              {props.prix} €
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm hidden sm:block">
        <div className="mb-2">
          <div className="flex items-center mb-1">
            <img alt="secure" src="Check.svg" className="w-7 h-7"></img>
            <div className="text-[#1e1e1e] text-lg font-medium font-Poppins">
              Paiement
            </div>
          </div>
          <div className="text-[#7b7b7b] text-sm font-normal font-Poppins">
            On vous assure des transactions faciles et sécurisés en utilisant
            Stripe pour le traitement et mécanismes de sécurité robustes
          </div>
        </div>
        <div>
          <div className="flex items-center mb-1">
            <img alt="secure" src="Check.svg" className="w-7 h-7"></img>
            <span className="text-[#1e1e1e] text-lg font-medium font-Poppins">
              Factures
            </span>
          </div>
          <div className="text-[#7b7b7b] text-sm font-normal font-Poppins">
            Vos factures seront disponibles à consulter, télécharger ou bien
            envoyé par email tout en respectant le format légale d’une facture
            européenne
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceSummary;
