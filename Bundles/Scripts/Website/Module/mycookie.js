setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) value = val.substring(name.length);
    })
    return value;
}

document.querySelector(".iubenda-cs-reject-btn").addEventListener("click", () => {
    setCookie("cookie", false, 30);
    document.querySelector('#iubenda-cs-banner').style.setProperty('display', 'none', 'important');
  });
document.querySelector(".iubenda-cs-accept-btn").addEventListener("click", () => {
//   console.warn('first')
  setCookie("cookie", true, 30);
//   console.log(document.cookie);
  document.querySelector('#iubenda-cs-banner').style.setProperty('display', 'none', 'important');
});
cookieMessage = () => {
    // console.warn('first cokkies message')
    if (!getCookie("cookie")) {
        console.warn('first inside if')
      document.querySelector('#iubenda-cs-banner').style.setProperty('display', 'block', 'important');
    }
}

window.addEventListener("load", cookieMessage);


