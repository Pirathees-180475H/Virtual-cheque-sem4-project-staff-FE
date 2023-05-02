import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




import CustomerList from './pages/CustomerTable';
import StaffDashboard from './pages/StaffviewProfile';
import StaffChangeDetails from './pages/StaffChangeDetails';
import StaffPassChange from './pages/StaffChangePassword';
import PinChangeRequests from './pages/Security pin change requests page';
import NewRegisterRequests from'./pages/NewRegisterRequsts';
import AllChequeView from './pages/GetChequeRequests';
import ChangeStaffPassword from './pages/StaffChangePassword';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import ChangePassword from './pages/ChangePassword';
import ChangeDetails from './pages/ChangeDetails';

import Welcome from './pages/Welcome'; 
import userSignIn from './pages/userSignIn'; 
import userSignUp from './pages/userSignUp'; 
import forgotPass from './pages/ForgotPass'; 
import EnterPin from './pages/EnterPin';
import EnterNewPassword from './pages/EnterNewPassword';




function App() {


  const DefaultPageRoute = ({ component: Component, ...rest }) => {
    return (
      <Route {...rest} component={(props) => (
        <div>
        <Navbar heading='onlineCheque'/>
          <Component {...props} />
        </div>
      )}
      />
    );
  }

  const LandingPageRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        component={(props) => (<Component {...props} />)}
      />
    );
  }

  const NavigationPageRoute = ({ component: Component, ...rest }) => {
    return (
      <Route {...rest} component={(props) => (
        <div>
        <Navbar heading='onlineCheque'/>
          <Component {...props} />
        </div>
      )}
      />
    );
  }



  return (
    <Router>
      <ChakraProvider>

        <Switch>
          {/* Customer Pages Hided 
          <DefaultPageRoute path="/customerHome" exact component={StaffDashboard} />
          <NavigationPageRoute path="/custdashboard" component={Dashboard} />
          <NavigationPageRoute path="/custchangePassword" component={ChangePassword} />
          <DefaultPageRoute path="/custchangeDetails" component={ChangeDetails} />
          <DefaultPageRoute path="/usersignin" component={userSignIn} />
          <DefaultPageRoute path="/usersignup" component={userSignUp} />
          <LandingPageRoute path="/" exact component={Welcome} />
          <LandingPageRoute path="/forgotPassword" component={forgotPass} />
          <LandingPageRoute path="/enterpin" component={EnterPin} />
          <LandingPageRoute path="/newpass" component={EnterNewPassword} /> */}

          <DefaultPageRoute path="/" exact component={StaffDashboard} />
          <DefaultPageRoute path="/StaffDashboard" exact component={StaffDashboard} />
          <DefaultPageRoute path="/StaffchangeDetails" exact component={StaffChangeDetails} />
          <DefaultPageRoute path="/CustomerDetails" exact component={CustomerList} />
          <DefaultPageRoute path="/staffP" exact component={StaffPassChange} />
          <DefaultPageRoute path="/pinRequests" exact component={PinChangeRequests} />
          <DefaultPageRoute path="/NewRegisterRequests" exact component={NewRegisterRequests} />
          <DefaultPageRoute path="/cheques" exact component={AllChequeView} />
          <DefaultPageRoute path="/StaffchangePassword" exact component={ChangeStaffPassword} />

        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;


//line 1

/// i want line 3 not line 2