import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const Container = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    @media (max-width: ${breakpoints.md}px) {
        width: 100%;
        padding: 0 16px;
    }
`

export const Button = styled.button`
  width: 80%;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;


  &:hover {
    background-color: #33399b;
  }
`
// export const Button = styled.button`
//     height: 30px;
   

//     background-color: ${(col) => {col.$transparent ? 'transparent' : '#565EEF'}};
//     color: ${(col) => {col.$transparent ? '#565EEF' : '#FFFFFF'}};

//     border-radius: 4px;

//     border: ${(col) => {col.$transparent ? '0.7px solid var(--palette-navy-60, #565EEF)' : 'none'}};;

//     font-size: 14px;
//     line-height: 1;
//     font-weight: 500;
//     margin: 0px 20px;
//     padding: 0px 10px;


//     &:hover {
//         background-color: ${(col) => {col.$transparent ? '#33399b' : '#33399b'}};
//         color: #FFFFFF;
//     }`

// export default Button;

export const LogInRegisterDIV = styled.div`
    display: flex;
    //width: 1440px;
    padding: 10% 0px 10% 0px;
    justify-content: center;
    align-items: center;
    background: #EAEEF6;
`
export const LogInRegisterBox = styled.div`

    border: 0.7px solid #D4DBE5;
    background: #FFF;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`
export const Modal = styled.div`
    display: flex;
    padding: 50px 60px;
    align-items: flex-start;
    gap: 10px;
`
export const ModalBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
export const ModalInput = styled.input`
    display: flex;
    width: 248px;
    height: 30px;
    padding: 8px 10px;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: 0.7px solid rgba(148, 166, 190, 0.40);
    color: #000000;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 
    letter-spacing: -0.28px;
`
export const ModalFormGroup = styled.div`
    color: rgba(148, 166, 190, 0.40);
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 
    letter-spacing: -0.14px;
`

export const ModalFormGroupText = styled.div`
  color: #565EEF;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
`
export const ModalTtl = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
`
export const ModalFormGroupLink = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
  text-decoration: underline;
  color: #565EEF;

  a {
    color: #565EEF;
  }
`
export const ModalBtnEnterLink = styled.div`
  width: 100%;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;

  width: 100%;
  height: 100%;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #33399b;
  }

  a {
    color: #FFFFFF;
  }
`
export const ModalBtnErr = styled.button`
  width: 100%;
  height: 30px;
  background-color: #94a6be;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;

  a {
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    height: 40px;
  }
`

export const ErrorText = styled.div`
font-family: Roboto;
font-size: 12px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0.01em;
text-align: center;
color: salmon;
width: 248px;
`