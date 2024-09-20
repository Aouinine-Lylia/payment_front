import React from "react";

const resources = [
  {
    id: 1,
    nom: "Nom ressource",
    prix: 100,
    date: "14/09/2024",
    type: "Virement SEPA",
    etat: true,
  },
  {
    id: 2,
    nom: "Nom ressource",
    prix: 100,
    date: "14/09/2024",
    type: "Virement SEPA",
    etat: false,
  },
  {
    id: 3,
    nom: "Nom ressource",
    prix: 100,
    date: "14/09/2024",
    type: "Virement SEPA",
    etat: true,
  },
  {
    id: 4,
    nom: "Nom ressource",
    prix: 100,
    date: "14/09/2024",
    type: "Virement SEPA",
    etat: true,
  },
  {
    id: 5,
    nom: "Nom ressource",
    prix: 100,
    date: "14/09/2024",
    type: "Virement SEPA",
    etat: true,
  },
  {
    id: 6,
    nom: "Nom ressource",
    prix: 100,
    date: "14/09/2024",
    type: "Virement SEPA",
    etat: true,
  },
  {
    id: 7,
    nom: "Nom ressource",
    prix: 100,
    date: "14/09/2024",
    type: "Virement SEPA",
    etat: false,
  },
  {
    id: 8,
    nom: "Nom ressource",
    prix: 100,
    date: "14/09/2024",
    type: "Virement SEPA",
    etat: true,
  },
  {
    id: 9,
    nom: "Nom ressource",
    prix: 100,
    date: "14/09/2024",
    type: "Virement SEPA",
    etat: true,
  },
  {
    id: 10,
    nom: "Nom ressource",
    prix: 100,
    date: "14/09/2024",
    type: "Virement SEPA",
    etat: true,
  },
  {
    id: 11,
    nom: "Nom ressource",
    prix: 100,
    date: "14/09/2024",
    type: "Virement SEPA",
    etat: true,
  },
  {
    id: 12,
    nom: "Nom ressource",
    prix: 100,
    date: "14/09/2024",
    type: "Virement SEPA",
    etat: true,
  },
  {
    id: 13,
    nom: "Nom ressource",
    prix: 100,
    date: "14/09/2024",
    type: "Virement SEPA",
    etat: true,
  },
];

const TransactionsTable = () => {
  return (
    <div className="container h-full p-1 mx-auto  border border-[#a0a0a0] rounded-lg">
      <table className="w-full bg-white ">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-sm leading-normal font-medium font-Poppins ">
            <th className="py-3 px-6 text-left ">Id</th>
            <th className="py-3 px-6 text-left">Ressource</th>
            <th className="py-3 px-6 text-left">Prix (€)</th>
            <th className="py-3 px-6 text-left hidden sm:table-cell">Date</th>
            <th className="py-3 px-6 text-left hidden sm:table-cell">Type</th>
            <th className="py-3 px-6 text-left">État</th>
            <th className="py-3 px-6 text-left hidden md:table-cell">Autres</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light font-Poppins ">
          {resources.map((resource) => (
            <tr
              key={resource.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left ">{resource.id}</td>
              <td className="py-3 px-6 text-left">{resource.nom}</td>
              <td className="py-3 px-6 text-left">{resource.prix}</td>
              <td className="py-3 px-6 text-left hidden sm:table-cell">{resource.date}</td>
              <td className="py-3 px-6 text-left hidden sm:table-cell">{resource.type}</td>
              <td className="py-3 px-6 text-left ">
                <div
                  className={`w-3 h-3 rounded-full ${
                    resource.etat ? "bg-[#00f135]" : "bg-[#ff0000]"
                  }`}
                />
              </td>
              <td className="py-3 px-6 text-left flex justify-between hidden md:table-cell">
                <button className="ml-2 text-gray-600 hover:text-gray-900 w-[20px]">
                  <img src="download.svg" alt="arrow" />
                </button>
                <button className="ml-2 text-gray-600 hover:text-gray-900 w-[24px]">
                  <img src="Double Arrow Right.svg" alt="arrow" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
