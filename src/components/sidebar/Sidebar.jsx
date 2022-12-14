import "./Sidebar.scss";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">MyAdmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <PersonIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <ShoppingCartIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <ListAltIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <BugReportOutlinedIcon className="icon" />
            <span>Test</span>
          </li>
          <p className="title">ACCOUNT</p>
          <li>
            <AccountBoxIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
