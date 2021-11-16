import React from 'react';
import * as Icons from '../../themes/icons'

const Icon = (props) => {
  const {type, color, onClick, className} = props
  const IconJSX = Icons[type]

  if (!IconJSX) return null

  return (
    <span onClick={onClick}>
      {IconJSX({
        color: color,
        className: className
      })}
    </span>
  );
}

export default Icon;