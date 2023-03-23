import React, { useState } from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { GrUpdate } from "react-icons/gr";
import UpdateForm from "./updateForm";
const TaskDetails = ({ task, tasks, setTasks, indx }) => {
  const [update, setUpdate] = useState(false);
  const handleDelete = (indx) => {
    let newArr = tasks.filter((task, index) => {
      return index != indx;
    });
    setTasks([...newArr]);
  };
  const setHandleUpdate = (indx, update) => {
    setUpdate(!update);

  };
  return (
    <>
      <div className="TaskDetails">
        {!update ? (
          <>
            <div className="textContainer">
              <h4>{task}</h4>
            </div>
            <div className="Settings">
              <button title="Update">
                <GrUpdate
                  onClick={() => setHandleUpdate(indx, update)}
                />
              </button>
              <button title="Delete">
                <FcDeleteDatabase
                  size={20}
                  onClick={() => handleDelete(indx)}
                />
              </button>
            </div>
          </>
        ) : (
          <UpdateForm
            indx={indx}
            update={update}
            setUpdate={setUpdate}
            tasks={tasks}
            setTasks={setTasks}
          />
        )}
      </div>
    </>
  );
};

export default TaskDetails;
