

# Promises structure

- const promise = new Promise((resolve, reject) => { ... });

- This line creates a new Promise object using the Promise constructor. **The constructor takes a callback function as an argument**, which is called the ***executor function.*** 
- The executor function is responsible for resolving or rejecting the promise.

- The ***executor function takes two arguments: resolve and reject.*** These are functions that can be called to resolve or reject the promise, respectively.

# **Function call**

- Remember declaration of a function is one thing which is done as follows:

`function print_names (names){
    for(item of names){
        console.log(item)
    }
}`

- But above function will not work until you call it. You can call a function simply by using:

  `print_names(parameters_as_per_you_need)`

- Order in which the function are called is very important
- By convention you place all the function at the bottom of your code file (**this is a observation during the boot.dev learning**)

# USE ASYNC AND AWAIT OVER .then() and new Promise

- While even the .then() syntax is generally easier to use than callbacks without the Promise API, the await syntax makes them even easier to use. You should use async and await over .then and New Promise() as a general rule.
