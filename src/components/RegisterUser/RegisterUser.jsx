import { RegisterUserStyled } from "./RegisterUserStyled";
import { InputStyled } from "../InputsStyled";
import { ButtonStyled } from "../ButtonStyled";
import { TitleStyled } from "../TitleStyled";
import { useState } from "react";

export const RegisterUser = () => {

    const [values, setValues] = useState();

    const handleChangeValues = (e) => {
        setValues(prevValue=>({
            ...prevValue,
            [e.target.name]: e.target.value
        }));
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <>
            <TitleStyled>Game Shop</TitleStyled>
            <RegisterUserStyled id="RegisterUserForm">
                <label htmlFor="name">Nome: </label>
                <InputStyled 
                type="text" 
                name="name" 
                id="name" 
                onChange={ handleChangeValues } />

                <label htmlFor="cost">Preço: </label>
                <InputStyled type="text" 
                name="cost" 
                id="cost" 
                onChange={ handleChangeValues } />

                <label htmlFor="amount">Quantidade: </label>
                <InputStyled type="text" 
                name="amount" 
                id="amount" 
                onChange={ handleChangeValues } />

                <ButtonStyled onClick={(e) => handleClick(e)}>Cadastrar</ButtonStyled>
            </RegisterUserStyled>
        </>
    );
};
