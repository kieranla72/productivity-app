"use client";

import { PersonalTask } from "@/api/personalTasks";
import { Box, List, ListItem, Typography } from "@mui/material";

type PersonalTaskProps = {
  personalTasks: PersonalTask[];
};

const PersonalTasks = ({ personalTasks }: PersonalTaskProps) => {
  return (
    <>
      <Typography variant="h1" sx={{ fontSize: 40 }}>
        Personal tasks
      </Typography>
      <List>
        {personalTasks.map((personalTask) => (
          <ListItem key={personalTask.id}>
            <Box>
              <Typography>{`Title: ${personalTask.title}`}</Typography>
              <Typography>{`Description: ${
                personalTask.description ?? "No description provided"
              }`}</Typography>
              <Typography>
                {`Date: ${new Date(personalTask.date).toDateString()}`}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default PersonalTasks;
