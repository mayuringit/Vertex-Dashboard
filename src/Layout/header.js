import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useThemeMode } from '../Context/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';
const getUser = () => {
    try {
        return JSON.parse(localStorage.getItem('user'));
    } catch {
        return null;
    }
};

const logout = () => {
    localStorage.removeItem('user');
};

function Header() {
    const theme = useTheme();
    const { toggleTheme } = useThemeMode();
    const navigate = useNavigate();
    const location = useLocation();

    const user = getUser();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    const hideLogout = location.pathname === '/login' || location.pathname === '/register';

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
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {!hideLogout && user && (
                        <Button color="inherit" onClick={handleLogout}>
                            Logout
                        </Button>
                    )}
                    <IconButton onClick={toggleTheme} color="inherit" aria-label="toggle theme">
                        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;