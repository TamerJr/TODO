import React, { useState } from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const UpdateForm = ({ tasks, setTasks, indx ,update,setUpdate }) => {
  const [varUpdate, setVarUpdate] = useState("");
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    let tmpArr = tasks;
    tmpArr[indx] = varUpdate;
    setTasks([...tmpArr]);
    setUpdate(!update)
    
  };

  return (
    <form onSubmit={handleUpdateSubmit}>
      <input type="text" defaultValue={tasks[indx]} onChange={(e) => setVarUpdate(e.target.value)} />
      <button type="submit">
        <VscWorkspaceTrusted />
      </button>
    </form>
  );
};

export default UpdateForm;
