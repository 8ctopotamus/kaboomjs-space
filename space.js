kaboom({
  global: true,
  fullscreen: true,
  clearColor: [0, 0, 0, 1],
})

const baseURL = `${window.location.origin}${window.location.pathname}`
loadRoot(`${baseURL}assets/`)
loadSprite('ship', '/spaceShips_009.png')

const angle2Vec2 = angleRadians => {
  const x = Math.cos(angleRadians)
}

scene("main", () => {
  const ship = add([
    sprite('ship'),
    pos(width() * 0.5, width() * 0.5),
    rotate(0),
    origin('center'),
  ])

  keyDown('left', () => {
    let deg = rad2deg(ship.angle)
    deg += 5
    ship.angle = deg2rad(deg)
  })

  keyDown('right', () => {
    let deg = rad2deg(ship.angle)
    deg -= 5
    ship.angle = deg2rad(deg)
  })
})

start("main")