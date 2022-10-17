import React from "react";
import "./test.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";

const Test = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="content">
          <Datatable />
          <p>
            <i>We are gonna need fetch data from API endpoint....</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Test;
