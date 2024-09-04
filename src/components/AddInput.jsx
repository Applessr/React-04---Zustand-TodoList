import {useState} from 'react'
import useStore from '../store/list';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


function AddInput() {
    const [text, setText] = useState('')

    const { addTask } = useStore((state) => ({
        addTask: state.addTask,
    }));

    const hdlChang = (e) => {
        setText(e.target.value);
    };
    const hdlClick = () => {
        if (text.trim()) {
            addTask(text);
            setText('');
            toast(`${text} added to Todo list`);
        } else {
            toast.error('Please enter a task');
        }
    };

    return (
        <div>
            <div className='flex gap-1 justify-center'>
                <input
                    className='border p-2 rounded-md w-[82%] text-[#1B1B1E]'
                    type="text"
                    value={text}
                    onChange={hdlChang}
                />
                <button
                    className='bg-[#58A4B0] p-2 w-[15%] rounded-md font-semibold hover:bg-[#58a4b092]'
                    onClick={hdlClick}
                >
                    ADD
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}

export default AddInput;
