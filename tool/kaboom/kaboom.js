kaboom({
	background: [ 107, 176, 99 ],
})

loadSprite("green", "sprites/green-seed.png")
add([
    sprite("green"),
    pos(120, 80),
    scale(0.3),
]);
loadSprite("player", "sprites/farmer.png")
const SPEED = 320
const player = add([
    sprite("player"),
    pos(145,80),
    scale(0.5),
    rotate(0),
    area(),
    body(),
]);
// to go right
onKeyDown("right", () => {
	player.move(SPEED, 0)
})
// to go left
onKeyDown("left", () => {
	player.move(-SPEED, 0)
})
// extra text
add([
    pos(35, 25),
    text("cool!", {
        size: 48,
        width: 320,
    })
])
