import Navbar from "@/components/navbar";
import HomePage from "@/pages/home";
import Benefits from "@/pages/benefits";
import ContactUs from "@/pages/contactUs";
import OurClasses from "@/pages/ourClasses";
import { SelectedPage } from "./shared/types/other-types";
import { useEffect, useState } from "react";
import Footer from "./components/footer";

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
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
