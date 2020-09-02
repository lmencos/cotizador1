import React, { useState } from 'react';
import styled from '@emotion/styled';
import { obtenerDiferenciaYear, costoMarca, factorPlan } from '../Helper';

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
const Error = styled.div `
  background-color: #26C6DA;
  color: white;
  padding: 1rem;
  width: 91%;
  text-align: center;
  border: 1px solid #005CC8;
  border-radius: 3px;
  margin-bottom: 1rem;
  font-weight: bold;
`;
//-----------------------------------------------------------
const Formulario = ({ guardarResumenCotizacion }) => {
  const [ datos, guardarDatos ] = useState({
    marca: '',
    year: '',
    plan: ''
  });

//State para manejar el erro
const [ error, guardarError ] = useState(false);

  //Extraer los valores del state de datos "datos"
  const { marca, year, plan }  = datos;

  //Leer los datos del formulario y colocarlos en el state
  const obtenerDatos = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  };

  //Cuenado el usuario prsiona el botón de cotizar
  const cotizarSeguro = (e) => {
    e.preventDefault();

    if(marca.trim() === '' || year.trim() === '' || plan === ''){
      guardarError(true);
      return;
    }
      guardarError(false);

      //Base de costeo = 2000
      let resultado = 2000;

      //Obtener la diferencia de años
      const diferenciaYear = obtenerDiferenciaYear(year);
      console.log('la diferencia de años es: ', diferenciaYear);
      
      //Por cada año hacía atrás restar 3%
      resultado -= (( diferenciaYear * 3 ) * resultado ) / 100;
      console.log('costo base en función del año es :', resultado);

      //Americano +15%
      //Asiático +5%
      //Europeo +30%
      resultado = costoMarca(marca) * resultado;
      console.log('El costo en función del año y marca: ', resultado);

      //Plan básico +20%
      //Plan completo +50%
      const incrementoPlan = factorPlan(plan);
        console.log('Factor de incremento por tipo de plan: ', incrementoPlan);
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
        console.log('El costo total es de: ', resultado);

      //Total de la cotización
      guardarResumenCotizacion({
        cotizacion: resultado,
        datos
      });

  };

  return ( 
    <form 
      onSubmit={cotizarSeguro}
    >
      { error? <Error>Favor de llenar todos los campos</Error>  : null }

      <Campo>
        <Label htmlFor="">Marca :</Label>
        <Select 
          name="marca" 
          value={marca}
          onChange={obtenerDatos}
        >
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="asiatico">Asiático</option>
          <option value="europeo">Europeo</option>
        </Select>
      </Campo>
      <Campo>
        <Label htmlFor="">Año :</Label>
        <Select 
          name="year" 
          value={year}
          onChange={obtenerDatos}
        >
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
          checked={plan === "basico"}
          onChange={obtenerDatos}
        />Básico
        <InputRadio 
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerDatos}
        />Completo
      </Campo>
      <Boton type="submit" >Cotizar</Boton>
    </form>
   );
}
 
export default Formulario;