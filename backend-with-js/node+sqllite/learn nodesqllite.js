//db.get() even though the query gets multiple rows would return a single row 
//db.all() would return all the rows of the query
//db.all and then can use the find method to get a single row(based on our condition)
//db.run() when no returning row query like inserting or creating(usage of this.lastID from the callback when inserting is IMP to note)
//db.each() is used to for doing things on each rows and has two callbacks(IMP)

//example of using the node along with sqllite
const { printQueryResults } = require('./utils');

const sqlite3 = require('sqlite3');

const dbs = new sqlite3.Database('./db.sqlite');

const getAverageTemperatureForYear = year => {
  if (!year) {
    console.log('You must provide a year!');
    return;
  }
  db.get('SELECT year, AVG(temp_avg) as average_temperature from TemperatureData WHERE year = $year',
   { $year: year },
   (err, row) => {
    if (err) {
      throw err;
    }
    printQueryResults(row);
  })
}

// Call this function with a few years to view the average temperature that year
// This database has values from 1851 - 2004
getAverageTemperatureForYear(1855)
getAverageTemperatureForYear(2000)
getAverageTemperatureForYear(1972)

//use of db.all 
const { printQueryResults } = require('./utils');
const sqlite = require('sqlite3');

const db = new sqlite.Database('./db.sqlite');

// Your code below:
db.all('Select * from TemperatureData where year =1970',(err,rows)=>{//db.all is used to get all the rows returned from the query
  printQueryResults(rows);
})

//using the placeholders
const ids = [1, 25, 45, 100, 360, 382];
// your code below:
ids.forEach((id) => { 
  db.get("SELECT * FROM TemperatureData WHERE id = $id",
  {
    $id: id
  },
  (error, rows) => {
    printQueryResults(rows);
  })
})

//usage of db.run
const newRow = {
    location: 'Istanbul, Turkey',
    year: 1976,
  }
  // Your code below!
  
  db.run('INSERT INTO TemperatureData (location, year) VALUES ($location, $year)', {
    $location: newRow.location,
    $year: newRow.year
  }, function(error) {//since this dont use arrow functions(IMP)
    // handle errors here!
  
    console.log(this.lastID);
  });

  //handling errors
  db.run('INSERT INTO TemperatureData (location, year, temp_avg) VALUES ($location, $year, $tempAvg)', {
    $location: newRow.location,
    $year: newRow.year,
    $tempAvg: newRow.tempAvg
  }, function(error) {
    // handle errors here!
    if(error){
      return console.log(error);
    }
    
    console.log(this.lastID);
    
    db.get('SELECT * FROM TemperatureData WHERE id = $id', {
            $id: this.lastID
      },
    function(error, row){
      printQueryResults(row);
       });
  });

  //use of db.each()
  let temperaturesByYear ={};

db.each("Select * from TemperatureData",(err,row)=>{//the first callback function works for every row that is returned
  addClimateRowToObject(row,temperaturesByYear);
},(err,rows)=>{//the second call back function works when all the rows are processed so final ka
  const averageTemperatureByYear = calculateAverages(temperaturesByYear);
  printQueryResults(averageTemperatureByYear);
})

