import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Movies", path: "/movies" },
  { title: "Books", path: "/books" },
];


const navStyles = {
  color: "inherit",
  typography: "h6",
  textDecoration: "none",
  "&:hover": {
    color: "secondary.main",
  },
  "&:active": {
    color: "text.secondary",
  },
};


function Header() {

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: '#1e283b' }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6">FLIPTREND</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
        <List sx={{ display: "flex" }}>
          {navLinks.map(({title, path}) => (
            <ListItem key={path} component={Link} to={path} sx={navStyles}>
             {title}
            </ListItem>
          ))}
        </List>
        <Link to='/login'>
          <Button variant="contained">Login</Button>
        </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;