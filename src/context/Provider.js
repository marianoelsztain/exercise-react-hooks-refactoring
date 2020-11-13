// src/context/Provider.js
import React, { useState } from 'react';
import CarsContext from './CarsContext';

// this.state = {
//   cars: {
//     red: false,
//     blue: false,
//     yellow: false,
//   },
// }

function Provider({ children }) {

  const [redCar, setRedCar] = useState(false);
  const [blueCar, setBlueCar] = useState(false);
  const [yellowCar, setYellowCar] = useState(false);

  const moveCar = (car, side) => {
    switch (car) {
      case 'redCar':
        setRedCar(side);
        break;
      case 'blueCar':
        setBlueCar(side);
        break;
      case 'yellowCar':
        setYellowCar(side);
        break;
      default:
        console.log('nada');
        break;
    }
  };

  const context = {
    cars: {
      redCar,
      blueCar,
      yellowCar,
    },
    moveCar,
  };
  
  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
}

export default Provider;
