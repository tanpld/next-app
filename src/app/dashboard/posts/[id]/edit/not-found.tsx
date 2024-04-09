import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Stack
      alignItems="center"
      height="100vh"
      justifyContent="center"
      spacing={2}
    >
      <Typography variant="h5" fontWeight="bold">Post Not Found</Typography>
      <Button LinkComponent={Link} href="/dashboard/posts" variant="contained">
        Go Back
      </Button>
    </Stack>
  );
}
