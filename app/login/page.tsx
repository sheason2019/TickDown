"use client";

import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import sendLoginCode from "../api/services/login/send-login-code";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [lock, setLock] = useState(new Date());
  const [curTime, setCurTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const lockSec = Math.max(
    Math.floor((lock.getTime() - curTime.getTime()) / 1000),
    0
  );

  const handleSendLoginCode = async () => {
    await sendLoginCode(phone);
    const now = new Date();
    const lockTime = new Date(now.getTime() + 60 * 1000);
    setLock(lockTime);
  };

  return (
    <>
      <div className="flex-1 bg-gray-100" />
      <Container
        maxWidth="xs"
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translateY(-50%) translateX(-50%)",
        }}
      >
        <Paper sx={{ p: 3 }}>
          <Stack alignItems="center" spacing={2}>
            <Typography variant="h5">用户登录</Typography>
            <TextField
              fullWidth
              variant="standard"
              placeholder="手机号码"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              fullWidth
              variant="standard"
              placeholder="短信验证码"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        id="send-login-code"
                        disabled={lockSec > 0}
                        onClick={handleSendLoginCode}
                      >
                        获取验证码{lockSec > 0 && <span>（{lockSec}）</span>}
                      </Button>
                    </InputAdornment>
                  ),
                },
              }}
            />
            <Box sx={{ width: "100%" }}>
              <Button fullWidth variant="contained" sx={{ mt: 2 }}>
                登录
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </>
  );
}
