import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function DashboardPage() {
    return (
        <Container maxWidth="lg">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Welcome to Vertex Dashboard
                </Typography>
                <Typography>
                    This is your enterprise dashboard homepage.
                </Typography>
            </Box>
        </Container>
    );
}

export default DashboardPage;