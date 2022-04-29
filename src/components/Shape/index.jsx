import './styles.scss';

export function Shape({ children, className ='' }) {
  return (
    <div className={`shape ${className}`}>
      {children}
    </div>
  );
}