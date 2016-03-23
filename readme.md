# Reusable Form Component

## Folder Structure

* root
* .. images
*  .. .. icons
* .. javascripts
* .. .. script.js
* .. stylesheets
* .. .. sass
* .. .. .. _constants.sass
* .. .. .. style.sass
* .. .. style.css
* template.html
* readme.md

## Design Strategies

* I have used minimal IDs and classes, so that it wont interfere with already existing ones in the Application.
* Extensively used jQuery and CSS selectors to access child elements.
* Did not use an ID or class unless required. Provide an easy way to update them in the JS file.
* Using Sass precompiler, to reuse CSS properties and components.

## Implementation

* Implementing this form module is as easy as **copying** the files and adding the HTML code from *template.html* to your application.
* If you are using Angular.js, the **template.html** file can be used as the templateUrl for your directive.
* There is no need to change any values if you are implementing the form on different pages, but if you have a requirement for multiple forms on same page, follow the next steps below.

## Next Steps

* Modify the id and classes of the form in HTML code as per requirement.

### JS Customizations

* Update the modified values in *javascript/script.js*.
* Change the variables object as per requirement. The variables object has the following keys:
    * **formId**: Update the formId from the template as per usage.
    * **deleteButtonClass**: Update the class if changed.
    * **placeholderText**: Change this to update the placeholder text inside the text box.
    * **addButtonId**: Update this value if the add to List button ID is updated.
    * **submitButtonText**: Update this value to reflect the text on the submit button.
    * **post URL**: The URL to which to send the post to. In the current code the stored values are send as an Array to this URL.
* Depending on how the submit (POST) is handled, the $.post function on *script.js:92* needs to be modified.

### CSS Customization

* Change the form id in style.css:11 or style.sass:17.
* CSS Modifications can be achieved by modifying the _constants.sass using a Sass precompiler.
* It is possible to change the font-stack, color schemes and other CSS properties by following the above steps.

### Advanced Customizations

* *script.js*: This file is very well commented, to make it easy for future updates and more features.
* *style.sass*: File can be easily modified to update certain styling aspects.
* *style.css*: CSS file can be modified if Sass cannot be used.
* *_constants.sass*: This file can be used to store all the constants, so that future modifications can be easily performed.
* *_mixins.sass*: Used to store various mixins to support style.sass.