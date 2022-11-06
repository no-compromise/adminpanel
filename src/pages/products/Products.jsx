import "./products.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Posttable from "../../components/posttable/Posttable";
import { useEffect, useState } from "react";
import api from "../../api/products";
import Alert from "@mui/material/Alert";

const Products = () => {
  const [posts, setPosts] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setAlert(false);
        setFetching(true);
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          setAlert(true);
          console.log(err.response.status);
        } else {
          setAlert(true);
          console.log(`Error: ${err.message}`);
        }
      }
      setFetching(false);
    };
    fetchPost();
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="container">
          <div className="info">
            {fetching && (
              <div className="loading">
                <Alert variant="outlined" severity="info">
                  Loading data. Please stand by...
                </Alert>
              </div>
            )}
            {alert && (
              <div className="error">
                <Alert variant="outlined" severity="error">
                  Oh no! Something went wrong when fetching data...
                </Alert>
              </div>
            )}
          </div>
          <Posttable posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default Products;
