import MainLayout from "./components/MainLayout";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SqlQuery from "./pages/Sql_query";
import HomePage from "./pages/Homepage";

export default function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5144/api/device")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMsg(data.message);
      })
        .catch(err => console.error(err));
  }, []); 
  return (
    // <div>
    //   <h1>Backend says:</h1>
    //   <p>{msg}</p>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout title="Device Overview" />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/sqlquery" element={<MainLayout title="SQL Query" />}>
          <Route index element={<SqlQuery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
