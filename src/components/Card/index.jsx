import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function MediaCard({ char, openModal, setOpenModal }) {
  return (
    <Card
      onClick={() => setOpenModal(char)}
      sx={{
        width: 150,
        backgroundImage: "linear-gradient(to bottom right,#76d0c0, #4a62d8)",

        "&:hover": {
          transform: "scale(1.1, 0.95)",
          cursor: "pointer",
        },
      }}
    >
      <CardMedia
        sx={{ objectFit: "fill", backgroundColor: "#fff" }}
        component="img"
        height="140"
        image={char.imageUrl}
        alt={char.name}
      />
      <CardContent>
        <Typography align="center" gutterBottom variant="h5" component="div">
          {char.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
