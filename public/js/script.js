const pin = document.querySelector("#pin");
const botName = document.querySelector("#name");
const amount = document.querySelector("#amount");
const message = document.querySelector("#message");

async function spamBots() {
  console.log("Working...", {
    botName: botName.value,
    pin: pin.value,
    amount: amount.value,
  });
  if (isNaN(pin.value)) return setMessage("Please give a valid pin", true);
  if (!botName.value.length)
    return setMessage("Please give a valid name", true);
  if (isNaN(amount.value))
    return setMessage("Please give a vaild amount", true);

  setMessage("Spamming Bots...");
  await fetch(
    `/spam?name=${botName.value}&amount=${amount.value}&pin=${pin.value}`,
    {
      method: "POST",
    }
  ).catch((e) => setMessage(e.message, true));
  setMessage("Spammed Bots!");
}

function setMessage(msg, error) {
  if (error) message.style["color"] = "red";
  else message.style["color"] = "black";
  message.innerText = msg;
}
