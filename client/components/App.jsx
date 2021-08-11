import React from 'react';
import { connect } from 'react-redux';
import MainPage from './MainPage.jsx';
import LoginPage from './LoginPage.jsx';

const mapStateToProps = state => ({
  currentPage: state.app.currentPage
})

const App = (props) => {
    return (
      <div className="app-container">
        <h1 index="title-main">Math Game</h1>
        {props.currentPage === 'main' && 
          <MainPage />
        }
        {props.currentPage === 'login' && 
          <LoginPage />
        }
      </div>
    )
}

export default connect(mapStateToProps, null)(App);