import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import './Display.css';
import Display from './Display';
import PostList from './PostList';
import Context from './Context';
import ChildA from './ChildA';
import ChildB from './ChildB'
import Hooks from './Hooks'



class App extends Component {




  render() {
    return (
      <>
        <div>Hello App</div>
        <Display />
        <Hooks />
        <Context>
          <ChildA />
          <ChildB />
        </Context>

      </>
    )
  }

}


export default App;
