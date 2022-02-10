import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Image from "material-ui-image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  backgroundImage: "linear-gradient(to bottom right,#76d0c0, #4a62d8)",
  boxShadow: 24,
  p: 4,
};

export default function CharacterModal({ openModal, handleCloseModal }) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Image color="black" src={openModal && openModal.imageUrl} />
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {openModal && openModal.name}
            </Typography>
            <Box>
              <Box>
                <Typography
                  id="transition-modal-title"
                  variant="span"
                  component="h5"
                >
                  {openModal &&
                    openModal.films.length > 0 &&
                    `Filmes: ${openModal.films.map((movie) => movie)}`}
                </Typography>
              </Box>
              <Box>
                <Typography
                  id="transition-modal-title"
                  variant="span"
                  component="h5"
                >
                  {openModal &&
                    openModal.tvShows.length > 0 &&
                    `Programa de TV: ${openModal.tvShows.map((show) => show)}`}
                </Typography>
              </Box>
              <Box>
                <Typography
                  id="transition-modal-title"
                  variant="span"
                  component="h5"
                >
                  {openModal &&
                    openModal.videoGames.length > 0 &&
                    `Jogos: ${openModal.videoGames.map((game) => game)}`}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
