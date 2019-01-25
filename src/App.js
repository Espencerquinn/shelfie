import React, { Component } from 'react';
import './App.css';
import axios from 'axios'; // Axios is a promised based HTTP client for Javascript it can be used in your front-end app and in your node.js backend
import Form from './Component/Form'
import Header from './Component/Header'
import Dashboard from './Component/Dashboard'
import routes from './routes';
import {Link} from 'react-router-dom'

class App extends Component {

  constructor() {

    super()
    this.state = {
      inventoryList: []


    }
    this.addProduct = this.addProduct.bind(this);

  }

  componentDidMount() { //as soon as web page loads - do this
    axios.get('/api/products').then(response => { //promise- response is paramentater 
      this.setState({ inventoryList: response.data }) //response in this case represents an object 
    })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidUpdate(props) { //as soon as web page loads - do this
    axios.get('/api/products').then(response => { //promise- response is paramentater 
      this.setState({ inventoryList: response.data }) //response in this case represents an object 
    })
      .catch((error) => {
        console.log(error)
      })
  }

  addProduct() {
    axios.post('/api/createProduct', { note: this.state.noteText }).then(response => { //promise this will get done when it comes back
      this.state.inventoryList.push(response.data);
      this.setState({ inventoryList: this.state.inventoryList })
    })
  }




  render() {

    console.log(this.state)

  return(
    <Dashboard
      productList={this.state.inventoryList}
      />,
      <div>
        <nav>className='nav'>
          <div>Navigation</div>
            <div className='link-wrap'>
              <Link to="/" className='links'><button className='btn'>Dashboard</button></Link>
              <Link to="/add"div className='links'><button className='btn'>Form</button></Link>
              <Link to="/edit/:id"div className='links'><button className='btn'>Form</button></Link>
            </div>
        </nav>
        {routes}
      </div>,

      <div className= "container">
        <Dashboard/>
        <Form/>
        <Header/>
      </div >
    );
  }
}





export default App;
