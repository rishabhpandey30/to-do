import { formatDate } from "../utils/Date";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import { useState } from "react";
const Task = ({task : incomingTask}) => {
  const {title, description, createdDate , taskId} =  incomingTask;
    const {deleteTask ,editTask}= useContext(TaskContext);
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(incomingTask); 

    let handleInputChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,

        });
    };

    if(isEditing){
       return (
  <div className="card">
    <div className="content">
       <div className="ui form">
             <div className="field">
    <input type="text" spellCheck={false} data-ms-editor={true} placeholder="Task Title" name="title" onChange={handleInputChange} value={task.title}/>
  </div>
      <div className="meta">{formatDate(createdDate)}</div>
       <div className="field">
    <textarea rows="2" spellCheck={false} data-ms-editor={true} placeholder="Enter task description" name="description" onChange={handleInputChange} value={task.description}></textarea>
  </div>
    </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button" onClick={()=>{editTask(task); setIsEditing(false);}}>Save</div>
        <div className="ui basic red button" onClick={()=> setIsEditing(false)}>Cancel</div>
      </div>
    </div>
  </div>
    );

    }
    else{
    return (
  <div className="card">
    <div className="content">
      <div className="header">
        {title}
      </div>
      <div className="meta">{formatDate(createdDate)}</div>
      <div className="description">
        {description}
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button" onClick={()=> setIsEditing(true)}>Edit</div>
        <div className="ui basic red button" onClick={()=> deleteTask(taskId)}>Delete</div>
      </div>
    </div>
  </div>
    );
  }
}
export default Task;