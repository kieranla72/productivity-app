"use client";

import { PersonalTask } from "@/api/personalTasks";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Modal,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { TaskCard } from "../ui/taskCard/taskCard";
import { useState } from "react";

type PersonalTaskProps = {
  personalTasks: PersonalTask[];
};

const PersonalTasks = ({ personalTasks }: PersonalTaskProps) => {
  const theme = useTheme();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Modal open={showModal}>
        <Typography>Hello there</Typography>
      </Modal>
      <Typography variant="h1" sx={{ fontSize: 40 }}>
        Personal tasks
      </Typography>
      <List>
        {personalTasks.map(({ id, title, description, date }) => (
          <ListItem key={id}>
            <TaskCard
              id={id}
              title={title}
              description={description}
              date={date}
              setShowModal={setShowModal}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default PersonalTasks;
