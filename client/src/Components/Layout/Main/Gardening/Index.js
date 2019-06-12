import React, { Component } from 'react';
import Main from './Main';
import NavBar from './NavBar';
import { Provider } from './context';

export default class extends Component {

  state = {
    navListItem: '',
    vegetables: {}
  }

  handleTopicSelected = (topic) => 
    this.setState({
      navListItem: topic
    });

  /* Load vegetable information from database */  
  getVegetableList = () =>
    fetch('http://localhost:5000/api/vegetables', {
      headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }})
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({    
        vegetables: res
      })
    }).catch(err => {
      if (err) console.log(err);
    });
  
  componentDidMount = () => this.getVegetableList();

  getContext = () => ({
    vegetables: this.state.vegetables,
    onTopicSelect: this.handleTopicSelected,
    topics: ['Vegetables', 'Soil', 'Pests']
  });

  render(){
    const {navListItem} = this.state;

    return <Provider value={this.getContext()}>
      <div style={{display: 'flex'}}>
        <NavBar />
        <Main navListItem={navListItem}/>
      </div>
    </Provider>
  };
};
