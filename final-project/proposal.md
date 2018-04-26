# Final Project
## Proposal
For my final project I would like to create a simplified version of PacMan.  My goal is to create a game in which the player controls a yellow arc with the arrow keys in order to collect white ellipses.  While this is happening, the four colored ghosts will move around the canvas randomly, and after hitting PacMan three times will end the game.  For this project I will not create the maze from the original pacman, but instead allow the player to move anywhere on the canvas.  The game will keep track of the number of pellets that are eaten by PacMan and display the player's score.

## Inspiration
After watching several of Dan Shiffman's 'Coding Challenge' videos the one's that peaked my interest the most were the challenges in which Shiffman recreated games.  The two videos that interested me the most were the challenge in which Shiffman recreates 'Space Invaders' and the challenge in which Shiffman recreates 'Snake'.  Each of these challenges sparked my interest in creating some kind of game, and because PacMan has always been one of my favorites, I decided to attempt it.  After deciding that PacMan was the game that I wanted to recreate, I found a p5 version created by John Kuiphoff in which ghosts and pellets fall from the top of the canvas at varying speeds while the player controls pacman's horizontal movement with the arrow keys.  While this example wasn't exactly what I wanted to create, it helped me to visualize how my project would come together.

## Problems
As I have done some initial work on this project, I think that the biggest challenge I will have to deal with will be the movement of the ghosts. My idea for this is to create a function that will randomly choose one direction after a certain number of frames, and to move continuously in that direction until the frame count is reached again.  In addition to this I have not worked with any sort of collision detection before, but from what I have seen in Shiffman's videos, it does not seem to be especially complex in application.

## Work Plan
As far as deadlines for this assignment I want to add the pellets and various displays (lives, score, etc.) during this weekend. As I said previously I think that creating movement for the ghosts will be the most challenging part of this project, so I want to give myself the entirety of next week to work on accomplishing that.

## Work Completed
This past week I was able to create my pacman and the four ghosts. While the ghosts are stationary at the moment, the player is able to move pacman around the canvas with the arrow keys.  If pacman hits the edge of the canvas he will wrap to the far edge of the canvas and continue in the same direction. 
