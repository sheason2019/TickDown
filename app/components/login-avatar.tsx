import { Avatar, Button } from "@mui/material";

export default function LoginAvatar() {
  const isLogin = false;

  if (isLogin) {
    return <Avatar />;
  }

  return (
    <Button
      variant="outlined"
      sx={{ color: "inherit", borderColor: "inherit" }}
      href="/login"
    >
      登录
    </Button>
  );
}
