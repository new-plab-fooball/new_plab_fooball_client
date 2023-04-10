import { PaymentsFailContainer } from "../styles/page/payment.style";

const PaymentsFail = () => {
    return (
        <PaymentsFailContainer>
            <img src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131__480.png" />
            <div className="error_comment">죄송합니다. 서버 장애로 포인트 충전에 실패했습니다. <br/> 잠시 후 다시 시도해주세요.</div>
        </PaymentsFailContainer>
    );
};

export default PaymentsFail;