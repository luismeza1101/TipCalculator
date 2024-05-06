import "../styleSheets/Calculator.css";

const Calculator = () => {
  return (
    <section className="calculator">
      <form className="form" role="form">
        <article className="info bill">
          <label htmlFor="inputBill">Factura Total :</label>
          <div className="info__input">
            $
            <input
              type="number"
              id="inputBill"
              aria-label="Ingrese la factura total"
            />
          </div>
        </article>
        <article className="info porcent">
          <label htmlFor="porcentTip">Porcentaje de propina :</label>
          <div className="info__input">
            <input
              type="number"
              id="porcentTip"
              max={100}
              aria-label="Ingrese el porcentaje de propina"
            />
            %
          </div>
        </article>
        <article className="info people">
          <label htmlFor="peoples">Cantidad de personas :</label>
          <input
            type="text"
            id="peoples"
            aria-label="Número de personas"
          />
        </article>
        <article className="info total">
          <label htmlFor="montoTotalTip">Monto de la propina :</label>
          <div className="info__input">
            $
            <input
              type="text"
              readOnly
              id="montoTotalTip"
              aria-label="Monto total de la propina"
            />
          </div>
        </article>
        <article className="info total">
          <label htmlFor="montoTotal">Monto Total :</label>
          <div className="info__input">
            $
            <input
              type="text"
              readOnly
              id="montoTotal"
              aria-label="Monto total con propina"
            />
          </div>
        </article>
        <article className="info total">
          <label htmlFor="montoTotalPerPerson">Total por persona :</label>
          <div className="info__input">
            $
            <input
              type="text"
              readOnly
              id="montoTotalPerPerson"
              aria-label="Monto total por persona"
            />
          </div>
        </article>
        <section className="form__btn">
          <button type="button" className="btn">Calcular</button>
          <button type="reset" className="btn">Limpiar</button>
        </section>
      </form>
    </section>
  );
};

export default Calculator;
