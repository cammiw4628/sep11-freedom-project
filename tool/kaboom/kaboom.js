kaboom({
	background: [ 107, 176, 99 ],
})

loadSprite("green", "sprites/green-seed.png")
const greenSeed = add([
    sprite("green"),
    pos(120, 350),
    scale(0.3),
    area(),
]);

// when user mouse hovers over a sprite
greenSeed.onHover(() => {
    debug.log("hovering on green seed")
    greenSeed.color = YELLOW
})
// user unhovers the sprite
greenSeed.onHoverEnd(() => {
    debug.log("unhovered green seed")
    greenSeed.color = GREEN
})

// create player sprite
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
// to go up
onKeyDown("up", () => {
	player.move(0, -SPEED)
})
// to go down
onKeyDown("down", () => {
	player.move(0, SPEED)
})
// extra text
add([
    pos(35, 25),
    text("cool!", {
        size: 48,
        width: 320,
    })
])
