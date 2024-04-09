"use client";
import { TabContext, TabList } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const Tabs = [
  {
    label: "Summary",
    value: "summary",
  },
  {
    label: "Posts",
    value: "posts",
  },
];

export default function UserTabs({ children }: { children: ReactNode }) {
  const [value, setValue] = useState("");
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(`/dashboard/users/${params.id}/${newValue}`);
  };

  useEffect(() => {
    const tabValues = Tabs.map((t) => t.value);
    const tabName = pathname.slice(pathname.lastIndexOf("/") + 1);

    let tab = "";
    if (tabValues.includes(tabName)) {
      tab = tabName;
    } else {
      tab = Tabs[0].value;
    }

    setValue(tab);
    router.push(`/dashboard/users/${params.id}/${tab}`);
  }, [params.id, pathname, router]);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {Tabs.map((t) => (
              <Tab key={t.value} label={t.label} value={t.value} />
            ))}
          </TabList>
        </Box>
        {children}
      </TabContext>
    </Box>
  );
}
