import { useContext } from "react";
import Task from "../components/Task";
import TaskContext from "../context/TaskContext";
import AddTask from "../components/AddTask";
import { useNavigate } from "react-router-dom";


const ToDOScreen = () => {
    const  { taskList } = useContext(TaskContext);
    const navigate = useNavigate();
    
   return (
    <>
            <div className="screen">
                <h1 className="ui heading center">TO-DO LIST</h1>
                <div>
                    <button onClick={ (e) => {
                        navigate("/add-task");
                    }}
                    className="ui secondary button">Add Task</button>
                    <section>
                    <div className="ui cards">
                       {taskList.map((task) => (
                        <Task task={task} key={task.taskID} />
                ))} 
                    </div>
                    </section>
                </div>
                {/* <AddTask onSubmit={addNewTask} /> */}
            </div>
            
            </>
        );
};
export default ToDOScreen;