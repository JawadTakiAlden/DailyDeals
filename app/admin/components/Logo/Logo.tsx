import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Typography sx={{
        fontSize : '20px',
        "& .spicial-word" : {
            fontFamily : 'cursive',
            color : 'primary.dark'
        }
    }} component={Link} href={'/admin/home'}>
        Daily <span className='spicial-word'>Deals</span>
    </Typography>
  )
}

export default Logo