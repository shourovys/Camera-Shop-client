import React from "react";
import { Switch, useRouteMatch } from "react-router-dom";
import AddProduct from "../../pages/AddProduct";
import AllOrders from "../../pages/AllOrders";
import MyOrders from "../../pages/MyOrders";
import AdminRoute from "../Routes/AdminRoute";
import PrivateRoute from "../Routes/PrivateRoute";
import Logout from "./Logout";
import MakeAdmin from "./MakeAdmin";
import ManageProducts from "./ManageProducts";
import Pay from "./Pay";
import TakeReview from "./TakeReview";
const DashboardRouter = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <PrivateRoute path={`${path}/pay`}>
        <Pay />
      </PrivateRoute>
      <PrivateRoute path={`${path}/myOrder`}>
        <MyOrders />
      </PrivateRoute>
      <PrivateRoute path={`${path}/review`}>
        <TakeReview />
      </PrivateRoute>
      <AdminRoute path={`${path}/order/manage`}>
        <AllOrders />
      </AdminRoute>
      <AdminRoute path={`${path}/product/manage`}>
        <ManageProducts />
      </AdminRoute>
      <AdminRoute path={`${path}/add/product`}>
      <AddProduct />
      </AdminRoute>
      <AdminRoute path={`${path}/makeAdmin`}>
        <MakeAdmin />
      </AdminRoute>
      <PrivateRoute path={`${path}/logout`}>
        <Logout />
      </PrivateRoute>
    </Switch>
  );
};

export default DashboardRouter;
