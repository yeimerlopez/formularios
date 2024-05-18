import { useForm } from 'react-hook-form'

const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const ValSubmit = (data) => console.log(data)
    return (
        <>
            <h2 className='text-center'>Bienvenido Inicia sesion</h2>
            <form onSubmit={handleSubmit(ValSubmit)}>

                <div className="mb-3">
                    <label className="fw-bold">Email address</label>
                    <input className="form-control"
                        {...register("correo", {
                            required: {
                                value: true,
                                message: "El correo es requerido"
                            },
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "El correo no es valido"
                            }
                        })} />
                    {errors.correo && (<span className='text-danger'>{errors.correo.message}</span>)}
                </div>

                <div className="mb-3">
                    <label className="fw-bold">Password</label>
                    <input type="password" className="form-control"
                        {...register("contraseña", {
                            required: {
                                value: true,
                                message: "La contraseña es requerida"
                            },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                message: "La contraseña no es valida"
                            }
                        })} />
                    {errors.contraseña && <span className='text-danger'>{errors.contraseña.message}</span>}
                </div>

                <div className="d-flex flex-column mt-4">
                    <button className="btn btn-primary"> Iniciar </button>
                </div>

            </form>

        </>
    )
}

export default LoginForm;