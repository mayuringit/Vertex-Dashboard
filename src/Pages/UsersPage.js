import { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, Stack} from '@mui/material';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Edit, Delete } from '@mui/icons-material';

const initialUsers = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'admin' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'user' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'user' },
    // To DO add users dynamically * API
];

function UsersPage() {
    const [users, setUsers] = useState(initialUsers);
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogMode, setDialogMode] = useState('add');
    const [currentUser, setCurrentUser] = useState({ id: null, name: '', email: '', role: '' });

    const handleOpenDialog = (mode, user = { id: null, name: '', email: '', role: '' }) => {
        setDialogMode(mode);
        setCurrentUser(user);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => setOpenDialog(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (!currentUser.name || !currentUser.email || !currentUser.role) {
            alert('Please fill all fields.');
            return;
        }

        if (dialogMode === 'add') {
            const newUser = {
                ...currentUser,
                id: users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1,
            };
            setUsers((prev) => [...prev, newUser]);
        } else {
            setUsers((prev) =>
                prev.map((user) => (user.id === currentUser.id ? currentUser : user))
            );
        }

        setOpenDialog(false);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            setUsers((prev) => prev.filter((user) => user.id !== id));
        }
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', flex: 1, minWidth: 150 },
        { field: 'email', headerName: 'Email', flex: 1, minWidth: 200 },
        { field: 'role', headerName: 'Role', width: 120 },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            getActions: (params) => [
                <GridActionsCellItem
                    icon={<Edit />}
                    label="Edit"
                    onClick={() => handleOpenDialog('edit', params.row)}
                    key="edit"
                />,
                <GridActionsCellItem
                    icon={<Delete />}
                    label="Delete"
                    onClick={() => handleDelete(params.id)}
                    key="delete"
                    showInMenu
                />,
            ],
        },
    ];

    return (
        <Box sx={{ height: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h4">User Management</Typography>
                <Button variant="contained" color="primary" onClick={() => handleOpenDialog('add')}>
                    Add User
                </Button>
            </Stack>

            <Box sx={{ flexGrow: 1 }}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    sx={{ height: '100%' }}
                />
            </Box>

            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
                <DialogTitle>{dialogMode === 'add' ? 'Add User' : 'Edit User'}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        name="name"
                        fullWidth
                        variant="standard"
                        value={currentUser.name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        label="Email"
                        name="email"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={currentUser.email}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        label="Role"
                        name="role"
                        fullWidth
                        variant="standard"
                        value={currentUser.role}
                        onChange={handleChange}
                        helperText="Enter 'admin' or 'user'"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleSave} variant="contained" color="primary">
                        {dialogMode === 'add' ? 'Add' : 'Save'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default UsersPage;