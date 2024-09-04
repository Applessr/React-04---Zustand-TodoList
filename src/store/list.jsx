import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const list = (set) => ({
    tasks: [
        {id: 1, title: 'Learn english'},
        {id: 2, title: 'Do homework'},
        {id: 3, title: 'Feed cat'},
    ],
    addTask: (newValue) => set((task)=>({
    tasks: [...task.tasks, {id: Date.now(), title: newValue, isCompleted: false}]
})),
    delTask: (id) => set((state)=> ({
        tasks: state.tasks.filter(item => item.id !== id)
    })),
    toggleCom: (id) => set((state) => ({
        tasks: state.tasks.map(task => 
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        )
    })),
    editTask: (id, newTitle) => set((state) => ({
        tasks: state.tasks.map(task =>
            task.id === id ? { ...task, title: newTitle } : task
        )
    }))
})


const usePersist = {
    name: 'list', 
    getStorage: () => localStorage, 
    partialize: (state) => ({
      tasks: state.tasks,
    })
  };
  
  const useStore = create(persist(list, usePersist));

export default useStore
