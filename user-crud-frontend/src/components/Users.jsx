import {
  Box,
  Button,
  CircularProgress,
  List,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import useFetchData from "../hooks/fetchData";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import "./Users.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const { data, isLoading, error, setData } = useFetchData(
    "http://localhost:5172/api/User"
  );

  const navigate = useNavigate();

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        "http://localhost:5172/api/User/" + userId
      );
      console.log(response);
      setData(
        data.filter((item) => {
          return item.id !== userId;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="xs">
      {isLoading && error === null ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Stack sx={{ height: "100vh", marginTop: 15 }}>
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <h2 className="user-list-title">Users</h2>{" "}
            <Button
              variant="text"
              startIcon={<AddIcon />}
              size="medium"
              sx={{ height: "2rem", marginTop: 2 }}
              onClick={() => {
                navigate("/new-user");
              }}
            >
              New User
            </Button>
          </Stack>

          <List aria-label="">
            {data.map((user) => {
              return (
                <ListItemButton key={user.id}>
                  <ListItemText
                    primary={`${user.firstName} ${user.lastName}`}
                    secondary={user.email}
                  />
                  <div>
                    <Button
                      startIcon={<EditIcon />}
                      onClick={() => navigate("/update-user/" + user.id)}
                    ></Button>
                    <Button
                      startIcon={<DeleteOutlineOutlinedIcon />}
                      onClick={() => deleteUser(user.id)}
                    ></Button>
                  </div>
                </ListItemButton>
              );
            })}
          </List>
        </Stack>
      )}
      {isLoading === false && error !== null && <div>{"Error occured"}</div>}
    </Container>
  );
};

export default Users;
