
1. Description:
DemoQA: Is a practice web page for testers.

2. Instalation/Run:

Install Visual Studio Code https://code.visualstudio.com/
Instal NodeJS https://nodejs.org/en/download
Open terminal in VS Code and write npm init
Install Cypress npm install cypress --save-dev
Install Chai npm install --save-dev chai
Install Mocha npm install --save-dev mocha
How to run the test :

npx cypress open (you can find in package.json that I added a command to run in chrome if you use npx cypress run --browser chrome")
Select E2E Testing 
Select Chrome
The spects are radio_buttons, web_tables, widget_elements

Everything should work as expected

3. The tests will cover the next cases:

radio_buttons.cy.js
	-> Checks if you can check a radio button and the right message is displayed 
	-> Check if the radio button is disabled  

web_tables.cy.js
	-> Check if you can add a new item and it is displayed in the table
	-> Check if you can add a new item with an invalid email
	-> Check if you can delete an item
	-> Check if you can edit an item
	-> Check if you can search after a key word 
	-> Check if you can change the number of rows that are displayed

widget_elements.cy.js

	-> Check if the autocomplete is working and also verify the multiple/single item fields
	->Check if you can change the tabs and the last one is disabled
	-> Start the progress bar and stop it once is >= with 35

4. Functions used:

beforeEach()-> before every it() it go on the baseURL defined in cypress.config.js
cy.get() -> was used to interract with different DOM elements
click() -> was used to click on different DOM elements
should() -> was used to make assertion to verify conditions
focus() -> will set the focus on the element
{force:true}-> it will click force the click
cy.newItem()-> it is a command that will add a new record if it has the args provided 
.find()-> will find a specific element
.trigger('mouseover')-> will simulate a real hoverover
.wait() -> will wait a specific time

5.Errors and Fixes 

Eroor:
Uncaught Error: Script error.
Cypress detected that an uncaught error was thrown from a cross origin script.
We cannot provide you the stack trace, line number, or file where this error occurred.

Fix: Add before all the "describe" a check that will ignore the exceptions 
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
