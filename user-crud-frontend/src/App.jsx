import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import { NewUser } from "./components/NewUser";
import UpdateUser from "./components/UpdateUser";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/new-user" element={<NewUser />} />
      <Route path="/update-user/:id" element={<UpdateUser />} />
    </Routes>
  );
};

export default App;
