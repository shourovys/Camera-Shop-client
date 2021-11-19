import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import PrivateRoute from "./components/Routes/PrivateRoute";
import AuthContextProvider from "./context/AuthContext";
import ScrollToTop from "./hooks/ScrollToTop";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import MoreProducts from "./pages/MoreProducts";
import NotFound from "./pages/NotFound";
import PlaceOrder from "./pages/PlaceOrder";
function App() {
  return (
    <AuthContextProvider>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Switch>
          <Route path="/home">{<Home />}</Route>
          <Route path="/products">{<MoreProducts />}</Route>
          <Route path="/auth/:path">{<Auth /> }</Route>
          <PrivateRoute path="/dashboard">{<Dashboard />}</PrivateRoute>
          <PrivateRoute path="/place/order/:id">
            <PlaceOrder />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
