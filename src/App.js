import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllStudents from "./Components/AdminPanel/AllStudents/AllStudents";
import Attendance from "./Components/AdminPanel/Attendance/Attendance";
import Dashboard from "./Components/AdminPanel/Dashboard/Dashboard";
import Food from "./Components/AdminPanel/Food/Food";
import MakeStudent from "./Components/AdminPanel/MakeStudents/MakeStudent";
import Sidebar from "./Components/AdminPanel/SideBar/Sidebar";
import Home from "./Components/Home/Home";
import LoginPage from "./Components/Login/LoginPage";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
        </Switch>
        <Sidebar>
          <Switch>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/attendance">
              <Attendance></Attendance>
            </Route>
            <Route path="/students">
              <AllStudents></AllStudents>
            </Route>
            <Route path="/newStudent">
              <MakeStudent></MakeStudent>
            </Route>
            <Route path="/food">
              <Food></Food>
            </Route>
          </Switch>
        </Sidebar>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
