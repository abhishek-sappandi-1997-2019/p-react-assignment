import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Profile from './Profile'
import Posts from './Posts'
import Gallery from './Gallery'
import Todo from './Todo'
import {connect} from 'react-redux'


    function TabPanel(props) {
      const { children, value, index, ...other } = props;

      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`vertical-tabpanel-${index}`}
          aria-labelledby={`vertical-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box p={3}>
              <Typography component={'span'} variant={'body2'}>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }

    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.any.isRequired,
      value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
      return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
      };
    }

    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224
      },
      tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
    }));

function VerticalMenu(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Profile" {...a11yProps(0)} />
        <Tab label="Posts" {...a11yProps(1)} />
        <Tab label="Gallery" {...a11yProps(2)} />
        <Tab label="ToDo" {...a11yProps(3)} />
      </Tabs>
      <TabPanel style={{ width : '100%' }} value={value} index={0}>
        <Profile data={props.user}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Posts />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Gallery />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Todo />
      </TabPanel>
    </div>
  );
}
const mapStateToPrps = (state,props) =>{
  const userid = props.history.location.pathname.slice(6)  // 9
  //console.log("userid",props.history.location.pathname);
  return {
      user : state.user.find(e => Number(e.id) === Number(userid))
  }
}
export default connect(mapStateToPrps)(VerticalMenu)