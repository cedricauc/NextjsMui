import * as React from 'react';
import {Box} from '@mui/material'
import Welcome from './welcome'
import News from './news'
import Games from './games'
import About from './about'

function HomeComponent() {
    return (
        <Box component="main" position="static">
            <Box
                component="section"
                id="welcome"
                position="static"
                sx={{backgroundColor: 'black.main'}}
            >
                <Welcome></Welcome>
            </Box>
            <Box
                component="section"
                id="news"
                position="static"
                sx={{backgroundColor: 'primary.main', pt: 10, pb: 10}}
            >
                <News></News>
            </Box>
            <Box
                component="section"
                id="games"
                position="static"
                sx={{backgroundColor: 'light.main', pt: 10, pb: 10}}
            >
                <Games></Games>
            </Box>
            <Box
                component="section"
                id="about"
                position="static"
                sx={{backgroundColor: 'about.main', pb: 30}}
            >
                <About></About>
            </Box>
        </Box>
    )
}

export default HomeComponent
