// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const initialCarsState = {
    red: false,
    blue: false,
    yellow: false,
  };
  const initialSignalState = {
    color: 'red',
  };

  const [ cars, setCars ] = useState(initialCarsState);
  const [ signal, setSignal ] = useState(initialSignalState);

  const moveCar = (car, side) => {
    setCars({
        ...cars,
        [car]: side,
      },
    );
  };

  const changeSignal = (signalColor) => {
    setSignal({
        ...signal,
        color: signalColor,
      },
    );
  };


  const context = {
    cars,
    signal,
    moveCar,
    changeSignal,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

export default Provider;
