import './App.css';
import {Route, Link} from 'react-router-dom';
import MyAccount from './MyAccount';
function App() {
  return (
    <div className="App">
      <Route path="myaccount" element={<MyAccount/>}/>
    </div>
  );
}

export default App;
