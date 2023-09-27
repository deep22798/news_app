// import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {



state={
  progress:0
}

setProgress=(progress)=>{
  this.setState({progress:progress})
}

  render() {
    return (
      <>


        <Router>
          
          <Navbar />
          <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} key='general'  category='general'/>}/>
            {/* <Route exact path='/about' element={<News setProgress={this.setProgress}  key='about' />}/> */}
            <Route exact path='/business' element={<News setProgress={this.setProgress}  key='business' category='business' />}/>
            <Route exact path='/sport' element={<News setProgress={this.setProgress}  key='sport' category='sport'/>}/>
            <Route exact path='/health' element={<News setProgress={this.setProgress}  key='health' category='health' />}/>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress}  key='entertainment' category='entertainment'/>}/>
            <Route exact path='/technology' element={<News setProgress={this.setProgress}  key='technology' category='technology'/>}/>
            <Route exact path='/science' element={<News setProgress={this.setProgress}  key='science' category='science'/>}/>
          </Routes>

        </Router>

      </>
    )
  }
}

