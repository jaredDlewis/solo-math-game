import React from 'react';
import { connect } from 'react-redux';
import MainPage from './MainPage.jsx';
import LoginPage from '../login/LoginPage.jsx';

const mapStateToProps = state => ({
  currentPage: state.math.currentPage
})

const App = (props) => {
    return (
      <div className="app-container">
        <h1 index="title-main">Math Game</h1>
        {props.currentPage === 'login' && 
          <LoginPage />
        }
        {props.currentPage === 'main' && 
          <MainPage />
        }
      </div>
    )
}

export default connect(mapStateToProps, null)(App);