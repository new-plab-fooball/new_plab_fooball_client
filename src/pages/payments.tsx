import { Route, Routes } from 'react-router-dom';
import PaymentsCharge from './payments_charge';
import PaymentsDone from './payments_done';
import PaymentsFail from './payments_fail';

const Payments = () => {
    return (
        <>   
            <Routes>
                <Route path='charge' element={<PaymentsCharge />}/>
                <Route path='done' element={<PaymentsDone />}/>
                <Route path='fail' element={<PaymentsFail />}/>
            </Routes>
        </>
    );
};

export default Payments;