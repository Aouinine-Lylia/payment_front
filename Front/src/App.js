import './index.css';
import InvoiceSummary from './invoicesummary';
import { ProgressBar } from './progressBar';
import { PaymentForm } from './paymentform';
import { useState } from 'react';
import { PersonalForm } from './personalInfoform';
import { SuccessScreen } from './succesScreen';
import SuiviPaiement from './suiviPaiement';

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
    if (props){
      setPersonalInfo(props.personalInfo);
    }
    else{
      setPersonalInfo(personalInfo);
    }
    
  };

  const onBack = () => {
    setStep((prevStep) => prevStep - 30);
    
  };

  return (
    <div>
      <SuiviPaiement />
    </div>
  );
}

export default App;
