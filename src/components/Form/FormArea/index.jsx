import './styles.scss';

export function FormArea({ children, label }) {
  return (
    <label className="form-area"> 
      {label}:
      <div>{children}</div>
    </label>
  )
}