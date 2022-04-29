import React from 'react';

import './styles.scss';

function SelectBase({...rest }, ref) {
    return (
        <label className="select">
        Departamento:
        <select ref={ref} {...rest}>
            <option value="Financeiro">Financeiro</option>
            <option value="Marketing">Marketing</option>
            <option value="Suporte">Suporte</option>
            <option value="Desenvolvimento">Desenvolvimento</option>
        </select>
        </label>
    )
}

export const Select = React.forwardRef(SelectBase);