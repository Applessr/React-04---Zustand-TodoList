import { useState } from 'react';
import useStore from '../store/list';
import AddInput from './Addinput';
import TaskList from './TaskList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoList() {
  const { tasks } = useStore((state) => ({
    tasks: state.tasks,
  }));


  const unComTasks = tasks.filter(task => !task.isCompleted).length;

  return (
    <div className='border bg-[#1B1B1E] text-[#D8DBE2] w-[40%] mt-12 flex flex-col p-3 mx-auto rounded-xl'>
      <h1 className='text-center text-2xl m-2 font-semibold'>
        Todo list : {new Date().toDateString()}
      </h1>
      <p className='flex justify-end mr-3 text-[18px]'>
        Uncompleted: {unComTasks}
      </p>
      <AddInput />
      <TaskList />
      <ToastContainer />
    </div>
  );
}

export default TodoList;
