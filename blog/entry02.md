# Entry 2
##### 12/20/25

### Content
I have been learning my tool in [kaboom.js](../tool/kaboom/kaboom.js) and have used the websites guidance when learning about different factors I can use in Kaboom. Using [Kaboom](https://kaboomjs.com/) I learned about `hovering` and `unhovering` with color features from Kaboom. This means that when a user's mouse is hovering over an sprite, the sprite can change colors and when a sprite is unhovered the color can change or go back to normal.       
With `.onHover()` this detects the sprite when the mouse is placed on it and with `.color` the color when hovered can be changed. In this case my sprite will have the color **green** when the mouse is on the sprite and will generate a comment from the `debug.log` that will appear when the mouse is hovering on that specific sprite.
```JS
greenSeed.onHover(() => {
    debug.log("hovering on seed")
    greenSeed.color = GREEN
})
```
For `.onHoverEnd()` connects with the hovering code because this means that once the mouse is not hovering the sprite, instead of a color appearing like when hovering, the color will not appear in this code because we are no longer hovering. However, this can be changed if you want a different color to show up when unhovering the sprite. In Kaboom, the color `WHITE` means the original image color and will not turn the shade of white but you can replace `WHITE` with any other color like `YELLOW` and when the user is not hovering the sprite, yellow can appear.
```JS
greenSeed.onHoverEnd(() => {
    debug.log("unhovered seed")
    greenSeed.color = WHITE
})
```
My Freedom Project goal for the winter break is to watch videos on my tool for additional support with expanding my knowledge on Kaboom with topics I have not learned about yet. Some examples can include dragging sprites, creating a scene, or using the kaboom tile feature for a map, which can give me a step forward on learning my tool more.
### Engineering Design Process
I am currently on engineering design process _step two_ on **researching the problem**. In my first blog, I talked about defining the problem that many people face in society on making choices. I researched some ways I can help contribute to user's decision making skills to include in my Freedom Project. Many people who struggle with decision making skills have little experience on that skill, which leads me to believe that making a project based on helping people with choices can give them more experience.
### Skills
Skills I gained were **time management** because of keeping up with my learning log for this fall semester even with a lot of work having to be done during the same time. I was able to stay focused to learn about my tool to the full extent. Having good time management will help me advance with another skill such as **organization.** I created schedules of what needs to be done every single week and have reminders of what I need to complete. These helped me greatly to stay prepared when learning about my own tool, which I can contribute to my daily life.

[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
