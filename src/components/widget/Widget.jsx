import "./Widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Widget = ({ type }) => {
    let data;

    // Temp val

    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonIcon className="icon" />
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all orders",
                icon: <ShoppingCartIcon className="icon" />
            }
            break;
        case "earnings":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "See all earnings",
                icon: <ShoppingCartIcon className="icon" />
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: false,
                link: "See all balance",
                icon: <ShoppingCartIcon className="icon" />
            }
            break;
        default:
            data = {
                title: "UNDEF",
                isMoney: false,
                link: "UNDEF",
                icon: <PersonIcon className="icon" />
            }
            break;
    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "€"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff} %
                </div>
                <PersonIcon className="icon" />
            </div>
        </div>
    )
}

export default Widget