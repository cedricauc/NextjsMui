import * as React from 'react';
import {Box, Container, Typography, Grid} from '@mui/material'
import aboutUs from '../../assets/img/about-us.jpg'

export default function About() {
    return (
        <Box
            component="div"
            sx={{
                backgroundColor: 'dark.main',
                backgroundImage: `url(${aboutUs.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                height: '100vh',
                transform: 'scaleX(-1)',
            }}
        >
            <Container
                sx={{
                    transform: 'scaleX(-1)',
                    height: '100%',
                }}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6}></Grid>
                    <Grid item xs={12} sm={6}>
                        <Box
                            component="div"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                margin: '80px 0',
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{color: 'light.main'}}
                                gutterBottom
                            >
                                Qui sommes-nous?
                            </Typography>
                        </Box>
                        <Box component="div">
                            <Typography sx={{color: 'light.main', textAlign: 'left'}}>
                                Editeur de jeux en ligne alternatif par navigateur présent sur
                                internet depuis 2008, Spiderwolf s&apos;est spécialisé dans les jeux
                                en ligne gratuits par navigateur alternatif. Spiderwolf présente
                                une suite de jeux en ligne alternatif par navigateur différent
                                les uns des autres permettant à chacun de trouver son bonheur.
                            </Typography>
                            <Typography
                                sx={{color: 'light.main', textAlign: 'left', mt: 4}}
                            >
                                Les jeux en ligne alternatifs par navigateur c&apos;est quoi ?
                            </Typography>
                            <Typography sx={{color: 'light.main', textAlign: 'left'}}>
                                Les trois piliers :
                            </Typography>
                            <Typography
                                sx={{color: 'light.main', textAlign: 'left', ml: 2}}
                            >
                                - Pas de logiciel a télécharger ou installer. Un simple
                                navigateur Internet suffit.
                            </Typography>
                            <Typography
                                sx={{color: 'light.main', textAlign: 'left', ml: 2}}
                            >
                                - Accessible gratuitement.
                            </Typography>
                            <Typography
                                sx={{color: 'light.main', textAlign: 'left', ml: 2}}
                            >
                                - Développés par passion hors des gros majors.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
