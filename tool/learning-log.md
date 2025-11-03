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

<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
