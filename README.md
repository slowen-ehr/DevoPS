
# Code challenge - Devo PS

This solution was made by Eduardo Hernanz Rodriguez for Devo Inc. recruiting process.

### Two code exercises:
#### Ejercicio 1:
* Create a function in python that, given a list of numbers, indicates for each number whether it is a perfect, abundant or defective number.

#### Ejercicio 2:
* Given 3 sets of data, it is requested that a web page be created using ajax read the 3 data sources and display 2 graphs of highcharts, a line graph with the date on the x-axis and as many series as categories, and a pie chart per category grouping the total data (summation of the values of each category).
  
## Ejercicio 1
### Prerequisites and instructions
Python 3.5 or higher must be instaled. 
##### To run the project:
* Make sure Python 3.5 or higher is installed, you can download it in [this URL](https://www.python.org/downloads/)
* From "DevoPS/Ejercicio1" path execute: **python main.py** by console


### Exercise specification 
#### function.py
File with *calculatePerfection* function. Given a list of numbers generates an output declaring each number of the list as perfect, deceptive or abundant as appropriate.
  
#### main.py
File to try *calculatePerfection* function . The program will ask for a list of natural numbers separated by whitespaces. It get the numbers and introduce it into a list given to the function. In case of giving a non natural number, an exception will stop the execution.

In case of end with no errors, a valoration for each number will be printed.


## Ejercicio 2
### Prerequisites and instructions
A web browser is needed (i.e. Chrome, Microsoft Edge, ...)
##### To run the project:
* Open intex.html file with a compatible browser

### Exercise specification 
#### index.html
HTML File that runs every javascript file to create an ajax website.
  
#### graphics.css
Style file for the grapgics showed in the website.

#### graphics.js
Javascript file to read three diferent data series given by three URLs. Each data serie has its own treatment and two data structures will be created. Each data structure will be read by a different type of chart using hightchasdats library. 
For line data structure, values are accumulated in case of the same category and date. For pie data structure, values are accumulated in case of the same category.

This structures will be exported by *getDataLine* and *getDataPie* fuctions.

#### graphic_line.js
It get the data from graphics.js export, sort the data and build a line chart using highcharts library.
#### graphic_pie.js
It get the data from graphics.js export and build a pie chart using highcharts library.

#### highcharts-8.2.0 directory
Library that contains all the functions to build data charts and show them through a website.


