import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import AddTodo from './components/Todo/AddTodo';
import VisibleTodoList from './components/Todo/VisibleTodoList';
import Filter from './components/Filter/Filter';

function App({ fetch, dispatch }) {
  useEffect(() => {
    // dispatch(fetchLoadTodo(10));
  },  []);

  let messageText = '';

  if (fetch.isFetchTodos) {
    messageText = 'Loading...';
  } else if (!fetch.isResolveTodos) {
    messageText = 'Error loading!';
  }

  return (
    <>
      <header className='header'>
        <img
          className='header__cover'
          src='assets/images/rohit-tandon.jpg'
          alt='Background image'
        />
        <div className='header__filter' />
      </header>

      <main className='main'>
        <section className='section'>
          <h1 className='main__app_title'>Todo</h1>
          <AddTodo />
          <p className='message'>{messageText}</p>
        </section>

        <section className='section global--mb_16'>
          <Filter />
        </section>

        <section className='section global--mb_40'>
          <VisibleTodoList />
        </section>
      </main>
    </>
  );
}

function mapStateToProps(state) {
  return {
    fetch: state.fetch
  }
}

export default connect(
  mapStateToProps
)(App);
