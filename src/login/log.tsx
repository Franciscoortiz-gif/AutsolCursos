import "./log.css"
import { useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from "react-router-dom";



function Log(){
    const [user, setUser] = useState('');
    const [password, setPasword] = useState('');
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const navigate = useNavigate()
    const [cookie, setCokies, removeCokies] = useCookies(['user']);
    const [load, setLoad] = useState("loading loading-spinner loading-xs hide")
    async function login(userr,passw) {
        await axios.post("http://localhost:5002/users/login/",{
            us: userr,
            passwo: passw
        })
        .then(res => {
            if(typeof res.data == "object"){
                setCokies("user", JSON.stringify(res.data),{path: "/", maxAge:86400})
                setVisible(true)
                setLoad("loading loading-spinner loading-xs hide")
            }else{
                setVisible2(true)
                setLoad("loading loading-spinner loading-xs hide")
            }
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return(

        <>
        <div className="hero bg-base-200 min-h-screen p-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">INICIAR SESION         </h1>
            <p className="py-6">
                Bienvenido de nuevo {user}
            </p>
            </div>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl ">
            <form onSubmit={ev =>{ev.preventDefault();setLoad("loading loading-spinner loading-xs"); login(user, password)}}>
                <div className="card-body">
                    <fieldset className="fieldset">
                    <label className="label text-lg">Correo Electronico</label>
                    <input type="email" className="input text-lg" placeholder="example@example.com"  value={user} onChange={ev => setUser(ev.target.value)} required/>
                    <label className="label text-lg">Contraseña</label>
                    <input type="password" className="input text-lg" placeholder="******" value={password} onChange={ev => setPasword(ev.target.value)} required/>
                    <div><Link to={"/forgot"} className="text-lg">No recuerdas tu contraseña?</Link></div>
                    <button className="btn btn-neutral mt-4 text-lg"><span className={load}></span>Login</button>
                    <div><Link to={"/register"} className="text-lg">No tienes cuenta? Registrate aqui</Link></div>
                    </fieldset>
                </div>
            </form>
            </div>
        </div>
        </div>
        <Dialog className="mod text-amber-50" header="Inicio de Sesion exitoso" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); navigate("/", { replace: true })}}>
            <p className="m-0">
                Bienvenido de nuevo {user} a autsolcursos
            </p>
        </Dialog>
    
        
        <Dialog className="mod text-amber-50" header="Inicio de sesion Fallido" visible={visible2} style={{ width: '50vw' }} onHide={() => {if (!visible2) return; setVisible2(false); navigate("/Login", { replace: true })}}>
                <p className="m-0">
                    El usuario y/o contraseña ingresados son incorrectos
                </p>
        </Dialog>

        
        </>
    )
}


export default Log