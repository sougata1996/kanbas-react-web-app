
import Labs from './Labs';
import HelloWorld from './Labs/a3/HelloWorld';
import './App.css';
import Kanbas from './Kanbas';
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Signin from './Kanbas/users/signin';

import Account from './Kanbas/users/account';
import UserTable from './Kanbas/users/table';
import Signup from './Kanbas/users/signup';

function App() {
  return (
    <HashRouter>
    <div>
    <Routes>
    <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/signin"   element = {<Signin/>}/>
          <Route path="/signup"   element = {<Signup/>}/>
          <Route path="/account"   element = {<Account/>}/>
          <Route path="/account/:id" element={<Account />} />
          <Route path="user-table" element={<UserTable/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
       
        </Routes>

    </div>
    </HashRouter>
  );
}

export default App;
