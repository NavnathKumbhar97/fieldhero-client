import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import { DashboardOutlined, PersonAddAlt1Outlined, SearchOffOutlined, SearchSharp } from '@mui/icons-material';
import { Link, Outlet } from 'react-router-dom';
import ContentDesign from '../../Pages/Content/ContentDesign';
import Profile from '../../Pages/Profile/Profile';
import Footer from '../Footer/Footer';
import Image from 'mui-image';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',backgroundColor:'#2a64b5',color:"white"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },backgroundColor:'#2a64b5',
  color:"white"
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{backgroundColor:"#2a64b5",display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}} open={open}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          
          {/* <Typography variant="h6" noWrap component="div">
          Field Hero
          </Typography> */}
        </Toolbar>
        <Profile />
      </AppBar>
      
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{backgroundColor:"#2a64b5"}}>
          <Image src='https://admin.fieldhero.in/img/logo.a3b1bafb.png' height={50} width={50} style={{marginRight:'100px'}}></Image>
        <List sx={{display: 'flex',flexDirection:'column',color:"white"}}>
                <Typography variant="h6" noWrap component="div" sx={{fontWeight:"bold",mb:'-15px' }}>
                  Field Hero
                </Typography>
                <p>Apexa Group</p>
                </List>
          <IconButton onClick={handleDrawerClose} style={{color:"white"}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider style={{backgroundColor:"#2a64b5"}}/>
       
        {open?(<>
        <List style={{backgroundColor:"#2a64b5"}}>
            <ListItem disablePadding sx={{ display: 'block',mb:'-30px',mt:'-40px' }}>
              <List
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    // mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >

                </ListItemIcon>
                

              </List>
                {/* <p>Apexa Group</p> */}
            </ListItem>
        </List>
        
        </>):""}
        <List style={{backgroundColor:"#2a64b5",textDecoration:'none'}}>
            <ListItem disablePadding sx={{ display: 'block' }}>
            <Link to={'/'} style={{ textDecoration:'none', color:'white' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',color:"white"
                  }}
                >
                 <DashboardOutlined />
                </ListItemIcon>
                
                  <ListItemText primary={"Dashboard"} sx={{ opacity: open ? 1 : 0 }} />
               
              </ListItemButton>
              </Link>
            </ListItem>
        </List>
        <List style={{backgroundColor:"#2a64b5"}}>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <Link to={'/customer-profile'} style={{ textDecoration:'none', color:'white' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',color:"white"
                  }}
                >
                 <PersonAddAlt1Outlined />
                </ListItemIcon>
                <ListItemText primary={"Customer Profile"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              </Link>
            </ListItem>
        </List>
        <List style={{backgroundColor:"#2a64b5"}}>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <Link to={'/candidate-search'} style={{ textDecoration:'none', color:'white' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',color:"white"
                  }}
                >
                 <SearchSharp />
                </ListItemIcon>
                <ListItemText primary={"Candidate Search"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              </Link>
            </ListItem>
        </List>
        <List style={{backgroundColor:"#2a64b5"}}>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <Link to={'/candidate-profile'} style={{ textDecoration:'none', color:'white' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',color:"white"
                  }}
                >
                 <ContactEmergencyOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={"Candidate Profile"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              </Link>
            </ListItem>
        </List>
        <List style={{backgroundColor:"#2a64b5"}}>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <Link to={'/about'} style={{textDecoration:'none', color:'white'}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',color:"white"
                  }}
                >
                 <InfoOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={"About"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              </Link>
            </ListItem>
        </List>
      <Divider/>
      </Drawer>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column',minHeight:'100vh' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3,bgcolor:'#f2f7f4' }}>
          <DrawerHeader />
          <Typography>
            <Outlet />
          </Typography>
        </Box>

        <Footer />
      </div>
    </Box> 
    </>
  );
}
