import React from "react";
import { filterData, apiUrl } from "./data";
import Filter from "./components/Filter";
import Cards from "./components/Cards"
import Navbar from "./components/Navbar";

const App = () => {

  return (
    <div>
      <Navbar />
      <Filter 
        filterData={filterData}
      />
      <Cards />
    </div>
  );
};

export default App;
