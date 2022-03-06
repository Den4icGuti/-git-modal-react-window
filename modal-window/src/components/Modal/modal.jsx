import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');

class modalWindow extends Component { 

  //===Метод componentDidMount монтирует комопонет в DOM===//
  componentDidMount() { 
    console.log('Монтирование компонента');
    //===Регистрирываем слушателя===//
    window.addEventListener('keydown',this.onHandleKeyDouwn)
  }

  //===Метод  componentWillUnmount  выполняет размонтирование компонента  в DOM===//
  componentWillUnmount() { 
    console.log('Размонтирование компонента');
    //===Снимаем слушателя с регистрации===//
    window.removeEventListener('keydown',this.onHandleKeyDouwn)
  }

  onHandleKeyDouwn = e => {
    setTimeout(() => {
      if (e.code === 'Escape') {
          //===Пропс на метод закрития открытия модального окна===//
        this.props.onClose();
      }
    }, 1000)
  };
  
  //===Метод заклрывает модальное окно по клику в любом месте, кроме самого модального окна===//
  onHandleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  }

  render() { 
    //=== Рендерим модальное окно поверх всех документов, благодаля методу createPortal===//
    return createPortal(
      <div className={styles.backdrop} onClick={this.onHandleBackdropClick}>
        <div className={styles.modal}>{this.props.children}</div>
     </div>,
     modalRoot
    );
  }
 
}

export default modalWindow;