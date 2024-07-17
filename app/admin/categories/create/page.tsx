"use client"
import { Box, Typography } from '@mui/material'
import { Formik } from 'formik'
import React from 'react'
import CategoryForm from './components/CategoryForm'

interface Props {
  searchParams : {
    task : 'create' | 'edit'
    categoryId? : number
    redierctURL : string
  }
}

const CreateCategory = () => {
  
  return (
    <Box
      sx={{
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        minHeight : 'calc(100vh - 60px)',
      }}
    >
      <Box
        sx={{
          width : {xs : '100%' , sm : '80%' , md : '70%' , lg : '50%'},
          borderRadius : '6px',
        }}
      >
        <Typography mb={2}>
          Create new category
        </Typography>
        <CategoryForm />
      </Box>
    </Box>
  )
}

export default CreateCategory