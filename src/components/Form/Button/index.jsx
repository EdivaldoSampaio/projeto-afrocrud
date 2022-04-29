import './styles.scss';
import { ReactComponent as ArrowRightIcon} from '../../../assets/arrow-right-icon.svg';
import { ReactComponent as PlusIcon} from '../../../assets/plus-icon.svg';


const icons = {
arrowRight: <ArrowRightIcon />,
plus: <PlusIcon />

}


export function Button ({title, icon, onClick}) {
    return (
        <button
         className="button"
         onClick={onClick}   
        >
            {title}{icons[icon]}
            </button>
    );
}