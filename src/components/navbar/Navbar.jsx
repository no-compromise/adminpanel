import "./Navbar.scss";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <ManageSearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <div className="counter">1</div>        
          
          </div>
            <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon"/>
          <div className="counter">2</div>
          
          </div>
          <div className="item">
            <BedtimeOutlinedIcon className="icon"/>
            Nightmode
          </div>
          <div className="item">
          <img src="https://avatars.dicebear.com/v2/male/f37ec4238a958ffe41d70cfd514028a0.svg" alt="Avatar" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar