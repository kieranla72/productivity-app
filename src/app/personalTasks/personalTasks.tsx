"use client";

import { PersonalTask } from "@/api/personalTasks";

type PersonalTaskProps = {
  personalTasks: PersonalTask[];
};

const PersonalTasks = ({ personalTasks }: PersonalTaskProps) => {
  return (
    <>
      {personalTasks.map((personalTask) => (
        <div key={personalTask.id}>{personalTask.title}</div>
      ))}
    </>
  );
};

export default PersonalTasks;
