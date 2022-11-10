import React from 'react';
import { Grid, TextField, InputAdornment, IconButton } from '@material-ui/core';
import { GrFormView, GrFormViewHide } from 'react-icons/gr';

const Fields = ({ half, name, label, type, autoFocus, handleOnChange, handlePassword }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField 
        name={name}
        label={label}
        variant="outlined"
        onChange={handleOnChange}
        fullWidth
        required
        autoFocus={autoFocus}
        type={type}
        InputProps={name === 'password' && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handlePassword} >
                {type === 'password' ? <GrFormView /> : <GrFormViewHide />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Grid>
  )
}

export default Fields;