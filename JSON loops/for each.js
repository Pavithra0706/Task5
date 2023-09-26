// Using "for each" loop:

const json = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["Reading", "Gardening", "Cooking"],
  };
  
  console.log("Using 'forEach' to iterate over keys and values:");
  
  Object.entries(json).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  