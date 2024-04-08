import { User } from "@/app/lib/types";
import { getUserAddress } from "@/app/lib/utils";
import { Box, Typography } from "@mui/material";

async function getData(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UserProfile({ id }: { id: string }) {
  const { name, email, phone, address } = await getData(id);
  return (
    <>
      <Typography variant="h5" fontWeight="bold" color="primary">{name}</Typography>
      <Box paddingTop={1}>
        <Typography variant="caption">Email</Typography>
        <Typography>{email}</Typography>
        <Typography variant="caption">Phone</Typography>
        <Typography>{phone}</Typography>
        <Typography variant="caption">Address</Typography>
        <Typography>{getUserAddress(address)}</Typography>
      </Box>
    </>
  );
}
