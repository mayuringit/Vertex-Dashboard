import { useState } from "react";
import { Container, TextField, Button, Typography, Box, Stack, IconButton, InputAdornment, MenuItem, Select, FormControl, InputLabel, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("admin");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({ email: "", password: "" });
    //To Do: will use hardcoded for = now update to dynamic
    const mockUsers = {
        'admin@vertex.com': { email: 'admin@vertex.com', role: 'admin', name: 'Admin User' },
        'user@vertex.com': { email: 'user@vertex.com', role: 'user', name: 'Regular User' }
    };
    const validate = () => {
        const newErrors = { email: "", password: "" };
        let isValid = true;

        if (!email) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email format is invalid";
            isValid = false;
        }

        if (!password) {
            newErrors.password = "Password is required";
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const user = mockUsers[email.toLowerCase()];
            if (user && password === 'password123') {
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/dashboard');
            } else {
                setErrors(prev => ({ ...prev, password: 'Invalid email or password' }));
            }
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Vertex Dashboard
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                    Please sign in to continue
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: "90%" }}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        size="small"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                        autoComplete="email"
                    />

                    <TextField
                        label="Password"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        size="small"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                        autoComplete="current-password"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <FormControl fullWidth size="small" margin="normal">
                        <InputLabel id="role-label">Role</InputLabel>
                        <Select
                            labelId="role-label"
                            id="role-select"
                            value={role}
                            label="Role"
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <MenuItem value="admin">Admin</MenuItem>
                            <MenuItem value="user">User</MenuItem>
                        </Select>
                    </FormControl>

                    <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Sign In
                        </Button>

                        <Button variant="outlined" color="primary" fullWidth onClick={() => navigate("/register")}>
                            Register
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Container>
    );
}

export default LoginPage;