# TAI-IP
#TO DO LIST
This code creates a simple to-do list where you can add tasks, edit them, and they'll be saved.
When the page loads (DOMContentLoaded event), the browser runs the JavaScript code.
taskInput:Here you can type your new task.
addTaskBtn: The button you click to add a task.
taskList: The area where all tasks are displayed.
Editing a Task: If you double-click on any task, it lets you change its text. It shows a prompt where you can type the new text for the task.
Saving Tasks: After any changes it collects all the tasks currently displayed on the webpage and saves them in the browser's memory (local storage). 

#Weather App
This app provides a simple user interface for users to input a city name and fetch current weather data for that city from the OpenWeatherMap API. 
The HTML includes input field for the user to enter the city name.There's a button to trigger the weather data fetching.
CSS is used to style input field, button, and container to make the application visually appealing.
In javascript getWeather() function, which is invoked when the user clicks the "Get Weather" button.
In this function it sent fetch request to the OpenWeatherMap API, passing the city name and API key as parameters.Extracts relevant weather data (temperature, description, humidity, wind speed) from the JSON response.
Handles errors if API request fails and accordingly displays  message to the user.

#Image Filtering

This code gives simple image gallery with filtering functionality
Filter buttons allow users to filter the gallery by different categories such as "All", "Nature", "City", and "Flowers".
Gallery items are initially grouped by category, and only items belonging to the selected category are displayed when a filter button is clicked.
