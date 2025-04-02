import { useState } from 'react'
import './General.css'
import React from 'react';
import Title from './components/Title';
import TextButton from './components/TextButton';
import Task from './components/Task';
import Popup from './components/Popup';

const infoPopup = {isOpen: false}

function openInfoPopup() {
  console.log("open")
  infoPopup.isOpen = true
}

function Block({children, ...props}) {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

function ChoresList({ children, openPopup }) {
  return (
    <Block className="chores-block">
      {children.map((child, index) => {
        return (
          <Task key={index} func={openPopup}>
            {child.title}
          </Task>
        )
      })}
    </Block>
  )
}

function Side({ openPopup }) {
  // const [taskList, setTaskList] = useState([])

  let taskList = [
    {title: "Поешь суп"},
    {title: "Напиши Маше"},
  ]

  return (
    <Block className="main-side">
      <Block className="person-block">
      </Block>
      <Block className="side-block">
        <Title>Список задач</Title>
        <Block className="choresList-block">
          <ChoresList openPopup={openPopup}>{taskList}</ChoresList>
          <TextButton>Добавить задачу</TextButton>
        </Block>
        <Block className="button-block">
          <TextButton>Настройки</TextButton>
          <TextButton>О приложении</TextButton>
        </Block>
      </Block> 
    </Block>
  )
}

function App() {
  const [isPopupOpen, change] = useState(false)

  function openInfoPopup() {
    console.log("open");
    change(true);
  }

  return (
    <div>
      <Side openPopup={openInfoPopup} />
      <Popup info={{isOpen: isPopupOpen}}>

      </Popup>
    </div>
  );
}

export default App