import './App.css';
import {Route, Link} from 'react-router-dom';
import MyAccount from './MyAccount';
function App() {
  return (
    <div className="App">
      <Router to ="/MyAccount" component={MyAccount}/>
    </div>
  );
}

export default App;
