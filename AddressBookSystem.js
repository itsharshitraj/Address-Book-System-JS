
// UC-6: Ability to Count Contacts in Address Book
class AddressBookContact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateAddress(address, "Address");
        this.city = this.validateAddress(city, "City");
        this.state = this.validateAddress(state, "State");
        this.zip = this.validateZip(zip);
        this.phoneNumber = this.validatePhone(phoneNumber);
        this.email = this.validateEmail(email);
    }


    // Name validation (First & Last Name)
    validateName(name, fieldName) {
        let namePattern = /^[A-Z][a-zA-Z]{2,}$/;
        if (!namePattern.test(name)) {
            throw new Error(`${fieldName} is invalid. It must start with a capital letter and have at least 3 characters.`);
        }
        return name;
    }

    // Address, City, and State validation (Minimum 4 characters)
    validateAddress(value, fieldName) {
        if (value.length < 4) {
            throw new Error(`${fieldName} must have at least 4 characters.`);
        }
        return value;
    }

    // Zip code validation (6-digit numeric)
    validateZip(zip) {
        let zipPattern = /^\d{6}$/;
        if (!zipPattern.test(zip)) {
            throw new Error("Zip code is invalid. It must be a 6-digit number.");
        }
        return zip;
    }

    // Phone number validation (10-digit number)
    validatePhone(phoneNumber) {
        let phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phoneNumber)) {
            throw new Error("Phone number is invalid. It must be a 10-digit number.");
        }
        return phoneNumber;
    }

    // Email validation (Basic format check)
    validateEmail(email) {
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            throw new Error("Email is invalid. It must follow standard email format.");
        }
        return email;
    }

   
    displayContact() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// UC-6: Ability to Count Contacts in Address Book

class AddressBook {
    constructor() {
        this.contacts = []; // Address Book array
    }

    addContact(contact) {
        if (contact instanceof AddressBookContact) {
            this.contacts.push(contact);
            console.log("Contact added successfully.");
        } else {
            console.error("Invalid contact. Must be an instance of AddressBookContact.");
        }
    }

    deleteContact(firstName, lastName) {
        let index = this.contacts.findIndex(contact => contact.firstName === firstName && contact.lastName === lastName);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`Contact ${firstName} ${lastName} deleted successfully.`);
        } else {
            console.log("Contact not found. Deletion failed.");
        }
    }
    countContacts() {
        return this.contacts.length;
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

    // Display all contacts before editing
    console.log("\nBefore Editing:");
    addressBook.displayAllContacts();

      // Deleting a contact
    addressBook.deleteContact("John", "Doe");

       // Display all contacts after deletion
    console.log("\nAfter Deletion:");
    addressBook.displayAllContacts();
    
} catch (error) {
    console.error(error.message);
}





