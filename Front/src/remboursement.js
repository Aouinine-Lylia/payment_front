import React, { useState, useRef } from "react";

const RefundTicketModal = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control modal visibility
  const [isFlipped, setIsFlipped] = useState(false);
  // Function to toggle the modal display
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const selectRef = useRef(null);

  const toggleDropdown = () => {
    selectRef.current?.click();
  };
  const handleSelectClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      {/* Button to trigger modal */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={toggleModal}
      >
        Open Modal
      </button>

      {/* Modal Element */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center  bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full "
          id="my-modal"
        >
          <div className="h-[80%]  mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="h-full flex flex-col justify-between text-center">
              <span className="flex justify-end ">
                <button
                  onClick={toggleModal}
                  className="text-red-500 hover:text-red-600"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </span>
              <img
                src="carbon_ticket.svg"
                alt="ticket"
                className="w-20 h-20 mx-auto"
              />
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Créer un ticket de remboursement
              </h3>

              <div className="mt-2 px-7 py-3 space-y-4">
                <input
                  type="text"
                  placeholder="Montant à rembourser"
                  className="w-full border rounded-md px-3 py-2 hover:border-[#0056b3] focus:border-[#0056b3] focus:outline-none focus:border-[1.5px] text-sm"
                />
                <div
                  className="relative flex flex-row items-center w-full"
                  onClick={handleSelectClick}
                >
                  <select
                    ref={selectRef}
                    className="appearance-none w-full border border-gray-300 rounded-md px-3 py-2 hover:border-[#0056b3] focus:border-[#0056b3] focus:outline-none focus:ring-[1.5px] focus:ring-[#0056b3] text-sm text-gray-400 focus:text-black"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Choisissez une option
                    </option>
                    <option>Non-livraison du service</option>
                    <option>Retards significatifs</option>
                    <option>Qualité insuffisante du service</option>
                    <option>Incompatibilité technologique</option>
                    <option>Support technique insuffisant</option>
                    <option>Non-conformité au cahier des charges</option>
                    <option>Erreur de facturation</option>
                    <option>Autre</option>
                  </select>
                  <img
                    src="down.svg"
                    alt="Arrow Down"
                    className={`pointer-events-none absolute right-2 h-4 w-4 text-gray-400 transition-transform duration-200 ${
                      isFlipped ? "scale-y-[-1]" : ""
                    }`}
                    id="select-arrow"
                    onClick={toggleDropdown}
                  />
                </div>
              </div>
              <div className="flex w-full justify-between mt-6 ">
                <button
                  className="hover:bg-[#ccdef1] px-5 py-2 bg-white rounded-lg border border-[#0056b3] flex justify-center items-center gap-6 text-[#0056b3] text-base font-Poppins"
                  onClick={toggleModal}
                >
                  Annuler
                </button>
                <button
                  className="hover:bg-[#4179B5] px-5 py-2 bg-[#0056b3] rounded-lg flex justify-center items-center gap-6 text-white text-base font-Poppins"
                  onClick={() => alert("Continue...")}
                >
                  Continuer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RefundTicketModal;
