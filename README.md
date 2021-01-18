# To-do-list-DOM-events-
<!-- DOM -->

.Document object model (DOM): browser creates a tree like structrue with the help of html and css file with has root elements and its children . 
.We can access dom and manipulate it with the help of document object.
.browser uses Dom to create the layout of the page for UI.

<!-- javacript -->
javacript can make changes to the webpage by access the Dom with the document object.

<!-- SELECTORS -->
selectors are the method which is used to select element to add delete or toggle.

for example:
1.getElementById
2.getElementByTagName
3.getElementByClassName
4.querySelector
5.querySelectorAll
<!-- sub method -->
getAttribute
setAt0tribute.
#changing styles
style{property}

className
Classlist

ClassList.add
ClassList.remove
ClassList.toggle

##Bonus
inner html 
parentElement
Children
##why it is imp to CACHE selector in variable.



<!-- REFERENCE FOR SELECTORS  and DOM-->
1.https://www.w3schools.com/js/js_htmldom.asp

<!-- EVENT  -->
xyz.addEventListener("xyz",func(){

});
always define function separatly 

<!-- REFERENCE FOR event -->
1.https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
2.https://developer.mozilla.org/en-US/docs/Web/Events

##mini projects for illustration
<!-- TO-DO-LIST -->
<!-- BACKGROUND-GENERATOR -->

Note: Callback Functions
In the previous video you saw something interesting:

Event listener syntax : 

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
You didn't see the function being called like this as you may have expected: 

button.addEventListener("click", addListAfterClick());
input.addEventListener("keypress", addListAfterKeypress(event));


This is something called a callback function. When that line of javascript runs, we don't want the addListAfterClick function to run because we are just adding the event listener now to wait for click or keypress. We want to let it know though that we want this action to happen when a click happens. So the function now automatically gets run (gets added the ()) every time the click happens. So we are passing a reference to the function without running it.


