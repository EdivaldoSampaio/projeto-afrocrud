import './styles.scss';

export function Input({ label, placeholder }) {
  return (
    <label className="input">
      {label}:
      <input 
        type="text" 
        placeholder={placeholder}
      />
    </label>
  );
}