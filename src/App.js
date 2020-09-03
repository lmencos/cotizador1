import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

//-------------------------------------------------------------
//Estilos para centrar el contenido
const Contenedor = styled.div`
  max-width: 450px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
  border-radius: 6px;
`;

//------------------------------------------------------------------

function App() {

  const [ resumenCotizacion, guardarResumenCotizacion ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [ cargando, guardarCargando ] = useState(false);

  //extraer datos
  const { cotizacion, datos } = resumenCotizacion;

  return (
    <Contenedor className="App">
      <p></p>
      <Header 
        title="Seguros Luchísimo"
      />
      <ContenedorFormulario>
        <Formulario 
          guardarResumenCotizacion={guardarResumenCotizacion}
          guardarCargando={guardarCargando}
        />

        { cargando ? <Spinner/>  : null }
        <Resumen
          datos={datos}
        />

        {  !cargando ?     
          <Resultado
            cotizacion={cotizacion}
          />
        : null }
        
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
