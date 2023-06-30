const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  ""
);

// app config
const app = express();
// middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// api router
app.get("/", (request, response) => response.status(200).send("hello, world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment req recievied BOM", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });
  //ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// app.listen(3001, () => {
//   console.log("Servidor rodando em http://localhost:3001");
// });

// listen command
exports.api = functions.https.onRequest(app);

//example endpoint
//http://127.0.0.1:5001/website-b9c42/us-central1/api
