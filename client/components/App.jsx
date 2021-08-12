import React from 'react';
import { connect } from 'react-redux';
import MainPage from './MainPage.jsx';
import LoginPage from './LoginPage.jsx';
import GamePage from './GamePage.jsx';

const mapStateToProps = state => ({
  currentPage: state.app.currentPage,
  username: state.app.username
})

const App = (props) => {
    return (
      <div className="app-container">
        <header>{props.username}</header>
        <hr/>
        <h1 index="title-main">Math Game</h1>
        {props.currentPage === 'main' && 
          <MainPage />
        }
        {props.currentPage === 'login' && 
          <LoginPage />
        }
        {props.currentPage === 'game' && 
          <GamePage />
        }
      </div>
    )
}

export default connect(mapStateToProps, null)(App);