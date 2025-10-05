import { useState, useEffect } from "react";
import { Box, IconButton, List, ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery, useTheme, ListItemButton, } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import sidebarLinks from "./sidebarLinks";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;
const collapsedWidth = 60;

function Sidebar() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [sidebarOpen, setSidebarOpen] = useState(true);
    useEffect(() => {
        if (isSmallScreen) {
            setSidebarOpen(false);
        } else {
            setSidebarOpen(true);
        }
    }, [isSmallScreen]);
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const role = user.role || "guest";
    const links = sidebarLinks[role] || sidebarLinks.guest;
    const toggleSidebar = () => setSidebarOpen((open) => !open);

    return (
        <Box
            component="nav"
            sx={{
                width: sidebarOpen ? drawerWidth : collapsedWidth,
                flexShrink: 0,
                bgcolor: "background.paper",
                borderRight: 1,
                borderColor: "divider",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                transition: "width 0.3s",
                overflowX: "hidden",
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: sidebarOpen ? "space-between" : "center",
                    px: 2,
                    minHeight: "60px !important",
                }}
            >
                {sidebarOpen && <Typography variant="h6">Vertex</Typography>}
                <IconButton onClick={toggleSidebar} size="small" aria-label="Toggle sidebar">
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            <List sx={{ flexGrow: 1 }}>
                {links.map(({ label, path, icon }) => (
                    <ListItemButton
                        key={path}
                        component={NavLink}
                        to={path}
                        sx={{
                            "&.active": {
                                bgcolor: theme.palette.action.selected,
                                "& .MuiListItemIcon-root": {
                                    color: theme.palette.primary.main,
                                },
                            },
                            px: sidebarOpen ? 2 : 1,
                            justifyContent: sidebarOpen ? "initial" : "center",
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: sidebarOpen ? 2 : "auto",
                                justifyContent: "center",
                            }}
                        >
                            {icon}
                        </ListItemIcon>
                        {sidebarOpen && <ListItemText primary={label} />}
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
}

export default Sidebar;