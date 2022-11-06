import "./posttable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../api/products";
import Alert from "@mui/material/Alert";

const userColumns = [
  { field: "userId", headerName: "User ID", width: 70 },
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "title",
    headerName: "Title",
    width: 150,
  },
  {
    field: "body",
    headerName: "Body",
    width: 550,
  },
];

const Posttable = () => {
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
        console.log(response.data);
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
    <div>
      {fetching && (
        <Alert variant="outlined" severity="info">
          Loading data. Please stand by.
        </Alert>
      )}
      {alert && (
        <Alert variant="outlined" severity="error">
          Oh no! Something went wrong when fetching data...
        </Alert>
      )}
      <Box className="datatable">
        <DataGrid
          rows={posts}
          columns={userColumns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
        />
      </Box>
    </div>
  );
};

export default Posttable;
