# UFOs
This project uses JavaScript to create a table containing UFO information. This table will be inputted into HTML to create a dynamic website

## Overview
The purpose of this assignment is to aid my client, Dana, in creating a website on UFOs using the data Dana received in a JavaScript file. Dana will use this website to publish her article she wrote as a journalist and the data she received. The website will give users a look at the UFO sightings between January 1st, 2010 and January 13th, 2010; the sightings are across the USA  — from Round Rock, Texas to Eugene, Oregon. The website has the ability to filter through data to pinpoint a city, state, country, shape of the UFO, and date a siting occurred. The website was created by using Bootstrap in HTML; the filtering of the data was created using JavaScript.

## Results
On the front end of the website, a search consists of typing in a search filter into the input boxes on the website as shown in the images below. After searching, the user must click enter and the results will pop up. For text filters, the input must be lowercase. For date filters, the input must be in m/d(d)/yyyy format.

The following image shows the table data on the website with no filters applied
![ufo_table_data](https://github.com/shireenkahlon/UFOs/blob/main/ufo_table_filter.png)

The image below displays the table data on the webpage with a filter applied for "benton"
![ufo_table_filter](https://github.com/shireenkahlon/UFOs/blob/main/ufo_table_filter.png)

On the back end, the functions are set up to take the element, value, and id of each data row. From this, when a user inputs a filter, the JavaScript code will check if there’s a relevant data row to that input. If so, it will iterate through the input, take the key and bring back the value of the data. For example, if someone inputs ‘round rock’ and ‘tx’, the JavaScript will take the key of ‘city’ and ‘state’ and bring back the values in the table. The code below shows how the functions are set up.

The image below displays the code to build the table in JavaScript
![ufo_table_code](https://github.com/shireenkahlon/UFOs/blob/main/ufo_table_code.png)

The next image shows the code in JavaScript used to update the table to the filter applied
![ufo_update_filter_code](https://github.com/shireenkahlon/UFOs/blob/main/ufo_update_filter_code.png)

The following image shows the code in JavaScript to filter through the table to bring back the results of the filter; this code also shows how JavaScript will "listen" for a change in the input box
![ufo_update_filter_table_code](https://github.com/shireenkahlon/UFOs/blob/main/ufo_filter_table_code.png)

The image below shows the HTML code to display the input boxes
![html_code](https://github.com/shireenkahlon/UFOs/blob/main/ufo_html_code.png)


In the following image, the console is shown. The console will show any value that is set to be logged into the console using console.log(). This will show the key, value pairs that have been filtered.
![ufos_console](https://github.com/shireenkahlon/UFOs/blob/main/ufo_console.png)

## Summary
One major drawback to the webpage is the lack of flexibility in typing a filter. For example, typing “Round Rock” (as shown in the image below) brings back nothing, despite there being a sighting in Round Rock, Texas. This applies to all of the filters; typing in ‘TX’, ‘Triangle’, or ’01/01/2010’ for their corresponding filters will show no data. To combat this, a function would be needed to allow for capital letters, spaces, lack of spaces (for example, roundrock), and variation in typing a date.

The following image displays what the table will show when a filter of "Round Rock" is applied, instead of "round rock"
![ufos_round_rock_filter](https://github.com/shireenkahlon/UFOs/blob/main/ufo_Round_Rock_filter.png)

There’s a few recommendations I can make to make the website more user-friendly. Firstly, the layout of the page could be changed a bit to make it easier for the user. This could consist of a basic homepage with the NASA image as the full background. There could be an about section with the title and paragraph; in another tab could be the data in the table with the ability to filter through the data. A second recommendation for improving the site, a function to drop any reviews that have any non-letter/numerical characters. The reasoning behind this is the twelfth sighting/comment says the sighting is a hoax (as shown in the image below). Removing non-letter/numerical could be a first step to removing “sightings” such as this. 

In conclusion, this project gathered data, used Bootstrap in HTML, and JavaScript to create a visually appealing website which allows users to filter through data. While there are changes that can be made and possibly more data gathered to keep the website updated, the webpages gives users an interesting glimpse into UFO sightings nationwide. 
