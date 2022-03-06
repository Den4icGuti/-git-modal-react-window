import React, { Component } from 'react';

class Clock extends Component { 
  state = {
    time: new Date().toLocaleTimeString(),
  }

   intervalId = null;

  //===Запускаем таймер, монтируем компонент===//
  componentDidMount() { 
    console.log('setInterval');
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleString() }),
      1000,
    );
  }

  //===Делаем размонтирование т.е очищаем таймер после закрытия таймера===//
  
  componentWillUnmount() { 
    clearInterval(this.intervalId)
  }

  render() { 
    return <div>{this.state.time}</div>
  }
}

export default Clock;