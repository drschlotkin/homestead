import React, { Component } from 'react';
import Main from '../Main';
import NavBar from '../NavBar';
import { Provider } from '../context';

export default class extends Component {

  state = {
    navItem: '',
    navListItem: '',
  };

  handleTopicSelected = (topic) => {
    this.setState({
      navListItem: topic
    });
  };

  getContext = () => ({
    onTopicSelect: this.handleTopicSelected,
    livestock: ['Chickens', 'Goats', 'Bees']
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