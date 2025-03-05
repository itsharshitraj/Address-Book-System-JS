// AddressBookContact class with validation
class AddressBookContact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
       
         this.firstName = firstName;
         this.lastName = lastName;
         this.address = address;
         this.city = city;
         this.state = state;
         this.zip = zip;
         this.phoneNumber = phoneNumber;
         this.email = email;
    }

// UC-11: Override toString() for better output
toString() {
    return `${this.firstName} ${this.lastName}, ${this.address}, ${this.city}, ${this.state}, ${this.zip}, ${this.phoneNumber}, ${this.email}`;
}
}
   

class AddressBook {
    constructor() {
        this.contacts = []; 
    }

    addContact(contact) {
     this.contacts.push(contact);
        }

         // UC-11: Sort Address Book Alphabetically by First Name

    sortByName() {
        this.contacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
        console.log("Sorted Address Book:");
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
}



// Example Usage
const addressBook = new AddressBook();
addressBook.addContact(new AddressBookContact("John", "Doe", "123 Main St", "New York", "NYCs", "100010", "1234567890", "john.doe@example.com"));
addressBook.addContact(new AddressBookContact("Jane", "Smith", "456 Elm St", "Los Angeles", "CALc", "900001", "9876543210", "jane.smith@example.com"));
addressBook.addContact(new AddressBookContact("Alice", "Brown", "789 Oak St", "New York", "NYCs", "100020", "1122334455", "alice.brown@example.com"));

// Sort contacts alphabetically
addressBook.sortByName();




