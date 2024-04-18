import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Aboutus from "./sections/Aboutus"
import Hero from "./sections/Hero"
import Joinclub from "./sections/Joinclub"
import Meme from "./sections/Meme"
import Partner from "./sections/Partner"
import Products from "./sections/Products"


function App() {


  return (
    <>
     

     <div className="bg-main ">
     <Navbar/>
      <Hero/>
     </div>
     <div className=" ">
    <Meme/>
     </div>
  
     <div className=" mt-8">
      <Aboutus/>
     </div>
     <div className=" ">
      <Products/>
     </div>
     
     {/* <div className=" mt-8 ">
      <Partner/>

     </div> */}
{/* 
     <div className=" my-4">
      <Joinclub/>
     </div> */}

     <div className=" mt-4">
      <Footer/>

     </div>
    </>
  )
}

export default App
