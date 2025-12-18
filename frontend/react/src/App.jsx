import MainLayout from "./components/MainLayout";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import SqlQuery from "./pages/sql_query/Sql_query";
import AnomalyDetection from "./pages/Anomaly_detect";
import DataQuestion from "./pages/Data_question";
import Reports from "./pages/Reports";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout title="Device Overview" />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/dashboard" element={<MainLayout title="Dashboard" />}>
          <Route index element={<Dashboard/>} />
        </Route>
        <Route path="/settings" element={<MainLayout title="Settings" />}>
          <Route index element={<Settings/>} />
        </Route>
        <Route path="/sqlquery" element={<MainLayout title="SQL Query" />}>
          <Route index element={<SqlQuery />} />
        </Route>
        <Route path="/dataquestion" element={<MainLayout title="Data Question" />}>
          <Route index element={<DataQuestion />} />
        </Route>
        <Route path="/anomalydetection" element={<MainLayout title="Anomaly Detection" />}>
          <Route index element={<AnomalyDetection />} />
        </Route>
        <Route path="/reports" element={<MainLayout title="Reports" />}>
          <Route index element={<Reports/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
