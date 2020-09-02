//Para obtener la diferencia de años
export const obtenerDiferenciaYear = ( year ) => {
  return new Date().getFullYear() - year;
};

//Incremento del costo base en función de la marca
  //Americano +15%
  //Asiático +5%
  //Europeo +30%
export const costoMarca = ( marca ) => {
  let incrementoMarca;
  switch(marca) {
    case 'americano':
      incrementoMarca = 1.15;
      break;
    case 'asiatico':
      incrementoMarca = 1.05;
      break;
    case 'europeo':
      incrementoMarca = 1.3;
      break;
    default: incrementoMarca = 1.15;
      break;
  }
  return incrementoMarca;
};

//retorna factor de incremento por tipo de plan(básico o completo)
export const factorPlan = (plan) => {
  return ( plan === 'basico' )? 1.2  : 1.5;
};