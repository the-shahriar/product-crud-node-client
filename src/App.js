import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AddProducts from './components/AddProducts/AddProducts';
import ManageProducts from './components/ManageProducts/ManageProducts';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/add">
          <AddProducts></AddProducts>
        </Route>
        <Route path="/manage/:id">
          <ManageProducts></ManageProducts>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter >
  );
}

export default App;
