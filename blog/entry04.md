# Entry 4
##### 3/9/26

### Content
What I have learned about my tool was `scene()` and `go` to create multiple layors of scenes, which will be used as a step forward towards my MVP. My MVP will include multiple scenes that have an menu type page, information page, and the actual game that I will make. `scene()` will be defined with what specific scene will take place with images and functions. `go()` will determine what will go first or how we hop onto another scene if defined into it. In this case, I have a scene called _"first"_ that has an image added into it and `go("first")` will tell the code to show the output of the "first" scene to show up immediately, so it will be the first scene users will be seeing.
```JS
scene("first", () => {
  add([
    sprite("green"),
    pos(100, 100),
    scale(0.3),
  ]);
});
go("first");
```
For my MVP, I have already found all my sprites and added them into my **img** folder. I have also already loaded all my needed sprites and images into my code, so it will be easily used by using `add()` to the actual game if I need it for future code I plan on writing. Using `loadSprite()` and defining the sprite name with the sprite location in my folders with the file name, will allow me to load the sprite into my code. Moving forward I will need work on my button features because I am having difficulty with using HTML button being on top of my kaboom background due to the kaboom background being pushed back by the HTML button. If I am unable to figure it out, I will use kaboom's built in buttons.
```JS
loadSprite("white", "/img/white-seed.png");
loadSprite("yellow", "/img/yellow-seed.png");
loadSprite("blueF", "/img/blue-f.png");
loadSprite("greenF", "/img/green-f.png");
```

### Engineering Design Process
In the Engineering Design Process, I am up to _step four_ with creating a plan with a mix of _step five_ to create my MVP project. I have already finished my plan to use and work towards creating my MVP project currently. The plan will guide me towards what steps are needed to be done to complete a functioning game.

### Skills
A skill I learned is **keeping track of my plan** because it will be very useful to indicate what else I need and what to do going forward. As well as trying to not set things off until the last week to finish the MVP. Another skill that I learned is having good **time management** that is connected to my plan because if I procrastinate my project, it may not be done by the deadline in April.


[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)
