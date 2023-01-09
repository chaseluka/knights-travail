Project Overview
========

This project is the final project of the computer science subcourse of The Odin Project Javascript course. After practicing several various search algorithms proir, I attempted to use these tools on a real world problem, a chess Knights travails. The objective is to find the shortest possible path from one square to another that a knight could traverse on a chess board (note: given their funky movement, they still are able to reach any possible square of the chess board). 

In solving this problem, there were two primary sections: the list of possible moves from a starting positon and finding the shortest path to a specified end position. To complete the former I used a undirected graph to associate each possible move (parent node) with the possible moves (children) of its own, which carried out to the max is a long list of a lot of branching. As to the latter, I used a Depth First Search (DFS) whilst returning the shortest path from a singlular child node. The children were then compared to each other to find the shortest path and thus this path was returned. 

Live View
---------
N/A

Stack
-----
Javascript

Istallation
-----------
  1. Fork or Clone Repository
  2. `cd knights-travail/`
  3. Locate to `src` --> `scripts` --> `knights.js`
