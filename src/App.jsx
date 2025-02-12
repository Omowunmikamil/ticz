import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SelectTicket from "./pages/SelectTicket";
import TickectReady from "./pages/TickectReady";
import AttendeeDetails from "./pages/AttendeeDetails";
function App() {
  return (
    <div className="relative bg-[#02191D] min-h-screen flex flex-col text-white">
      <div className="absolute inset-0 bg-[radial-gradient(52.52%_32.71%_at_50%_97.66%,rgba(36,160,181,0.2)_0%,rgba(36,160,181,0)_100%)]"></div>
      <div className="relative z-10">
        <Header />
        <Routes>
          <Route exact path="/" element={<SelectTicket />} />
          <Route exact path="/ticket-ready" element={<TickectReady />} />
          <Route path="/attendee-details" element={<AttendeeDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
