import React, { Component } from 'react';
import './Calculator.css'

export default class Calculator extends Component {

  state = {
    resultCalcu: '0',
    typingElement: '0',
  }
  flag=true;

  typingNumber = (value) => {
    let operator = ['/', '*', '+', '-', '.'];
    if(this.state.typingElement[this.state.typingElement.length - 1] === '+'){
      if(value === '*' || value === '/' || value==='+') value=''
    }
    if(this.state.typingElement[this.state.typingElement.length - 1] === '-'){
      if(value === '*' || value === '/' || value==='-') value=''
    }
    if (this.state.typingElement[this.state.typingElement.length - 1] === '*' || this.state.typingElement[this.state.typingElement.length - 1] === '/') {
      if (value === '*' || value === '/') value = ''
    }
    if (this.state.typingElement[this.state.typingElement.length - 1] === '.' && operator.includes(value))       value = ''

    
    setTimeout(() => {
      this.setState({
        typingElement: this.state.typingElement.replace(/^0+/, '') + (value),
      });
    }, 100)
  }

  allClear = () => {
    this.setState({
      resultCalcu: '0',
      typingElement: '0',
    })
  }

  delete = () => {
    this.setState({
      typingElement: this.state.typingElement.slice(0, -1)
    });
  }

  caculate = () => {
    try {
      this.setState({
        typingElement: eval(this.state.typingElement.replace(/^0+/, '')).toString(),
        resultCalcu: this.state.typingElement + '=',
      });
    } catch (err) {
      this.setState({
        resultCalcu: 'Please press the all clear(AC) button!',
        typingElement: 'ERROR'
      })
    }
  }

  render() {

    return (
      <div className='container grid-container'>
        <div className='grid-item output'>
          <div data-result className='result'>{this.state.resultCalcu}</div>
          <div data-typing className='typing'>{this.state.typingElement} </div>
        </div>
        <button onClick={() => { this.typingNumber(7) }} className='grid-item'>7</button>
        <button onClick={() => { this.typingNumber(8) }} className='grid-item'>8</button>
        <button onClick={() => { this.typingNumber(9) }} className='grid-item'>9</button>
        <button onClick={() => { this.typingNumber('/') }} className='grid-item action'>/</button>
        <button className='grid-item action' onClick={() => { this.delete() }}>DEL</button>
        <button onClick={() => { this.typingNumber(4) }} className='grid-item'>4</button>
        <button onClick={() => { this.typingNumber(5) }} className='grid-item'>5</button>
        <button onClick={() => { this.typingNumber(6) }} className='grid-item'>6</button>
        <button onClick={() => { this.typingNumber('*') }} className='grid-item action'>*</button>
        <button className='grid-item action' onClick={() => { this.allClear() }} >AC</button>
        <button onClick={() => { this.typingNumber(1) }} className='grid-item'>1</button>
        <button onClick={() => { this.typingNumber(2) }} className='grid-item'>2</button>
        <button onClick={() => { this.typingNumber(3) }} className='grid-item'>3</button>
        <button onClick={() => { this.typingNumber('-') }} className='grid-item action'>-</button>
        <button className='grid-item item-2 action' onClick={() => { this.caculate() }}>=</button>
        <button onClick={() => { this.typingNumber(0) }} className='grid-item item-1'>0</button>
        <button onClick={() => { this.typingNumber('.') }} className='grid-item'>.</button>
        <button onClick={() => { this.typingNumber('+') }} className='grid-item action'>+</button>
      </div>
    )
  }
}
