import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Login = () => (
  <>
    <Typography sx={{
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Roboto',
      mt: 8,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      Sign-In
    </Typography>
    <Box
      component="form"
      sx={{
        p: 2,
        border: '1px solid lightGrey',
        width: '25ch',
        borderRadius: '5px',
        m: 1,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="usernamed-required"
        label="Username"
      />
      <TextField
        required
        id="password-required"
        type="password"
        label="Password"
        autoComplete="current-password"
      />
    </Box>
  </>
);

export default Login;
