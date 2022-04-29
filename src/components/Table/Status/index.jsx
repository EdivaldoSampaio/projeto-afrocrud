import './styles.scss';

export function Status({ isActive }) {
    
return (
    <div className={isActive ?'status-active' : 'status-inactive'}> 

     <p>{isActive ? 'Ativo' : 'Inativo'}</p>

    </div>
)

}