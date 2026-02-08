# Entry 3
##### 2/2/26

### Content
I have been learning my tool, [Kaboom.js](http://kaboomjs.com/), and focused on _collisions with adding texts_. Using `.onCollide()` this will allow a specific sprite that once it collides to another sprite, the screen will shake using `shake()`. Using `shake()` I can adjust the intensity of the screen shaking from low to high through numbers. I learned that to add a text is similar to adding a sprite with similar features except the text will be using `text()`. By putting `add()` inside `.onCollide()` will allow the text to be added once the collide occurs. The text can be changed to anything and can be positioned through an (x, y) system with the size that can be adjusted to how big the text will be.
```JS
player.onCollide("seeds", () => {
    shake(50)
    add([
        pos(100, 125),
        text("WOAH", {
            size: 48,
        })
    ])
})
```
This code shows that once the _player_ sprite touches the _seed_ sprite, the screen will shake with an intensity of 50 and the text "WOAH" appearing on the screen.

What I want to learn about my tool going forward is scene background and creating multiple scenes to create a functioning game. I read on the [Kaboom.js](http://kaboomjs.com/) website in the "scene" section with `scene()` and `go()`, which means going to a specific scene. This will take some time to learn since I want to handle multiple scenes and figure out how to use `go()` to head to those specific scenes.
### Engineering Design Process
The engineering design process is on _step three_ with brainstorming possible solutions. These possible solutions can be incorporated into the game with the problem on the topic of people having a hard time with decision making. I can think of ways that can help make the user make choices that they want and have a variety of selections open to them for my game. An example can be a user picking out something specific that they want, like a color or a number in the game.
### Skills
I learned to **be aware of time management** because during the break I felt I did not accomplish my goal before the break to learn my tool to the full extent about mainly the background with using`scene()` and `go()` to learn to create different scenes that will start the game. However, I will stay determined to figure out these code functions to incorporate into my project. Another skill would be improving my **self awareness** because I recognize I was not using my time wisely but knowing this information will help me strive to move forward and learn more about my tool.

[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)
