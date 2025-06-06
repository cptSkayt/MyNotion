import { useState } from 'react'
import './General.css'
import Title from './components/Title';
import TextButton from './components/TextButton';
import Task from './components/Task';
import Write from './components/Write';
import Note from './components/Note';
import Popup from './components/Popup';
import Screen from './components/Screen';

const URLParams = {};

function Block({children, ...props}) {
  return (
    <div {...props}>
      {children}
    </div>
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
          <NavbarButton page="write">Записи</NavbarButton>
        </Block>
      </Block>
    </Block>
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

function Side({ page, taskList, closeTask, openPopup, openScreen }) {
  if (page == 'main' || page == 'note') {
    return (
      <Block className="side-block">
        <Title status="none" format="border-title">Список задач</Title>
        <Block className="choresList-block">
          <ChoresList openPopup={openPopup} closeTask={closeTask}>{taskList}</ChoresList>
          <TextButton flag="default" openPopup={openPopup}>Добавить задачу</TextButton>
        </Block>
        <Block className="button-block">
          <TextButton openScreen={openScreen} flag="default">Настройки</TextButton>
          <TextButton openScreen={openScreen} flag="default">О приложении</TextButton>
        </Block>
      </Block> 
    )
  } if (page == 'note') {
    return (
      <Block className="side-block">
        <Title status="none" format="border-title">?</Title>
      </Block>
    )
  } if (page == 'write') {
    return (
      <Block className="side-block">
        <Title status="none" format="border-title">Поиск по тегу</Title>
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

function General({ page, openScreen }) {
  const [importantWriteList, setImportantWriteList] = useState([
    {status: "important", name: "ДР"},
  ])

  const [generalWriteList, setGeneralWriteList] = useState([
    {status: "general", name: "Конспекты по физике"},
  ])

  const [noteList, setNoteList] = useState([
    {title: "Номера телефонов", content: "Андрей: 7-905-615-08-61\nМаша: 7-905-615-08-61"},
    {title: undefined, content: "Какой-то рандомный текст"},
  ])

  function addNote(note) {
    if (note.title === '') {
      note.title = undefined;
    }

    noteList.forEach((item, index) => {
      if (item.status == 'new') {
        noteList.splice(index, 1);
      }
    })
    setNoteList([{title: note.title, content: note.content}, ...noteList]);
  }

  function createNote() {
    setNoteList([{status: 'new'}, ...noteList]);
  }

  function deleteNewNote() {
    noteList.forEach((item, index) => {
      if (item.status == 'new') {
        noteList.splice(index, 1);
      }
    })
    setNoteList([...noteList]);
  }

  function deleteNote(note) {
    noteList.forEach((item, index) => {
      if (item.title == note.title || item.content == note.content) {
        noteList.splice(index, 1);
      }
    })
    setNoteList([...noteList]);
  }

  function toImportant(write) {
    for (let i = 0; i < generalWriteList.length; i++) {
      if (generalWriteList[i].name == write.name) {
        write.status = "important"
        generalWriteList.splice(i, 1);
        break
      }
    }
    setImportantWriteList([...importantWriteList, write]) 
  }

  function toGeneral(write) {
    for (let i = 0; i < importantWriteList.length; i++) {
      if (importantWriteList[i].name == write.name) {
        write.status = "general"
        importantWriteList.splice(i, 1);
        break
      }
    }
    setGeneralWriteList([write, ...generalWriteList])
  }

  if (page == 'main') {
    return (
      <Block className="general-block">
        <Title status="button" format="open-title" openScreen={openScreen} createNote={createNote}>Заметки</Title>
        <Block className="main-note-block">
          <Block className="main-notes">
            {noteList.map((note, index) => {
              return (
                <Note key={index} title={note.title} content={note.content} status={note.status} addNote={addNote} deleteNewNote={deleteNewNote} deleteNote={deleteNote}></Note>
              )
            })}
          </Block>
        </Block>
        <Title status="button" format="open-title" openScreen={openScreen}>Записи</Title>
        <Block className="main-write-block">
          {importantWriteList.map((write, index) => {
            return (
              <Write key={index} noteInfo={write} toImportant={toImportant} toGeneral={toGeneral} openScreen={openScreen} />
            )
          })}
          {generalWriteList.map((write, index) => {
            return (
              <Write key={index} noteInfo={write} toImportant={toImportant} toGeneral={toGeneral} openScreen={openScreen} />
            )
          })}
        </Block>
      </Block>
    )
  }
  if (page == 'note') {
    return (
      <Block className="general-block">
        <Title format="open-title">Заметки</Title>
        <Block className="note-note-block">
          {noteList.map((note, index) => {
              return (
                <Note key={index} title={note.title} content={note.content} status={note.status} addNote={addNote} deleteNewNote={deleteNewNote} deleteNote={deleteNote}></Note>
              )
            })}
        </Block>
        <Block className="main-add-button-block">
          <Block className="main-add-button" onClick={() => createNote()}>+</Block>
        </Block>
      </Block>
    )
  }
  if (page == 'write') {
    return (
      <Block className="general-block">
        <Title format="open-title">Важное</Title>
        <Block height="important" className="write-write-block">
          {importantWriteList.map((write, index) => {
            return (
              <Write key={index} noteInfo={write} toImportant={toImportant} toGeneral={toGeneral} openScreen={openScreen} />
            )
          })}
        </Block>
        <Title format="open-title">Основное</Title>
        <Block height="other" className="write-write-block">
          {generalWriteList.map((write, index) => {
            return (
              <Write key={index} noteInfo={write} toImportant={toImportant} toGeneral={toGeneral} openScreen={openScreen} />
            )
          })}
        </Block>
        <Block className="main-add-button-block">
          <Block className="main-add-button" onClick={() => openScreen({title: "Создание новой записи"})}>+</Block>
        </Block>
      </Block>
    )
  }
  if (page == 'settings') {
    return (
      <Block className="general-block">
        Настройки
      </Block>
    )
  } 
  if (page == 'about') {
    return (
      <Block className="general-block">
        О приложении
      </Block>
    )
  }
}

function App() {
  const parametrs = new URLSearchParams(window.location.search);
  for (const [key, value] of parametrs.entries()) {
      URLParams[key] = value;
  }

  const [screen, setScreen] = useState({isOpen: false})

  function openScreen(screen) {
    console.log(screen)
    setScreen({isOpen: true, ...screen})
  }

  function closeScreen() {
    setScreen({isOpen: false})
  }

  const [taskList, setTaskList] = useState([
    {title: "Добавить код", description: "Добавить в MyNotion панель в заметках и конспектах с добавлением фотографии/кода или похожего текста/цитаты В тексте их выделить цветными блоками или как-то так", isDone: false},
    {title: "Напиши Маше", description: undefined, isDone: false},
    {title: "Добавить удаление", description: "Добавить настройку сохранения последних трех удаленных/выполненых задач", isDone: false},
    {title: "Настройка тасков", description: "Новые задачи снизу/сверху", isDone: false},
    {title: "Братья Стругацкие", description: "Прочитать Братья Стругацкие - Отель у погибшего альпиниста", isDone: false},
  ]) // Главные массив со всеми задачами

  const [info, setInfo] = useState({isOpen: false})

  const personDict = {
    name: "Береговой Лев",
  }

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
    setTaskList([task, ...taskList]);
  }
  return (   
    <div>
      <Block className="very-main-block">
        <Header />
        <Block className="main-side">
          <Block className="person-block">
            {/* ? Можно сделать отдельным элементом, а не классом */}
            <Block className="person-account-block">
              <Block id="avatar" />
              <p id="name">{personDict.name}</p>
            </Block>
            <button className="person-account-button" onClick={() => alert("Вы вышли из аккаунта")}>выйти из аккаунта</button>
          </Block>
          <Side openScreen={openScreen} openPopup={openInfoPopup} taskList={taskList} closeTask={closeTask} page={URLParams.page}/>
        </Block>
        <General page={URLParams.page} openScreen={openScreen}>
        </General>
      </Block>
      <Popup info={info} closePopup={closeInfoPopup} removeTask={removeTask} addTask={addTask} />
      <Screen screen={screen} closeScreen={closeScreen}></Screen>
    </div>
  );
}

export default App