import React, { useState } from "react";
import TaskDetails from "./TaskDetails";
import {GoTasklist} from "react-icons/go"
import UpdateForm from "./updateForm";
const TaskCard = ({ tasks, setTasks }) => {
  return (
    <div className="TaskCard">
      {tasks?.length != 0 ? (
        <>
          {tasks?.map((task, indx) => (
            <div className="TaskContainer" key={indx}>
              <TaskDetails
                task={task}
                tasks={tasks}
                setTasks={setTasks}
                indx={indx}
              />
            </div>
          ))}
        </>
      ) : (
        <div className="message-alert">
          <p>Currently You Don't Have Tasks   <GoTasklist className="icon" size={25}/></p>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
