import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CreateIcon from '@mui/icons-material/Create';
import SearchIcon from '@mui/icons-material/Search';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

const ExplanationItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  width: '290px',
  evalation: '0',
}));

const Explanation = () => (
  <>
    <Typography variant="h4" textAlign="center">Trade and Sell Your Cards</Typography>
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      sx={{ justifyContent: 'center' }}
    >
      <ExplanationItem>
        <CreateIcon color="primary" fontSize="large" />
        <Typography variant="h5" component="h2" fontWeight="bold">
          Create an Account
        </Typography>
        <Typography variant="body1" sx={{ color: '#757777' }}>
          Click on the
          <Link style={{ color: 'blue', fontWeight: 'bold', textDecoration: 'inherit' }} to="login">
            &nbsp;login&nbsp;
          </Link>
          tab to create an account, and begin your trading journey. Each account will start with
          50 credits to spend on any purchase of your choice.
        </Typography>
      </ExplanationItem>
      <ExplanationItem>
        <SearchIcon color="primary" fontSize="large" />
        <Typography variant="h5" component="h2" fontWeight="bold">
          Search for Cards
        </Typography>
        <Typography variant="body1" sx={{ color: '#757777' }}>
          Either utilize the search bar located at the top of the page or navigate to the
          <Link style={{ color: 'blue', textDecoration: 'inherit', fontWeight: 'bold' }} to="explore">
            &nbsp;explore&nbsp;
          </Link>
          page to discover new cards for your collection. Sell prices are listed for every card.
        </Typography>
      </ExplanationItem>
      <ExplanationItem>
        <CurrencyExchangeIcon color="primary" fontSize="large" />
        <Typography variant="h5" component="h2" fontWeight="bold">
          Purchase Card Packs
        </Typography>
        <Typography variant="body1" sx={{ color: '#757777' }}>
          Currently, the only way to obtain cards is to purchase a card pack, which
          can be purchased for credits. Navigate to the
          <Link style={{ color: 'blue', textDecoration: 'inherit', fontWeight: 'bold' }} to="explore">
            &nbsp;pack&nbsp;
          </Link>
          page to view the packs available for purchase.
        </Typography>
      </ExplanationItem>
      <ExplanationItem>
        <EmojiEventsIcon color="primary" fontSize="large" />
        <Typography variant="h5" component="h2" fontWeight="bold">
          The Competition
        </Typography>
        <Typography variant="body1" sx={{ color: '#757777' }}>
          Navigate to the
          <Link style={{ color: 'blue', textDecoration: 'inherit', fontWeight: 'bold' }} to="explore">
            &nbsp;stats&nbsp;
          </Link>
          page to find different statistics about other users. Furthermore,
          you will be able to see how many copies of each of the legendary
          cards are currently in player possession.
        </Typography>
      </ExplanationItem>
    </Stack>
  </>
);

export default Explanation;
