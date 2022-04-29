import React from 'react';

import './styles.scss';

import { ReactComponent as CheckIcon } from '../../../assets/check-icon.svg';

function CheckboxBase({ title, ...rest }, ref) {
  return (
    <label className="checkbox">
      <input type="checkbox" ref={ref} {...rest} />
      <span>
        <CheckIcon />
      </span>
      
      {title}
    </label>
  );
}

export const Checkbox = React.forwardRef(CheckboxBase)