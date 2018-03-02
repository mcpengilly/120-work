# Week 6 Homework
## Summary
For this week's assignment I wanted to creeate a background that changes color with a shape that changes size in the foreground.  I wanted to isolate red, green, and blue and have each value be controlled by a different element.  I decided to assign the red value to the cursor's X position, blue to the cursor's Y position and make green randomly change.  I also decided to create a triangle that changed size based on the Y position of the cursor.

## Background Specifics
First I created four variables that controlled the background color: bgr, bgg, bgb, and bggChange.  I used the modulo operator to assign bgr and bgb to the cursor X and Y positions respectively.  I then created the line 'bgg += floor(random(-bggChange - 1,bggChange + 2));' in order to make the green value of the background randomly shift between higher and lower values.  I also constrained the green value to be at least 1 and no higher than 255, so that it would not become totally absent.

## Triangle Specifics
I created six variables for the triangle; each variable represented either the X coordinate or the Y coordinate for each point of the triangle.  I then created a variable, triChange, that represented the amount of movement that each variable had and assigned it to be one fifth of the Y coordinate of the cursor.  I then assigned each triangle variable to move based on the Y coordinate of the cursor.
  
