// Code for payment form
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {  useState} from "react";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  IbanElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PwQxFCNATD2pskqyuq7r52HaRlzGmB9tbljsFpUoRvAg1yd26vyM738auB5jaNovSFRKbbTdI6N83tZpgH4oDyX00hRXSYxaM"
);

const PaymentFormContent = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentMethod, setPaymentMethod] = useState("sepa");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const ibanOptions = {
    supportedCountries: ["SEPA"], // or specify countries like ['DE', 'FR', 'ES']
    style: {
      base: {
        fontSize: "16px",
        color: "#32325d",
        "::placeholder": {
          color: "#A0A0A0",
        },
      },
      invalid: {
        color: "#fa755a",
      },
    },
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setError("Stripe.js has not loaded yet. Please try again.");
      setLoading(false);
      return;
    }

    let result;
    if (paymentMethod === "sepa") {
      const ibanElement = elements.getElement(IbanElement);
      result = await stripe.createPaymentMethod({
        type: "sepa_debit",
        sepa_debit: ibanElement,
      });
    } else if (paymentMethod === "card") {
      result = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardNumberElement),
      });
    }

    if (result.error) {
      setError(result.error.message);
      setLoading(false);
    } else {
      // Send the paymentMethod.id to your server
      // const response = await fetch("/api/create-payment-intent", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     paymentMethodId: result.paymentMethod.id,
      //     paymentType: paymentMethod,
      //   }),
      // });

      // const paymentIntent = await response.json();
      console.log("Payment successful!", result.paymentMethod);
    }
  };

  // ... (rest of your component code)

  return (
    <form
      className="w-full h-screen flex flex-col justify-between"
      onSubmit={handleSubmit}
    >
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex-grow">
          <div className="text-[#1e1e1e] text-lg font-bold font-Poppins">
            Informations de paiement
          </div>
          <div className="text-[#1e1e1e] text-xs font-normal font-Poppins mb-4">
            Tous les transactions sont sécurisées et protégées
          </div>
          <div className="sm:pr-8">
            {/* SEPA Payment */}
            <div
              className={`w-full px-4 py-3 rounded border items-center justify-between inline-flex ${
                paymentMethod === "sepa"
                  ? "bg-[#eff5ff] border-[#0056b3]"
                  : "bg-white border-[#a0a0a0]"
              }`}
            >
              <div className="flex gap-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="sepaPayment"
                  checked={paymentMethod === "sepa"}
                  onChange={() => setPaymentMethod("sepa")}
                />
                <div className="text-[#1e1e1e] text-sm font-normal font-Poppins">
                  Virement SEPA
                </div>
              </div>
              <div className="w-9 h-[22px] relative">
                <img src="sepa logo.svg" alt="SEPA" />
              </div>
            </div>

            {/* SEPA Form */}
            {paymentMethod === "sepa" && (
              <div id="sepa-form">
                <div className="mt-4">
                  <label className="block text-[#1e1e1e] text-sm font-medium font-Poppins mb-2">
                    Numéro de compte (IBAN)
                  </label>
                  <div className="StripeElement mb-2 w-full border rounded-md px-3 py-2 hover:border-[#0056b3] focus:border-[#0056b3] focus:outline-none focus:border-[1.5px]">
                    <IbanElement options={ibanOptions} />
                  </div>
                </div>
                <div className="flex justify-start items-center gap-2 mt-2">
                  <input type="checkbox" className="cursor-pointer" />
                  <div className="text-[#1e1e1e] text-[12px] sm:text-xs font-normal font-Poppins w-full">
                    Autoriser le débit automatique de votre compte bancaire
                  </div>
                </div>
                <div className="flex justify-start items-center gap-2 mt-1">
                  <input type="checkbox" className="cursor-pointer" />
                  <div className="text-[#1e1e1e] text-[12px] sm:text-xs font-normal font-Poppins">
                    Accepter nos <u>termes et conditions</u> ainsi que notre{" "}
                    <u>politique de confidentialité</u>.
                  </div>
                </div>
              </div>
            )}

            {/* Card Payment */}
            <div
              className={`mt-2 w-full px-4 py-3 rounded border items-center justify-between inline-flex ${
                paymentMethod === "card"
                  ? "bg-[#eff5ff] border-[#0056b3]"
                  : "bg-white border-[#a0a0a0]"
              }`}
            >
              <div className="flex gap-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="cardPayment"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                <div className="text-[#1e1e1e] text-sm font-normal font-Poppins">
                  Carte de crédit
                </div>
              </div>
              <div className="flex gap-1">
                <img src="Visaicon.svg" alt="VISA" />
                <img src="mcIcon.svg" alt="MasterCard" />
              </div>
            </div>
          </div>

          {/* Card Form */}
          {paymentMethod === "card" && (
            <div className="mt-2 sm:pr-8">
              <label className="block text-[#1e1e1e] text-sm font-medium font-Poppins mb-2">
                Numéro de carte
              </label>

              <div className="StripeElement mb-2 w-full border rounded-md px-3 py-2 hover:border-[#0056b3] focus:border-[#0056b3] focus:outline-none focus:border-[1.5px]">
                <CardNumberElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#32325d",
                        "::placeholder": {
                          color: "#A0A0A0",
                        },
                      },
                      invalid: {
                        color: "#fa755a",
                      },
                    },
                  }}
                />
              </div>
              <div className="flex gap-2">
                <div className="w-full">
                  <label className="block text-[#1e1e1e] text-sm font-medium font-Poppins mb-2">
                    Date d'expiration
                  </label>
                  <div className="flex flex-row w-full StripeElement mb-2 border rounded-md px-3 py-2 hover:border-[#0056b3] focus:border-[#0056b3] focus:outline-none focus:border-[1.5px]">
                    <div className="w-full">
                      <CardExpiryElement
                        options={{
                          style: {
                            base: {
                              fontSize: "16px",
                              color: "#32325d",
                              "::placeholder": {
                                color: "#A0A0A0",
                              },
                            },
                            invalid: {
                              color: "#fa755a",
                            },
                          },
                        }}
                      />
                    </div>
                    <img src="Calendar.svg" alt="Date" />
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-[#1e1e1e] text-sm font-medium font-Poppins mb-2">
                    CVC
                  </label>
                  <div className="flex flex-row w-full StripeElement mb-2 border rounded-md px-3 py-2 hover:border-[#0056b3] focus:border-[#0056b3] focus:outline-none focus:border-[1.5px]">
                    <div className="w-full">
                      <CardCvcElement
                        options={{
                          style: {
                            base: {
                              fontSize: "16px",
                              color: "#32325d",
                              "::placeholder": {
                                color: "#A0A0A0",
                              },
                            },
                            invalid: {
                              color: "#fa755a",
                            },
                          },
                        }}
                      />
                    </div>
                    <img src="Lock Closed.svg" alt="CVV" />
                  </div>
                </div>
              </div>

              <div className="mb-2">
                <label className="block text-[#1e1e1e] text-sm font-medium font-Poppins mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2 hover:border-[#0056b3] focus:border-[#0056b3] focus:outline-none focus:border-[1.5px] items-center"
                  placeholder="Nom complet"
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex mt-4 justify-between sm:pr-8 ">
          <button
            type="button"
            className="hover:bg-[#ccdef1] w-40 h-10 px-5 py-2 bg-white border border-[#0056b3] text-[#0056b3] rounded-lg font-medium font-Poppins text-sm"
          >
            Retour
          </button>

          <button
            type="submit"
            disabled={loading}
            className="hover:bg-[#4179B5] w-40 h-10 px-5 py-2 bg-[#0056b3] rounded-lg text-white font-medium font-Poppins text-sm"
          >
            {loading ? "Processing..." : "Continuer"}
          </button>
        </div>
      </div>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </form>
  );
};

export const PaymentForm = () => (
  <Elements stripe={stripePromise}>
    <PaymentFormContent />
  </Elements>
);
