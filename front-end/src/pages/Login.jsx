import { Link } from "react-router-dom"
const Login = ()=>{
    return(
        <>
            <section className="flex items-center">
                <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
                    <h2 className="text-3xl font-bold">Faça seu Login</h2>
                    <form className="flex flex-col items-center w-full gap-2">
                        <input 
                            type="email"
                            className="w-full rounded-full border border-gray-300 px-4 py-2"
                            placeholder="Digite seu e-mail"
                            required 
                        />
                        <input 
                            type="password"
                            className="w-full rounded-full border border-gray-300 px-4 py-2"
                            placeholder="Digite sua senha"
                            required
                        />
                        <button className="cursor-pointer bg-red-500 w-full rounded-full border border-gray-300 px-4 py-2">
                            <span className="text-white font-bold">Login</span>
                        </button>
                        <p>Ainda não tem conta? <Link to={"/register"}>Registre-se aqui!</Link></p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login