import React, { useState } from 'react';
import { ToggleButton } from '@material-ui/lab';
import './ball.css'

export default function SelectedItem (props) {
const { number, selected, onSelectionChange } = props

return (
    <ToggleButton 
      selected={selected}
      value={selected}
      onChange={() => {
        onSelectionChange({number, selected: !selected});
      }} 
      className='numberCircle'
    >
        { number }
    </ToggleButton> 
 )
}