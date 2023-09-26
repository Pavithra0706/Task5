// Using "for of" loop:

  const json = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["Reading", "Gardening", "Cooking"],
  };
  
  console.log("Using 'for...of' loop with Object.entries():");
  for (const [key, value] of Object.entries(json)) {
    console.log(`${key}: ${value}`);
  }
  