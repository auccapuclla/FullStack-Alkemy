import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Table from "./components/Table";
import Expense from "./components/Expense";
import Income from "./components/Income";
import Balance from "./components/Balance";
import ExpensesById from "./components/ExpensesById";
import IncomeById from "./components/IncomeById";

// Styling
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Balance />} />
          <Route path="expenses" element={<Expense />} />
          <Route path="expenses/:id" element={<ExpensesById />} />
          <Route path="income" element={<Income />} />
          <Route path="income/:id" element={<IncomeById />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
