
comment in sql=> /* */
## Introduction
In order to efficiently store data, we often spread related information across multiple tables.

For instance, imagine that we’re running a magazine company where users can have different types of subscriptions to different products. Different subscriptions might have many different properties. Each customer would also have lots of associated information.

We could have one table with all of the following information:

order_id
customer_id
customer_name
customer_address
subscription_id
subscription_description
subscription_monthly_price
subscription_length
purchase_date
However, a lot of this information would be repeated. If the same customer has multiple subscriptions, that customer’s name and address will be reported multiple times. If the same subscription type is ordered by multiple customers, then the subscription price and subscription description will be repeated. This will make our table big and unmanageable.

So instead, we can split our data into three tables:

1. orders would contain just the information necessary to describe what was ordered:

order_id, customer_id, subscription_id, purchase_date
2. subscriptions would contain the information to describe each type of subscription:

subscription_id, description, price_per_month, subscription_length
3. customers would contain the information for each customer:

customer_id, customer_name, address
In this lesson, we’ll learn the SQL commands that will help us work with data that is stored in multiple tables.

## Combining Tables with SQL(when join select is taking all or selected columns from the combined(result)table)

Combining tables manually is time-consuming. Luckily, SQL gives us an easy sequence for this: it’s called a JOIN.

If we want to combine orders and customers, we would type:

SELECT *
FROM orders
JOIN customers
  ON orders.customer_id = customers.customer_id;

Let’s break down this command:

The first line selects all columns from our combined table. If we only want to select certain columns, we can specify which ones we want.
The second line specifies the first table that we want to look in, orders
The third line uses JOIN to say that we want to combine information from orders with customers.
The fourth line tells us how to combine the two tables. We want to match orders table’s customer_id column with customers table’s customer_id column.
Because column names are often repeated across multiple tables, we use the syntax table_name.column_name to be sure that our requests for columns are unambiguous. In our example, we use this syntax in the ON statement, but we will also use it in the SELECT or any other statement where we refer to column names.

For example: Instead of selecting all the columns using *, if we only wanted to select orders table’s order_id column and customers table’s customer_name column, we could use the following query:


SELECT orders.order_id,
   customers.customer_name
FROM orders
JOIN customers
  ON orders.customer_id = customers.customer_id;

ex
select * from orders join subscriptions on orders.subscription_id = subscriptions.subscription_id where description='Fashion Magazine';
see here dint mention which table description(as only in one table we can if we want also)

## Inner Joins(normal join op)(here only matching is kept if not matching ommitted)
Let’s revisit how we joined orders and customers. For every possible value of customer_id in orders, there was a corresponding row of customers with the same customer_id.

What if that wasn’t true?

For instance, imagine that our customers table was out of date, and was missing any information on customer 11. If that customer had an order in orders, what would happen when we joined the tables?

When we perform a simple JOIN (often called an inner join) our result only includes rows that match our ON condition.

Consider the following animation, which illustrates an inner join of two tables on table1.c2 = table2.c2:

Animation of an Inner Join

The first and last rows have matching values of c2. The middle rows do not match. The final result has all values from the first and last rows but does not include the non-matching middle row.

## Left Joins(return all records from the left table (or “outer” table), and the matched records from the right table (“inner” table). The result is NULL on the right side, if there is no matching records

similar to left we have right join which does ulta of left join

What if we want to combine two tables and keep some of the un-matched rows?

SQL lets us do this through a command called LEFT JOIN. A left join will keep all rows from the first table, regardless of whether there is a matching row in the second table.

Consider the following animation:

Animation of a Left Join

The first and last rows have matching values of c2. The middle rows do not match. The final result will keep all rows of the first table but will omit the un-matched row from the second table.

This animation represents a table operation produced by the following command:


SELECT *
FROM table1
LEFT JOIN table2
  ON table1.c2 = table2.c2;

The first line selects all columns from both tables.
The second line selects table1 (the “left” table).
The third line performs a LEFT JOIN on table2 (the “right” table).
The fourth line tells SQL how to perform the join (by looking for matching values in column c2).

## Primary Key vs Foreign Key
Let’s return to our example of the magazine subscriptions. Recall that we had three tables: orders, subscriptions, and customers.

Each of these tables has a column that uniquely identifies each row of that table:

order_id for orders
subscription_id for subscriptions
customer_id for customers
These special columns are called primary keys.

Primary keys have a few requirements:

None of the values can be NULL.
Each value must be unique (i.e., you can’t have two customers with the same customer_id in the customers table).
A table can not have more than one primary key column.
Let’s reexamine the orders table:

order_id	customer_id	subscription_id	purchase_date
1	2	3	2017-01-01
2	2	2	2017-01-01
3	3	1	2017-01-01

Note that customer_id (the primary key for customers) and subscription_id (the primary key for subscriptions) both appear in this.

When the primary key for one table appears in a different table, it is called a foreign key.

So customer_id is a primary key when it appears in customers, but a foreign key when it appears in orders.

In this example, our primary keys all had somewhat descriptive names. Generally, the primary key will just be called id. Foreign keys will have more descriptive names.

