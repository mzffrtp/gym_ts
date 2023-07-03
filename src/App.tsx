import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/components/navbar";
import HomePage from "@/pages/home";
import Benefits from "@/pages/benefits";
import ContactUs from "@/pages/contactUs";
import OurClasses from "@/pages/ourClasses";
import { SelectedPage } from "./shared/types";
import { useEffect, useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  {
    /* navbar transition */
  }
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY === 0
        ? (setIsTopOfPage(true), setSelectedPage(SelectedPage.Home))
        : setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <HomePage setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
