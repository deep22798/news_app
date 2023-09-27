import React, { Component } from 'react'
import loading from '../loading.gif';

export class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" style={{height:"50px", width:"50px"}} />
      </div>
    )
  }
}

export default Loading
