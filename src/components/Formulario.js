import React from 'react';
import styled from '@emotion/styled';

//-----------------------------------------------------------
//Estilo para los campos del formulario (espaciado)
const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  /* text-align: center; */
`;

//Estilos para los labels
const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 81%;
  padding: 1rem;
  border: 1px solid #00A1C4;
  border-radius: 3px;
  -webkit-appearance: none;
`;

const InputRadio = styled.input `
  margin: 0.5rem 0.5rem;
`;

const Boton = styled.button`
  background-color: #00A1C4;
  font-size: 1.2rem;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;

  &:hover {
    background-color: #26C6DA;
    cursor: pointer;
  }
`;
// const Error = styled.div `
//   background-color: red;
//   color: white;
//   padding: 1rem;
//   width: 91%;
//   text-align: center;
//   border: 1px solid #005CC8;
//   border-radius: 3px;
//   margin-bottom: 1rem;
//   font-weight: bold;
// `;
//-----------------------------------------------------------
const Formulario = () => {
  return ( 
    <form action="">
      <Campo>
        <Label htmlFor="">Marca :</Label>
        <Select name="" id="">
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="asiatico">Asiático</option>
          <option value="europeo">Europeo</option>
        </Select>
      </Campo>
      <Campo>
        <Label htmlFor="">Año :</Label>
        <Select name="" id="">
        <option value="">-- Seleccione --</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label htmlFor="">Plan :</Label>
        <InputRadio 
          type="radio"
          name="plan"
          value="basico"
        />Básico
        <InputRadio 
          type="radio"
          name="plan"
          value="completo"
        />Completo
      </Campo>
      <Boton type="submit" >Cotizar</Boton>
    </form>
   );
}
 
export default Formulario;