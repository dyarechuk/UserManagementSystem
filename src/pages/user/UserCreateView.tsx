import { useAddUserMutation } from '@/models/user/model/userApi';
import { UserFormData } from '@/modules/user/user-form/schema';
import UserForm from '@/modules/user/user-form/UserForm';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function UserCreateView() {
  const [addUser, { isLoading }] = useAddUserMutation();
  const navigate = useNavigate();

  const handleSubmit = async (data: UserFormData) => {
    await addUser(data).unwrap();
    navigate('/users');
  };

  return (
    <Box p={4}>
      <Typography variant="h5" mb={2}>
        Add New User
      </Typography>

      <UserForm onSubmit={handleSubmit} isSubmitting={isLoading} />
    </Box>
  );
}