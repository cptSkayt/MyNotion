import { useState } from 'react'
import './General.css'
import React from 'react';
import Title from './components/Title';
import TextButton from './components/TextButton';
import Task from './components/Task';
import Popup from './components/Popup';

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
          <Task key={index} func={openPopup} taskInfo={child} />
        )
      })}
    </Block>
  )
}

function Side({ openPopup, taskList }) {
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
  const [info, setInfo] = useState({isOpen: isPopupOpen})

  function openInfoPopup(task) {
    change(true);
    setInfo({isOpen: true, title: task.title, text: task.text})
  }

  function closePopup() {
    change(false);
    setInfo({isOpen: false})
  }

  const [taskList, setTaskList] = useState([
    {title: "Поешь суп", text: "Гороховый, стоит в холодильнике"},
    {title: "Напиши Маше", text: undefined},
  ])

  function removeTask(task) {
    setTaskList(taskList.filter((item) => item.title !== task.title));
  }

  return (
    <div>
      <Side openPopup={openInfoPopup} taskList={taskList} />
      <Popup info={info} closePopup={closePopup} removeTask={removeTask} />
    </div>
  );
}

export default App