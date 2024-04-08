import { Comment, Post } from "@/app/lib/types";
import { SpeakerNotes } from "@mui/icons-material";
import { Card, Divider, Grid, Icon, Stack, Typography } from "@mui/material";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getComments(id: string): Promise<Comment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getAuthor(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PostDetails({ params }: Params) {
  const post = await getPost(params.id);
  const comments = await getComments(params.id);
  const author = await getAuthor(post.userId);

  return (
    <Stack spacing={2}>
      <Grid container justifyContent="space-between">
        <Grid item xs={9} pr={2}>
          <Stack spacing={2}>
            <Typography variant="h5" fontWeight="bold" color="primary">
              {post.title}
            </Typography>
            <Typography>{post.body}</Typography>
          </Stack>
        </Grid>

        <Grid item xs={3}>
          <Card elevation={0} sx={{ backgroundColor: "#e0f2fe" }}>
            <Stack>
              <Typography>About the author</Typography>
              <Link href={`/dashboard/users/${author.id}`}>
                <Typography fontWeight="bold">{author.name}</Typography>
              </Link>
              <Typography variant="caption">{author.email}</Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>

      <Divider />

      <Stack direction="row" alignItems="center" spacing={1}>
        <Icon color="primary">
          <SpeakerNotes />
        </Icon>
        <Typography color="primary">Comments</Typography>
      </Stack>

      <Stack spacing={1} mt={1}>
        {comments.map((c) => (
          <Card key={c.id}>
            <Typography variant="caption">{c.email} said:</Typography>
            <Typography fontWeight="bold">{c.name}</Typography>
            <Typography>{c.body}</Typography>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}
