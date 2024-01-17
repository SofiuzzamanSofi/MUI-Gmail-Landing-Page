import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PrimarySearchAppBar from './components/Header'
import ResponsiveAppBar from './components/Navbar'
import { Box } from '@mui/material'
import MailContent from './components/MailContent';
import ClippedDrawer from './components/MailPara';

interface gmailProps {

};

const gmail: FC<gmailProps> = ({ }) => {
    return (
        <Box className='' sx={{ border: 1 }} color='secondary' bgcolor="primary.dark">
            <div style={{ position: "relative" }}>
                <PrimarySearchAppBar />
                {/* <MailContent /> */}
                <ClippedDrawer />
            </div>
        </Box>
    );
};

export default gmail;