import React from 'react';
import useStyles from './styles';
import { CardActions, Card, CardMedia, CardContent, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  
  return (
    <Card className={classes.card} >
      <CardMedia className={classes.image} title={post.title} image={post.selectedFile} />
      <div className={classes.heading} >
        <Typography variant="h6">{post.user}</Typography>
        <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.edit}>
        <Button style={{ color: '#FFF'}} size='small' onClick={() => {setCurrentId(post._id)}} >
          <EditIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.info}>
        <Typography variant='body1' color="textSecondary">
          {post.tags.map((tag) => `${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom >
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
          <Button className={classes.btn} onClick={() => {}} style={{maxWidth: '34px', maxHeight: '30px', minWidth: '34px', minHeight: '30px'}}>
            <ThumbUpIcon fontSize="small" style={{ marginRight: '3px' }} />
            {post.likeCount}
          </Button>
          <Button color="secondary" size="small" onClick={() => {}} style={{maxWidth: '25px', maxHeight: '25px', minWidth: '25px', minHeight: '25px'}} >
            <DeleteIcon fontSize="small"/>
          </Button>
      </CardActions>
    </Card>
  )
}

export default Post