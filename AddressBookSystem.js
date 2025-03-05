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
     this.contacts.push(contact);
        }

// UC-9: View Persons by City or State
viewByCityOrState(location, type) {
    if (type !== "city" && type !== "state") {
        console.log("Invalid search type! Use 'city' or 'state'.");
        return;
    }
    const filteredContacts = this.contacts.filter(contact => 
        type === "city" ? contact.city === location : contact.state === location
    );

    if (filteredContacts.length === 0) {
        console.log(`No contacts found in ${type}: ${location}`);
        return;
    }

    console.log(`Contacts in ${type} '${location}':`);
    filteredContacts.map(contact => 
        console.log(`${contact.firstName} ${contact.lastName} - ${contact.city}, ${contact.state}`)
    );
}
  
    // ✅ UC-10: Get number of contacts by City or State
    countByCityOrState(location, type) {
        if (type !== "city" && type !== "state") {
            console.log("Invalid search type! Use 'city' or 'state'.");
            return;
        }

        const count = this.contacts.filter(contact =>
            type === "city" ? contact.city === location : contact.state === location
        ).length;

        console.log(`Total contacts in ${type} '${location}': ${count}`);
    }
}


// Example Usage
const addressBook = new AddressBook();
addressBook.addContact(new AddressBookContact("John", "Doe", "123 Main St", "New York", "NYCs", "100010", "1234567890", "john.doe@example.com"));
addressBook.addContact(new AddressBookContact("Jane", "Smith", "456 Elm St", "Los Angeles", "CALc", "900001", "9876543210", "jane.smith@example.com"));
addressBook.addContact(new AddressBookContact("Alice", "Brown", "789 Oak St", "New York", "NYCs", "100020", "1122334455", "alice.brown@example.com"));

// View persons by City
addressBook.viewByCityOrState("New York", "city");

// Get count of persons by City
addressBook.countByCityOrState("New York", "city");

//  Get count of persons by State
addressBook.countByCityOrState("CA", "state");




