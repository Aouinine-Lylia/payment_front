
import './index.css';
import InvoiceSummary from './invoicesummary';
import { ProgressBar } from './progressBar';
import { PaymentForm } from './paymentform';


function App() {
  return (
    <div className="flex flex-col-reverse justify-between w-full p-4 sm:max-h-screen sm:flex-row ">
    <div className='flex flex-col max-h-screen sm:w-2/3'>
    <ProgressBar />
    <PaymentForm />
    </div>
    <div className='sm:w-1/3'>
    <InvoiceSummary />
    </div>
</div>

  );
}

export default App;
