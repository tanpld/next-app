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
    <Stack direction="row" spacing={2}>
      <Card sx={{ padding: 2, width: 300 }}>
        <UserProfile id={params.id} />
      </Card>
      <Card sx={{ padding: 2, flexGrow: 1 }}>
        <UserTabs>{children}</UserTabs>
      </Card>
    </Stack>
  );
}
