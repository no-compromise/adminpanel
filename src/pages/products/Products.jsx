import "./products.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Posttable from "../../components/posttable/Posttable";

const Products = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="container">
          <Posttable />
        </div>
      </div>
    </div>
  );
};

export default Products;
