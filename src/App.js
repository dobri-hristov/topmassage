import React, { Fragment } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from './Firebase';
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import MassagesPage from './Pages/AllMassages'
import MassagePage from './Pages/SingleMassage'
import AboutPage from './Pages/About'
import ContactsPage from './Pages/Contacts'
import PricesPage from './Pages/Prices'
import ReservationPage from './Pages/Reservation'
import LoginPage from './Pages/Login'
import RegisterPage from './Pages/Register'
import ProfilePage from './Pages/Profile'
import ErrorPage from './Pages/Error'
import Footer from './Components/Footer'
import ContextWrapper from './Shared/Contexts/ContextWrapper';
import ProtectedRoute from './Shared/Routes/ProtectedRout';
import styles from './App.module.css'

function App() {
  firebase()

  return (
    <Fragment>
      <Header />
      <ContextWrapper>
        <div className={styles.container}>
          <Router>
            <Navbar />
            <main className={styles.page}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/massages" exact component={MassagesPage} />
                <Route path="/massages/classic-massage" render={() => <MassagePage massageName='classic' />} />
                <Route path="/massages/back-massage" render={() => <MassagePage massageName='back' />} />
                <Route path="/massages/cups-massage" render={() => <MassagePage massageName='cups' />} />
                <Route path="/massages/head-massage" render={() => <MassagePage massageName='head' />} />
                <Route path="/massages/foot-massage" render={() => <MassagePage massageName='foot' />} />
                <Route path="/massages/healing-massage" render={() => <MassagePage massageName='healing' />} />
                <Route path="/massages/sport-massage" render={() => <MassagePage massageName='sport' />} />
                <Route path="/about" component={AboutPage} />
                <Route path="/prices" component={PricesPage} />
                <Route path="/contact" component={ContactsPage} />
                <Route path="/reservation" component={ReservationPage} />
                <ProtectedRoute path="/sign-in" component={LoginPage} />
                <ProtectedRoute path="/sign-up" component={RegisterPage} />
                <ProtectedRoute path="/profile" component={ProfilePage} />
                <Route component={ErrorPage} />
              </Switch>
            </main>
          </Router>
        </div>
      </ContextWrapper>
      <Footer />
    </Fragment>
  );
}

export default App;
