/*
https://www.codecademy.com/courses/build-interactive-websites/videos/create-a-javascript-website
*/


/*
  JavaScript and HTML
    HTML defines the structure of a web page by using page elements as the building blocks. However, HTML by 
    itself can not produce web page interactivity, that’s where JavaScript comes in.

    Below, we see a post-it with a typical stick figure on it. We can think of this as the HTML, with the 
    head, body, and limbs as the elements on the page:


    In web development, CSS provides the style to our HTML structure. Below, the stick figure is now dressed 
    in a nice tuxedo:


    If HTML and CSS provide structure and style in this analogy, JavaScript provides interactivity, allowing 
    our stick figure to move. Below, the stick figure moves, swaying up and down, thanks to JavaScript:


    Web programmers use JavaScript to make web pages dynamic and interactive. This powerful scripting 
    language is encapsulated in its own HTML element: the <script> element. You can think of this <script> 
    element as the door to JavaScript for HTML. 

  1.The <script> tag (example1)
    The <script> element allows you to add JavaScript code inside an HTML file. Below, the <script> element 
    embeds valid JavaScript code:

    <h1>This is an embedded JS example</h1>
    <script>
    function Hello() {
        alert ('Hello World');
    }
    </script>

    Frankly, without the <script> tag, websites would be unclickable and a bit boring.

    The <script> element, like most elements in HTML, has an opening and closing angle bracket. The 
    closing tag marks the end of the content inside of the <script> element. Just like the <style> tag 
    used to embed CSS code, you use the <script> tag to embed valid JavaScript code.

  2.The src attribute(example 2)
    Since you know how to use a <script> element with embedded code, let’s talk about linking code. Linking 
    code is preferable because of a programming concept called Separation of Concerns (SoC). Instead of 
    having messy code that is all in the same file, web developers separate their code into different files, 
    making each “concern” easier to understand and more convenient when changes must be made.

    For this exercise, instead of writing JavaScript in our HTML file, we are going to write it in its own 
    file, and then reference this code with a file path name. We will do this using an attribute that may 
    jog your memory: the src attribute!

    If this seems familiar, that’s because you may have been linking to external files with the <img> and 
    <link> elements. The attribute is exactly the same, but now its value specifies the location of your 
    script file.

    If the file is in the same project folder, the src value will be a relative path name. Below is an 
    example of providing a relative path for a JavaScript file.

    <script src="./exampleScript.js"></script>

    The <script> above would look for a file called exampleScript.js that is in the same folder/directory as 
    our index.html file.

    If you must refer to JavaScript hosted externally, or in a CDN, you can also link to that file location.

  3.How are scripts loaded?
    A quick recap: the <script> element allows HTML files to load and execute JavaScript. The JavaScript can 
    either go embedded inside of the <script> tag or the script tag can reference an external file. Before 
    we dive deeper, let’s take a moment to talk about how browsers parse HTML files into web pages. This 
    informs where to include a <script> element inside your HTML file.

    Browsers come equipped with HTML parsers that help browsers render the elements accordingly. Elements, 
    including the <script> element, are by default, parsed in the order they appear in the HTML file. When 
    the HTML parser encounters a <script> element, it loads the script then executes its contents before 
    parsing the rest of the HTML. The two main points to note here are that:

    The HTML parser does NOT process the next element in the HTML file until it loads and executes the 
    <script> element, thus leading to a delay in load time and resulting in a poor user experience.
    Additionally, scripts are loaded sequentially, so if one script depends on another script, they should 
    be placed in that very order inside the HTML file.
    example:
    <!DOCTYPE html> 
    <html> 
    <head>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <p class="centered" id="logo">Codecademy</p>
        
        
        <script src="script1.js"></script>
        <script src="script2.js"></script>
    </body>
    </html>//script2 is loaded after script1

  4.Defer attribute
    When the HTML parser comes across a <script> element, it stops to load its content. Once loaded, the 
    JavaScript code is executed and the HTML parser proceeds to parse the next element in the file. This 
    can result in a slow load time for your website. HTML4 introduced the defer and async attributes of 
    the <script> element to address the user wait-time in the website based on different scenarios.

    The defer attribute specifies scripts should be executed after the HTML file is completely parsed. 
    When the HTML parser encounters a <script> element with the defer attribute, it loads the script but 
    defers the actual execution of the JavaScript until after it finishes parsing the rest of the elements 
    in the HTML file.

    Here is an example of the defer tag:

    <script src="example.js" defer></script> 

    When is defer useful?

    When a script contains functionality that requires interaction with the DOM, the defer attribute is 
    the way to go. This way, it ensures that the entire HTML file has been parsed before the script is 
    executed.
    ex:
    <!DOCTYPE html> 
    <html>
    
    <head>
        <link rel="stylesheet" href="style.css">
        <!--  Add the defer attribute to the script below:  -->
        <script id="blue" src="turnBlue.js" defer></script>//it is in head but since defer executes last
        even after the yellow script
    </head>

    <body>		
        <p class="centered" id="logo">Codecademy</p>

        <script id="yellow" src="turnYellow.js"></script>
    </body>
    </html>

  5.Async attribute
    The async attribute loads and executes the script asynchronously with the rest of the webpage. This 
    means that, similar to the defer attribute, the HTML parser will continue parsing the rest of the 
    HTML as the script is downloaded in the background. However, with the async attribute, the script 
    will not wait until the entire page is parsed: it will execute immediately after it has been downloaded. 
    Here is an example of the async tag:

    <script src="example.js" async></script>

    When is it useful?

    async is useful for scripts that are independent of other scripts in order to function accordingly. 
    Thus, if it does not matter exactly at which point the script file is executed, asynchronous loading 
    is the most suitable option as it optimizes web page load time.
    ex
    <!DOCTYPE html> 
    <html>
    
    <head>
        <link rel="stylesheet" href="style.css">
            <!-- Add the async attribute to the script below: -->
    <script id="blue" src="turnBlue.js" async></script>
    </head>
    
    <body>		
        <p class="centered" id="logo">Codecademy</p>
    </body>
    </html>

Review
Let’s review.

HTML creates the skeleton of a webpage, but JavaScript introduces interactivity

The <script> element has an opening and closing tag. You can embed JavaScript code inbetween the opening and 
closing <script> tags.

You link to external JavaScript files with the src attribute in the opening <script> tag.

By default, scripts are loaded and executed as soon as the HTML parser encounters them in the HTML file, the 
HTML parser waits to load the entire script before from proceeding to parse the rest of the page elements.

The defer attribute ensures that the entire HTML file has been parsed before the script is executed.

The async attribute will allow the HTML parser to continue parsing as the script is being downloaded, but 
will execute immediately after it has been downloaded.

The old convention was to put scripts right before the </body> tag to prevent the script from blocking the 
rest of the HTML content. Now, the convention is to put the script tag in the <head> element and to use the 
defer and async attributes.

*/