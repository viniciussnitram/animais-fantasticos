export default function iniFetchBitcoin() {
  const url = "https://blockchain.info/ticker";

  fetch(url)
    .then((response) => response.json())
    .then((bitcoinJSON) => {
      const btcPrice = document.querySelector(".btc-price");
      btcPrice.innerText = (1000 / bitcoinJSON.BRL.sell).toFixed(4);
    })
    .catch((error) => console.log(Error(error)));
}
