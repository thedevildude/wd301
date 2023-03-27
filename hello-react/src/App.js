import React from "react";
import TaskCard from "./TaskCard";

const App = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Smarter Tasks</h1>
      <div>
        <h1>Pending</h1>
        <div>
          <TaskCard
            title="Build the website using static content"
            dueDate="14th April"
            assigneeName="Rohit S"
          />
          <TaskCard
            title="Add a blog"
            dueDate="22nd March"
            assigneeName="Rohit M"
          />
        </div>
      </div>
      <div>
        <h1>Done</h1>
        <TaskCard
          title="Design the mockup"
          completedAtDate="10th April"
          assigneeName="Rohit M"
        />
        <TaskCard
          title="Get the approval from principal"
          completedAtDate="10th April"
          assigneeName="Rohit M"
        />
      </div>
    </div>
  );
}

export default App;
