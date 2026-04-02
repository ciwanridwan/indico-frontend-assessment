import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import { useAddUser } from '../hooks/useUsers';

const UserForm = ({ open, handleClose }) => {
  const addUserMutation = useAddUser();
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = () => {
    addUserMutation.mutate(formData, {
      onSuccess: () => {
        setFormData({ name: '', email: '' }); // Reset form
        handleClose(); // Close modal
      },
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New User</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Full Name"
          fullWidth
          variant="standard"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" disabled={addUserMutation.isPending}>
          {addUserMutation.isPending ? 'Adding...' : 'Add User'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserForm;