import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<AppBar position="sticky">
			<Toolbar>
				<Typography variant="h6" sx={{ flexGrow: 1 }}>
					User Management System
				</Typography>
				<Button color="inherit" component={Link} to="/">
					Dashboard
				</Button>
				<Button color="inherit" component={Link} to="/users">
					Manage Users
				</Button>
				<Button color="inherit" component={Link} to="/users/create">
					Add User
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
