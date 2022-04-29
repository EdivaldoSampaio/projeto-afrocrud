import React from 'react';

import './styles.scss';

function InputBase({ label, placeholder, error, mask, ...rest }, ref) {

  return (
    <label className="input">
      {label}:
      <input 
        className={!!error ? 'error' : undefined}
        type="text" 
        placeholder={placeholder}
        ref={ref}
        onKeyUp={mask}
        {...rest}
      />

      {!!error && <span>{error.message}</span>}

    </label>
  );
}

export const Input = React.forwardRef(InputBase);