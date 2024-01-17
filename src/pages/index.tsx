import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Button, Fab, Stack } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import NavigationIcon from '@mui/icons-material/Navigation';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export default function Home() {
  return (
    <Stack
      style={{
        border: "1px solid gray",
        minHeight: "100vh",
        // overflow: 'hidden',
        // margin: "-10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/gmail"
      >
        <Fab variant="extended">
          Navigate to Gmail
          <ArrowCircleRightOutlinedIcon sx={{ m: 1 }} />
        </Fab>
      </Link>
    </Stack >
  )
}
