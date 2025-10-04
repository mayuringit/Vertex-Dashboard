import { Typography, Container, Box, Paper } from '@mui/material';

function RegisterPage() {
    return (
        <Container maxWidth="sm">
            <Paper elevation={6} sx={{ p: 4, width: '100%', mt:8 }}>
                <Box>
                    <Typography variant="h4" gutterBottom>
                        Register New Account
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        (Coming soon...) This is a placeholder page.
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}

export default RegisterPage;
