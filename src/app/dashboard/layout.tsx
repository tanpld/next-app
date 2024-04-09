"use client";

import Logo from "@/app/favicon.ico";
import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import Sidenav from "../ui/dashboard/sidenav";

const drawerWidth = 220;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleToggleDrawer = () => {
    setDrawerOpen((open) => !open);
  };

  return (
    <Stack direction="row">
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        <Stack justifyContent="center" alignItems="center">
          <Box padding={2}>
            <Image src={Logo} alt={"logo"} height={100} />
          </Box>
          <Sidenav onSelect={() => setDrawerOpen(false)}/>
        </Stack>
      </Drawer>

      {/* Mobile */}
      <Drawer
        variant="temporary"
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Stack justifyContent="center" alignItems="center">
          <Box padding={2}>
            <Image src={Logo} alt={"logo"} height={100} />
          </Box>
          <Sidenav onSelect={() => setDrawerOpen(false)} />
        </Stack>
      </Drawer>

      <Box
        flex={1}
        sx={{
          marginLeft: { xs: "0px", sm: `${drawerWidth}px` },
          p: 3,
          flexGrow: 1,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <IconButton
          onClick={handleToggleDrawer}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <Menu />
        </IconButton>
        {children}
      </Box>
    </Stack>
  );
}
