
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
       <Sidebar/>
       <div className="homeContainer">
        <Navbar/>
        Some home stuff
       </div>
    </div>
  )
}

export default Home