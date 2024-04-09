import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFoundUI({
  title,
  actionHref,
}: {
  title: string;
  actionHref: string;
}) {
  return (
    <Stack
      alignItems="center"
      height="100vh"
      justifyContent="center"
      spacing={2}
    >
      <Typography variant="h5" fontWeight="bold">
        {title}
      </Typography>
      <Button LinkComponent={Link} href={actionHref} variant="contained">
        Go Back
      </Button>
    </Stack>
  );
}
