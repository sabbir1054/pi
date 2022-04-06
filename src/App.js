import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllStudents from "./Components/AdminPanel/AllStudents/AllStudents";
import Attendance from "./Components/AdminPanel/Attendance/Attendance";
import Coffee from "./Components/AdminPanel/Coffee/Coffee";
import Dashboard from "./Components/AdminPanel/Dashboard/Dashboard";
import Food from "./Components/AdminPanel/Food/Food";
import MakeStudent from "./Components/AdminPanel/MakeStudents/MakeStudent";
import Sidebar from "./Components/AdminPanel/SideBar/Sidebar";
import Home from "./Components/Home/Home";
import LoginPage from "./Components/Login/LoginPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
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
          <Sidebar>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/attendance">
              <Attendance></Attendance>
            </PrivateRoute>
            <PrivateRoute path="/students">
              <AllStudents></AllStudents>
            </PrivateRoute>
            <PrivateRoute path="/newStudent">
              <MakeStudent></MakeStudent>
            </PrivateRoute>
            <PrivateRoute path="/food">
              <Food></Food>
            </PrivateRoute>
            <PrivateRoute path="/coffee">
              <Coffee></Coffee>
            </PrivateRoute>
          </Sidebar>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
