import { useState } from 'react'
// import './App.css'
import './General.css'
import React from 'react';
import Title from './components/Title';
import TextButton from './components/TextButton';

function Block({children, ...props}) {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

function ChoresList({ children }) {
  return (
    <Block>
      {/* Обработчик списка задач */}
    </Block>
  )
}

function Side() {
  return (
    <Block className="main-side">
      <Block className="person-block">
      </Block>
      <Block className="side-block">
        <Title>Список задач</Title>
        <Block className="choresList-block">
          <Block className="chores-block">
            
          </Block>
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
