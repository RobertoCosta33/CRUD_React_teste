import { RegisterUserStyled } from "./RegisterUserStyled";

export const RegisterUser = () => {
  return (
    <>
      <h1>Game Shop</h1>
      <RegisterUserStyled>
      <form id="RegisterUserForm">
        <label htmlFor="name">Nome: </label>
        <input type="text" name="name" id="name" />
        <label htmlFor="cost">Preço: </label>
        <input type="text" name="cost" id="cost" />
        <label htmlFor="amount">Quantidade: </label>
        <input type="text" name="amount" id="amount" />
        <button>Cadastrar</button>
      </form>
      </RegisterUserStyled>
    </>
  );
};
