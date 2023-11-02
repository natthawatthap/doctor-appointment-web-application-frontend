import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import BookingPage from "./pages/BookingPage";
import BookingAppointmentPage from "./pages/BookingAppointmentPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking-appointment" element={<BookingAppointmentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
