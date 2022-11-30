import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
    AppBar,
    Container,
    Button,
    Box,
    Toolbar,
    IconButton,
    Drawer,
    Divider,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import Link from "next/link";
import {useRouter} from 'next/router'
import Navbar from './navbar';
import logo from "../../assets/img/logo.png";
import Image from "next/image";

const StyledIconButton = styled(IconButton)(({theme}) => ({
    marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    },
    [theme.breakpoints.up('md')]: {
        display: 'none'
    }
}));

const StyledBox = styled(Box)(({theme}) => ({
    display: 'flex',
    marginTop: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'flex-end',
}));

const StyledImage = styled(Image)(({theme}) => ({
    zIndex: 1000,
    width: 'auto !important',
    [theme.breakpoints.up('xs')]: {
        position: 'absolute !important',
        height: '150px !important',
        top: '0px !important',
    },
    [theme.breakpoints.up('sm')]: {
        position: 'absolute !important',
        height: '200px !important',
        top: '0px !important',
    },
    [theme.breakpoints.up('md')]: {
        position: 'absolute !important',
        height: '250px !important',
        top: '0px !important',
    },
    [theme.breakpoints.up('lg')]: {
        position: 'absolute !important',
        height: '350px !important',
        top: '0px !important',
    },
}));


function HeaderComponent() {
    //react useState hook pour l'état ouverture/fermeture
    const [open, setState] = React.useState(null);

    const openDrawer = Boolean(open);

    //fonction appelée quand le tiroir s'ouvre ou se ferme
    const toggleDrawer = (open: any) => (event: any) => {
        //change l'état de la fonction suivant la valeur de open
        setState(open);
    };

    const router = useRouter()

    // fonction quand la navigation est active
    const isActive = (path: any) => {
        console.log(router.asPath === path)
        return router.asPath === path ? 'active' : '';
    };

    return (
        <AppBar position='static' sx={{margin: 0, backgroundColor: 'primary.main'}}>
            <Container maxWidth='xl' disableGutters>
                <Toolbar>
                    <StyledImage
                        src={logo.src}
                        alt="Spiderwolf"
                        width={925}
                        height={1396} />
                    <Navbar/>
                    <StyledIconButton
                        edge='start'
                        color='inherit'
                        aria-label='ouvrir tiroir'
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon/>
                    </StyledIconButton>
                    <Drawer
                        //emplacement tiroir
                        anchor='right'
                        //si ouvert--> afficher tirroir
                        open={openDrawer}
                        //fonction quand le tiroir se ferme
                        onClose={toggleDrawer(false)}
                    >
                        <Box sx={{p: 2, height: 1, backgroundColor: 'secondary.main'}}>
                            {/* en cliquant sur l'icône--> appelle de la fonction toggleDrawer et fermeture du tiroir */}
                            <IconButton onClick={toggleDrawer(false)}>
                                <CloseIcon/>
                            </IconButton>

                            <Divider sx={{mb: 2, borderColor: 'light.main'}}/>

                            <Box>
                                <Link href="/#games" passHref>
                                    <ListItemButton component="a">
                                        <ListItemText primary='Jeux' sx={{color: 'light.main'}}/>
                                    </ListItemButton>
                                </Link>

                                <Link href="/#news" passHref>
                                    <ListItemButton component="a">
                                        <ListItemText primary='Nouveautés' sx={{color: 'light.main'}}/>
                                    </ListItemButton>
                                </Link>

                                <Link href="/#about" passHref>
                                    <ListItemButton>
                                        <ListItemText primary='A propos de nous' sx={{color: 'light.main'}}/>
                                    </ListItemButton>
                                </Link>
                            </Box>

                            <StyledBox component='div'>
                                <Link href="/login" passHref>
                                    <Button
                                        id='login-button'
                                        variant='contained'
                                        className={isActive('/login')}
                                        sx={{
                                            m: 1,
                                            flex: 1,
                                            backgroundColor: 'light.main',
                                            color: 'secondary.main',
                                            '&:hover': {
                                                backgroundColor: 'secondary.main',
                                                color: 'light.main',
                                            },
                                            '&.active': {
                                                backgroundColor: 'secondary.main',
                                                color: 'light.main',
                                            }
                                        }}
                                    >
                                        Créer un compte
                                    </Button>
                                </Link>
                            </StyledBox>
                        </Box>
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default HeaderComponent;