import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

const sidebarLinks = {
    admin: [
        { label: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
        { label: 'Users', path: '/users', icon: <PeopleIcon /> },
        { label: 'Settings', path: '/settings', icon: <SettingsIcon /> },
    ],
    user: [
        { label: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
        { label: 'Profile', path: '/profile', icon: <PersonIcon /> },
    ],
};

export default sidebarLinks;