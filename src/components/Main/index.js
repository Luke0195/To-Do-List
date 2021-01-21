import React, { Component } from 'react';
import './styles.css';

// Form
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';

export default class Main extends Component {
 state ={
   novaTarefa: '',
   tarefas: [

   ],

   index: -1,
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
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus size={16} />
          </button>
        </form>

        <ul className="list">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              <strong>{tarefa}</strong>
              <div className="icons">
                <FaEdit size={16} color="#c53f53" onClick={(event) => this.handleEditTask(event, index)} />
                <FaTrash size={16} color="#34632e" onClick={(event) => this.handleDeleteTask(event, index)} />

              </div>
            </li>
          ))}
        </ul>
      </div>

    </>
  );
}
}
