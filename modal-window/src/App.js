import React, { Component } from "react";
import Modal from "./components/Modal/modal";
// import Clock from "./components/Clock/Clock";
import styles from './components/Modal/Modal.module.css'

class App extends Component { 
  state = {
    showModal: false
  };

  //===Метод открытия, закрытия модального окна==//
   onToggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    })
    )
  };

  render() { 
    const { showModal } = this.state;
    return (
      
      <>
         <button type="button" onClick={this.onToggleModal}>Open modal</button>
        {showModal && <Modal onClose={this.onToggleModal}>
           <h2 className={styles.title}>Description</h2>
          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
            Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
            В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
            Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.
            Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
          </p>
          <button type='button' className={styles.closeButton} onClick={this.onToggleModal}>Close</button>
        </Modal>} 
      </>
     
    )
  }
}
export default App;
