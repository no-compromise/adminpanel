import "./Login.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [repassword, setRepassword] = useState(null);
  const [erremail, setErremail] = useState(false);
  const [errpass, setErrpass] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    // Password match validation
    if (password !== repassword || !password) {
      setLoading(false);
      setErrpass(true);
    } else {
      setErrpass(false);
    }
    // Email validation
    if (!email) {
      setErremail(true);
      setLoading(false);
    } else {
      setErremail(false);
    }
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="container">
          <div className="header">
            <p>You must register before can access API endpoint resources:</p>
          </div>
          <div className="regform">
            <Box component="form" className="form">
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                style={{ width: 300, marginBottom: 20 }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={erremail}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                style={{ width: 300, marginBottom: 20 }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                error={errpass}
              />
              <TextField
                id="password-repeat"
                label="Repeat password"
                type="password"
                autoComplete="current-password"
                style={{ width: 300, marginBottom: 20 }}
                onChange={(e) => {
                  setRepassword(e.target.value);
                }}
                error={errpass}
              />
              <LoadingButton
                loading={loading}
                loadingPosition="start"
                startIcon={<HowToRegIcon />}
                variant="contained"
                style={{ width: 120 }}
                onClick={() => handleSubmit()}
              >
                Register
              </LoadingButton>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
