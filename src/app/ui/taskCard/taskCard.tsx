import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

type TaskCardProps = {
  id: string;
  title: string;
  description?: string;
  date?: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export const TaskCard = ({
  id,
  title,
  description,
  date,
  setShowModal,
}: TaskCardProps) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        border: "2px solid",
        width: 300,
        borderColor: theme.palette.primary.main,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography sx={{ display: "inline", fontWeight: "800" }}>
            {title}
          </Typography>
          <Typography
            sx={{
              display: "inline",
              color: theme.palette.text.secondary,
            }}
          >
            {date && new Date(date).toDateString()}
          </Typography>
        </Box>
        <Box>
          <Typography>{description ?? "No description provided"}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button>Delete</Button>
        <Button onClick={() => setShowModal(true)}>Edit</Button>
      </CardActions>
    </Card>
  );
};
