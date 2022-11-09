let isIgnite = false
function changeCard(event) {
  const card = event.currentTarget
  const bg = isIgnite ? "explorer" : "ignite"
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(./assets/img/bg-${bg}.svg)`
}