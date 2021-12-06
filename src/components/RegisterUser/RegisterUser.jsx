import { RegisterUserStyled } from "./RegisterUserStyled";
import { InputStyled } from "../InputsStyled";
import { ButtonStyled } from "../ButtonStyled";
import { TitleStyled } from "../TitleStyled";

export const RegisterUser = () => {
    return (
        <>
            <TitleStyled>Game Shop</TitleStyled>
                <RegisterUserStyled id="RegisterUserForm">
                    <label htmlFor="name">Nome: </label>
                    <InputStyled type="text" name="name" id="name" />
                    <label htmlFor="cost">Preço: </label>
                    <InputStyled type="text" name="cost" id="cost" />
                    <label htmlFor="amount">Quantidade: </label>
                    <InputStyled type="text" name="amount" id="amount" />
                    <ButtonStyled>Cadastrar</ButtonStyled>
                </RegisterUserStyled>
        </>
    );
};
