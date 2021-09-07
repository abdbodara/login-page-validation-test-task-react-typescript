import { Form } from "formik";
import styled from "styled-components"

export const LoginFormWrapper = styled.div`
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow: 1px 0px 17px #e4e2e2;
    border-radius: 6px;
    position: absolute;
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media(max-width:1600px){
        width: 65%;
    }
    @media(max-width:1200px){
        width: 65%;
        display: block;
        padding-top: 70px;
    }
     @media(max-width:767px){
        width: 90%;

    }
    @media(max-width:767px){
        padding-top: 20px;
    }
`;

export const FiledWrapper = styled(Form)`
.passwordInput{
    position: relative;
    svg{
        position: absolute;
        right: 8px;
        top: 33px;
        color: #a09393;
        @media(max-width:1200px){
            right: 20px;
        }
    }
}
`;
export const LoginButton = styled.div`
    margin-top: 30px;
    display: flex;
     @media(max-width:1200px){
        display: block;
        margin-top: 10px;
    }
    button{
        width: 50%;
        font-size: 20px;
        border: 0;
        border-radius: 5px;
        padding: 13px 20px;
        transition: 1s;
        min-width: 180px;
        cursor: pointer;
        @media(max-width:1200px){
             width: 100%;
        }
    }
`;
export const SubmitButton = styled.button`
    background: #3097f2;
    color: #fff;
    font-weight: bold;   
    :hover{
        background: rgba(48,151,242,0.5);
        transform: scale(1.1);
    }
    :focus{
        color:#3097f2;
        background: #fff;
        border: 1px solid #3097f2;
    }
`;

export const ResetButton = styled.button`
    background: #bebebe;
    color: #4f4d4d;
    font-weight: 600;
    margin-left: 20px;
    :hover{
        background: rgba(190,190,190,0.5);
        transform: scale(1.1);
    }
      :focus{
        color:#bebebe;
        background: #fff;
        border: 1px solid #bebebe;
    }
     @media(max-width:1200px){
        margin-left: 0px;
        margin-top: 20px;
    }
`;

export const Field = styled.div`
label{
    display: block;
    font-size: 17px;
    text-transform: capitalize;
    font-weight: 600;
    color: #4b4747;
}
input{
    width: 96%;
    padding: 15px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 2px 0px 15px 0px;
      @media(max-width:1200px){
           width: 94%;
    }
    :focus{
        outline: none;
    }
}
`;

export const ErrorMessage = styled.div`
    margin-top: -13px;
    margin-bottom: 15px;
    color: red;
    font-size: 12px;
`;
export const LoginDetail = styled.div`
    width: 50%;
    padding: 70px 40px; 
    h1{
        margin-bottom: 40px;
        text-shadow: 3px 4px #ccc;
        color: #4d4d4d;
    }
    @media(max-width:1200px){
        margin: auto;
        width: 80%;
    }
    @media(max-width:991px){
        width: 80%;
    }
    @media(max-width:767px){
        padding: 40px 20px;
    }
    @media(max-width:426px){
        padding: 20px;
    }
`;
export const LoginImg = styled.div`
           width: 50%;
            height: 100%;
            padding-left: 40px;
            background-image: url('/logoBanner.png');
            background-repeat: no-repeat;
            background-size: cover;
            min-height: 315px;
            background-position: center;
         @media(max-width:1200px){
            margin: auto;
             width: 80%;
            padding-left: 0px;
            height: 30%;
        }
        @media(max-width:991px){
            width: 90%;
        }
        @media(max-width:426px){
            padding-top: 0px;
            min-height: 200px;
        }
    img{
            height: 100%;
            width: 100%;
    }
`;
