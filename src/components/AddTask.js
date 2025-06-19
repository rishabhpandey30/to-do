import { useState } from "react";

const AddTask = ({onSubmit}) => {
    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    let handleInputChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,

        });
    };

    let onFormSubmit = (e) => {
        e.preventDefault();
        console.log("Task submitted:", task);
        onSubmit(task);
    };

 return (
    <>
    <h3 className="ui heading center">Add New Task</h3>
    <div className="ui form">
        <form onSubmit={onFormSubmit}>
             <div className="field">
    <label>Title</label>
    <input type="text" spellCheck={false} data-ms-editor={true} placeholder="Task Title" name="title" onChange={handleInputChange} value={task.title}/>
  </div>
        <div className="field">
    <label>Description</label>
    <textarea rows="2" spellCheck={false} data-ms-editor={true} placeholder="Enter task description" name="description" onChange={handleInputChange} value={task.description}></textarea>
  </div>
    <button type="submit" className="ui primary button"> Submit</button>
        </form>
    </div>
    </>
 );
};
export default AddTask;