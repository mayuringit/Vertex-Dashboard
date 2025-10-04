import { useState, useEffect } from "react";
import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Menu as MenuIcon, Home as HomeIcon, Settings as SettingsIcon } from "@mui/icons-material";

const drawerWidth = 240;
const collapsedWidth = 60;
function Sidebar() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [sidebarOpen, setSidebarOpen] = useState(true);
    useEffect(() => {
        if (isSmallScreen) {
            setSidebarOpen(false);
        } else {
            setSidebarOpen(true);
        }
    }, [isSmallScreen]);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <Box
            component="nav"
            sx={{
                width: sidebarOpen ? drawerWidth : collapsedWidth,
                flexShrink: 0,
                bgcolor: 'background.paper',
                borderRight: 1,
                borderColor: 'divider',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'width 0.3s',
                overflowX: 'hidden',
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: sidebarOpen ? 'space-between' : 'center',
                    px: 2,
                    minHeight: '60px !important',
                }}
            >
                {sidebarOpen && <Typography variant="h6">Vertex</Typography>}
                <IconButton onClick={toggleSidebar} size="small">
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            <List sx={{ flexGrow: 1 }}>
                <ListItem button>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    {sidebarOpen && <ListItemText primary="Home" />}
                </ListItem>
                <ListItem button>
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    {sidebarOpen && <ListItemText primary="Settings" />}
                </ListItem>
            </List>
        </Box>
    );
}

export default Sidebar;