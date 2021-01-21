import React, { Component } from 'react';
import './styles.css';

// Form
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';

export default class Main extends Component {
 state ={
   novaTarefa: '',
   tarefas: [
     'Acordar',
     'Tomar Café',
     'Escovar os dentes',
     'Ir Trabalhar',
     'Estudar',
     'Ir dormir',
   ],
 }

 handleChange = (event) => {
   this.setState({
     novaTarefa: event.target.value,
   });
 }

 render() {
   const { novaTarefa, tarefas } = this.state;
   return (
     <>
       <div className="main">
         <p>

           {novaTarefa}
         </p>
         <h1> Lista de Tarefas</h1>
         <form className="form">
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
                 <FaTrash size={16} color="#34632e" />

               </div>
             </li>
           ))}
         </ul>
       </div>

     </>
   );
 }
}
