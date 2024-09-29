import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QuizIcon from "@mui/icons-material/Quiz";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Add logout logic here (like clearing auth tokens)
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#0f172a" }}> {/* Dark background */}
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}> {/* Hide buttons on small screens */}
            <Button
              color="inherit"
              startIcon={<DashboardIcon />}
              onClick={() => navigate("/admin/dashboard")}
            >
              Dashboard
            </Button>

            <Button
              color="inherit"
              startIcon={<QuizIcon />}
              onClick={() => navigate("/admin/quizzes")}
            >
              Quizzes
            </Button>

            <Button
              color="inherit"
              startIcon={<PeopleIcon />}
              onClick={() => navigate("/admin/users")}
            >
              Users
            </Button>

            <Button
              color="inherit"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>

          {/* Dropdown menu for smaller screens */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuItem onClick={() => navigate("/admin/dashboard")}>
              <DashboardIcon sx={{ marginRight: 1 }} />
              Dashboard
            </MenuItem>
            <MenuItem onClick={() => navigate("/admin/quizzes")}>
              <QuizIcon sx={{ marginRight: 1 }} />
              Quizzes
            </MenuItem>
            <MenuItem onClick={() => navigate("/admin/users")}>
              <PeopleIcon sx={{ marginRight: 1 }} />
              Users
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <LogoutIcon sx={{ marginRight: 1 }} />
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AdminNavbar;
