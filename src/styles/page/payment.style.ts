import styled from "styled-components";

export const PaymentContainer = styled.div`
  min-height: 100vh;  
  background-color: rgb(242, 245, 247);
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaymentTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 5px;
`;


export const PaymentForm = styled.div`
  width: 100%;
  max-width:500px;
  margin:0 auto;
  padding: 30px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #eee;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
`;

export const PaymentStatus = styled.div`
  width: 100%;
  background-color:#1570FF ;
  color:white;
  padding: 20px;
  border-radius: 10px;
  & > div{
    display: flex;
  }
`

export const PaymentStatusKey = styled.div`
  width: 20%;
`
export const PaymentSelectContents = styled.div`
  margin: 40px 0;
`
export const PaymentHeader = styled.div`

`
export const PaymentIntro = styled.div`
    margin-bottom: 20px;
    font-size: 15px;
    font-weight: 500;
    color: #777;
`
export const PaymentIconBox = styled.div`
  display: flex;
  justify-content: space-between;
`
export const PaymentIcon = styled.img`
    width: 60px;
`
export const PaymentDepositor = styled.div`
  
`
export const PaymentStatusTitle = styled.div`
  margin-bottom: 10px;
`

export const CurrentAmount = styled.div`
  font-size: 25px;
`

export const PaymentDoneContent = styled.div`
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
  padding: 0 30px;
  & h3{
    font-size: 25px;
    margin: 30px 0;
  }
  & .user_name{
    margin-bottom: 10px;
  }
`

export const PaymentDoneContainer = styled.div`
  width: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;  
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
  overflow: hidden;
  & .payment_logo{
    margin-bottom: 30px;
  }
  & .payment_done_footer{
    background-color: #F2F5F7;
    border-top: 1px solid #ccc;
    width: 100%;
    margin-top: 20px;
    padding: 20px;
    & h3{
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 700;
    }
    & > div{
      & > div{
        width: 50%;
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        &:last-child{
          margin-bottom: 0;
        }
        & >img{
          width: 20px;
          margin-right: 10px;
        }
      }
    }
  }
`
export const PaymentDoneButtons = styled.div`
  display: flex;
  margin-top: 30px;
  & button{
    margin: 0 10px;
  }
`

export const PaymentsFailContainer = styled.div`
  text-align: center;
  & img{
    width: 200px;
  }
   & .error_comment{
    line-height: 1.5;
   }
`





