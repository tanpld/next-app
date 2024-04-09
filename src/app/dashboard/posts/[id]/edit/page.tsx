import { createPost, updateInvoice } from "@/app/lib/action";
import { Post } from "@/app/lib/types";
import { Stack, Typography, Card, TextField, Button } from "@mui/material";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    notFound();
  }

  return res.json();
}
export default async function EditPost({ params }: { params: { id: string } }) {
  const id = params.id;
  const { title, body } = await getData(id);

  const updatePostWithId = updateInvoice.bind(null, id);

  return (
    <Stack spacing={2}>
      <Typography variant="h5" color="primary" fontWeight="bold">
        Edit Post
      </Typography>
      <form action={updatePostWithId}>
        <Stack spacing={2} component={Card}>
          <TextField label="Title" name="title" defaultValue={title} required/>
          <TextField label="Body" name="body" defaultValue={body} required/>
          <Stack
            spacing={1}
            direction={{ xs: "column", sm: "row" }}
            justifyContent="flex-end"
          >
            <Button LinkComponent={Link} href="/dashboard/posts">
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
}
