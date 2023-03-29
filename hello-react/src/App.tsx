import React from "react";
import TaskCard from "./TaskCard";

const App = () => {
  return (
    <div className="p-10">
      <div>
        <h1 className="text-3xl font-bold">Smarter Tasks</h1>
        <p className="pb-5">Project: Graduation Final Year Project (Revamp College Website)</p>
      </div>
      <div className="flex gap-10">
        <div className="border-2 rounded-xl px-5 pb-5">
          <h1 className="text-xl font-bold text-center py-2">Pending</h1>
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
        <div className="border-2 rounded-xl px-5 pb-5">
          <h1 className="text-xl font-bold text-center py-2">Done</h1>
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
    </div>
  );
}

export default App;
