
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
    <div className="flex w-full sm:max-h-screen p-4 flex-col sm:flex-row justify-between ">
    {/* <div className='w-full hidden sm:block'>
    <ProgressBar />
    <SuccessScreen />
    </div>
    <div className='hidden sm:block w-1/3'>
      <InvoiceSummary />
    </div>
    <div className='w-full sm:hidden justify-center'>
    <ProgressBar />
    <InvoiceSummary />
    <SuccessScreen />
    </div> */}
    <RefundTicketModal 
    props=
      {
        {isOpen: true}
    } />
</div>

  );
}

export default App;
