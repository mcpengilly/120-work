# Homework 11
## Summary
For this week's assignment I wanted to utilize classes within p5 to create a simple animation in which shapes are generated with random sizes and positions that move around the canvas. I decided to make cups by using the arc function as opposed to the generic shapes within p5 such as ellipses or triangles.  By following the examples in this week's module, I was able to create a class that defined the properties and methods for my objects, an array in which my objects were pushed into, and a frame method that allowed my objects to be displayed and moved.

## Specifics
I began this project by creating an empty array assigned to the variable "cups" as well as a variable "numOfCups" that established the number of cups that would be displayed on the canvas.  I then created a for loop within my setup function that pushed the objects within the class "Cup" onto the canvas.  I then created another for loop within my draw function that allowed my objects to be drawn every frame.  Next I created my class: "Cup".  Within the constructor I established the parameters for the class, which contained x position, y position, scale, x movement, and y movement.  I then created the display method, which stored the values for the objects' positions and scale, as well as the arcs that I used to create the cup shape.  I then created the move method, which caused the objects to move around the canvas, and reverse their direction when they came in contact with the edges of the canvas.  Finally I added the frame method that allowed my objects to be drawn every frame.

## Conclusions
I feel that this week's assignment was a good introduction to the concept of classes and objects within p5; I don't completely understand how to apply the concepts that we learned and I feel that I will need to spend a great deal of time with classes and objects to fully understand how they can be effectively utilized.