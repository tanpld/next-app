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

const links = [
  { name: "Home", href: "/dashboard", icon: Home },
  {
    name: "Posts",
    href: "/dashboard/posts",
    icon: Receipt,
  },
  { name: "Users", href: "/dashboard/users", icon: People },
];

export default function Sidenav() {
  return (
    <Box width="100%">
      <List>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link href={link.href} key={link.name}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary={link.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );
}
