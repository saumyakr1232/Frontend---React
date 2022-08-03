import './App.css';
import ClaimStatus from './Component/ClaimStatus'
import SubmitClaim from './Component/SubmitClaim'
import ViewBill from './Component/ViewBill'
import Login from './Login';
import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from './Component/Footer'
import Home from './Component/Home';
import ViewBillResults from './Component/ViewBillResults';
import ClaimStatusResult from './Component/ClaimStatusResult';

import useAuth from '../src/service/useAuth'

function RequireAuth({ children }) {
  const { authed } = useAuth();

  if (authed == undefined) {
    return null;
  }
  return authed.isLoggedIn === true ? children : <Navigate to="/login" replace />;
}



function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<RequireAuth> <Home /></RequireAuth>} />
        <Route path="/claimstatus" element={<RequireAuth><ClaimStatus /></RequireAuth>} />
        <Route path="/submitclaim" element={<RequireAuth><SubmitClaim /></RequireAuth>} />
        <Route path="/viewbill" element={<RequireAuth><ViewBill /></RequireAuth>} />
        <Route path="/viewbillresult" element={<RequireAuth><ViewBillResults /></RequireAuth>} />
        <Route path="/claimstatusresult" element={<RequireAuth><ClaimStatusResult /></RequireAuth>} />

        <Route path="/" element={<RequireAuth> <Home /></RequireAuth>} />
      </Routes>
      <Footer />



    </>
  );
}

export default App;
