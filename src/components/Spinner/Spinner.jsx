import { Ellipsis } from 'react-awesome-spinners';
import "../../styles/Spinner_stile.css"

const LoadingSpinner = () => {
    return (
        <div className="spinner-container">
            <div className="spinner">
                <Ellipsis size={50} color="#444444" />
            </div>
        </div>
    )
}

export default LoadingSpinner