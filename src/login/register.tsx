import "./register.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";
import { Dialog } from 'primereact/dialog';


const Register = () =>{
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [load, setLoad] = useState("")
    const navigate = useNavigate();
    async function registro(userr, passw, names) {
    await axios.post("http://localhost:5002/users/regist/valid/", {
        email: userr,
        user_name: names,
        User_password: passw
        }).then(res => {
            console.log(res.data)
            if(res.data == 200){setVisible(true)}else{setVisible2(true)}
            setLoad("loading loading-spinner loading-xs hide") 
        })
        .catch(errorr =>{
            console.error('Error:' + errorr.message)
        })
    }
    
    return(
        <>
        <div className="hero bg-base-200 min-h-screen p-0">
        <div className="hero-content flex-col lg:flex-row-reverse">

            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold p-5">REGISTRO         </h1>
            <p className="py-6 p-5">
                Bienvenido al portal de cursos de Autsol {name}
            </p>
            </div>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl ">
            <form onSubmit={ev => {ev.preventDefault();setLoad("loading loading-spinner loading-xs"); registro(user, password, name);}}>
                <div className="card-body">
                    <fieldset className="fieldset">
                    <label className="label text-lg">Usuario</label>
                    <input type="text" className="input text-lg" placeholder="nombre de usuario" value={name} onChange={ev =>  setName(ev.target.value)} required/>
                    <label className="label text-lg">Correo Electronico</label>
                    <input type="email" className="input text-lg" placeholder="example@example.com" value={user} onChange={ev =>  setUser(ev.target.value)} required/>
                    <label className="label text-lg">Contraseña</label>
                    <input type="password" className="input text-lg" placeholder="******" value={password} onChange={ev => setPassword(ev.target.value)} required/>
                    <button className="btn btn-neutral mt-4 text-lg"><span className={load}></span>Registrarme</button>
                    <div className="m-5"><Link to={"/login"} className="text-lg p-5">Ya tienes cuenta?</Link></div>
                    </fieldset>
                </div>
               
            </form>
             
            </div>
        </div>
        </div>
           
                <Dialog className="mod" header="Registro exitoso" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); navigate("/Login", { replace: true })}}>
                    <p className="m-0">
                        El Registro se ha realizado con exito {name}
                    </p>
                </Dialog>
            
             
                <Dialog className="mod" header="Registro sin exito" visible={visible2} style={{ width: '50vw' }} onHide={() => {if (!visible2) return; setVisible2(false); navigate("/Register", { replace: true })}}>
                        <p className="m-0">
                            El correo {user} que esta intentado registrar ya existe
                        </p>
                </Dialog>
             
        </>
    )
}

export default Register