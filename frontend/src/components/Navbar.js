import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));

const Navbar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar>
      <Toolbar>
        <Button>
          <Link
            to="/"
            style={{ color: 'white', textDecoration: 'inherit' }}
          >
            Raftel
          </Link>
        </Button>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Button>
          <Link
            to="/explore"
            style={{ color: 'white', textDecoration: 'inherit' }}
          >
            Explore
          </Link>
        </Button>
        <Button>
          <Link
            to="/stats"
            style={{ color: 'white', textDecoration: 'inherit' }}
          >
            Stats
          </Link>
        </Button>
        <Button>
          <Link
            to="/about"
            style={{ color: 'white', textDecoration: 'inherit' }}
          >
            About
          </Link>
        </Button>
        <Button>
          <Link
            to="/login"
            style={{ color: 'white', textDecoration: 'inherit' }}
          >
            Login
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navbar;
