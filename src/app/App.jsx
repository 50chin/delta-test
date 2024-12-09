import React, { useState } from "react";
import { Table } from "../components/Table/Table";

const App = () => {
  const [selectedData, setSelectedData] = useState(null);

  const handleRowClick = (item) => {};

  return (
    <>
      <Table />
    </>
  );
};

export default App;
