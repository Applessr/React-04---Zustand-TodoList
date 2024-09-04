import React, { useState } from 'react';
import useStore from '../store/list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function TaskList() {
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const { tasks, delTask, editTask, toggleCom } = useStore((state) => ({
        tasks: state.tasks,
        delTask: state.delTask,
        editTask: state.editTask,
        toggleCom: state.toggleCom,
    }));

    const hdlDel = (title, id) => {
        delTask(id);
        toast.success(`${title} deleted successfully`);
    };

    const startEdit = (id, text) => {
        if (!tasks.find(task => task.id === id).isCompleted) {
            setEditId(id);
            setEditText(text);
        }
    };

    const saveEdit = () => {
        if (editText.trim()) {
            editTask(editId, editText);
            setEditId(null);
            setEditText('');
        }
    };

    const clickComplete = (id) => {
        toggleCom(id);
    };

    return (
        <div>
            <ul>
                {tasks.map((item) => (
                    <li
                        className="flex text-[#1B1B1E] justify-between m-2 bg-[#A9BCD0] p-3 rounded-md  "
                        key={item.id}
                    >
                        {editId === item.id 
                        ? (
                            <input
                                className='px-2 border w-[75%] h-8 rounded-md'
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onBlur={saveEdit}
                                autoFocus
                            />
                        ) : (
                            <span
                                 className={`px-2 hover:cursor-pointer hover:text-[#b05858] ${item.isCompleted ? 'line-through' : ''}`}
                                onClick={() => clickComplete(item.id)}
                            >
                                {item.title}
                            </span>
                        )}
                        <div>  
                            {editId === item.id 
                            ? (
                                <button 
                                    className="bg-[#373F51] h-8 w-16 mr-4 rounded-md font-semibold shadow-md text-white hover:bg-[#373f5177]"
                                    onClick={saveEdit}
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    className='text-[#373F51] mr-2 hover:text-[#373f5177]'
                                    onClick={() => startEdit(item.id, item.title)}
                                    disabled={item.isCompleted}
                                >
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </button>
                            )}
                            <button 
                                className='text-[#373F51] mr-2 hover:text-[#8d303077]'
                                onClick={() => hdlDel(item.title, item.id)}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <ToastContainer />
        </div>
    );
}

export default TaskList;