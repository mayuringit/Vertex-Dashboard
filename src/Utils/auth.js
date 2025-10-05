export const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
    return !!localStorage.getItem("user");
};

export const getUserRole = () => {
    const user = getCurrentUser();
    return user?.role || null;
};
