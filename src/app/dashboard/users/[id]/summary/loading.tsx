import { Card, Grid, Skeleton, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={6}>
        <Card sx={{ p: 2 }}>
          <Typography>Posts</Typography>
          <Skeleton />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ p: 2 }}>
          <Typography>Comments</Typography>
          <Skeleton />
        </Card>
      </Grid>
    </Grid>
  );
}
