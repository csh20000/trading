import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Icon from '@mui/material/Icon';

const Footer = () => (
  <Box
    position="absolute"
    sx={{
      backgroundColor: 'primary.main',
      width: '100%',
    }}
  >
    <Typography
      sx={{
        color: 'white',
        textAlign: 'center',
        marginTop: '10px',
        marginBottom: '5px',
      }}
    >
      <Icon>
        <AddCircleIcon
          fontSize="small"
          sx={{
            color: 'white',
            marginBottom: '3px',
          }}
        >
          icon
        </AddCircleIcon>
      </Icon>
      Main footer title
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography
          sx={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Calibri',
            fontSize: '1.5rem',
          }}
        >
          This is the footer
        </Typography>
        <Typography
          sx={{
            color: 'white',
            textAlign: 'center',
            marginBottom: '10px',
          }}
        >
          This is the footing
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography sx={{ color: 'white' }}>
          center left col
        </Typography>
        <Typography sx={{ color: 'white', textAlign: 'center' }}>
          center center col
        </Typography>
        <Typography sx={{ color: 'white', textAlign: 'right', marginBottom: '10px' }}>
          center right col
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography sx={{ color: 'white', textAlign: 'right' }}>Placeholder Right Side</Typography>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;
