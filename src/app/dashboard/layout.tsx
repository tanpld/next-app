import { Box, Drawer, Stack } from "@mui/material";
import Sidenav from "../ui/dashboard/sidenav";
import Logo from "@/app/favicon.ico";
import Image from "next/image";

const drawerWidth = 220;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack direction="row">
      <Drawer
        variant="permanent"
        sx={{
          display: "block",
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        <Stack justifyContent="center" alignItems="center">
          <Box padding={2}>
            <Image src={Logo} alt={"logo"} height={100} />
          </Box>
          <Sidenav />
        </Stack>
      </Drawer>

      <Box
        flex={1}
        sx={{
          marginLeft: `${drawerWidth}px`,
          p: 3,
          flexGrow: 1,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        {children}
      </Box>
    </Stack>
  );
}
