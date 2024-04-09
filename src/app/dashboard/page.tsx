import { OpenInBrowser, OpenInNew } from "@mui/icons-material";
import {
  Card,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";

async function getPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Dashboard() {
  const posts = await getPosts();
  const users = await getUsers();

  return (
    <div>
      <Typography variant="h5" color="primary" fontWeight="bold" mb={1}>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card variant="outlined">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography>Users</Typography>
              <Tooltip title="View">
                <IconButton LinkComponent={Link} href="dashboard/users">
                  <OpenInNew />
                </IconButton>
              </Tooltip>
            </Stack>
            <Typography variant="h5" color="primary" fontWeight="bold">
              {users.length}
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card variant="outlined">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography>Posts</Typography>
              <Tooltip title="View">
                <IconButton LinkComponent={Link} href="dashboard/posts">
                  <OpenInNew />
                </IconButton>
              </Tooltip>
            </Stack>

            <Typography variant="h5" color="primary" fontWeight="bold">
              {posts.length}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
