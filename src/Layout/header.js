// src/layout/Header.jsx
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useThemeMode } from '../Context/ThemeContext';

function Header() {
    const theme = useTheme();
    const { toggleTheme } = useThemeMode();

    return (
        <AppBar
            position="static"
            color="transparent"
            elevation={0}
            sx={{ borderBottom: '1px solid', borderColor: 'divider', height: '60px' }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', height: '60px' }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Vertex Dashboard 
                    {/* need to add log */}
                </Typography>
                <IconButton onClick={toggleTheme} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
