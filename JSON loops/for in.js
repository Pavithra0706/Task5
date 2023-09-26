// Using "for in" loop:

const json = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["Reading", "Gardening", "Cooking"],
  };
  console.log("Using 'for...in' loop:");
  for (const key in json) {
    console.log(`${key}: ${json[key]}`);
  }
    