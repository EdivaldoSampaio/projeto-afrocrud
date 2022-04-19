import './styles.scss';

import { ReactComponent as CheckIcon } from '../../../assets/check-icon.svg';

export function Checkbox({ title }) {
  return (
    <label className="checkbox">
      <input type="checkbox" />
      <span>
        <CheckIcon />
      </span>
      
      {title}
    </label>
  );
}