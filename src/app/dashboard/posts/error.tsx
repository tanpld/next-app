"use client";

import { Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Stack
      alignItems="center"
      height="100vh"
      justifyContent="center"
      spacing={2}
    >
      <Typography variant="h5" fontWeight="bold">
        Something went wrong!
      </Typography>
      <Button variant="contained" onClick={() => reset()}>
        Try again
      </Button>
    </Stack>
  );
}
