import { Visibility } from "@mui/icons-material";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Card,
  IconButton,
} from "@mui/material";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";

async function getPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UserPosts({ params }: {params: Params}) {
  const posts = await getPosts(params.id);

  return (
    <Card sx={{ p: 0, mt: 2 }} variant="outlined">
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>
                <IconButton
                  LinkComponent={Link}
                  href={`/dashboard/posts/${item.id}`}
                  color="primary"
                >
                  <Visibility />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
