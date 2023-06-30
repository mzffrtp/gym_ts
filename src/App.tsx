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
    /* navbar background change per pages */
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
    <BrowserRouter>
      <div className=" app bg-cyan-50">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugit
          repellat reiciendis repellendus nesciunt odio voluptates velit
          suscipit cupiditate tempore a possimus, accusantium ex provident
          dolore et, nisi officiis, fugiat blanditiis ducimus nostrum? Natus,
          similique! Nam tempora sed iusto dolorum, unde nemo nobis
          reprehenderit illum, explicabo expedita rem veniam ut cum ea officia
          accusamus suscipit perspiciatis nisi in asperiores enim aliquam vero?
          Accusamus at nam praesentium nihil ex fuga corporis repellendus
          similique eum facilis, neque officiis illum quibusdam modi atque
          perspiciatis natus perferendis reiciendis quas maxime quisquam magnam!
          Commodi neque ut eaque itaque! Minima iure aliquid accusantium iusto
          aut sit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores fugit repellat reiciendis repellendus nesciunt odio voluptates
          velit suscipit cupiditate tempore a possimus, accusantium ex provident
          dolore et, nisi officiis, fugiat blanditiis ducimus nostrum? Natus,
          similique! Nam tempora sed iusto dolorum, unde nemo nobis
          reprehenderit illum, explicabo expedita rem veniam ut cum ea officia
          accusamus suscipit perspiciatis nisi in asperiores enim aliquam vero?
          Accusamus at nam praesentium nihil ex fuga corporis repellendus
          similique eum facilis, neque officiis illum quibusdam modi atque
          perspiciatis natus perferendis reiciendis quas maxime quisquam magnam!
          Commodi neque ut eaque itaque! Minima iure aliquid accusantium iusto
          aut sit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores fugit repellat reiciendis repellendus nesciunt odio voluptates
          velit suscipit cupiditate tempore a possimus, accusantium ex provident
          dolore et, nisi officiis, fugiat blanditiis ducimus nostrum? Natus,
          similique! Nam tempora sed iusto dolorum, unde nemo nobis
          reprehenderit illum, explicabo expedita rem veniam ut cum ea officia
          accusamus suscipit perspiciatis nisi in asperiores enim aliquam vero?
          Accusamus at nam praesentium nihil ex fuga corporis repellendus
          similique eum facilis, neque officiis illum quibusdam modi atque
          perspiciatis natus perferendis reiciendis quas maxime quisquam magnam!
          Commodi neque ut eaque itaque! Minima iure aliquid accusantium iusto
          aut sit.
        </div>
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
