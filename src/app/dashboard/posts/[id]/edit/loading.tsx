import { Card, Skeleton, Stack, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" color="primary" fontWeight="bold">
        Edit Post
      </Typography>
      <Stack spacing={2} component={Card}>
        <Skeleton />
        <Skeleton />
      </Stack>
    </Stack>
  );
}
