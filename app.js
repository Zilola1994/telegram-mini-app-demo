(() => {
  const webApp = window.Telegram?.WebApp;
  const greeting = document.querySelector("#greeting");
  const alertButton = document.querySelector("#alert-button");

  if (!webApp) {
    greeting.textContent = "ブラウザで表示中です。Telegram から開くと機能を利用できます。";
    alertButton.addEventListener("click", () => window.alert("Telegram Mini App デモ"));
    return;
  }

  webApp.ready();
  webApp.expand();

  const theme = webApp.themeParams || {};
  const themeVariables = {
    "--tg-bg-color": theme.bg_color,
    "--tg-text-color": theme.text_color,
    "--tg-hint-color": theme.hint_color,
    "--tg-button-color": theme.button_color,
    "--tg-button-text-color": theme.button_text_color,
    "--tg-secondary-bg-color": theme.secondary_bg_color,
  };

  Object.entries(themeVariables).forEach(([name, value]) => {
    if (value) document.documentElement.style.setProperty(name, value);
  });

  const user = webApp.initDataUnsafe?.user;
  if (user) {
    const displayName = [user.first_name, user.last_name].filter(Boolean).join(" ");
    greeting.textContent = displayName
      ? `${displayName} さん、ようこそ！`
      : "ようこそ！";
  }

  alertButton.addEventListener("click", () => {
    if (typeof webApp.showAlert === "function") {
      webApp.showAlert("Telegram Mini App デモです！");
    } else {
      window.alert("Telegram Mini App デモです！");
    }
  });

  if (webApp.MainButton) {
    webApp.MainButton.setText("閉じる");
    webApp.MainButton.onClick(() => webApp.close());
    webApp.MainButton.show();
  }
})();
