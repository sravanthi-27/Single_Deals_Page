import React from "react";
import Header from "./components/Header";
import HeaderSection from "./components/Deals_Listing";
import PartnerSection from "./components/PartnerSection";
import Footer from "./components/Footer";

function App(){
  return (
    <div>
      <Header/>
      <HeaderSection/>
      
      <PartnerSection/>
      <Footer/>
    </div>
    
  )
}
export default App;