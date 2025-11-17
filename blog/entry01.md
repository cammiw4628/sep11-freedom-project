# Entry 1
##### 11/3/25

### Content
The tool I have chosen for my _SEP11 Freedom Project_ is [Kaboom.js](https://kaboomjs.com/) because it has qualities that can contribute to my project. The tool as I went through it had many information that showed examples of what exactly can be made and I tinkered around with it to find it suitable for me. The project I want to make is an interactive game that is accessible for all users. This game more specifically is a garden based game that allows users to create their own garden. I have tinkered with my tool using information provided on their website, like figuring out how to create different sprites and allowing there to be an dominant sprite that can indicate that the dominant sprite is the player and can move around within the system.        

I have learned about the x and y coordinates(x, y) and how it relates to movement in javascript. The movement in javascript is similar to basic math problems on a coordinate plane with values of x and y. The x and y have axis that contribute to the movement of a character going in an x and y axis way. Using [Kaboom.js](https://kaboomjs.com/), I was able to recognize these patterns and the codes to use for the movement of left and right and the similar traits to x and y. There was also a `-` which refers to negative, for example on a coordinate plane going left is towards negative. However in coding the `-` is up instead of down using prior knowledge from the course of _Introduction to Computer Science_. You can see the code below in my [tools folder](../tool/kaboom/kaboom.js), with the labels of the movement for my player sprite, which in this code is for movement of pressing the left key to go left.       
```js
onKeyDown("left", () => {
	player.move(-SPEED, 0)
})
```     
I wanted to make this type of game to make users aware of what they want in their own garden in order to make choices for themselves in real life experiences. This allows a built up connection from this game to contribute into their real life skills. If the user encounters a problem, they can be able to persevere through it using the skills they have gained from the garden based game.

### Engineering Design Process
I am currently on **step one** of the engineering design process of defining the problem, where I can determine what issue is needed to be fix. However, I have determined that I wanted to make this game for users and their decision making skills in the above **content** section. I will be moving onto step two of the engineering design process soon, where I will be researching about the problem more in depth.

### Skills
Skills I have learned is going through **context clues** because when I was on _kaboom.js_ learning about movements for a player sprite, I was able to look into what was the difference of moving left, right, up, and down, in order to determine how each code functions and comprehend the information better. Another skill I learned is to **go back to old lessons** to comprehend your code better if forgotten connecting back to my first skill. I wanted to know why `-` allows the user go to up instead of down. I remember during freshmen year in computer science, we learned about movements and how a sprite is able to move by using [Code.org](https://code.org/en-US) and when I was learning about movements again during tinkering, I looked back into projects during that time to recognize and learn similarities from the old code into the new code. 






[Next](entry02.md)

[Home](../README.md)
