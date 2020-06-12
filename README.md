# Mr. Roboger's Neighborhood

![GitHub repo code size](https://img.shields.io/github/languages/code-size/heyimmatt/mr-roboger)
![GitHub contributors](https://img.shields.io/github/contributors/heyimmatt/mr-roboger)
![GitHub stars](https://img.shields.io/github/stars/heyimmatt/mr-roboger?style=social)
![GitHub forks](https://img.shields.io/github/forks/heyimmatt/mr-roboger?style=social)
[![Twitter Follow](https://img.shields.io/twitter/follow/heyimmatt?style=social)](https://twitter.com/heyimmatt)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=plastic&logo=linkedin&colorB=2867B2)](https://www.linkedin.com/in/mattmcfarland/)

Mr. Roboger's Neighborhood is a website that will get a number from the user and then count to that number. However, there will be some special results for certain numbers...

You can view it here: https://heyimmatt.github.io/mr-roboger

**Created by: Matt McFarland**

**Created on: 6-12-2020**

## BDD Specifications

* If the inputted number is greater than 100 or less than -100, site throws an alert
  - Input: 4360
  - Output: Please enter a number smaller than 100

* If the user clicks the Count Up! button and the number is greater than 0, the program returns a range of numbers from 0 to the inputted number
  - Input: 4
  - Output: 0, 1, 2, 3, 4

* If the user clicks the Count Down! button and the number is greater than 0, the program returns a range of numbers from the inputted number to 0
  - Input: 4
  - Output: 4, 3, 2, 1, 0

  * If the user clicks the Count Up! button and the number is less than 0, the program returns a range of numbers from the inputted number to 0
  - Input: -4
  - Output: -4, -3, -2, -1, 0

* If the user clicks the Count Down! button and the number is less than 0, the program returns a range of numbers from 0 to the inputted number
  - Input: -4
  - Output: 0, -1, -2, -3, -4

* Numbers that contain a 3 display "Won't you be my neighbor?" instead of the number
  - Input: 4
  - Output: 0, 1, 2, "Won't you be my neighbor?", 4

* Numbers that contain a 2 display "Boop!" instead of the number
  - Input: 4
  - Output: 0, 1, "Boop!", 3, 4

* Numbers that contain a 1 display "Beep!" instead of the number
  - Input: 4
  - Output: 0, "Beep!", 2, 3, 4

* The user's name will be displayed in the "Won't you be my neighbor?" ouput
  - Input: 4
  - Input: Matt
  - Output: 0, 1, 2, "Won't you be my neighbor, Matt?", 4

## Technologies Used
- JavaScript
- jQuery
- Bootstrap
- HTML
- CSS

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have an Internet browser (Chrome, Firefox, Safari, etc)
* You have a code editor (VS Code, Atom, etc)

## Installing Mr. Roboger's Neighborhood

To install Mr. Roboger's Neighborhood, follow these steps:

Via Downloading from GitHub:
1. Download this repository onto your machine by clicking the "Clone or Download" button
2. Download and extract the zip file to a directory of your choice
3. Open up the index.html, styles.css, and the scripts.js files in your preferred code editor
4. Open the index.html file in your preferred browser

Via command line:
```
$ git clone https://github.com/HeyImMatt/mr-roboger.git

$ cd mr-roboger

$ code .

$ open index.html
```

## Known Bugs

There are no known bugs at this time

## Support and Contact

If you want to contact me you can reach me at <mrmcfarland@gmail.com>

## License

This project uses the following license: [MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2020 Matt McFarland
