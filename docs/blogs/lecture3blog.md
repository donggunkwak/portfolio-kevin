---
title: "Lecture 3 Blog: Virus Riddler"
layout: doc
---

# Virus Riddle
After discussing about the candle puzzle in lecture on Wednesday and talking about how cognitive biases prevent solving these "think outside the box" type of problems, I was reminded of seeing a puzzle on TedEd. 

The puzzle basically reads as follows: You and your scientific research team discover and obtain a sample of a deadly virus preserved in ice. You bring it back to your lab where you are able to isolate the virus into test tubes for studying. You and your team all end up leaving the lab, when an earthquake happens that sets off an alarm indicating that the vials containing the virus have shattered. The lab consists of 16 square rooms in a 4x4 configuration, with an entrance at the top left and an exit at the bottom right, with each room connected to the rooms directly adjacent to it via an airlock. All of the rooms except the entrance had vials that broke in them, contaminating the rooms. A noxious chemical gas is released in the rooms with broken test tubes, and in a short time, the lab will automatically vent the rooms out into the world, releasing a deadly plague.

![layout](/assets/images/lecture3blog/contaminatedRooms.png){:width="600"}
This is a visualization of the layout of the lab.

You get on your hazmat suit to go into the rooms and pull the emergency self destruct switches. However, once you enter a contaminated room, you must pull the emergency switch in order to open the exit. After you leave, the room locks down and you cannot reenter that room.

How do you find a path that allows you to pull the emergency switch in every contaminated room before leaving the lab?

If you keep trying to draw paths from the top left to the bottom right, you start to have a lot of trouble trying to figure out a path.

![drawingpaths](/assets/images/lecture3blog/DrawingPaths.png){:width="600"}

This problem you end up trying to solve is a modification of a "Hamiltonian path problem", where a Hamiltonian path is a path that visits each vertex of the graph exactly once. It's the same here, except you have a specific starting and ending location. However, because of this constraint, this ends up being an impossible to solve question (at least in the way you're trying to solve it!). 

This ends up being because our side lengths are even for the lab. To see this better, here's a 4x4 chess board that represents the lab.

![chessboard](/assets/images/lecture3blog/4x4Chess.png){:width="600"}

We end up starting from a black square on the top left, and must get to the black square on the bottom right. This ends up being the case for any chess board with even number sides. With a Hamiltonian path, we can only visit each square once, which means that, every time we move to another square, we MUST switch the color square we are on (since black squares are only adjacent to white squares and vice versa). Since there are 16 squares we must visit, this means that we would have to move 15 times to visit each square. Since we start on a black square, our first move will move us to a white square, then our second to a black square, etc. This means that on every odd move, we will end up being at a white square, while every even move will put us on a black square. Being able to only make 15 moves before visiting each square means that we have to end up on a white square, making it impossible to end up on the bottom right black square. 

So, what's going on? Is this problem just an impossible trick that I made you all waste your time on?

Well... kinda. The problem very much tricks you, especially with the board representation. Seeing as you can't re-enter rooms after you enter, you would instantly default to trying to draw out all these paths. This really plays into your cognitive bias, as you would just want to draw a straightforward path from start to end. However, if you read the problem carefully, it says that "once you enter a **CONTAMINATED** room, you must pull the emergency switch in order to open the exit". If you recall, there is one room that isn't contaminated, the starting room. 

![solutions1](/assets/images/lecture3blog/Solutions1.png){:width="600"}
![solutions2](/assets/images/lecture3blog/Solutions2.png){:width="600"}

The solutions end up going straight back into the room you started with, making the puzzle possible! It's very easy to form a fixation on how to solve this question, that you end up just missing a crucial piece of information. 

If you'd like to watch the original TedEd video which has better visualizations and a more in-depth explanation, here it is!
[TedEd](https://youtu.be/ZKh6z0X6KRw?si=W_qscjxx_6xRdT1L)

And here is the TedEd website for more puzzles like this:
[TedEdWeb](https://ed.ted.com/lessons/can-you-solve-the-virus-riddle-lisa-winer/digdeeper)