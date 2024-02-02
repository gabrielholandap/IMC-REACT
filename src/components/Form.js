import { useState } from "react"
import "./FormStyle.css"

function Form() {

    const [peso, setPeso] = useState()
    const [pesoReal, setPesoReal] = useState()

    const [altura, setAltura] = useState()
    const [alturaReal, setAlturaReal] = useState()

    const IMC = pesoReal / (alturaReal * alturaReal)

    

    function RegrasImc() {
        if (IMC <= 18.4) {
            return (
                <p>Abaixo do peso</p>
            )
        }
        if (IMC > 18.4 && IMC <= 24.9 ) {
            return (
                <p>Peso ideal</p>
            )
        }
        if (IMC >= 25 && IMC <= 29) {
            return (
                <p>Sobrepeso</p>
            )
        }
        if (IMC >= 30 && IMC <= 34.9) {
            return (
                <p>Obesidade Grau 1</p>
            )
        }
        if (IMC >= 35 && IMC <= 39.9) {
            return (
                <p>Obesidade Grau 2</p>
            )
        }
        if (IMC >= 40) {
            return (
                <p>Obesidade Grau 3</p>
            )
        }
    }

    return (
        <form onSubmit={
        (e) => {e.preventDefault()
        setPesoReal(peso)
        setAlturaReal(altura)}} className="container">
            <input type="number" value={peso} placeholder="Digite seu peso em kg" required onChange={(e) => {setPeso(e.target.value)}}/>
            <input type="number" value={altura} step="0.01" placeholder="Digite sua altura em metros" required onChange={(e) => {setAltura(e.target.value)}}/>
            <input type="submit" value="Calcular"/>
            <p>Seu IMC é: {IMC}</p>
            {RegrasImc()}
        </form>
    )
}

export default Form