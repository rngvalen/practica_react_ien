import { useState } from "react";

function About(){
    const [mostrarMas, setMostrarMas] = useState(false);

    return(
        <section>
            <h2 className="text-2xl font-bold">Sobre mi</h2>
            <p>soy desarrollador web con interres en PHP laravel python</p>
            (mostrarMas &&(
                <p>me interesa solucionar cosas digitales</p>
            ))
            <button onClick={()=>setMostrarMas(!mostrarMas)}>
                {mostrarMas? "Ver menos": "Ver mas"}
            </button>
        </section>
    );
}

export default About 