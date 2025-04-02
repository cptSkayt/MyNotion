import { useState } from 'react'
import './General.css'
import React from 'react';
import Title from './components/Title';
import TextButton from './components/TextButton';
import Task from './components/Task';

function Block({children, ...props}) {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

function ChoresList({ children }) {
  return (
    <Block className="chores-block">
      {children.map((child, index) => {
        return (
          <Task key={index}>
            {child.text}
          </Task>
        )
      })}
    </Block>
  )
}

function Side() {
  let taskList = [
    {text: "Поешь суп"},
    {text: "Напиши Маше"},
  ]

  return (
    <Block className="main-side">
      <Block className="person-block">
      </Block>
      <Block className="side-block">
        <Title>Список задач</Title>
        <Block className="choresList-block">
          <ChoresList>
            {taskList}
          </ChoresList>
          <TextButton>
            Добавить задачу
          </TextButton>
        </Block>
        <Block className="button-block">
          <TextButton>
            Настройки
          </TextButton>
          <TextButton>
            О приложении
          </TextButton>
        </Block>
      </Block> 
    </Block>
  )
}

function App() {

  return (
    <div>
      <Side>

      </Side>
    </div>
  );
}

export default App
