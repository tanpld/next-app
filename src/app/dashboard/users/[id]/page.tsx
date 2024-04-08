import { User } from "@/app/lib/types";
import { getUserAddress } from "@/app/lib/utils";
import { Box, Card, Stack, Typography } from "@mui/material";

async function getData(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default async function UserProfile({
  params,
}: {
  params: { id: string };
}) {
  const { name, email, phone, address } = await getData(params.id);

  return (
    <Stack direction="row" spacing={2}>
      <Card sx={{ padding: 2, width: 300 }}>
        <Typography variant="h4">{name}</Typography>
        <Box paddingTop={2}>
          <Typography variant="caption">Email</Typography>
          <Typography>{email}</Typography>
          <Typography variant="caption">Phone</Typography>
          <Typography>{phone}</Typography>
          <Typography variant="caption">Address</Typography>
          <Typography>{getUserAddress(address)}</Typography>
        </Box>
      </Card>

      <Card sx={{ padding: 2, flexGrow: 1 }}>Posts Comments</Card>
    </Stack>
  );
}
