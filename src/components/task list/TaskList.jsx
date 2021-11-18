import React from 'react';
import { TaskItem } from './task-item/TaskItem';

export const TaskList = ({tasks}) => {

  return (
    <div>
      {
        tasks.map((task) => <TaskItem key={tasks.id} {...task} />)
      }
    </div>
  );
};