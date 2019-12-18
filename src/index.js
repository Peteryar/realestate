import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './App/LandingPage/LandingPage'


let App = (props)=>{
    return <LandingPage />
}

ReactDOM.render(<App />, document.getElementById('root'));