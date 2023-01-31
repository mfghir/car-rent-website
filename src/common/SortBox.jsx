import { Checkbox } from '@material-tailwind/react'
import React from 'react'

const SortBox = ({item}) => {
  return (
    <div>
        <Checkbox label={item} />
    </div>
  )
}

export default SortBox