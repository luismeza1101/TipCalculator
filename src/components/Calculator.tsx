import { useRef } from "react";
import "../styleSheets/Calculator.css";

interface Props {
  theme: string
  isLigth: (theme: string) => boolean
}

const Calculator: React.FC<Props> = ({theme, isLigth}) => {
  const inputTotal = useRef<HTMLInputElement>(null);
  const inputTip = useRef<HTMLSelectElement>(null);
  const inputPeople = useRef<HTMLInputElement>(null);
  const inputBillTotal = useRef<HTMLInputElement>(null);
  const inputPerPerson = useRef<HTMLInputElement>(null);
  const inputTipTotal = useRef<HTMLInputElement>(null);

  const calcularCheck = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const montoTotal = parseFloat(inputTotal.current!.value);
    const montoTip = parseFloat(inputTip.current!.value)
    const peoples = parseFloat(inputPeople.current!.value)

    if(inputTotal.current?.value == '' || montoTotal <= 0){
      alert('Debe completar la factura total o no puede ser menor o igual que 0')
      return
    } 
    if(!(/^\d*\.?\d*$/.test(inputTotal.current!.value))){
      alert('Debes ingresar numeros, no letras, y debe contener solo un punto(el decimal)')
      return
    }
    if(inputTip.current?.value == ''){
      alert('La propina debe ser minimo de un 10%')
      return
    } 

    if(peoples <= 0){
      alert('La cantidad de personas no puede ser menor a 1')
      return
    }
    
    const tipTotal = (montoTotal * montoTip) / 100;
    const totalPay = montoTotal + tipTotal;
    const perPerson = totalPay / peoples;

     inputBillTotal.current!.value = totalPay.toFixed(2).toString();
     inputTipTotal.current!.value = tipTotal.toFixed(2).toString();
     inputPerPerson.current!.value = perPerson.toFixed(2).toString();
  };

  return (
    <section className={isLigth(theme) ? 'calculator': 'calculator calculator__dark'}>
      <form className="form" role="form" onSubmit={calcularCheck}>
        <article className="info bill">
          <label htmlFor="inputBill">Factura Total :</label>
          <div className="info__input">
            $
            <input
              ref={inputTotal}
              type="text"
              id="inputBill"
              aria-label="Ingrese la factura total"
            />
          </div>
        </article>
        <article className="info porcent">
          <label htmlFor="porcentTip">Porcentaje de propina :</label>
          <div className="info__input">
            <select name="porcent" id="porcentTip" ref={inputTip}>
              <option value=""></option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            %
          </div>
        </article>
        <article className="info people">
          <label htmlFor="peoples">Cantidad de personas :</label>
          <input
            ref={inputPeople}
            type="number"
            id="peoples"
            aria-label="Número de personas"
          />
        </article>
        <article className="info total">
          <label htmlFor="montoTotalTip">Monto de la propina :</label>
          <div className="info__input">
            $
            <input
              ref={inputTipTotal}
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
              ref={inputBillTotal}
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
              ref={inputPerPerson}
              type="text"
              readOnly
              id="montoTotalPerPerson"
              aria-label="Monto total por persona"
            />
          </div>
        </article>
        <section className="form__btn">
          <button type="submit" className="btn">
            Calcular
          </button>
          <button type="reset" className="btn">
            Limpiar
          </button>
        </section>
      </form>
    </section>
  );
};

export default Calculator;
