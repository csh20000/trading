import {
  Typography,
  Stack,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from '@mui/material';
import OnePieceWiki from '../../assets/images/OnePieceWiki.webp';
import GrandLineReview from '../../assets/images/GrandLineReview.webp';
import OnePieceReddit from '../../assets/images/OnePieceReddit.png';

const ExtraResources = () => (
  <>
    <Typography variant="h4" textAlign="center" marginBottom={5} marginTop={5}>
      Various Resources To Learn About One Piece
    </Typography>
    <Stack
      direction="row"
      spacing={10}
      sx={{ justifyContent: 'center', marginBottom: 5 }}
    >
      <Card sx={{
        width: 300,
        boxShadow: '0px 0px 3px 0px black',
        '&:hover': {
          boxShadow: '0px 0px 10px 2px black',
        },
      }}
      >
        <CardActionArea href="https://onepiece.fandom.com/wiki/One_Piece_Wiki" target="_blank" rel="noreferrer">
          <CardMedia
            component="img"
            height="300px"
            image={OnePieceWiki}
            alt="OnePieceWiki"
          />
          <CardContent>
            <Typography textAlign="center" fontWeight="bold">
              One Piece Wiki
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{
        width: 300,
        boxShadow: '0px 0px 3px 0px black',
        '&:hover': {
          boxShadow: '0px 0px 10px 2px black',
        },
      }}
      >
        <CardActionArea href="https://www.youtube.com/c/GrandLineReview" target="_blank" rel="noreferrer">
          <CardMedia
            component="img"
            height="300px"
            image={GrandLineReview}
            alt="GrandLineReview"
          />
          <CardContent>
            <Typography fontWeight="bold" textAlign="center">
              Grand Line Review
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{
        width: 300,
        boxShadow: '0px 0px 3px 0px black',
        '&:hover': {
          boxShadow: '0px 0px 10px 2px black',
        },
      }}
      >
        <CardActionArea href="https://www.reddit.com/r/OnePiece/" target="_blank" rel="noreferrer">
          <CardMedia
            component="img"
            height="300px"
            image={OnePieceReddit}
            alt="OnePieceReddit"
          />
          <CardContent>
            <Typography fontWeight="bold" textAlign="center">
              One Piece Reddit
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Stack>
  </>
);

export default ExtraResources;
