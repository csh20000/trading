import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Explanation = () => (
  <Typography>
    <Typography variant="h4" textAlign="center">Trade and Sell Your Cards</Typography>
    <Box display="flex" flexDirection="row" justifyContent="center">
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Create an Account
          </Typography>
          <Typography variant="body2" component="p">
            Create an account to trade and sell your cards.
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Create an Account
          </Typography>
          <Typography variant="body2" component="p">
            Create an account to trade and sell your cards.
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Create an Account
          </Typography>
          <Typography variant="body2" component="p">
            Create an account to trade and sell your cards.
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Create an Account
          </Typography>
          <Typography variant="body2" component="p">
            Create an account to trade and sell your cards.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  </Typography>
);

export default Explanation;
