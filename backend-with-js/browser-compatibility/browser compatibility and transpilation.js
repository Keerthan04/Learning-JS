

/*
  Introduction
    Your newest website is a massive hit. Users from all over the world are flocking to see what you have to 
    offer. However, you start hearing from some customers that they can’t use your site. It won’t load on 
    their browser, and the console says that there are syntax errors! That’s weird. There aren’t any errors 
    on your computer. What’s going on?

    A website sends its code to a browser to be interpreted and run. People use different browser 
    applications, each running a particular version, depending on when it was last updated.

    As new features get added to JavaScript, browsers need to update to recognize and interpret those 
    features. When a browser isn’t updated, it won’t see new syntax as valid JavaScript code, throwing an 
    error. Users with outdated browsers can see a completely different (and likely broken) version of your 
    site!

    Can we make our site work for everyone, even those who forgot to update their browser for the last 
    decade? Should we write our JavaScript using only the oldest syntax?

    In this lesson, we will explore this issue of browser compatibility and introduce transpilation as a 
    way to solve it.

    We will learn to use a tool called Babel to automatically translate our fancy modern JavaScript into 
    something that even an ancient browser could understand!

  1.Browser Compatibility and Modern JavaScript Syntax
    What JavaScript syntax is new? What is safe to use for any browser? How do we find this out?

    These questions all have to do with browser compatibility, the idea that the browsers have to update to 
    use the latest JavaScript features, some browsers haven’t done so yet, and some users haven’t updated 
    their browser to the latest version. When we design a site for browser compatibility, we design our site 
    to work correctly for as many different browsers and browser versions as possible. When thinking about 
    browser compatibility, it is helpful to have a resource that will tell us which language features are 
    supported by which browser versions.

    Tools such as caniuse.com provide helpful browser compatibility information. On that site, you can 
    search for language features and see:

    The browser versions that support those features
    Which browser versions don’t support those features
    What percentage of internet users are using these versions
    From this information, you can see whether your site can reach the number of users you want. In the 
    upcoming exercises, we will learn how Babel can improve our site’s compatibility across browsers and 
    their versions.

    https://caniuse.com/

  2.Introduction to Transpilation(same language diff versions)
    https://babeljs.io/

    We’ve looked up some of the features we used to make our site on caniuse.com and only 75% of internet 
    users can see our content! What do we do? Do we need to rewrite our codebase?

    The newer features of JavaScript tend to make it easier to do things rather than add new features, a 
    concept known as syntactic sugar. We can use older syntax to do the same things but it’s usually harder 
    to write.

    For example, ES6 added string interpolation, allowing variables and expressions to be incorporated into 
    string content:

    `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;

    The above line can be easily converted to the old syntax by using concatenation instead:


    Explain
    'You can make carbonara with ' +
    pasta +
    ',' +
    meat +
    ', and a sauce made with ' +
    sauce +
    '.';

    In order to make our new JavaScript syntax work on old browsers, we need to apply these kinds of 
    transformations. Luckily, tools exist that can automate this process! While compilation translates code 
    from one language to another, transpilation is a term for translating code to different formats of the 
    same language. We can use a transpiler to convert our modern code into a more compatible version.

    Before we publish our code online, we take our source code and transpile it. This produces a set of 
    output files that use more browser-compatible syntax. We publish the output files to our web server and 
    can continue to develop our source code with any modern features we want to write!

  3.Introduction to Babel
    The page that you viewed in the last exercise is part of the website for a tool called Babel. Babel is 
    a popular transpiler for JavaScript that can be integrated into your projects!
*/