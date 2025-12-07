kaboom({
	background: [ 0, 0, 0 ],
})
// create grass background
loadSprite("grass", "/sprites/grass.png");
add([
    sprite("grass"),
    pos(0, 0),
    scale(5),
]);

loadSprite("green", "/sprites/green-seed.png");
const greenSeed = add([
    sprite("green"),
    pos(120, 350),
    scale(0.3),
    area(),
    "seeds",
]);

// when user mouse hovers over a sprite
greenSeed.onHover(() => {
    debug.log("hovering on seed")
    greenSeed.color = GREEN
})

// user unhovers the sprite
greenSeed.onHoverEnd(() => {
    debug.log("unhovered seed")
    greenSeed.color = YELLOW
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
    offscreen({ destroy: true }),
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

player.onCollide("seeds", () => {
    shake(50)
})

// extra text
add([
    pos(35, 25),
    text("cool!", {
        size: 48,
        width: 320,
    })
])

