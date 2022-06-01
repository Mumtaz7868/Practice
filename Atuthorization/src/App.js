import MenuItem from "./MenuItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Contactus from "./Contactus";
import Login from "./Login";
import { Redirect } from "react-router-dom";
import NotFound from "./NotFound";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <MenuItem />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/add" component={AddProduct} />
          <Route path="/products/update/:id" component={UpdateProduct} />
          <Route path="/contactus" component={Contactus} />
          <Route path="/login" component={Login} />
          <Route path="/notFound" component={NotFound} />
          <Redirect to="/notFound" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
