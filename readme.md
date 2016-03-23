Folder Structure

root

.. images
.. .. icons
.. .. .

.. javascript
.. .. script.js

.. stylesheets
.. .. style.css

Implementation

Implementing this form module is as easy as copying the co

CSS Modification

If there is a need to change the font-stack, color schemes and other CSS properties, using Sass, update values in _variables.sass.

javascript/script.js
Change defaults as per requirement.
formId: Update the formId from the template as per usage.
deleteButtonClass: Update the class if changed.
placeholderText: Change this to update the placeholder text inside the text box.
dataRowClass: ''
addButtonId: Update this value if the add to List button ID is updated.
submitButtonText: Update this value to reflect the text on the submit button.

post URL:
Depending on how POST is handled the $.post function needs to be modified.

Design Strategies:
* I have used minimal IDs and classes, so that it wont interfere with already existing ones in the Application.
* Extensively used jQuery and CSS selectors to access child elements.
* Did not use an ID or class unless required. Provide an easy way to update them in the JS file.
* Using Sass precompiler, to reuse CSS properties and components.