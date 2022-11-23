import * as React from 'react';

import { Person } from '@mui/icons-material';
import { Button, Box, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Search } from '@mui/icons-material';

const NavbarBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  [theme.breakpoints.up('md')]: {
    marginLeft: 250,
  },
}));

export default function Navbar() {
  //react useState hook pour l'état ouverture/fermeture
  const [open, setState] = React.useState(null);

  const openMenu = Boolean(open);
  const idMenu = openMenu ? 'simple-menu' : undefined;

  //fonction appelée quand le menu s'ouvre
  const handleMenuClick = (event: any) => {
    setState(event.currentTarget);
  };
  //fonction appelée quand le menu se ferme
  const handleMenuClose = () => {
    setState(null);
  };

  // fonction quand la navigation est active
  const isActive = (path: any) => {
    //   return location.pathname === path ? 'active' : '';
  };

  return (
    <NavbarBox component='div' position='static'>
      <Button>
        Jeux
      </Button>

      <Button>
        Nouveautés
      </Button>

      <Button>
        A propos de nous
      </Button>

      <Button>
        Créer un compte
      </Button>

      <Button>
        <Search sx={{ fontSize: '2rem' }}></Search>
      </Button>

      <Box component='div'>
        <Button
          id={idMenu}
          aria-controls={openMenu ? 'menu-controls' : undefined}
          aria-haspopup='true'
          aria-expanded={openMenu ? 'true' : undefined}
          onClick={handleMenuClick}
          sx={{ color: 'white' }}
        >
          <Person sx={{ fontSize: '2rem' }}></Person>
        </Button>

        <Menu
          id={idMenu}
          aria-labelledby='user-menu-button'
          anchorEl={open}
          open={openMenu}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <MenuItem onClick={handleMenuClose}>Mon compte</MenuItem>
          <MenuItem onClick={handleMenuClose}>Se déconnecter</MenuItem>
        </Menu>
      </Box>
    </NavbarBox>
  );
}