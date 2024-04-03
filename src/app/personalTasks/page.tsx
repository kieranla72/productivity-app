import { getPersonalTasks } from "@/api/personalTasks";
import PersonalTasks from "./personalTasks";

const PersonalTasksPage = async () => {
  const personalTasks = await getPersonalTasks();

  return (
    <div>
      <PersonalTasks personalTasks={personalTasks} />
    </div>
  );
};

export default PersonalTasksPage;
