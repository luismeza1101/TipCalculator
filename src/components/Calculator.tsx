import '../styleSheets/Calculator.css'

const Calculator = () => {
  return (
    <section className='calculator'>
        <form className='form'>
            <div>
              <label htmlFor="inputBill">Factura Total: </label>
              <input type="number" id="inputBill"/>
            </div>
            <label htmlFor="porcentTip">Porcentaje de propina <input type="number" id="porcentTip"/> %</label>
            <div>
              <label htmlFor="montoTotal">Monto Total: </label>
              <input type="text" readOnly id="montoTotal"/>
            </div>
            <input type="submit" value={'Calcular'}/>
        </form>
    </section>
  )
}

export default Calculator
