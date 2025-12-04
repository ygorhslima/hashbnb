import { Link, Navigate } from "react-router-dom"
import { useState } from "react"
//import axios from 'axios'


const Register = ()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [redirect, setRedirect] = useState(false)

    // const handleSubmit = async(e)=>{
    //     e.preventDefault()

    //     if(email && password){
    //         try{
    //             const { data: userDoc } = await axios.post("/users/Registro",{
    //                 email,
    //                 password
    //             });
    //             setUser(userDoc)
    //             setRedirect(true)
    //         }catch(error){
    //             alert(`deu um erro ao logar: ${error.response.data}`)
    //         }
    //     }else{
    //         alert("você precisa preencher o email e a senha");
    //     }

    //     if(redirect) return <Navigate to={'/'}/>
    // }

    return(
        <>
            <section className="flex items-center">
                <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
                    <h2 className="text-3xl font-bold">Faça seu Cadastro</h2>
                    <form className="flex flex-col items-center w-full gap-2"
                        onSubmit={""}
                    >
                        <input 
                            type="text"
                            className="w-full rounded-full border border-gray-300 px-4 py-2"
                            placeholder="Digite seu nome"
                            required
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                        />

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
                            <span className="text-white font-bold">Registrar</span>
                        </button>
                    </form>
                    <p>
                        já tem uma conta? {""}
                        <Link to={"/login"} className="font-semibold underline">
                            logue aqui!
                        </Link>
                    </p>
                </div>
            </section>
        </>
    )
}

export default Register