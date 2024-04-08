import { Card, Grid, Stack, Typography } from "@mui/material";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

async function getPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getComments(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?userId=${userId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UserSummary({ params }: { params: Params }) {
  const posts = await getPosts(params.id);
  const comments = await getComments(params.id);

  return (
    <Grid container spacing={2} pt={2}>
      <Grid item xs={6}>
        <Card variant="outlined">
          <Typography>Posts</Typography>
          <Typography variant="h5">{posts.length}</Typography>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card variant="outlined">
          <Typography>Comments</Typography>
          <Typography variant="h5">{comments.length}</Typography>
        </Card>
      </Grid>
    </Grid>
  );
}
