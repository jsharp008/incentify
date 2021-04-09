import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 625,
    },
    rootCard: {
      minWidth: 275,
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
    content: {
      padding: '8px'
    }
  }));
  

export default function MotiQuote() {
  const [quote, setQuote] = useState("");
  const classes = useStyles();

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(json => {
      console.log("json")
      console.log(json);
      setQuote(json);
    });
  }, []);
  
  console.log("quote")
  console.log(quote)
      // function getQuote(myQuotes) {
      //   let index = Math.floor(Math.random() * myQuotes.length);
      //   setQuote(myQuotes[index]);
      // }
  
  return(<div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={1}>
        {quote.map((item) => (
        <Card className={classes.rootCard}>
          <CardContent className={classes.content}>
            <Typography className={classes.title} gutterBottom>
              <i><q>{item.text ? (item.text) : "Loading..."}</q></i>
            </Typography>
          </CardContent>
        </Card>))} 
      </GridList>
    </div>);
}