//creating a new table
db.run('DROP TABLE IF EXISTS Average', error => {
    if (error) {
      throw error;
    }
    db.each('SELECT * FROM TemperatureData',
      (error, row) => {
        if (error) {
          throw error;
        }
        addClimateRowToObject(row, temperaturesByYear);
      }, 
      error => {
        if (error) {
          throw error;
        }
        const averageTemperatureByYear = calculateAverages(temperaturesByYear);
        db.run('CREATE TABLE Average (id INTEGER PRIMARY KEY, year INTEGER NOT NULL, temperature REAL NOT NULL)', logNodeError);
        averageTemperatureByYear.forEach(row => {
          db.run('INSERT INTO Average (year, temperature) VALUES ($year, $temp)', {
                      $year: row.year,
              $temp: row.temperature
            }, err => {
            if (err) {
              console.log(err);
            }
          });
        });
      }
    );
  });


  //use of serialize 
  db.serialize(() => {
    db.run("DROP TABLE IF EXISTS Average", (error) => {
      if (error) {
        throw error;
      }
      db.each(
        "SELECT * FROM TemperatureData",
        (error, row) => {
          if (error) {
            throw error;
          }
          addClimateRowToObject(row, temperaturesByYear);
        },
        (error) => {
          if (error) {
            throw error;
          }
          const averageTemperatureByYear = calculateAverages(temperaturesByYear);
          db.run(
            "CREATE TABLE Average (id INTEGER PRIMARY KEY, year INTEGER NOT NULL, temperature REAL NOT NULL)",
            logNodeError
          );
          averageTemperatureByYear.forEach((row) => {
            db.run(
              "INSERT INTO Average (year, temperature) VALUES ($year, $temp)",
              {
                $year: row.year,
                $temp: row.temperature,
              },
              (err) => {
                if (err) {
                  console.log(err);
                }
              }
            );
          });
        }
      );
    });
  });
  
