import { useSelector } from 'react-redux';
import {
  Typography,
  Stack,
  Box,
  Avatar,
} from '@mui/material';

const TopCost = () => {
  const getUsers = useSelector((state) => state.users);
  const users = [...getUsers];

  return (
    <>
      <Typography variant="h4" textAlign="center" sx={{ mt: 5 }}>Most Valuable Collections</Typography>
      <Box sx={{ marginTop: '12px', marginBottom: '12px' }}>
        <Stack spacing={2} alignItems="center">
          {users
            .sort((prev, current) => (current.totalCardValue - prev.totalCardValue))
            .slice(0, 5)
            .map((user, index) => (
              <Box sx={{
                borderBottom: 1,
                display: 'flex',
                flexDirection: 'row',
                gap: '12px',
                padding: '12px',
                width: '30%',
                '&:hover': {
                  border: 2,
                  borderRadius: '8px',
                  backgroundColor: '#eeeeee',
                },
              }}
              >
                <Typography variant="h6" alignSelf="center" fontWeight="bold">
                  {index + 1}
                </Typography>
                <Avatar> H </Avatar>
                <Typography
                  variant="h6"
                  alignSelf="center"
                  textTransform="capitalize"
                  fontWeight="bold"
                >
                  {user.name}
                </Typography>
                <Typography alignSelf="center">
                  {user.totalCardValue}
                </Typography>
              </Box>
            ))}
        </Stack>
      </Box>
    </>
  );
};

export default TopCost;
