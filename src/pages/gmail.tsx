import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PrimarySearchAppBar from './components/Header'
import ResponsiveAppBar from './components/Navbar'
import { Box } from '@mui/material'

interface gmailProps {

};

const gmail: FC<gmailProps> = ({ }) => {
    return (
        <Box className='' sx={{ border: 1 }}>
            <PrimarySearchAppBar />
            <ResponsiveAppBar />
            <div>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </div>
        </Box>
    );
};

export default gmail;