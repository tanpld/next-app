import UserProfile from "@/app/ui/dashboard/users/user-profile";
import UserTabs from "@/app/ui/dashboard/users/user-tabs";
import { Card, Stack } from "@mui/material";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { ReactNode } from "react";

export default function UserTabsLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Params;
}) {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
      <Card sx={{ width: { xs: 'unset', sm: 300 } }}>
        <UserProfile id={params.id} />
      </Card>
      <Card sx={{ flexGrow: 1 }}>
        <UserTabs>{children}</UserTabs>
      </Card>
    </Stack>
  );
}
