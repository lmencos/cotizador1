import React from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';

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
  return (
    <Contenedor className="App">
      <p></p>
      <Header 
        title="Cotizador de seguros Lucho"
      />
      <ContenedorFormulario>
        
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
