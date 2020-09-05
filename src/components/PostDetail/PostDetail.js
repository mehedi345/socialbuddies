import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Comment from '../Comment/Comment';


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
    const {id} = useParams();
    const classes = useStyles();

    const [postDetail, setPostDetail] = useState([]);
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetail(data))
    }, [])
    return (
         <Card className={classes.root} variant="outlined">
            <CardContent>
               
                        <Typography variant="h5" component="h2">
                            {postDetail.title}
                </Typography>
                <Typography variant="body2" component="p">
                {postDetail.body}
                </Typography>
            </CardContent>
            </Card>
    );
};

export default PostDetail;