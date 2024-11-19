import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import TickDownAppBar from "./components/tick-down-app-bar";

export const metadata: Metadata = {
  title: "TickDown",
  description: "简单、清晰、强大的时间管理应用",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cn">
      <CssBaseline />
      <body className="antialiased">
        <TickDownAppBar />
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
