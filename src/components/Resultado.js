import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  border-radius: 3px;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #00A1C4;
  border-radius: 3px;
  background-color: #FFF;
  margin-top: 1rem;
  position: relative;
`;

const TextoCotizacion = styled.p`
  color: #00A1C4;
  padding: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

const Resultado = ({ cotizacion }) => {
  
  return(
    (cotizacion === 0) ? 
    <Mensaje>Elige marca, año y plan</Mensaje> : 

    <ResultadoCotizacion>
      <TransitionGroup
        component="span"
        className="resultado"
      >
        <CSSTransition
          classNames="Resultado"
          key={cotizacion}
          timeout={{ enter:300, exit: 300 }}
        >
          <TextoCotizacion>El total es de: $ <span>{cotizacion} </span> </TextoCotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoCotizacion>
    
  )
} 
Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired
};
export default Resultado;
