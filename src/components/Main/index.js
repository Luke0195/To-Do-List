import React, { Component } from 'react';
import './styles.css';

import FormComponent from '../Form/index';
import FormTasks from '../FormTasks/index';

export default class Main extends Component {
 state ={
   novaTarefa: '',
   tarefas: [

   ],

   index: -1,
 }

 componentDidMount() {
   const tarefas = JSON.parse(localStorage.getItem('@ToDoList:tarefas'));
   if (!tarefas) return;

   this.setState({
     tarefas,
   });
 }

 componentDidUpdate(prevProps, prevState) {
   const { tarefas } = this.state;

   if (tarefas === prevState.tarefas) return;

   localStorage.setItem('@ToDoList:tarefas', JSON.stringify(tarefas));
 }

 handleChange = (event) => {
   this.setState({
     novaTarefa: event.target.value,
   });
 }

 handleSubmit = (event) => {
   event.preventDefault();
   let { novaTarefa } = this.state;
   const { tarefas, index } = this.state;
   novaTarefa = novaTarefa.trim();

   if (tarefas.indexOf(novaTarefa) !== -1) return;

   const novasTarefas = [...tarefas];
   if (index === -1) {
     this.setState({
       tarefas: [...novasTarefas, novaTarefa],
       novaTarefa: '',
     });
   } else {
     novasTarefas[index] = novaTarefa;
     this.setState({
       tarefas: [...novasTarefas],
       index: -1,
     });
   }
 }

handleDeleteTask = (event, index) => {
  event.preventDefault();
  const { tarefas } = this.state;
  const novasTarefas = [...tarefas];
  novasTarefas.splice(index, 1);
  this.setState({
    tarefas: [...novasTarefas],
  });
}

handleEditTask = (event, index) => {
  const { tarefas } = this.state;
  this.setState({
    index,
    novaTarefa: tarefas[index],
  });
}

render() {
  const { novaTarefa, tarefas } = this.state;
  return (
    <>
      <div className="main">
        <h1> Lista de Tarefas</h1>
        <FormComponent
          handleSubmit={this.handleSubmit}
          novaTarefa={novaTarefa}
          handleChange={this.handleChange}
        />
        <FormTasks
          tarefa={novaTarefa}
          handleDeleteTask={this.handleDeleteTask}
          tarefas={tarefas}
          handleEditTask={this.handleEditTask}
        />
      </div>

    </>
  );
}
}
