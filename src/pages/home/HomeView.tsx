import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HomeView() {
	return (
		<Box p={4}>
			<Typography variant="h4" marginBottom={2}>
				Welcome to the User Management Dashboard
			</Typography>

			<Stack direction="row" spacing={2}>
				<Button variant="contained" component={Link} to="/users">
					View All Users
				</Button>

				<Button variant="outlined" component={Link} to="/users/create">
					Add New User
				</Button>
			</Stack>
		</Box>
	);
}
