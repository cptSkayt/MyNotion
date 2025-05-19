import { useState } from 'react'
import './General.css'
import React from 'react';
import Title from './components/Title';
import TextButton from './components/TextButton';
import Task from './components/Task';
import Popup from './components/Popup';

const URLParams = {};

function Block({children, ...props}) {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

function NavbarButton({ page, children }) {
  function Path(page) {
    window.location.href = "/?page=" + page
  }

  return (
    <Block className="navbar-button" onClick={() => Path(page)}>
      {children}
    </Block>
  )
}

function Header() {
  return (
    <Block className="main-header">
      <Block className="header-block">
        <Block className="main-title-block">
          <Block className="main-title-text">MyNotion</Block>
        </Block>
        <Block className="navbar-block">
          <NavbarButton page="main">Главная</NavbarButton>
          <NavbarButton page="note">Заметки</NavbarButton>
          <NavbarButton page="concept">Конспекты</NavbarButton>
        </Block>
      </Block>
    </Block>
  )
}

function Side({ page, taskList, closeTask, openPopup }) {
  if (page == 'task' || page == 'main') {
    return (
      <Block className="side-block">
        <Title>Список задач</Title>
        <Block className="choresList-block">
          <ChoresList openPopup={openPopup} closeTask={closeTask}>{taskList}</ChoresList>
          <TextButton flag="default" openPopup={openPopup}>Добавить задачу</TextButton>
        </Block>
        <Block className="button-block">
          <TextButton flag="default">Настройки</TextButton>
          <TextButton flag="default">О приложении</TextButton>
        </Block>
      </Block> 
    )
  } if (page == 'note') {
    return (
      <Block className="side-block">
        <Title>Заметки</Title>
      </Block>
    )
  } if (page == 'concept') {
    return (
      <Block className="side-block">
        <Title>Конспекты</Title>
      </Block>
    )
  }
}

function ChoresList({ children, closeTask, openPopup }) {
  return (
    <Block className="chores-block">
      {children.map((child, index) => {
        return (
          <Task key={index} openPopup={openPopup} taskInfo={child} closeTask={closeTask} />
        )
      })}
    </Block>
  )
}

function App() {
  const parametrs = new URLSearchParams(window.location.search);
  for (const [key, value] of parametrs.entries()) {
      URLParams[key] = value;
  }

  console.log(URLParams)

  const [taskList, setTaskList] = useState([
    {title: "Поешь суп", text: "Гороховый, стоит в холодильнике", isDone: false},
    {title: "Напиши Маше", text: undefined, isDone: false},
    // {title: "Заполни резюме!", text: undefined, isDone: true},
    {title: "Посмотри петли", text: undefined, isDone: false}
  ]) // Главные массив со всеми задачами

  const [info, setInfo] = useState({isOpen: false})

  function openInfoPopup(object) {
    if (object.key === "info") {
      setInfo({isOpen: true, ...object})
    }
    if (object.key === "createTask") {
      setInfo({isOpen: true, ...object})
    }
  }

  function closeInfoPopup() {
    setInfo({isOpen: false})
  }


  function removeTask(task) {
    setTaskList(taskList.filter((item) => item.title !== task.title));  
  }

  function closeTask(task) {
    setTaskList(taskList.map((item) => item.title === task.title ? {...item, isDone: true} : item));
  }

  function addTask(task) {
    console.log(task);
    setTaskList([...taskList, task]);
    console.log(taskList);
  }
  return (   
    <div>
      <Block className="very-main-block">
        <Header />
        <Block className="main-side">
          <Block className="person-block">
            {/* ? Можно сделать отдельным элементом, а не классом */}
          </Block>
          <Side openPopup={openInfoPopup} taskList={taskList} closeTask={closeTask} page={URLParams.page}/>
        </Block>
      </Block>
      <Popup info={info} closePopup={closeInfoPopup} removeTask={removeTask} addTask={addTask} />
    </div>
  );
}

export default App