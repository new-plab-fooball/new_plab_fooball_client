import { loadTossPayments } from '@tosspayments/payment-sdk'
import { useState } from 'react';
import CheckboxList from '../components/input/checkBoxList';
import Label from '../components/input/label';
import { Select } from '../components/input/select';
import TagBox from '../components/input/tagBox';
import { NormalButtonStyle } from '../styles/input/button.style';
import { CommonWrapper } from '../styles/common/public.style';
import { 
    CurrentAmount,
    PaymentContainer, 
    PaymentForm, 
    PaymentHeader, 
    PaymentIntro, 
    PaymentSelectContents,
    PaymentStatus, 
    PaymentStatusTitle, 
    PaymentTitle 
} from '../styles/page/payment.style';
import { getUserInfo } from '../util/userFunc';

const clientKey = 'test_ck_OyL0qZ4G1VOjBj1x7dn3oWb2MQYg'
const paymentMethods = [
    {text:"계좌이체", color:"rgb(21, 112, 255)",fontSize:"15px"},
    {text:"토스페이", color:"rgb(21, 112, 255)",fontSize:"15px"},
    {text:"휴대폰", color:"rgb(21, 112, 255)",fontSize:"15px"},
]

type PaymentsMenthodType = "카드" | "휴대폰" | "가상계좌" | "계좌이체" | "문화상품권" | "게임문화상품권" | "도서문화상품권" | "토스페이" | "토스결제" | "해외간편결제" | "미선택"

const PaymentsCharge = () => {
    const [amount,setAmount] = useState(10000)
    const [method,setMethod] = useState<PaymentsMenthodType>("카드")
    const [validMessage,setValidMessage] = useState("")
    const user = getUserInfo()
    const onClickStartPayment = () =>{
        const orderId =  Math.random().toString(36).slice(2)
        loadTossPayments(clientKey).then((tossPayments) => {
            tossPayments.requestPayment(method, {
                amount,
                orderId,
                orderName: '플랩풋볼 포인트 충전',
                customerName:user && JSON.parse(user).name,
                successUrl: 'http://localhost:3000/payment/done',
                failUrl: 'http://localhost:3000/payment/fail',
            })
            .catch(function (error) {
                if (error.code === 'USER_CANCEL') {
                    alert("결제를 취소합니다.")
                } else if (error.code === 'INVALID_CARD_COMPANY') {
                    alert("유효하지 않은 카드 정보입니다.")
                }
            })
        })
        
    }

   return (
    <>
        <CommonWrapper>
            <PaymentForm>
                <PaymentHeader>
                    <PaymentTitle>플랩풋볼 포인트 충전</PaymentTitle>
                    <PaymentIntro>미리 충전하고 더욱 편리하게!</PaymentIntro>
                </PaymentHeader>
                <PaymentStatus>
                    <PaymentStatusTitle>{user && JSON.parse(user).name} 님의 현재 포인트</PaymentStatusTitle>
                    <CurrentAmount>
                        {user && JSON.parse(user).point.toLocaleString()} 포인트
                    </CurrentAmount>
                </PaymentStatus>
                <PaymentSelectContents>
                   <Select 
                    selectColor="rgb(21, 112, 255)"
                    label='충전할 금액' 
                    options={['10,000','30,000','50,000','100,000']}
                    onChange={(option:string) =>setAmount(Number(option.split(",").join("")))}
                   />
                </PaymentSelectContents>
                <PaymentSelectContents>
                    <TagBox 
                        tagWidth="31%"
                        type="radio"
                        onClick={(select:PaymentsMenthodType) => setMethod(select)} 
                        tagList={paymentMethods} 
                        label="결제 수단"
                    />
                </PaymentSelectContents>
                <PaymentSelectContents>
                   <Label labelText='입금자명'/>
                   <div></div> 
                </PaymentSelectContents>
                <PaymentSelectContents>
                    <Label labelText='충전 후 포인트'/>
                    <div>{user && (Number(JSON.parse(user).point) + amount).toLocaleString()} 포인트</div>
                </PaymentSelectContents>  
                <PaymentSelectContents>
                   <CheckboxList checkList={["입금자명과 입금 금액을 확인하였습니다"]}/>
                </PaymentSelectContents>  
                <NormalButtonStyle onClick={onClickStartPayment}>충전하기</NormalButtonStyle>
            </PaymentForm>
        </CommonWrapper>
    </>
    );
};

export default PaymentsCharge;