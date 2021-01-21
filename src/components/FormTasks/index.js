import React from 'react';
import './style.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function FormTask({
  tarefas, handleDeleteTask, handleEditTask,
}) {
  return (
    <>
      <ul className="list">
        {tarefas.map((tarefa, index) => (
          <li key={tarefa}>
            <strong>{tarefa}</strong>
            <div className="icons">
              <FaEdit size={16} color="#c53f53" onClick={(event) => handleEditTask(event, index)} />
              <FaTrash size={16} color="#34632e" onClick={(event) => handleDeleteTask(event, index)} />

            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