Why is this important? The most common types of joins will be joining a foreign key from one table with the primary key from another table. For instance, when we join orders and customers, we join on customer_id, which is a foreign key in orders and the primary key in customers.

ex
select * from classes c join students s on c.id = s.class_id;  use of alias name here seen

## Cross Join
So far, we’ve focused on matching rows that have some information in common.

Sometimes, we just want to combine all rows of one table with all rows of another table.

For instance, if we had a table of shirts and a table of pants, we might want to know all the possible combinations to create different outfits.

Our code might look like this:

SELECT shirts.shirt_color,
   pants.pants_color
FROM shirts
CROSS JOIN pants;

The first two lines select the columns shirt_color and pants_color.
The third line pulls data from the table shirts.
The fourth line performs a CROSS JOIN with pants.
Notice that cross joins don’t require an ON statement. You’re not really joining on any columns!

If we have 3 different shirts (white, grey, and olive) and 2 different pants (light denim and black), the results might look like this:

shirt_color	pants_color
white	light denim
white	black
grey	light denim
grey	black
olive	light denim
olive	black

3 shirts × 2 pants = 6 combinations!

This clothing example is fun, but it’s not very practically useful.

A more common usage of CROSS JOIN is when we need to compare each row of a table to a list of values.

Let’s return to our newspaper subscriptions. This table contains two columns that we haven’t discussed yet:

start_month: the first month where the customer subscribed to the print newspaper (i.e., 2 for February)
end_month: the final month where the customer subscribed to the print newspaper
Suppose we wanted to know how many users were subscribed during each month of the year. For each month (1, 2, 3) we would need to know if a user was subscribed.

ex
select month,count(*) 
from newspaper 
cross join months 
where start_month <= month and end_month >=month 
group by month;

## Union(for set operations same cols of tables and same dtypes of all)(in unior the second table ka gets down of first table values)
Sometimes we just want to stack one dataset on top of the other. Well, the UNION operator allows us to do that.

Suppose we have two tables and they have the same columns.

table1:

pokemon	type
Bulbasaur	Grass
Charmander	Fire
Squirtle	Water

table2:

pokemon	type
Snorlax	Normal

If we combine these two with UNION:


Explain
SELECT *
FROM table1
UNION
SELECT *
FROM table2;

The result would be:

pokemon	type
Bulbasaur	Grass
Charmander	Fire
Squirtle	Water
Snorlax	Normal

SQL has strict rules for appending data:

Tables must have the same number of columns.
The columns must have the same data types in the same order as the first table.

## With(using with write a query and from that name(temp table) we perform operation  on it):
Often times, we want to combine two tables, but one of the tables is the result of another calculation.

Let’s return to our magazine order example. Our marketing department might want to know a bit more about our customers. For instance, they might want to know how many magazines each customer subscribes to. We can easily calculate this using our orders table:


Explain
SELECT customer_id,
   COUNT(subscription_id) AS 'subscriptions'
FROM orders
GROUP BY customer_id;

This query is good, but a customer_id isn’t terribly useful for our marketing department, they probably want to know the customer’s name.

We want to be able to join the results of this query with our customers table, which will tell us the name of each customer. We can do this by using a WITH clause.


Explain
WITH previous_results AS (
   SELECT ...
   ...
   ...
   ...
)
SELECT *
FROM previous_results
JOIN customers
  ON _____ = _____;

The WITH statement allows us to perform a separate query (such as aggregating customer’s subscriptions)
previous_results is the alias that we will use to reference any columns from the query inside of the WITH clause
We can then go on to do whatever we want with this temporary table (such as join the temporary table with another table)
Essentially, we are putting a whole first query inside the parentheses () and giving it a name. After that, we can use this name as if it’s a table and write a new query using the first query.

ex
WITH previous_query AS (
SELECT customer_id,
       COUNT(subscription_id) AS 'subscriptions'
FROM orders
GROUP BY customer_id)

SELECT customers.customer_name,
previous_query.subscriptions
FROM previous_query
JOIN customers
	ON customers.customer_id = previous_query.customer_id;

ex
 SELECT premium_users.user_id,
  months.months,
  CASE
    WHEN (
      premium_users.purchase_date <= months.months
      )
      AND
      (
        premium_users.cancel_date >= months.months
        OR
        premium_users.cancel_date IS NULL
      )
    THEN 'active'
    ELSE 'not_active'
  END AS 'status'//will give name of col as status
FROM premium_users
CROSS JOIN months;

# Review
In this lesson, we learned about relationships between tables in relational databases and how to query information from multiple tables using SQL.

Let’s summarize what we’ve learned so far:

JOIN will combine rows from different tables if the join condition is true.

LEFT JOIN will return every row in the left table, and if the join condition is not met, NULL values are used to fill in the columns from the right table.

Primary key is a column that serves a unique identifier for the rows in the table.

Foreign key is a column that contains the primary key to another table.

CROSS JOIN lets us combine all rows of one table with all rows of another table.

UNION stacks one dataset on top of another.

WITH allows us to define one or more temporary tables that can be used in the final query.