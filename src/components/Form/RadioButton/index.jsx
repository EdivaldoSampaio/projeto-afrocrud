
import React from 'react';

import './styles.scss';

 function RadioButtonBase({ title, name, ...rest }, ref) {
  return (
    <label className="radio-button">
      <input name={name} type="radio" ref={ref} {...rest}/>
      <span />
      {title}
    </label>
  );
}

export const RadioButton = React.forwardRef(RadioButtonBase)