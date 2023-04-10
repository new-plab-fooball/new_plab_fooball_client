import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SuccessAni from "../components/common/successAni";
import { NormalButtonStyle } from "../styles/input/button.style";
import { CurrentAmount, PaymentDoneButtons, PaymentDoneContainer, PaymentDoneContent, PaymentStatus, PaymentStatusTitle } from "../styles/page/payment.style";
import { getUserInfo } from "../util/userFunc";

const PaymentsDone = () => {
    const user = getUserInfo()
    const location = useLocation()
    const navigate = useNavigate()
    const qureyParams = location.search.split("?")[1].split("&")
    const PayMantsApiCall = async () => {
        const options = {
            method: 'POST',
            url: 'http://localhost:8000/payments',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                orderId: qureyParams[0].split("=")[1],
                paymentKey: qureyParams[1].split("=")[1],
                amount: qureyParams[2].split("=")[1],
            }
        };
        await axios.request(options)
        user && localStorage.setItem("user",{...JSON.parse(user),point:Number(JSON.parse(user).point) + Number(qureyParams[2].split("=")[1])})
    }
    useEffect(() => {
        if(qureyParams){
            PayMantsApiCall()
        }
    },[])

    return (
        <PaymentDoneContainer>
            <div className="payment_logo">     
             <img src="https://new-plab-fooball-bucket.s3.ap-northeast-2.amazonaws.com/public/logo.svg" />
            </div>
            <SuccessAni />
            <PaymentDoneContent>
                <h3>포인트 충전이 완료되었습니다.</h3>
                <PaymentStatus>
                    <PaymentStatusTitle>{user && JSON.parse(user).name} 님의 현재 포인트</PaymentStatusTitle>
                    <CurrentAmount>
                        {user && (Number(JSON.parse(user).point) + Number(qureyParams[2].split("=")[1])).toLocaleString()} 포인트
                    </CurrentAmount>
                </PaymentStatus>
            </PaymentDoneContent>
            <PaymentDoneButtons>
                <NormalButtonStyle onClick={() => navigate("/home")}>홈으로</NormalButtonStyle>
                <NormalButtonStyle onClick={() => navigate("/mypage")}>마이페이지</NormalButtonStyle>
            </PaymentDoneButtons>
            <div className="payment_done_footer">
                <h3>문의하기</h3>
                <div>
                    <div><img src="../images/icons/email.svg"/>godboy4256@gmail.com</div>
                    <div><img src="../images/icons/phone.svg"/>010-9019-2172</div>
                </div>
            </div>
        </PaymentDoneContainer>
    );
};

export default PaymentsDone;