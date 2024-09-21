import React from "react";

const SuiviPaiement = ({ payments }) => {
    if (!payments) {
        payments = [
            { status: 'réussi', amount: 120.00, date: '2023-09-21 14:00', details: 'Paiement pour services de développement' },
            { status: 'démarré', amount: 75.50, date: '2023-09-20 10:30', details: 'Paiement initial pour consultation' },
            { status: 'refusé', amount: 45.00, date: '2023-09-19 16:45', details: 'Paiement refusé par la banque' },
            { status: 'remboursé', amount: 150.00, date: '2023-09-18 09:20', details: 'Remboursement suite à annulation du client' }
        ];
    }

    const getStatusIcon = (status) => {
        const iconSrc = {
            'réussi': 'reussi.svg',
            'refusé': 'refus.svg',
            'démarré': 'demarrer.svg',
            'remboursé': 'rembourser.svg',
        }[status] || 'demarrer.svg';

        return <img src={iconSrc} alt={status} />;
    };

    return (
        <div className="flex flex-col gap-8 p-4">
            <div className="text-[#1e1e1e] text-lg font-semibold font-Poppins">Paiement</div>
            <div>
                <span className="text-[#1e1e1e] text-xl font-semibold font-Poppins">10,99 €</span>
                <span className="text-[#00f135] text-lg font-medium font-Poppins">Réussi</span>
            </div>
            <div className="w-full flex justify-between items-center">
                <div className="w-full px-4 border-r border-[#dedede] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-black text-md font-normal font-Poppins">Ressources</div>
                    <div className="self-stretch text-black text-sm font-normal font-Poppins">ressources</div>
                </div>
                <div className="w-full px-4 border-r border-[#dedede] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-black text-lg font-normal font-Poppins">Moyen de paiement</div>
                    <div className="self-stretch text-black text-sm font-normal font-Poppins">moyen</div>
                </div>
                <div className="w-full px-4 border-r border-[#dedede] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-black text-lg font-normal font-Poppins">Dernière date</div>
                    <div className="self-stretch text-black text-sm font-normal font-Poppins">date</div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#dedede]"></div>
            <div>
                <div className="text-[#1e1e1e] text-md font-semibold font-Poppins">Cycle de vie de paiement</div>
                {payments.map((payment, index) => (
                    <div key={index} className="flex flex-row gap-2 mt-3">
                        <div className='w-[24px] h-[24px]'>
                            {getStatusIcon(payment.status)}
                        </div>
                        <div className="text-[#1e1e1e] text-sm font-normal font-Poppins">
                            <p>{payment.date} - {payment.amount} €</p>
                            <p>{payment.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuiviPaiement;
