import "./forgot.css"
import { Dialog } from 'primereact/dialog';
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Forgot = () =>{
        const [visible, setVisible] = useState(false);
        const navigate = useNavigate()
    return(
        <>
         <div className="hero bg-base-200 min-h-screen p-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">INICIAR SESION         </h1>
            <p className="py-6">
                Bienvenido de nuevo 
            </p>
            </div>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl ">
            <form>
                <div className="card-body">
                    <fieldset className="fieldset">
                    <label className="label text-lg">Correo Electronico</label>
                    <input type="email" className="input text-lg" placeholder="example@example.com" required/>
                    <button className="btn btn-neutral mt-4 text-lg"><span className={"load"}></span>Login</button>
                    </fieldset>
                </div>
            </form>
            </div>
        </div>
        </div>
        <Dialog className="mod text-amber-50" header="Inicio de Sesion exitoso" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); navigate("/", { replace: true })}}>
            <p className="m-0">
                
            </p>
        </Dialog>
        
        </>
    )
}

export default Forgot