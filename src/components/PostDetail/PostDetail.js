import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import Comment from '../Comment/Comment';

const useStyles = makeStyles({
  root: {
    minWidth: 275,

  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const PostDetail = () => {

  //post detail
  const { id } = useParams();
  const classes = useStyles();

  const [postDetail, setPostDetail] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setPostDetail(data))
  }, [])

  //comment api 

  const [comments, setComments] = useState([]);
  useEffect(()=>{
      const cmentURL = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
      fetch(cmentURL)
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])




  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {postDetail.title}
          </Typography>
          <Typography variant="body2" component="p">
            {postDetail.body}
          </Typography>
        </CardContent>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </Card>
  
    <div>
        {
        comments.map(comment => <Comment comment={comment}></Comment>)
      }
    </div>
    </>
  );
};



export default PostDetail;