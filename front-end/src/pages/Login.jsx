import { Link, Navigate } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'


const Login = ({setUser})=>{
    
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = async(e)=>{
        e.preventDefault()

        if(email && password){
            try{
                const { data: userDoc } = await axios.post("/users/login",{
                    email,
                    password
                });
                setUser(userDoc)
                setRedirect(true)
            }catch(error){
                alert(`deu um erro ao logar: ${error.response.data}`)
            }
        }else{
            alert("você precisa preencher o email e a senha");
        }

        if(redirect) return <Navigate to={'/'}/>
    }

    return(
        <>
            <section className="flex items-center">
                <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
                    <h2 className="text-3xl font-bold">Faça seu Login</h2>
                    <form className="flex flex-col items-center w-full gap-2"
                        onSubmit={handleSubmit}
                    >
                        <input 
                            type="email"
                            className="w-full rounded-full border border-gray-300 px-4 py-2"
                            placeholder="Digite seu e-mail"
                            required
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        <input 
                            type="password"
                            className="w-full rounded-full border border-gray-300 px-4 py-2"
                            placeholder="Digite sua senha"
                            required
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                        <button className="cursor-pointer bg-red-500 w-full rounded-full border border-gray-300 px-4 py-2">
                            <span className="text-white font-bold">Login</span>
                        </button>
                        <p>Ainda não tem conta? <Link to={"/register"} className="font-semibold underline">Registre-se aqui!</Link></p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login