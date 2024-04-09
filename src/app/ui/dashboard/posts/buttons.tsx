import { deletePost } from "@/app/lib/action";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export function DeletePostButton({ id }: { id: string }) {
  const deletePostWithId = deletePost.bind(null, id);

  return (
    <form action={deletePostWithId}>
      <IconButton color="primary" size="small" type="submit">
        <Delete />
      </IconButton>
    </form>
  );
}
