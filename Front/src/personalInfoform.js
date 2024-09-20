import React, { useState } from 'react';

/**
 * Composant PersonalForm rend un formulaire pour collecter des informations personnelles.
 * 
 * @component
 * @example
 * return (
 *   <PersonalForm />
 * )
 * 
 * @returns {JSX.Element} Le composant de formulaire rendu.
 * 
 * @description
 * Ce composant inclut des champs de saisie pour le nom complet, le nom de l'entreprise, l'adresse, 
 * le numéro de téléphone et une case à cocher pour "se souvenir de moi". Il valide les saisies et 
 * affiche des messages d'erreur si les saisies sont invalides. En cas de validation réussie, il 
 * enregistre les données du formulaire dans la console.
 * 
 * @function
 * @name PersonalForm
 * 
 * @property {string} fullName - Le nom complet de l'utilisateur.
 * @property {string} companyName - Le nom de l'entreprise de l'utilisateur (optionnel).
 * @property {string} address - L'adresse de l'utilisateur.
 * @property {string} phone - Le numéro de téléphone de l'utilisateur.
 * @property {boolean} rememberMe - Indique si les informations de l'utilisateur doivent être mémorisées.
 * @property {Object} errors - Un objet contenant les messages d'erreur pour chaque champ de saisie.
 * @property {string} errors.fullName - Message d'erreur pour le champ du nom complet.
 * @property {string} errors.companyName - Message d'erreur pour le champ du nom de l'entreprise.
 * @property {string} errors.address - Message d'erreur pour le champ de l'adresse.
 * @property {string} errors.phone - Message d'erreur pour le champ du numéro de téléphone.
 * 
 * @method
 * @name handleSubmit
 * @description Gère la soumission du formulaire, valide les saisies et enregistre les données du formulaire si elles sont valides.
 * 
 * @method
 * @name validateForm
 * @description Valide les champs du formulaire et définit les messages d'erreur si les saisies sont invalides.
 * 
 * @constant
 * @name phoneRegex
 * @description Expression régulière pour autoriser uniquement les chiffres et éventuellement un '+' en tête.
 */
export const PersonalForm= (props)=> {
    // State for input fields and errors
    
    const [fullName, setFullName] = useState(props.personalInfo.fullName);
    const [companyName, setCompanyName] = useState(props.personalInfo.companyName);
    const [address, setAddress] = useState(props.personalInfo.address);
    const [phone, setPhone] = useState(props.personalInfo.phone);
    const [rememberMe, setRememberMe] = useState(props.personalInfo.rememberMe);
    const [tva, setTva] = useState(props.personalInfo.tva);
    // State for errors
    const [errors, setErrors] = useState({
        fullName: '',
        companyName: '',
        address: '',
        phone: '',
        tva: '',
    });

    // Regular expression to allow only numbers and optionally a leading '+'
    const phoneRegex = /^\+?\d*$/;

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Validate inputs before submission
        if (!validateForm()) {
            return; // If validation fails, do not submit
        }
        props.onNext(
            {
            'step': 30,
            'personalInfo': {
            fullName,
            companyName,
            address,
            phone,
            tva,
            rememberMe
        }})
        // If validation passes, proceed with form submission
    };

    // Function to validate the form
    const validateForm = () => {
        let valid = true;

        // Validate fullName
        if (fullName.trim() === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                fullName: 'Le nom complet est requis'
            }));
            valid = false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                fullName: ''
            }));
        }

        // Validate companyName (optional)

        // Validate address
        if (address.trim() === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                address: 'L\'adresse est requise'
            }));
            valid = false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                address: ''
            }));
        }
        if (tva.trim() === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                tva: 'Le numéro de TVA est requis'
            }));
            valid = false;
        }
        // Validate phone
        if (phone.trim() === '' || !phoneRegex.test(phone)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: 'Numéro de téléphone invalide'
            }));
            valid = false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: ''
            }));
        }

        return valid;
    };

    return (
        <div className="bg-white pr-8">
            <div className="text-[#1e1e1e] text-lg font-bold font-Poppins">
                Informations de paiement
            </div>
            <div className="text-[#1e1e1e] text-xs font-normal font-Poppins">
                Veuillez saisir vos informations pour générer votre facture
            </div>
            <form onSubmit={handleSubmit} className="mt-3 flex flex-col">
                <div>
                    <div className="mb-2">
                        <label className="block text-[#1e1e1e] text-sm font-medium font-Poppins mb-2">
                            Nom complet
                        </label>
                        <input
                            type="text"
                            className={`w-full border rounded-md px-3 py-2 hover:border-[#0056b3] focus:border-[#0056b3] focus:outline-none focus:border-[1.5px] ${
                                errors.fullName && 'border-red-500'
                            }`}
                            placeholder="Nom complet"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#1e1e1e] text-sm font-medium font-Poppins mb-2">
                            Nom de l’entreprise
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded-md px-3 py-2 hover:border-[#0056b3] focus:border-[#0056b3] focus:outline-none focus:border-[1.5px]"
                            placeholder="Nom de l’entreprise"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                        {/* Error message for companyName if needed */}
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#1e1e1e] text-sm font-medium font-Poppins mb-2">
                            Adresse
                        </label>
                        <input
                            type="text"
                            className={`w-full border rounded-md px-3 py-2 hover:border-[#0056b3] focus:border-[#0056b3] focus:outline-none focus:border-[1.5px] ${
                                errors.address && 'border-red-500'
                            }`}
                            placeholder="Entrez l'adresse"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        {errors.address && (
                            <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                        )}
                    </div>
                    <div className="mb-4 flex fl-row w-full sm:space-x-8 space-x-2 justify-center items-center">
                    <div className='w-full'>
                        <label className="block text-[#1e1e1e] text-sm font-medium font-Poppins mb-2">
                            Numéro de téléphone
                        </label>
                        <input
                            type="text"
                            className={`w-full border rounded-md px-3 py-2 hover:border-[#0056b3] focus:border-[#0056b3] focus:outline-none focus:border-[1.5px] ${
                                errors.phone && 'border-red-500'
                            }`}
                            placeholder="Ex : +213 568920201"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                        )}
                        </div>
                        <div className='w-full'>
                        <label className="block text-[#1e1e1e] text-sm font-medium font-Poppins mb-2">
                            Numéro de TVA
                        </label>
                        <input
                            type="text"
                            className={`w-full border rounded-md px-3 py-2 hover:border-[#0056b3] focus:border-[#0056b3] focus:outline-none focus:border-[1.5px] ${
                                errors.tva && 'border-red-500'
                            }`}
                            placeholder="Numéro de TVA"
                            value={tva}
                            onChange={(e) => setTva(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className="h-6 justify-start items-center gap-2 inline-flex">
                        <input
                            type="checkbox"
                            className="cursor-pointer leading-tight"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <div className="text-[#1e1e1e] text-xs font-normal font-Poppins">
                            Se souvenir de moi
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="hover:bg-[#4179B5] w-40 h-10 px-5 py-2 bg-[#0056b3] rounded-lg text-white font-medium font-Poppins text-sm"
                    >
                        Continuer
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PersonalForm;