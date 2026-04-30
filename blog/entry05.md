# Entry 5
##### 4/13/26

### Content
In my SEP11 Freedom Project, I worked towards my MVP project for my [Garden Game](https://cammiw4628.github.io/sep11-freedom-project/).I have learned to create my own custom button for my game on [Kaboom.js](http://kaboomjs.com/). This process is very similar to another lesson I have learned on _p5JS_ that I have coded about for class. I am able to create a custom function that has my own format on **text, positioning, and action** to make a button like `function addButton(txt, p, a)`. Making a button, `rect()` will be used to create a rectangle/square shape depending on the size. The position will be defined as _"p"_ to be determined when calling my function for the position. The `text()` will be _"txt"_ for the text and `onClick()` will be _"a"_ for action, which when function called will include every aspect of the function specifically. The action can make a comment or be used to transfer to another scene if using `go()` when I call the function.
```JS
var btn = add([
	rect(200, 200),
	pos(p),
    outline(5),
	area(),
]);
btn.add([
	text(txt),
	anchor("center"),
	color(0),
	])
btn.onClick(a)
```
Process I made for my MVP Project is that I have finished up my MVP to make a short workable garden game for users. What I did was I used conditionals like `if()`, `else if()`, and `else` to check if a user has typed up a specific color and if the user has a color that is similar to a seed, it will `add()` that seed colored sprite onto their garden at a random location with a **min and max.**
```JS
if(userColor == "red"){
    var redSeed = add([
        sprite("red"),
        pos(rand(150, 500), rand(150, 500)),
        scale(0.1),
        area(),
    ]);
```
What I also included was that if that seed sprite was clicked, the seed sprite will disappear using `destory()`, as well as adding the flower sprite to a random location.
```JS
redSeed.onClick(() => {
    destroy(redSeed);
    add([
        sprite("redF"),
        pos(rand(150, 800), rand(0, 500)),
        scale(0.3)
    ]);
});
```

### Engineering Design Process
I am on _step 6_ of **test and evaluate the prototype** of engineering design process. Since I have finished my MVP, I need to find ways to improve my game to be more accessible to users and appealing to move toward my Beyond the MVP. Some ideas would be making my design less bland by adding some colors and making a list of colors users can be able to type in.

### Skills
A skill I have learned is to **avoid procrastination** because it will only hold back my project if I do not get my MVP done on time for the deadline, leaving me with extra work to do before having time to move onto improving the website. Another skill would be being able to **connecting different lessons** from other units in class that are similar and useful to my project, similar to using _p5JS_ with _kaboom.js_ having similar functions to each other.


[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
