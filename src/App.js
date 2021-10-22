
import './App.css';
import Navbar from './components/partials/Navbar';
import Users from './components/users/Users';
import UserItem from './components/users/UserItem';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>

    <div className="App">
      <Navbar/>
      <div className="container mt-2">
        <Switch>
            <Route exact path='/users' component={Users}/>
            <Route exact path='/users/:login' component={UserItem}/>
            <Route exact  component={Users}/>
        </Switch>
        
      </div>

    </div>
    </Router>
  );
}

export default App;