// Example of defining an interface for user properties
interface User {
  name: string; 
  age: string; 
  dob?: Date; 
}

// Extending the User interface to create an Admin interface
interface Admin extends User {
  role: string; 
}

// Creating an object of type User
const userTmp: User = {
  name: "Rakesh",
  age: "25", 
};

// Creating an object of type Admin
const adminTmp: Admin = {
  name: "Rakesh",
  age: "25", 
  role: "Admin", 
};

// Using interface utility to create a Guest interface by omitting 'role' from Admin
interface Guest extends Omit<Admin, "role"> {}

// Defining an interface for a tuple with specific positions for number and string
interface ContactP extends Array<string | number> {
  0: number; 
  1: string; 
}

// Creating an object of type Guest
const guestTmp: Guest = {
  name: "Rakesh",
  age: "25",
};

// Creating a tuple of type ContactP
const contactP: ContactP = [123435, "Rakesh"]; 