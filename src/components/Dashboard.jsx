import React, { useState } from 'react';
import { Container, Typography, Button, Box, Stack } from '@mui/material';
import UserTable from './UserTable';
import UserForm from './UserForm';

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          User Management
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Add New User
        </Button>
      </Stack>

      {/* The Table Component we built earlier */}
      <UserTable />

      {/* A Dialog/Modal for the Add User form */}
      <UserForm open={open} handleClose={() => setOpen(false)} />
    </Container>
  );
};

export default Dashboard;