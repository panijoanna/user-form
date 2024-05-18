import { Route, Routes } from "react-router-dom";
import UserForm from "../components/UserForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/create-user" />
        <Route path="/show-user" />
        <Route />
      </Routes>
    </>
  );
}

export default App;
