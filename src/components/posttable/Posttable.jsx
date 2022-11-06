import "./posttable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
//import Stack from "@mui/material/Stack";
//import Button from "@mui/material/Button";

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
  {
    field: "actions",
    headerName: "Actions",
    width: 250,
  },
];

const Posttable = (posts) => {
  return (
    <div>
      <Box className="datatable">
        <DataGrid
          rows={posts.posts}
          columns={userColumns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          // checkboxSelection        #not for now
        />
      </Box>
    </div>
  );
};

export default Posttable;
