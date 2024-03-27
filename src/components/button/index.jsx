import  { Component } from 'react'

import './button.scss';

export class Button extends Component {
  render() {
    return (
      <button className='button'>
           {this.props.text}
      </button>
    )
  }
}

export default Button