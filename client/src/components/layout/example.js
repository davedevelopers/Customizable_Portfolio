import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../App.css'
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import photo from '../../img/AK.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    
    height: 300,
    width: 300,
    borderRadius:20,
  },
 
}));

 function Example() {
  // const [spacing, setSpacing] = React.useState(8);
  const [spacing] = React.useState(8);
  const classes = useStyles();

  // const handleChange = (event) => {
  //   setSpacing(Number(event.target.value));
  // };
  const arr1 = [{

    id:photo
  },{

    id:"https://mdbootstrap.com/wp-content/uploads/2015/08/navbar-fb.jpg"
  },{
    id:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGtcDYNlfc8JHSe3b5qGFBM0bvmuu7WNkt1w&usqp=CAU"
  }
  ]
  const arr2 = [{

    id:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGtcDYNlfc8JHSe3b5qGFBM0bvmuu7WNkt1w&usqp=CAU"
  },{
    
    id:"https://mdbootstrap.com/wp-content/uploads/2015/08/navbar-fb.jpg"
  },{
    id:photo
  }
  ]
  const arr3 = [{

    id:"https://mdbootstrap.com/wp-content/uploads/2015/08/navbar-fb.jpg"
  },{
    
    id:photo
  },{
    id:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGtcDYNlfc8JHSe3b5qGFBM0bvmuu7WNkt1w&usqp=CAU"
  }
  ]

  return (
    <div className="sec-backImage">
      <Container>
      <h1 className="title">Examples</h1>
      <p className="para">Quickly get your Portfolio started using any of the examples using the elements ranging from Navigation bar to Buttons.</p>
      <br/> <br/>
      <Grid container className={classes.root} spacing={8}>
        <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {arr1.map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>

              <img src={value.id} style={{width: '100%', height: '100%'}}/>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {arr2.map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
              <img src={value.id} style={{width: '100%', height: '100%'}}/>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {arr3.map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
              <img src={value.id} style={{width: '100%', height: '100%'}}/>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
      </Container>
     
    </div>
   
  );
}

export default Example;