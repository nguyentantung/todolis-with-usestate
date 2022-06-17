import { useState } from "react";
import "./App.css";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);
  const handleSetJob = (e) => {
    setJob(e.target.value);
  };
  const handleAddJobs = () => {
    setJobs([...jobs, job]);
    setJob("");
  };
  const deleteJob = (index) => {
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
    setJobs(newJobs);
  };
  console.log(jobs);
  return (
    <div className="App">
      <div className="toDOList">
        <div className="setTask">
          <input value={job} onChange={handleSetJob} placeholder="Nhập task" />
          <button onClick={handleAddJobs}>Nhập</button>
        </div>
        <div className="listTasks">
          <ul>
            {jobs.map((value, index) => {
              return (
                <li key={index}>
                  <span>{value}</span>
                  <span
                    onClick={() => deleteJob(index)}
                    style={{ cursor: "pointer", paddingLeft: "10px" }}
                  >
                    x
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
