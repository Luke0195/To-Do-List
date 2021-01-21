import React, { Component } from 'react';
import './styles.css';

// Form
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';

export default class Main extends Component {
 state ={
   novaTarefa: '',
   tarefas: [

   ],
 }

 handleChange = (event) => {
   this.setState({
     novaTarefa: event.target.value,
   });
 }

 handleSubmit = (event) => {
   event.preventDefault();
   let { novaTarefa } = this.state;
   const { tarefas } = this.state;
   novaTarefa = novaTarefa.trim();

   if (tarefas.indexOf(novaTarefa) !== -1) return;

   const novasTarefas = [...tarefas];
   this.setState({
     tarefas: [...novasTarefas, novaTarefa],
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
           {tarefas.map((tarefa) => (
             <li key={tarefa}>
               <strong>{tarefa}</strong>
               <div className="icons">
                 <FaEdit size={16} color="#c53f53" />
                 <FaTrash size={16} color="#34632e" onClick={handleDeleteTask} />

               </div>
             </li>
           ))}
         </ul>
       </div>

     </>
   );
 }
}
