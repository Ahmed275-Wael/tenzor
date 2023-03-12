import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import Main from "./pages/Main";
import Products from "./pages/Products";
import ViewProduct from "./pages/ViewProduct";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import UploadProd from "./pages/UploadProd";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <SkeletonTheme baseColor="#F7F7F7" highlightColor="#eaeaea">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/:id">
            <ViewProduct />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/upload">
            <UploadProd />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </SkeletonTheme>
  );
}

export default App;
