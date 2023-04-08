import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PaymentsDone = () => {
    const location = useLocation()
    const qureyParams = location.search.split("?")[1].split("&")
    const PayMantsApiCall = async () => {
        const options = {
            method: 'POST',
            url: 'http://localhost:8000/payments',
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
    }
    useEffect(() => {
        if(qureyParams){
            PayMantsApiCall()
        }
    },[])

    return (
        <>포인트 충전이 완료되었습니다.</>
    );
};

export default PaymentsDone;