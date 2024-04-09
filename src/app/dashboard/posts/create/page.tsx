import { createPost } from "@/app/lib/action";
import {
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function CreatePost() {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" color="primary" fontWeight="bold">
        Create Post
      </Typography>
      <form action={createPost}>
        <Stack spacing={2} component={Card}>
          <TextField label="Title" name="title" />
          <TextField label="Body" name="body" />
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
