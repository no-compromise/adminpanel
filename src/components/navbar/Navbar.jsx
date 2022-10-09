import "./Navbar.scss";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <ManageSearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <BedtimeOutlinedIcon className="icon" />
            Nightmode
          </div>
          <div className="item">
            <Stack direction="row" spacing={2}>
              <Avatar
                className="avatar"
                sx={{ width: 30, height: 30, bgcolor: deepOrange[500] }}
              >
                AP
              </Avatar>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
