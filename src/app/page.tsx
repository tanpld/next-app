import { Box, Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Box p={3} margin="0 auto" width="fit-content">
        <Link href={"dashboard"}>
          <Button variant="contained">Dashboard</Button>
        </Link>
      </Box>
    </main>
  );
}
