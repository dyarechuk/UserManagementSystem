import { UserTable } from '@/components/users-table/UsersTable';
import { useGetUsersQuery } from '@/models/user/model/userApi';
import { Alert, Box, Button, CircularProgress, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function UsersListView() {
  const navigate = useNavigate();
  const { data = [], isLoading, isError } = useGetUsersQuery();

  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box component="h2">Users</Box>

        <Button variant="contained" onClick={() => navigate('/users/create')}>
          Add User
        </Button>
      </Stack>

      {isLoading ? (
        <CircularProgress />
      ) : isError ? (
        <Alert severity="error">Failed to load users</Alert>
      ) : (
        <UserTable users={data} />
      )}
    </Box>
  );
}