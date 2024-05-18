import { Route, Routes } from "react-router-dom";
import UserForm from "../components/UserForm";
import ShowUser from "../components/ShowUser";
import { toUser } from "./routes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/create" element={<UserForm />} />
        <Route path={toUser()} element={<ShowUser />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
