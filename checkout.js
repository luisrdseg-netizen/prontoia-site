(() => {
  "use strict";
  const config = window.PRONTOIA_CONFIG || {};
  if (config.salesEnabled !== true) return;
  let checkout;
  try { checkout = new URL(config.checkoutUrl); } catch { return; }
  const email = config.supportEmail;
  if (checkout.protocol !== "https:" || checkout.hostname !== "pay.kiwify.com.br" ||
      !/^\/[A-Za-z0-9_-]+\/?$/.test(checkout.pathname) || checkout.username || checkout.password ||
      checkout.port || typeof email !== "string" || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) return;
  const button = document.getElementById("buy");
  button.href = checkout.href;
  button.hidden = false;
  document.getElementById("status").hidden = true;
  document.getElementById("delivery").textContent = "Após a confirmação do pagamento pela Kiwify, acesse a área de membros para baixar o kit. Guarde o e-mail usado na compra.";
})();
