import { createSlice, nanoid } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
    name : "Task_State",
    
    initialState : {
        tasks : [],
        task_Status : 'all'
    },

    reducers : {
        Add_Task : {
        reducer : (state, action) => {
            state.tasks.push(action.payload);
            
        },
        prepare : (text) => {   
            return {
                payload : {
                    id : nanoid(),
                    text,
                    completed : false }
                }
            }
        },

        Done_Task : (state, action) => {
            const Task_id = action.payload;   
            const tasks = state.tasks.find((data) => data.id == Task_id );
            if(tasks)  tasks.completed = !tasks.completed;            
        },

        Delete_Task : (state, action) => {
            const Task_id = action.payload;
            state.tasks = state.tasks.filter(data => data.id !== Task_id);
        },

        filterTask : (state, action) => {
            state.task_Status = action.payload;
        }    
    }
});

export const {Add_Task, Done_Task, Delete_Task, filterTask} = TaskSlice.actions;
export default TaskSlice.reducer;