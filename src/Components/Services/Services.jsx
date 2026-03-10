import React, { Suspense } from "react";
import { CustomerTicket } from "../CustomerTicket/CustomerTicket";
import { TaskStatus } from "../TaskStatus/TaskStatus";

const fetchTickets = async () => {
  const res = await fetch("/service.json");
  return res.json();
};

const fetchPromise = fetchTickets();
export const Services = ({progress,setProgress, taskStatus, setTaskStatus}) => {
  return (
    <div className="flex max-w-7xl mx-auto mt-10 w-70%">
      {/*customer ticket  */}
      <div>
        <h2 className="text-2xl font-semibold">Customer Tickets</h2>
        <Suspense
          fallback={<span className='loading loading-bars loading-xl'></span>}
        >
          <CustomerTicket setTaskStatus={setTaskStatus} taskStatus={taskStatus} progress={progress} setProgress={setProgress} fetchPromise={fetchPromise}></CustomerTicket>
        </Suspense>
      </div>
      {/* task status */}
      <div className="w-30%">
        <h2>Task Status</h2>
        <TaskStatus/>
      </div>
    </div>
  );
};
