import React from 'react'
import { Box } from "@chakra-ui/react";
import Header from './components/Header';
import DrawerComp from './components/DrawerComp';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
