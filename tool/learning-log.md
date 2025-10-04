# Tool Learning Log

## Tool: **Kaboom**

## Project: **Garden**

---

### 9/29/25: Learning Log 1 | Sprites
* I learned about how to **add sprites** by using [Kaboom](https://kaboomjs.com/).

#### Loading Sprite:
 * We use the `loadSprite()` function to load our image to become a declared sprite that we can use in the game.
  *  You have to load your sprite **before** you can add the sprite to the game.
  *In this function we add in quotations the **name of the sprite** and the folder your image is in with the image or if there is no folder just the **name of the image**.
```JS
loadSprite("green", "sprites/green-seed.png")
```
#### Adding Sprite:
 * To add the sprite we use `add()` to the sprite.
 * `add()` can also use add for _other properties_ like
  *  **Position** of the sprite
  *  The **size** of the sprite
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


<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
