import styled from 'styled-components'

export const Button = styled.button`
    height: 30px;
    //width: 178px;

    background-color: ${(col) => {col.$transparent ? 'transparent' : '#565EEF'}};
    color: ${(col) => {col.$transparent ? '#565EEF' : '#FFFFFF'}};

    border-radius: 4px;

    border: ${(col) => {col.$transparent ? '0.7px solid var(--palette-navy-60, #565EEF)' : 'none'}};;

    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin: 0px 20px;
    padding: 0px 10px;


    &:hover {
        background-color: ${(col) => {col.$transparent ? '#33399b' : '#33399b'}};
        color: #FFFFFF;
    }`

export default Button;
