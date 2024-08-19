# JSON (JavaScript Object Notation)


- In layman language JSON define the rules to pack your data in way that is easy to transfer over the internet.
- HTTP uses the JSON to transfer requests and responses from clients and servers repectively.
  

 # Technicall explanation: 
  
  - *JSON is a stringified representation of a JavaScript object*, which makes it perfect for saving to a file or sending in an HTTP request. Remember, an actual JavaScript object is something that exists only within your program's variables. If we want to send an object outside our program, for example, across the internet in an HTTP request, we need to convert it to JSON first.



# .json() method in Javascript

- When the browser receives any response, it uses the .json() method to parse (simply unpack) the response body as JSON. 
  
- Example: 

```
let jsonString = '{"name": "John", "age": 30}';
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Output: John

```
- As you can see that after using `.json()` we can easily access the objects inside the jsonString which is in the JSON format.
  

# WORKING OF JSON:

JSON takes the key-value pairs of a JavaScript object and represents them as a string, using a specific syntax. Here's a breakdown of what happens:

1. **Key-value pairs:** In a JavaScript object, you have key-value pairs, where each key is a string, and each value can be a string, number, boolean, array, object, or null. For example:

```
const person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Developer'
};

```

2. **Stringification:** When you convert this object to JSON, each key-value pair is represented as a string, using the following rules:

- **Keys are always strings**, enclosed in double quotes (") if they contain special characters.
- **Values** are represented as strings, numbers, booleans, - - arrays, or objects, depending on their type.
- **Colon (:)** separates each key from its value.
- **Commas (,**) separate each key-value pair.

3. **JSON syntax:** The resulting string follows the JSON syntax, which is a subset of the JavaScript syntax. Here's the JSON representation of the person object:

```
{
  "name": "John Doe",
  "age": 30,
  "occupation": "Developer"
}
```

# JSON.stringify and JSON.parse()

- In JavaScript, you can use the JSON.stringify() method to convert an object to a JSON string, and the JSON.parse() method to parse a JSON string back into an object:

```
const person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Developer'
};

const jsonString = JSON.stringify(person);
console.log(jsonString); // Output: {"name":"John Doe","age":30,"occupation":"Developer"}

const parsedObject = JSON.parse(jsonString);
console.log(parsedObject); // Output: { name: "John Doe", age: 30, occupation: "Developer" }
```

