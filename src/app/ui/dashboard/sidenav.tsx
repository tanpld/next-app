"use client";

import { Home, People, Receipt } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/dashboard", icon: Home },
  {
    name: "Posts",
    href: "/dashboard/posts",
    icon: Receipt,
  },
  { name: "Users", href: "/dashboard/users", icon: People },
];

export default function Sidenav({ onSelect }: { onSelect: () => void }) {
  const pathname = usePathname();

  return (
    <Box width="100%">
      <List>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link href={link.href} key={link.name} onClick={onSelect}>
              <ListItem
                disablePadding
                sx={{
                  backgroundColor: pathname === link.href ? "#e0f2fe" : "",
                }}
              >
                <ListItemButton>
                  <ListItemIcon
                    sx={{ color: pathname === link.href ? "#2f6feb" : "" }}
                  >
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={link.name}
                    sx={{ color: pathname === link.href ? "#2f6feb" : "" }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );
}
