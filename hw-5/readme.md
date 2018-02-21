# Homework 5

## Overview
For this week's assignment I wanted to utilize the ability to change the color and size of shapes by using variables.  I decided to create three circles (ellipses) and have two of them remain in place and have one of them follow the mouse.  My goal with this was to make all three circles cycle from black to the full value of a color, while remain semi-opaque so that the colors would interact with eachother.

## Process
I began this project by creating my canvas and background.  I chose to make the background grey rather than black so that the circles would be visible even when black.  I then created a variable for the width of the ellipses, the height of the ellipses, and the color of the ellipses.  I now realise that I could have used a single variable for the width and height, as my ellipses were all circles.  I then applied the noCursor() and noStroke() functions and created 3 ellipses, one at .3 of the window width, one at .7 of the window width, and one that followed the mouse.  At this point I filled each ellipse by using fill('rgba()') in tandem with my variables.  At this point I realized that none of my ellipses were actually being filled, so I searched Google for possible solutions.  I was unable to find a solution on Google, so I began experimenting with my code.  Eventually I removed the fill('rgba()') function and simply used fill().  At this point the variables to change the color began to function correctly, but I was unable to alter the alpha value.  As the interaction of the colors is dependent on being able to alter the alpha value, I decided to create an alternate hw-5 directory in which the colors were semi-opaque, but did not change.

## Issues
The main issue I had in this week's assignment was the innability to utilize variables within the fill('rgba()') function.  I was unable to find a solution on Google, or through experimentation with my code.  One possible solution that I felt had potential was to create three variables that housed each changing fill.

ex.

let ellipseColor = 0;
let ellipseFill1 = (ellipseColor,0,0);

I then used the ellipseFill1 variable within the fill('rgba()') function and tried to set the alpha value seperately

ex.

fill('rgba(ellipseFill1,.5)');

Unfortunately this did not work, and the ellipses remained unfilled.

## Conclusions
I learned a lot about how to use variables during this week's assignment and I am interested in learning more.  I am unsure if the project that I attempted to create is not possible in p5 or if I am not competent enough to execute it correctly.  Hopefully I will be able to answer this question in the coming weeks.
