import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "@/components/navbar"
import HomePage from "@/pages/home"
import Benefits from "@/pages/benefits"
import ContactUs from "@/pages/contactUs"
import OurClasses from "@/pages/ourClasses"

function App() {

  return (
    <BrowserRouter>
    <div className=" app bg-cyan-50">
      <Navbar />
      <Routes>
        <Route index element={<HomePage/>} />

        <Route path={"benefits"}>
          <Route index element={<Benefits />} />
        </Route>

        <Route path={"contactus"}>
          <Route  index element={<ContactUs />}/>
        </Route>

        <Route path={"ourclasses"}>
          <Route index element={<OurClasses />}/>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
    
  )
}

export default App
