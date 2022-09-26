import React from 'react';
import * as actionTypes from '../../store/actions/actionTypes';

import VisibleFilterButton from './VisibleFilterButton';

function Filter() {
  return (
    <div className='todos_filter'>
      <span className='todos_filter__title'>Show: </span>
      <div className='todos_filter__buttons'>
        <VisibleFilterButton filter={actionTypes.FILTER.SHOW_ALL}>All</VisibleFilterButton>
        <VisibleFilterButton filter={actionTypes.FILTER.SHOW_ACTIVE}>Active</VisibleFilterButton>
        <VisibleFilterButton filter={actionTypes.FILTER.SHOW_COMPLETED}>Completed</VisibleFilterButton>
      </div>
    </div>
  );
}

export default Filter;