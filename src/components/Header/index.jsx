import logo from "../../assets/logo.png";
import { Box, Button } from "@mui/material";

export default function Header({ setPage, page }) {
  return (
    <Box sx={{ display: "flex", alignItems: 'center', gap: '50px' }}>
      <img style={{ width: "200px" }} src={logo} alt="logo" />
    </Box>
  );
}
