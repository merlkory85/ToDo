import { ControlsBar } from "../controls-bar/ControlsBar";
import { TaskList } from "../task list/TaskList"

export const App = (p) => {
  const tasks = [
    {
      id: 1,
      taskName: 'name1',
      isImportant: false
    },
    {
      id: 2,
      taskName: 'name2',
      isImportant: true
    },
    {
      id: 3,
      taskName: 'name3',
      isImportant: true
    }
  ];

  return (
    <div className={'app'}>
      <ControlsBar />
      <TaskList tasks={tasks} />
    </div>
  );
};