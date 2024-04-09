import { DeletePostButton } from "@/app/ui/dashboard/posts/buttons";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import {
  Button,
  Card,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

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

async function Author({ id }: { id: string }) {
  const author = await getAuthor(id);
  return (
    <Link href={`users/${id}`}>
      <Typography color="primary">{author?.name}</Typography>
    </Link>
  );
}

export default async function Posts() {
  const data = await getData();

  return (
    <div>
      <Typography variant="h5" color="primary" fontWeight="bold" mb={1}>
        Posts
      </Typography>
      <Stack alignItems="flex-end" mb={2}>
        <Button variant="contained" LinkComponent={Link} href="posts/create">
          Add new
        </Button>
      </Stack>
      <Card sx={{ overflow: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>
                  <Author id={item.userId} />
                </TableCell>
                <TableCell>
                  <Stack direction="row">
                    <IconButton
                      size="small"
                      LinkComponent={Link}
                      href={`posts/${item.id}`}
                      color="primary"
                    >
                      <Visibility />
                    </IconButton>
                    <IconButton
                      size="small"
                      LinkComponent={Link}
                      href={`posts/${item.id}/edit`}
                      color="primary"
                    >
                      <Edit />
                    </IconButton>
                    <DeletePostButton id={item.id} />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
