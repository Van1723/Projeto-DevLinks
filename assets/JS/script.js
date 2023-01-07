function Tagglemode() {
  // mudando cor de fundo//
  const html = document.documentElement
  if (html.classList.contains("Light")) {
    html.classList.remove("Light")
  } else {
    html.classList.add("Light")
  }
  // Mudando foto de perfil //
  const img = document.querySelector("#Profile img")
  if (html.classList.contains("Light")) {
    img.setAttribute("src", "./assets/img/avatar.light.jpg")
  } else {
    img.setAttribute("src", "./assets/img/avatar.png")
  }
}
