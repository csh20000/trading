import {
  Card,
  CardHeader,
  Typography,
  Avatar,
  CardContent,
} from '@mui/material';

const TopCost = () => (
  <>
    <Typography variant="h4" textAlign="center">Most Valuable Collections</Typography>
    <Card>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe">
            R
          </Avatar>
        )}
      />
      <CardContent>
        Hello
      </CardContent>
    </Card>
    <Card>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe">
            R
          </Avatar>
        )}
      />
    </Card>
  </>
);

export default TopCost;
