import './styles.scss';

export function RadioButton({ title, name }) {
  return (
    <label className="radio-button">
      <input name={name} type="radio" />
      <span />
      {title}
    </label>
  );
}