import React from "react";
import "../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This orders contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        thousandSeparator={true}
        displayType={"text"}
        prefix="R$ "
      />

      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
