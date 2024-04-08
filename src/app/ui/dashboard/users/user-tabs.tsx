"use client";
import { TabContext, TabList } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function UserTabs({ children }: { children: ReactNode }) {
  const [value, setValue] = useState("summary");
  const params = useParams();
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    router.replace(`/dashboard/users/${params.id}/${value}`);
  }, [params.id, router, value]);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Summary" value="summary" />
            <Tab label="Posts" value="posts" />
          </TabList>
        </Box>
        {children}
      </TabContext>
    </Box>
  );
}
