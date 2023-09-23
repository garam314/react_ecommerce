import { SwalContext } from "./SwalContext";
import Swal from "sweetalert2";


const SwalProvider = ({ children }) => {

    const question_yesno = (props) => {
        return new Promise((resolve) => {
            const { title, text } = props
            Swal.fire({
                title: title,
                text: text,
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Eliminado",
                        text: "Producto quitado del Carro.",
                        icon: "success",
                        toast: true,
                        showConfirmButton: false,
                        position: 'bottom-end',
                        timer: 2000
                    });
                    resolve(true)
                }
                else resolve(false)
            })
        })

    }

    const information = (props) => {
        return new Promise((resolve) => {
            const { title, text } = props
            Swal.fire({
                title: title,
                text: text,
                icon: "success",
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 2000
            })
        })
    }

    return (
        <SwalContext.Provider value={{ question_yesno, information }}>
            {children}
        </SwalContext.Provider>
    )

}


export default SwalProvider