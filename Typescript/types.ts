// Example of defining a type for user properties
type UserProps = {
  name: string; 
  age: number; 
  dob?: Date; 
};

// Extending the UserProps type to create an AdminProps type
type AdminProps = UserProps & {
  isAdmin: boolean; 
};

// Creating an object of type AdminProps
let user: AdminProps = {
  name: "Rakesh",
  age: 23,
  isAdmin: false, 
};

// Defining a type alias for a string to represent an address
type Address = string;
const address: Address = "Hyderabad";

// Defining a type alias that can be either a string or a number
type ID = string | number;
const id: ID = 1; // ID can be a number or a string

// Defining a type for a function that takes two numbers and returns a number
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b; // Function implementation

// Using utility types to create a new type by omitting properties from another type
// Omit removes the specified properties from AdminProps
type GuestProps = Omit<AdminProps, "isAdmin" | "name">;

// Defining a type for a tuple with specific positions for number and string
type Contact = [number, string];
const contact: Contact = [123435, "Rakesh"]; 

// Extracting types from an existing object
const project = {
  name: "Contact Manager",
  description: "React + TypeScript + API",
  technologies: {
    framework: "React",
    language: "TypeScript",
    team: 4,
  },
};

// Extracting the type of the entire project object
type Project = typeof project;

// Extracting the type of the 'technologies' property from the Project type
type Technologies = Project["technologies"];

// Extracting the type of the 'team' property from the Technologies type
type Team = Technologies["team"];

// Using 'as const' to create a readonly object type
const College = {
  address: "Hyderabad",
  phone: 1234567890,
} as const;

// Extracting the type of the College object
type CollegeType = typeof College;
