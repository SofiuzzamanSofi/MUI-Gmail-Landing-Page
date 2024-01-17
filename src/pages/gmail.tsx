import { FC } from 'react';
import PrimarySearchAppBar from './components/Header'
import { Box } from '@mui/material'
import MailContent from './components/MailContent';

interface gmailProps {

};

const gmail: FC<gmailProps> = ({ }) => {
    return (
        <Box className='' sx={{ border: 1 }} color='secondary' bgcolor="primary.dark">
            <PrimarySearchAppBar />
            <MailContent />
        </Box>
    );
};

export default gmail;