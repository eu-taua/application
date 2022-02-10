import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import CharacterModal from "../components/Modal";

export default function Home() {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState();
  const [openModal, setOpenModal] = useState();
  const handleCloseModal = () => setOpenModal();

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
    console.log(page);
  };

  const handleNextPage = () => {
    if (page < 149) setPage(page + 1);
    console.log(page);
  };

  useEffect(async () => {
    try {
      const response = await fetch(
        `https://api.disneyapi.dev/characters${
          page === 1 ? "" : `?page=${page}`
        }`
      );
      const result = await response.json();
      setCharacters(Array.from(result.data));
      console.log(result.data[10]);
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  return (
    <div className="App">
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"50px"}
      >
        <Header setPage={setPage} page={page} />
      </Box>
      <Box>
        <Box display={"flex"} position={"fixed"} top={"50%"} left={"2%"}>
          <Button
            sx={{
              borderRadius: "50%",
              padding: "2rem",
              backgroundImage:
                "linear-gradient(to bottom right,rgb(118, 208, 192, 0.2), rgb(26, 178, 138, 0.9))",
              backgroundColor: "transparent",
            }}
            variant="contained"
            disabled={page === 1}
            onClick={handlePreviousPage}
          >
            <ChevronLeftOutlinedIcon fontSize="large" />
          </Button>
        </Box>

        <Box display={"flex"} position={"fixed"} top={"50%"} right={"2%"}>
          <Button
            sx={{
              borderRadius: "50%",
              padding: "2rem",
              backgroundImage:
                "linear-gradient(to bottom right,rgb(118, 208, 192, 0.2), rgb(26, 178, 138, 0.9))",
              border: "5px black blur",
              backgroundColor: "transparent",
            }}
            variant="contained"
            disabled={page === 149}
            onClick={handleNextPage}
          >
            <ChevronRightOutlinedIcon fontSize="large" />
          </Button>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={"20px"}
        margin={"50px"}
      >
        {characters &&
          characters.map((char) => (
            <Card
              key={char._id}
              char={char}
              openModal={openModal}
              setOpenModal={setOpenModal}
              handleCloseModal={handleCloseModal}
            />
          ))}
      </Box>
      <CharacterModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
}
