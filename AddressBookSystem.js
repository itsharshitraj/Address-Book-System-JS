// AddressBookContact class with validation
class AddressBookContact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
         // Validation using regular expressions
         const namePattern = /^[A-Z][a-zA-Z]{2,}$/; // First and Last Name: Capital letter + at least 3 characters
         const addressPattern = /^.{4,}$/; // Address, City, State: Minimum 4 characters
         const zipPattern = /^[0-9]{6}$/; // Zip: Exactly 6 digits
         const phonePattern = /^[0-9]{10}$/; // Phone: Exactly 10 digits
         const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //Basic email validation

          // Validating input fields
        if (!namePattern.test(firstName)) throw new Error("First Name must start with a capital letter and have at least 3 characters.");
        if (!namePattern.test(lastName)) throw new Error("Last Name must start with a capital letter and have at least 3 characters.");
        if (!addressPattern.test(address)) throw new Error("Address must have at least 4 characters.");
        if (!addressPattern.test(city)) throw new Error("City must have at least 4 characters.");
        if (!addressPattern.test(state)) throw new Error("State must have at least 4 characters.");
        if (!zipPattern.test(zip)) throw new Error("Zip must be exactly 6 digits.");
        if (!phonePattern.test(phoneNumber)) throw new Error("Phone Number must be exactly 10 digits.");
        if (!emailPattern.test(email)) throw new Error("Invalid email format.");

         // Assigning values after validation
         this.firstName = firstName;
         this.lastName = lastName;
         this.address = address;
         this.city = city;
         this.state = state;
         this.zip = zip;
         this.phoneNumber = phoneNumber;
         this.email = email;
    }

   
    displayContact() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// AddressBook class with search functionality

class AddressBook {
    constructor() {
        this.contacts = []; // Address Book array
    }

    addContact(contact) {
        if (!(contact instanceof AddressBookContact)) {
            console.error("Invalid contact. Must be an instance of AddressBookContact.");
            return;
        }

   // Check if a contact with the same first and last name already exists
   let isDuplicate = this.contacts.some(existingContact => 
    existingContact.firstName === contact.firstName && 
    existingContact.lastName === contact.lastName
);

  if (isDuplicate) {
    console.error(`Contact ${contact.firstName} ${contact.lastName} already exists! Duplicate entry not allowed.`);
    return;
}

 this.contacts.push(contact);
 console.log(`Contact ${contact.firstName} ${contact.lastName} added successfully.`);
}

  // UC-8: Search Contacts by City
  searchByCity(city) {
    let results = this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase());
    console.log(`Contacts in City "${city}":`);
    results.forEach(contact => console.log(contact.displayContact()));
    return results;
}

// UC-8: Search Contacts by State
searchByState(state) {
    let results = this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase());
    console.log(`Contacts in State "${state}":`);
    results.forEach(contact => console.log(contact.displayContact()));
    return results;
}

   
    displayAllContacts() {
        console.log("\nAddress Book Contacts:");
        this.contacts.forEach(contact => console.log(contact.displayContact()));
        console.log(`Total Contacts: ${this.countContacts()}`);
    }
}

// Creating an Address Book instance
let addressBook = new AddressBook();

try {
    // Adding valid contacts
    let contact1 = new AddressBookContact("John", "Doe", "123 Main St", "New York", "NYCs", "100001", "1234567890", "john.doe@example.com");
    addressBook.addContact(contact1);

    let contact2 = new AddressBookContact("Jane", "Smith", "456 Elm St", "Los Angeles", "CALs", "900001", "9876543210", "jane.smith@example.com");
    addressBook.addContact(contact2);

    let contact3 = new AddressBookContact("Alice", "Brown", "789 Pine St", "New York", "New York", "600001", "1122334455", "alice.brown@example.com");
    addressBook.addContact(contact3);

    // Searching contacts in a specific city
    addressBook.searchByCity("New York");

    // Searching contacts in a specific state
    addressBook.searchByState("California");

    
} catch (error) {
    console.error(error.message);
}





