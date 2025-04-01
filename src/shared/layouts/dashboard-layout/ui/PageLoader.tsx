import { Box, CircularProgress, LinearProgress, Typography } from '@mui/material';

const PageLoader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        width: '100%',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Loading, please wait...
      </Typography>
      <LinearProgress sx={{ width: '60%' }} />
    </Box>
  );
};

export default PageLoader;