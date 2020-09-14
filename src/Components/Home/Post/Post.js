import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,float: 'left',
    marginLeft: 80,marginBottom: 20,height: 350,width: 400,marginTop: 30,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
    const {title, body, id} = props.post;
    const history = useHistory();
    const handleClick = (postId) => {
        history.push(`/post/${postId}`);
    }
    const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => handleClick(id)} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
