import React, { useState } from "react";
import PropTypes from "prop-types";

function TodoForm({ onCreate }) {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        className="todo__input"
        type="text"
        name="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder=" Add new task here..."
      />
      <button type="submit" className="todo__button">
        +
      </button>
    </form>
  );
}

TodoForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default TodoForm;
