import './styles.scss';

export function Shape({ children }) {
  return (
    <div className="shape">
      {children}
    </div>
  );
}