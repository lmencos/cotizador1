import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

//Para dar estilo a la etiqueta header:
const ContenedorHeader = styled.header`
  background-color: #00A1C4;
  padding: 3px;
  font-weight: bold;
  color: #FFFFFF;
  `;

const TextoHeader = styled.h2`
  font-size: 1.8rem;
  margin: 0;
  font-family:'Slabo 9px', serif;
  text-align: center;
  `;

//--------------------------------------------------------------
const Header = ({ title }) => {
  return ( 
    <ContenedorHeader>
      <TextoHeader>{ title }</TextoHeader>
    </ContenedorHeader>
   );
}
Header.propTypes = {
  title: PropTypes.string.isRequired
};
export default Header;