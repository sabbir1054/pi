import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
