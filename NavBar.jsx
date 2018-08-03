import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*Components*/
import ListView from './ListView';
import DetailsView from './DetailsView';
import Searchbar from './searchbar';

/*Material Ui Components*/
import { List, ListItem, ListItemIcon, ListItemText, Grid, Button, Avatar, Drawer, AppBar, Toolbar, Divider } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
/*Icons*/
import { Assignment, Announcement, Add } from '@material-ui/icons/';

const drawerWidth = 240;
const appbarHeight = 60;


const styles ={
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        display: 'flex',
        height:'100%'
    },
    appBar: {
        height: appbarHeight,
        backgroundColor: '#3b78e7'
    },
    drawerPaper: {
        position: 'absolute',
        marginTop: appbarHeight,
        width: drawerWidth,
        height: '94%'
    },
    content: {
        flexGrow:1,
        marginTop: appbarHeight+15 ,
        marginLeft: drawerWidth,
        minWidth: 0, // So the Typography noWrap works
        height:'100%',
        paddingRight:'20px'

    },
    toolbar: {
        justifyContent: 'center'
    },
    appBarTitle: {
        position:'absolute'
    },
    gridCss: {
        height:'100%'
    },
    AddButtonCss: {
        // float: 'right',
        backgroundColor: '#3b78e7',
        // position:'relative',
        // right:'15px',
        // bottom:'30px'
        right: "45%",
        bottom: '70px',
        position: 'fixed'

    },
    userLogo:{
        position: 'absolute',
        right: '15px'
    },
    ListViewContainer:{
        
    },
    DetailsViewContainer:{
        borderLeft:'1px solid black',
        height:'100%',
    }
};

class NavBar extends Component{
    render() {
        return (
            <div className={this.props.classes.root}>
                <AppBar
                    className={this.props.classes.appBar}
                    title="L3t Portal"
                >
                    <h1 className={this.props.classes.appBarTitle}>L3T Portal</h1>
                    <Toolbar className={this.props.classes.toolbar}>
                        <Searchbar
                            SearchQuery={this.props.SearchQuery}
                            handleSearchInputChange={this.props.handleSearchInputChange}
                        />
                        <Avatar className={this.props.classes.userLogo}> PH </Avatar>
                    </Toolbar>
                </AppBar>
                {
    //#region Sidemenu/Drawer
}
                
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: this.props.classes.drawerPaper,
                    }}
                >
                    <div className={this.props.classes.toolbar} />
                    <List>
                        <ListItem
                            button
                        >
                            <ListItemIcon>
                                <Assignment />
                            </ListItemIcon>
                            <ListItemText primary="Placeholder" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <Announcement />
                            </ListItemIcon>
                            <ListItemText primary="Other Items" />
                        </ListItem>
                    </List>
                </Drawer>
{
    //#endregion
}
                {/* Main container */}
                <main className={this.props.classes.content}>
                    <Grid container spacing={24} className={this.props.classes.gridCss}>
                        <Grid item xs={6} border className={this.props.classes.ListViewContainer}>
{/* ListView */}    
                            <ListView
                                list={this.props.list}
                                name={this.props.name}
                                onClickChangeEventLog={this.props.onClickChangeEventLog}
                            />
                        </Grid>
                        <Button
                                variant="fab"
                                onClick={(e) => this.props.CreateEventLogHandler(this, e)}
                                color="primary"
                                aria-label="Add"
                                className={this.props.classes.AddButtonCss}>
                                <Add />
                            </Button>
                        <Grid item xs={6} className={this.props.classes.DetailsViewContainer} >
{/* DetailView */}    
                            <DetailsView
                                eventLog={this.props.eventLog}
                                nodeObjects={this.props.nodeObjects}
                                listOfNodes={this.props.listOfNodes}
                                addNodeInputField={this.props.addNodeInputField}
                                DWInputChangeHandler={this.props.DWInputChangeHandler}
                            />
                        </Grid>
                    </Grid>
                </main>
            </div>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(NavBar);