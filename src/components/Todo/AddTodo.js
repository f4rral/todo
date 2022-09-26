import React from 'react';
import { connect } from 'react-redux';
import { addTodo, fetchLoadTodo } from '../../store/actions';

function AddTodo({ fetch, dispatch }) {
  let input;

  function submitTodo(event) {
    event.preventDefault();

    if (!input.value.trim()) {
      return;
    }

    dispatch(addTodo(input.value));
    input.value = '';
  }

  return (
    <div className='add_todo'>
      <form
        className='add_todo__form'
        onSubmit={submitTodo}
      >
        <input
          className='add_todo__input'
          ref={node => (input = node)}
        />

        <div className='add_todo__buttons_wrapper'>
          <button
            className='add_todo__button'
            type='submit'
          >
            <img src='assets/icons/add.svg' />
          </button>
          <button
            className='add_todo__button'
            onClick={(e) => {dispatch(fetchLoadTodo(10))}}
            disabled={fetch.isFetchTodos}
          >
            <img src='assets/icons/load.svg' />
          </button>
        </div>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    fetch: state.fetch
  }
}

export default connect(
  mapStateToProps
)(AddTodo);
