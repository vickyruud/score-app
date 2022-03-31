import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SeasonDetails(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src='https://crests.football-data.org/PL.png' width='35px'/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${props.clubName}`}
        subheader={`Winners ${props.year}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.crest}
        alt="Crest"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {props.shortName}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Manchester United have won the joint-record number of trophies in English club football,[5][6] including a record 20 League titles, 12 FA Cups, five League Cups and a record 21 FA Community Shields. 
          </Typography>
          <Typography paragraph>
            They have won the European Cup/UEFA Champions League three times,
            and the UEFA Europa League, the UEFA Cup Winners' Cup, the UEFA Super Cup, the Intercontinental Cup and the FIFA Club World Cup once each.
            In 1968, under the management of Matt Busby, 10 years after eight of the club's players were killed in the Munich air disaster, they became the first English club to win the European Cup. Alex Ferguson is the club's longest-serving and most successful manager, winning 38 trophies, including 13 league titles, 5 FA Cups and 2 UEFA Champions League titles, between 1986 and 2013.
            In the 1998–99 season, under Ferguson, the club became the first in the history of English football to achieve the European treble of the Premier League, FA Cup and UEFA Champions League.[10] In winning the UEFA Europa League under José Mourinho in 2016–17, the most recent trophy won by the club, they also became one of five clubs to have won the original three main UEFA club competitions (the Champions League, Europa League and Cup Winners' Cup).
          </Typography>
          <Typography paragraph>
            Manchester United is one of the most widely supported football clubs in the world,[11][12] and has rivalries with Liverpool, Manchester City, Arsenal and Leeds United. Manchester United was the highest-earning football club in the world for 2016–17, with an annual revenue of €676.3 million,[13] and the world's third most valuable football club in 2019, valued at £3.15 billion ($3.81 billion).
          </Typography>
          <Typography>
            From 2012, some shares of the club were listed on the New York Stock Exchange, although the Glazer family retains overall ownership and control of the club.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
