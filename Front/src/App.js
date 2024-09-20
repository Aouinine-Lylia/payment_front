
import './index.css';
import PersonalForm from './personalInfoform';
import InvoiceSummary from './invoicesummary';
import { ProgressBar } from './progressBar';
import { PaymentForm } from './paymentform';
import { Loading } from './loading';
import { SuccessScreen } from './succesScreen';
import TransactionsTable from './transactionsTable';
import RefundTicketModal from './remboursement';

function App() {
  return (
    <div className="flex flex-col-reverse justify-between w-full p-4 sm:max-h-screen sm:flex-row ">
    {/* <div className='hidden w-full sm:block'>
    <ProgressBar />
    <PaymentForm />
    </div>
    <div className='hidden w-1/3 sm:block'>
      <InvoiceSummary />
    </div>
    <div className='justify-center w-full sm:hidden'>
    <ProgressBar />
    <InvoiceSummary />
    <PaymentForm /> 
    </div>*/}
    {/* <RefundTicketModal 
    props=
      {
        {isOpen: true}
    } /> */}
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