/*
  1.Introduction
    One of the most essential skills as a programmer is being able to identify and utilize the appropriate tool for a specified task. In the context of database management, this will mean using SQL to specify, store, update and retrieve data. In the context of web programming, this will mean writing JavaScript to automate, manipulate, and return relevant values — for presentation in a website or use in a backend script. What happens, then, when we need both? What if we want to retrieve data from a SQL database (using our database administration skills) and then manipulate and expose that data through JavaScript functions (using our web programming skills)?

    In this lesson, we will learn how to manage an SQLite database from within JavaScript. We will see how to perform all the fundamental features of database management — CREATEing INSERTing and SELECTing, and then interacting with that data using the full force of JavaScript — writing functions, wielding objects, and performing calculations. It’s important to know that many of the results herein could be obtained purely through SQL or purely through JavaScript if need be. But something simple to perform (and read back) with one language might be very hard to write and understand in another.

    In the workspace, there’s code that opens a connection to an SQLite database. There’s a function getAverageTemperatureForYear() that will take a year as an argument. The function retrieves the temperatures from that year and then calculates the year’s average. We’ve called it with different years, illustrating the power of being able to power our SQL queries with JavaScript.  

  2.Opening A Database
    Throughout this lesson, we’re going to access an SQLite database with temperature data for countries over the last 150 years. We’re going to take this data, collect it per year in a JavaScript object, average it, and save it into a new SQL database!

    To get these two worlds to communicate, we will be importing a package into our JavaScript code. This package will allow us to open the channels of communication with our SQLite database. Once we do that, we can start writing SQL directly in our JavaScript!

    The first order of business is to import the module that will facilitate this connection. Recall that to import a module in JavaScript we can use require() like so:

    const sqlite3 = require('sqlite3');

    The code above gives us a JavaScript object, called sqlite3 that we can interact with via methods. The first method we’re going to use on sqlite3 is going to be the method that opens up a new database. In SQLite, a database corresponds to a single file, so the only argument required to open this database is the path to the file that SQLite will use to save the database.

    const db = new sqlite3.Database('./db.sqlite');

    This code will create a new database file, in the current folder, named db.sqlite. Then we’ll have a database to interact with!

    ex
    const { printQueryResults } = require('./utils');
    // require the 'sqlite3' package here
    const sqlite3 = require('sqlite3');
    // open up the SQLite database in './db.sqlite'
    const db = new sqlite3.Database('./db.sqlite');//the file as argument

    db.all('SELECT * FROM TemperatureData ORDER BY year', (error, rows) => {
    if (error) {
        throw error;
    }
    printQueryResults(rows);
    });

  3.Retrieving All Rows(db.all())
    In the previous exercise we were able to import the ‘sqlite3’ library and use that to open our SQLite database — so far so good! But we still haven’t retrieved any information from it. Since we have access to our database as a JavaScript object, let’s try running a query on it. Recall that a query is a statement that speaks to a database and requests specific information from it. To execute a query and retrieve all rows returned, we use db.all(), like so:

    db.all("SELECT * FROM Dog WHERE breed='Corgi'", (error, rows) => {
    printQueryResults(rows);
    });

    In the previous example, we used the db.all() method to retrieve every dog of breed “Corgi” from a table named Dog and print them.

  4. Retrieving A Single Row(db.get())
    db.all() is a useful tool to fetch all the data we have that meets certain criteria. But what if we only want to get a particular row? We could do something like this:


    Explain
    db.all("SELECT * FROM Dog", (error, rows) => {
    printQueryResults(rows.find(row => row.id === 1));
    });

    In this example, we fetch all the rows from a database. Doing this populates a JavaScript variable, rows, that contains the results of our SELECT statement (all the rows from the database). We use JavaScript’s .find() method to find the row with an ID of 1. Then print out that row.

    With a tiny database, this might be OK, but it will be a considerable and unnecessary load if the database is large in any sense. Luckily, we have a different method that will fetch a single row from a database: db.get(). See it in action:


    Explain
    db.get("SELECT * FROM Dog WHERE owner_name = 'Charlie'", (error, row) => {
    printQueryResults(row); 
    });

    Sometimes all we need to know is whether a record matching our query exists (for instance: the code above would answer the question “Does Charlie own a dog?” depending on whether or not row is undefined). Sometimes we know that there’s only a single row because we are searching for a specific ID. And sometimes we only want an example of a row that would match our description. In the code above we would only print information about one dog. To accomplish this, we use db.get() instead of db.all().

    It’s important to note that even if multiple rows match the query, db.get() will only return a single result. In the example above, if “Charlie” owns multiple dogs, the code provided will still only print information about one dog.

  5.Using Placeholders
    Now we know how to retrieve data from a database when we know exactly what we’re looking for. But we may not always know what values we will need to search for when writing our program. When we write a JavaScript function, we give the function parameters that will have many different values when the function gets called. Placeholders solve a similar problem in the world of SQL queries. Sometimes we’ll want to search our database based on a user’s submission. Or we might find ourselves wanting to perform a series of queries looping over some external data.

    In those cases, we will have to use a placeholder. A placeholder is a part of our SQL query that we want to be interpolated with a variable’s contents. We want the value of the JavaScript variable to be placed within the SQL query. To do this properly, we’ll need to pass a particular argument to our db.run() command that will tell it how to interpolate the query.


    Explain
    const furLength1 = "short";
    const furLength2 = "long";
    const furColor1 = "brown";
    const furColor2 = "grey";

    const findDogByFur = (length, color) => {
    db.all(
        "SELECT * FROM Dog WHERE fur_length = $furLength AND fur_color = $furColor", 
        {
        $furLength: length,
        $furColor: color
        }, 
        (error, rows) => {
        printQueryResults(rows);
        }
    );
    });

    findDogByFur(furLength1, furColor1); // prints all dogs with short brown fur.
    findDogByFur(furLength2, furColor1); // prints all dogs with long brown fur.
    findDogByFur(furLength1, furColor2); // prints all dogs with short grey fur.
    findDogByFur(furLength2, furColor2); // prints all dogs with long grey fur

    As we can see in the example above, the power of placeholders is that we don’t need to know precisely the data we’re searching for at the time of writing our query. We can use these placeholders and then later, when we have values we want to find, we can plug them into the query. This is a highly effective tool that will allow us to harness our programming skills within our database queries.

  6.Using db.run()(when no returning)
    Not all SQL commands return rows, and in fact, some essential SQL commands do not. If we INSERT a row or CREATE a TABLE we will not receive a row in response. To perform SQL commands that do not return rows, we use db.run() to run the command. db.run() does not return a value, but, depending on the SQL command, it may attach properties to the this keyword within the scope of the callback. In some cases, like creating a table, db.run() will not modify this. In other cases, like when INSERTing a row, a callback to db.run() will be able to access this.lastID, the ID of the last INSERTed row.

  7.Handling Errors Gracefully
    No one’s perfect. Code, like people, can make mistakes. This is OK! What’s important is that we learn how to handle our difficulties while keeping our composure. Handling errors is an important part of the process when dealing with Node & SQL in particular. When our code throws an error, we should be able to handle it before it reaches our end users and incites panic and concern. We still want to know what happened, so that we can perform a suitable action based on the error that occurred — so we catch the error.

    For db.run(), db.each(), db.get(), and db.all(), the first argument to the callback will always be an Error object if an error occurred. If there is no error, this argument will be null. We can check if this error exists, and if it does exist, we can handle it.

  8.Using db.each()
    While learning JavaScript, you likely learned about the powerful method .forEach() that allows us to process every element in an array separately. Now we will use a similar method that will enable us to process every row returned from a database query.

    db.each("SELECT * FROM Dog WHERE breed = 'Labrador'", 
    (error, row) => {
        // This gets called for every row our query returns
        console.log(`${row.name} is a good dog`);
    },
    (error, numberOfRows) => {
        // This gets called after each of our rows have been processed
        console.log(`There were ${numberOfRows} good dogs`);
    });

    In the code above we SELECT all the Labrador dogs from our Dog database. We offer affirmation to each of the animals individually and then announce how many received this praise in sum.

    db.each() takes a query and a callback function that it performs on each row returned from the query. This is a useful technique for transforming or updating rows. This is also useful for memory management — we only have to look at one row at a time instead of trying to process every returned row at the same time. db.each() additionally takes an optional second callback function, which will be called when all of the queries are completed and processed.

  9.Creating A New Table
    So far we’ve managed to:

    Query a database for weather records by location.
    Reformat that data into a JavaScript object.
    Manipulate that JavaScript object to find new, meaningful information.
    That’s pretty significant! Now it’s time to take that useful information and add it to a table of our own. Since creating a table is another operation that does not return a row, we can use the same db.run() we used to INSERT rows. Let’s see what happens when we CREATE a TABLE and INSERT our data into it.

    Notice there’s a statement declaring “DROP TABLE IF EXISTS” — this is because we want to make sure when we create our new table that we won’t run into an error telling us the table already exists (from previous times running our code).

  10.Serial Queries(when we want things to happen in order)
    By default, the commands we issue to our database run in parallel. Every request we make gets sent to the database — which processes them all as quickly as it can, regardless of the order in which they got sent. This is usually a good thing because it means that we can get results faster, but in our case, we don’t want to try to INSERT data into a table that hasn’t been created yet. One way to avoid this issue is to write all of our code in nested callbacks, let’s take a look at how that might look:

    db.run("DROP TABLE Dog", error => {
    db.run("CREATE TABLE Dog", error => {
        db.run("INSERT INTO Dog (breed, name, owner, fur_color, fur_length) VALUES ('Dachschund', 'Spike', 'Elizabeth', 'Brown', 'Short')", error => {
        }
    }
    }

    As you can see, with this technique every command gets increasingly indented, which becomes a bit of an eyesore if we want to guarantee multiple things run chronologically. Another way of accomplishing this task is by using the db.serialize() method like so:

    db.serialize(() => {
    db.run("DROP TABLE Dog");
    db.run("CREATE TABLE Dog");
    db.run("INSERT INTO Dog (breed, name, owner, fur_color, fur_length) VALUES  ('Dachshund', 'Spike', 'Elizabeth', 'Brown', 'Short')");
    });

    In the previous example, we explicitly tell the database to:

    First, remove the table Dog if it exists.
    Second, create an empty table named Dog.
    Third, insert a new row into the table. In exactly that order without running any command until the previous one completes.

Wrap Up
Wow, we were able to take data from a source, manipulate it for our needs, and save it separately. We’ve managed to set up a database, create tables, insert data, and modify it — all within JavaScript! We learned about how to ensure that JavaScript runs a set of commands chronologically so that we can avoid race conditions. We leveraged JavaScript methods fluently alongside our database queries in SQL. Now our knowledge of SQL and our understanding of JavaScript can work together to accomplish more than either could alone.

Good job!
*/