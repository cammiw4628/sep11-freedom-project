# Tool Learning Log

## Tool: **Kaboom**

## Project: **Garden**

---

### 9/29/25: Learning Log 1 | Sprites
* I learned about how to **add sprites** by using [Kaboom](https://kaboomjs.com/).

#### Loading Sprite:
 * We use the `loadSprite()` function to load our image to become a declared sprite that we can use in the game.
  *  You have to load your sprite **before** you can add the sprite to the game.
 * In this function we add in quotations the **name of the sprite** and the folder your image is in with the image or if there is no folder just the **name of the image**.
```JS
loadSprite("green", "sprites/green-seed.png")
```
#### Adding Sprite:
 * To add the sprite we use `add()` to the sprite.
 * `add()` can also use add for _other properties_ like
   *   **Position** of the sprite
   *   The **size** of the sprite
 * Use `sprite()` to declare the sprite you are using.
 * `pos()` is used for the `(x, y)` of where you want the sprite to be located at
 * `scale()` is to determine the size of the sprite.
   *  Make sure it is inside the `add()` function
 ```JS
add([
    sprite("green"),
    pos(120, 80),
    scale(0.5)
]);
 ```
 * Keep in mind that you need a comma`,` after every function inside add or else the game might bug.
   *  No need for comma on the last function because there is no other function after it.

### 10/27/25: Learning Log 2
 * I learned how to **move a sprite/player** using the arrow keys.
   *   I used [Kaboom](https://kaboomjs.com/) playground features to understand the code of the movements to incorporate into my own project.
#### Movement
 * The usage of `onKeyDown()` allows us to specify and define the direction we are going too. We name the direction like "right" or "up" to define exactly which direction is being used.
 * `player.move()` is used to determine which sprite is moving.
   *   In this case, player is the sprite that will be moving and is named "player", which will be the dominant sprite.
 * Inside the paranthesis will be what will determine where the sprite moves.
 #### Directions
 To go from left and right is different from up and down but they are very similar to each other. The right and left have the same code but left has a `-` to depict that it is left.
 * `SPEED, 0` moves the sprite right
 * `-SPEED, 0` moves the sprite left.
However, moving up and down is different with the `SPEED` and `0` being swapped.
 * `0, -SPEED` is to go up
 * `0, SPEED` is to go down
To explain this since `SPEED` is on the x-axis for the right and left, it will be moving only on the x-axis.
 * `-` is negative, so left will be moving with that sign.
For up and down, `SPEED` is on the y-axis and move only on the y-axis.
 * `-` up will be moving with that sign.

### 11/16/25: Learning Log 3
 * Today I learned about components of hovering over an item
  * [Kaboom](http://kaboomjs.com/) displays two features that allow us hover over a sprite and end a hover
#### Hover
 * `onHover()` is a line of code that is displayed next to the sprite you want the hovering to occur on when the user's mouse is on the sprite
 * Using this feature you can change the sprites color to recognize when you are hovering

```JS
greenSeed.onHover(() => {
    debug.log("hovering on green seed")
    greenSeed.color = YELLOW
})
```
 * In this code, when the user hovers over the `greenSeed` the sprite will turn **yellow.**
 * A message will be displayed on the bottom to inform the user what they are hovering over
#### Unhover
 * `onHoverEnd()` is when the user's mouse is no longer hovering over the sprite
 * So when you hover and then move your mouse to another location that is not the sprite, this can allow the sprite to change color again
```JS
greenSeed.onHoverEnd(() => {
    debug.log("unhovered green seed")
    greenSeed.color = GREEN
})
```
 * In the code above, when the user stops hovering the sprite, the sprite will turn to the color **green** instead of **yellow.**


<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
