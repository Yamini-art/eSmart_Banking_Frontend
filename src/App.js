import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import AdminRoute from "./components/admin/AdminRoute";
import AdminAppiledLoans from "./components/admin/AdminAppiledLoans";
import UserProfile from "./components/UserProfile";
import AdminDashboard from "./components/admin/AdminDashboard";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import ApproveLoan from "./components/admin/ApproveLoan";
import TransferFund from "./components/Customer/TransferFund";
import PayEmi from "./components/Customer/PayEmi";
import ApplyLoan from "./components/Customer/ApplyLoan";
import AdminOffers from "./components/admin/AdminOffers";
import GetOffers from "./components/Customer/GetOffers";
import GetLoanDetails from "./components/Customer/GetLoanDetails";
import TransHistory from "./components/admin/TransHistory";
import CustomerDashboard from "./components/Customer/CustomerDashboard";
import CustomerRoute from "./components/Customer/CustomerRoute";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/transhistory" component={TransHistory} />
      </Switch>

      <Switch>
        <Route exact path="/getloandetails" component={GetLoanDetails} />
      </Switch>

      <Switch>
        <Route exact path="/getoffers" component={GetOffers} />
      </Switch>

      <Switch>
        <Route exact path="/adminoffers" component={AdminOffers} />
      </Switch>
      <Switch>
        <Route exact path="/applyloan" component={ApplyLoan} />
      </Switch>

      <Switch>
        <Route exact path="/payemi" component={PayEmi} />
      </Switch>

      <Switch>
        <Route exact path="/transferfund" component={TransferFund} />
      </Switch>

      <Switch>
        <Route exact path="/userprofile" component={UserProfile} />
      </Switch>

      <Switch>
        <Route exact path="/adminappliedloans" component={AdminAppiledLoans} />
      </Switch>

      <Switch>
        <Route exact path="/approveloan" component={ApproveLoan} />
      </Switch>
      <Switch>
        <AdminRoute path="/admindashboard" component={AdminDashboard} />
      </Switch>
      <Switch>
        <CustomerRoute
          path="/customerdashboard"
          component={CustomerDashboard}
        />
      </Switch>
      {/* <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch> */}
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
      <Switch>
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
};

export default App;
