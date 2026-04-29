export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const getRole = () => {
  const user = getUser();
  return user?.role || null;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const hasRole = (roles: string[]) => {
  const user = getUser();
  return user && roles.includes(user.role);
};
