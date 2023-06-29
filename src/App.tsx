import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/components/navbar";
import HomePage from "@/pages/home";
import Benefits from "@/pages/benefits";
import ContactUs from "@/pages/contactUs";
import OurClasses from "@/pages/ourClasses";
import { SelectedPage } from "./shared/types";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <BrowserRouter>
      <div className=" app bg-cyan-50">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="benefits" element={<Benefits />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="ourclasses" element={<OurClasses />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
