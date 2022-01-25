import React, { useState, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from 'shared-components/material'

import {
  DownloadForOfflineIcon,
  GavelIcon,
  HelpIcon,
  ListItemIcon,
  ManageAccountsIcon,
  MenuIcon,
  PeopleAltIcon,
} from 'shared-components/icons'

const drawerWidth = 240;
const navOptions = [
  { 
    id: 5,
    text: 'Cases',
    link: '/app/cases',
    icon: <GavelIcon />,
  },
  { 
    id: 10,
    text: 'Clients',
    link: '/app/clients',
    icon: <PeopleAltIcon />,
  },
  { 
    id: 15,
    text: 'Downloads',
    link: '/app/downloads',
    icon: <DownloadForOfflineIcon />,
  },
  { 
    id: 20,
    text: 'Preferences',
    link: '/app/preferences',
    icon: <ManageAccountsIcon />,
  },
  { 
    id: 25,
    text: 'Help',
    link: '/app/help',
    icon: <HelpIcon />,
  },
]


function App() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNavOption, setActiveNavOption] = useState(navOptions[0])

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const { pathname } = location
    const activeNavOption = navOptions.filter((navOption) => navOption.link === pathname)[0]
    setActiveNavOption(activeNavOption)
  }, [location])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {navOptions.map((navOption) => (
          <ListItem
            button
            onClick={() => navigate(navOption.link)}
            key={navOption.id}
          >
            <ListItemIcon>
              {navOption.icon}
            </ListItemIcon>
            <ListItemText primary={navOption.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {activeNavOption.text}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet /> { /* this is a react router feature and renders /app route child components */ }
      </Box>
    </Box>
  );
}

export default App;
