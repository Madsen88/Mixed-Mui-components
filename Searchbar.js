import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const barWidth = 600;
const styles = theme => ({
  container:{
      display:"flex",
      justifyItems:"center",
      alignItems:"center"
      
  },
  margin: {
    margin: theme.spacing.unit,
    width: barWidth,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: "5px",
    transition: "2"
  },
  SearchIcon:{
    color:"#fff"
  },
  InputCss:{
    padding:"0px 8px 0px",
    border:"0",
    transition: "0.1s"
    
  },
  InputCssFocused:{
    backgroundColor: "rgba(255,255,255,0.70)",
    width: barWidth,
    borderRadius: "5px",
    
  }
});

function Searchbar(props){

  const { classes } = props;

    return (
      <div className={classes.container}>
        <SearchIcon 
            position="start" 
            className={classes.SearchIcon}
            >
              
            </SearchIcon>
      <FormControl className={classes.margin}>
        
        <Input
          className={classes.InputCss}
          classes={{ focused: classes.InputCssFocused}}
          
          disableUnderline={true}
        
        />
      </FormControl>
      </div>
    );
  }
Searchbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Searchbar);
