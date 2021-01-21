import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './style.css';

export default function Form({ novaTarefa, handleSubmit, handleChange }) {
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={novaTarefa}
        />
        <button type="submit">
          <FaPlus size={16} />
        </button>
      </form>
    </>
  );
}
