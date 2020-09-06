import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 605,
        margin: '0 auto',
        marginBottom: '10px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});




const Post = (props) => {
    const { id, title } = props.post;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Post of the Day
             </Typography>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
            </CardContent>
            <CardActions >
                <Link to={`/post/${id}`} style={{textDecoration:"none"}}>
                    <Button size="small" variant="contained" color="secondary" >Show Details</Button>
                </Link>
            </CardActions>
            <IconButton aria-label="share">
          <ChatBubbleOutlineIcon/>
        </IconButton>
        </Card>
    );
};

export default Post;