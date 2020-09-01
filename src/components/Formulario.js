import React from 'react';

const Formulario = () => {
  return ( 
    <form action="">
      <div>
        <label htmlFor="">Marca</label>
        <select name="" id="">
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiático</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Año</label>
        <select name="" id="">
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
        </select>
      </div>
      <div>
        <label htmlFor="">Plan</label>
        <input 
          type="radio"
          name="plan"
          value="basico"
        />Básico
        <input 
          type="radio"
          name="plan"
          value="completo"
        />Completo
      </div>
      <button type="submit" >Cotizar</button>
    </form>
   );
}
 
export default Formulario;