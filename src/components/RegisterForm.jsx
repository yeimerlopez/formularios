import { useForm } from "react-hook-form";

const RegisterForm = () => {

    const { register, handleSubmit } = useForm();

    const ValSubmit = (data) => console.log(data)

    return (

        <>
            <div>
                <h2>Formulario de registro</h2>
                <form onSubmit={handleSubmit(ValSubmit)}>

                    <div className="mb-3">
                        <label className=" fw-bold">Nombres</label>
                        <input className="form-control" type="text" {...register("nombres")} />
                    </div>
                    <div className="mb-3">
                        <label className=" fw-bold">Apellidos</label>
                        <input className="form-control" type="text" {...register("apellidos")} />
                    </div>
                    <div className="mb-3">
                        <label className=" fw-bold">Direccion</label>
                        <input className="form-control" type="text" {...register("direccion")} />
                    </div>
                    <div className="mb-3">
                        <label className=" fw-bold">Telefono</label>
                        <input className="form-control" type="number" {...register("telefono")} />
                    </div>
                    <div className="mb-3">
                        <label className=" fw-bold">Pais</label>
                        {/* < input className="form-control" type="text" /> */}
                        <select className="form-select" {...register("pais")} >
                            <option value="Colombia">Selecione un pais</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Peru">Peru</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Chile">Chile</option>
                        </select>
                    </div >
                    <div className="mb-3">
                        <label className=" fw-bold">Contraseña</label>
                        <input className="form-control" type="password" {...register("contraseña")} />
                    </div>
                    <div>
                        <input type="submit" value={"Registrar"} />
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegisterForm;
