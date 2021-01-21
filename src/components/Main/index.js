import React, { Component } from 'react';
import './styles.css';

// Form
import { FaPlus } from 'react-icons/fa';

export default class Main extends Component {
 state ={
   novaTarefa: '',
 }

 handleChange = (event) => {
   this.setState({
     novaTarefa: event.target.value,
   });
 }

 render() {
   const { novaTarefa } = this.state;
   return (
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
     </div>

   );
 }
}
