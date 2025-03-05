
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
// UC-12: Sort Address Book by City, State, or Zip
sortByField(field) {
    if (!["city", "state", "zip"].includes(field)) {
        console.log("Invalid field! Please use 'city', 'state', or 'zip'.");
        return;
    }
        this.contacts.sort((a, b) => {
            if (field === "zip") {
                return parseInt(a.zip) - parseInt(b.zip); // Numeric sorting
            }
            return a[field].toLowerCase().localeCompare(b[field].toLowerCase()); // String sorting
        });

        console.log(`\nSorted Address Book by ${field.toUpperCase()}:`);
        this.contacts.forEach(contact => console.log(contact.toString()));
    } 
}



// Example Usage
const addressBook = new AddressBook();
addressBook.addContact(new AddressBookContact("John", "Doe", "123 Main St", "New York", "NYCs", "100010", "1234567890", "john.doe@example.com"));
addressBook.addContact(new AddressBookContact("Jane", "Smith", "456 Elm St", "Los Angeles", "CALc", "900001", "9876543210", "jane.smith@example.com"));
addressBook.addContact(new AddressBookContact("Alice", "Brown", "789 Oak St", "New York", "NYCs", "100020", "1122334455", "alice.brown@example.com"));


// Sort by City
addressBook.sortByField("city");

// Sort by State
addressBook.sortByField("state");

// Sort by Zip
addressBook.sortByField("zip");

