import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './assets/scss/global.scss';
import { userService } from './services/user.service.js'
import { AppHeader } from './cmps/AppHeader';
import { ContactIndex } from './pages/ContactIndex.jsx';
import { Home } from './pages/Home.jsx';
import { SignupPage } from './pages/SignupPage.jsx';
import { ContactDetails } from './pages/ContactDetails.jsx';
import { ContactEdit } from './pages/ContactEdit.jsx';


const PrivateRoute = (props) => {
    const isAuth = userService.isUser()
    return isAuth ? <Route {...props} /> : <Redirect to="/signup" />
}

function App() {
    return (
        <Router>
            <div className="main-app">

                <AppHeader />

                <main className='container'>
                    <Switch>
                        <Route path="/contact/edit/:id?" component={ContactEdit} />
                        <Route path="/contact/:id" component={ContactDetails} />
                        <Route path="/signup" component={SignupPage} />
                        <Route path="/contact" component={ContactIndex} />
                        <PrivateRoute path="/" component={Home} />
                    </Switch>
                </main>

                <footer>
                    <section className='container'>
                        contactRights 2022 &copy;
                    </section>
                </footer>

            </div>
        </Router>
    );
}

export default App;
