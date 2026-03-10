import React, { use } from "react";
import { TicketCard } from "../TicketCard/TicketCard";

export const CustomerTicket = ({ fetchPromise,progress, setProgress, taskStatus, setTaskStatus }) => {
  const customerTicketList = use(fetchPromise);
//   console.log(customerTicketList);

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      {customerTicketList.map((ticket) => (
        <TicketCard setTaskStatus={setTaskStatus} taskStatus={taskStatus} progress={progress} setProgress={setProgress} key={ticket.id} ticket={ticket}></TicketCard>
      ))}
    </div>
  );
};
