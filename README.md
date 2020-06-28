# Continent-Matching-Project
### Software Engineer assignment.

This is the final project in Software Engineer. I picked the jigsaw based game __Continent Matching__ and I decided to use __GDevelop 5__; also after exporting to HTML5 file I had some fix in the code to implement the game.
I took the inspiration from this page:  

![Screenshot (101)](https://user-images.githubusercontent.com/48546888/85937283-52f97080-b92c-11ea-9316-30d2e923c390.png)

And this is my final project: 
### 1. Intro screen: 

![Screenshot (98)](https://user-images.githubusercontent.com/48546888/85937305-80deb500-b92c-11ea-9d0b-04a042eadfe1.png)

The game starts with this scene, the __texts__ and __icon__ will appear as soon as the __music__ is played at the beginning. The player click the screen to continue to the gameplay.

### 2. Gameplay screen:

![Screenshot (99)](https://user-images.githubusercontent.com/48546888/85937348-c7ccaa80-b92c-11ea-8ee8-e8d822ca4ccd.png)

This is like a jigsaw game, so the rule is simple. The player can choose the __continents__ from the __user interface__ on the left, and then he/she can __drag and drop__ them to the correct positions in the __world frame__.

![Screenshot (100)](https://user-images.githubusercontent.com/48546888/85937389-2b56d800-b92d-11ea-98eb-5f8a53356023.png)

Each continent has their own __guide voice__ in case the player is still too young and/or is not able to read. The player can click on the __dialogue bubbles__ on the screen to hear the guide again. The continents is __rotated randomly__ if it's not in the correct position, the player is likely to press the __R__ button on the keyboard to rotate the continents to locate the right position more precisely.

They can also press the __Esc__ button to return to the __intro screen__ which is also restart the game.

*Note: About changing the data, I have not found out how to implement it through JSON file, but in the __data.js__ file, data can be changed. Just go into __data.js__ on GitHub, change the __gdjs.projectData__ from __data__ to __data2__, the background image and the music will be different.*

![Screenshot (102)](https://user-images.githubusercontent.com/48546888/85946147-6f1d0200-b96c-11ea-9c16-fe93aba2b4b0.png)

Play the game here: https://ryenguyen.github.io/Continent-Matching-Project/
