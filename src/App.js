import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash/Splash';
import CreateTransaction from './pages/CreateTransaction/CreateTransaction';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import AccountDetails from './pages/AccountDetails/AccountDetails';
import Profile from './pages/Profile/Profile';
import History from './pages/History/History';
import Settings from './pages/Settings/Settings';
import PaymentDescription from './pages/PaymentDescription/PaymentDescription';
import MinePage from './pages/MinePage/MinePage';
import VerifyEmail from './pages/VerifyEmail/VerifyEmail';
import PrivacyAndPolicy from './pages/PrivacyAndPolicy/PrivacyAndPolicy';
import TermAndCondition from './pages/TermAndCondition/TermAndCondition';
import Confirmation from './pages/Confirmation/Confirmation';
import Dashbord from './pages/Dashboard/Dashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/splash" element={<Splash />} />
      <Route path="/transaction" element={<CreateTransaction />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/account-details" element={<AccountDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/currenttransfer" element={<History />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/payment-description" element={<PaymentDescription />} />
      <Route path="/mine-page" element={<MinePage />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/privacy-and-policy" element={<PrivacyAndPolicy />} />
      <Route path="/terms-and-condition" element={<TermAndCondition />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/dashboard" element={<Dashbord />} />
    </Routes>
  );
};

export default App;
