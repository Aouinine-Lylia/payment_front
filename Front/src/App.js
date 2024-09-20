import './index.css';
import InvoiceSummary from './invoicesummary';
import { ProgressBar } from './progressBar';
import { PaymentForm } from './paymentform';
import { useState } from 'react';
import { PersonalForm } from './personalInfoform';
import { SuccessScreen } from './succesScreen';

function App() {
  const [step, setStep] = useState(30);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    companyName: '',
    address: '',
    phone: '',
    tva: '',
    rememberMe: false,
  });

  const onNext = (props) => {
    setStep((prevStep) => prevStep + 30);
    if (props.personalInfo){
      setPersonalInfo(props.personalInfo);
    }
    else if (props.paymentInfo){
      setPersonalInfo(personalInfo);
    }
    
  };

  const onBack = () => {
    setStep((prevStep) => prevStep - 30);
    
  };

  return (
    <div className="flex flex-col-reverse justify-between w-full p-4 sm:max-h-screen sm:flex-row ">
      <div className='flex flex-col max-h-screen sm:w-2/3'>
        <ProgressBar step={step} />
        {step === 30 && 
          <PersonalForm onNext={onNext} personalInfo={personalInfo} />
        }
        {step === 60 && 
          <PaymentForm onNext={onNext} onBack={onBack} />
        } 
        {step > 60 &&
          <SuccessScreen />
        }
      </div>
      <div className='sm:w-1/3'>
        <InvoiceSummary />
      </div>
    </div>
  );
}

export default App;
