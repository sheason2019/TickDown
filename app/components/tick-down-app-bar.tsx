import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Search } from "@mui/icons-material";
import LoginAvatar from "./login-avatar";

export default function TickDownAppBar() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="回到首页"
            edge="start"
            sx={{ mr: 2 }}
            href="/"
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" sx={{ my: 2 }}>
            TickDown
          </Typography>
          <Box sx={{ flex: 1 }} />
          <IconButton
            color="inherit"
            aria-label="启动搜索栏"
            edge="start"
            sx={{ mr: 2 }}
          >
            <Search />
          </IconButton>
          <LoginAvatar />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
