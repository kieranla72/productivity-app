export interface PersonalTask {
  id: string;
  title: string;
  description: string;
  date: string;
}

export const getPersonalTasks = async (): Promise<PersonalTask[]> => {
  const url = `http://localhost:5005/personalTasks`;
  const personalTasks = await fetch(url, { method: "GET" });
  if (personalTasks.status !== 200) {
    throw "There was an error";
  }
  return await personalTasks.json();
};
