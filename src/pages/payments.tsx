import { Route, Routes } from 'react-router-dom';
import { PaymentContainer } from '../styles/page/payment.style';
import PaymentsCharge from './payments_charge';
import PaymentsDone from './payments_done';
import PaymentsFail from './payments_fail';

const Payments = () => {
    return (
        <PaymentContainer>   
            <Routes>
                <Route path='charge' element={<PaymentsCharge />}/>
                <Route path='done' element={<PaymentsDone />}/>
                <Route path='error' element={<PaymentsFail />}/>
            </Routes>
        </PaymentContainer>
    );
};

export default Payments;