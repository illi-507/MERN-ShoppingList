//npm i bootstrap reactstrap uuid react-transition-group
// to run app: npm run dev
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // font, margin
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store'
import ItemModal from './components/ItemModal'
import {Container} from 'reactstrap'

class App extends Component {
  render(){
    return (
      <Provider store = {store}>
      <div className="App">

        <AppNavbar></AppNavbar>
        <Container>
        <ItemModal></ItemModal>
        <ShoppingList></ShoppingList>
        </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
