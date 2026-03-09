import React from "react";

export const TicketCard = ({ ticket, progress, setProgress }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;
  return (
    <div onClick={() => setProgress(progress + 1)} className='rounded-md shadow-lg p-8 space-y-2'>
      <div className='flex justify-between'>
        <h2>{title}</h2>
        <p className='px-2 bg-red-300'>{status}</p>
      </div>
      <p>{description}</p>
      <div className='flex justify-between '>
        <div className="flex justify-between gap-4">
          <p>#100{id}</p>
          <p>{priority}</p>
        </div>
        <div className="flex justify-between gap-4">
            <p>{customer}</p>
        <p>{createdAt}</p>
        </div>
      </div>
    </div>
  );
};
