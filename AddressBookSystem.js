// UC-1: Create an Address Book Contact

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

    displayContact() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// Creating a sample contact and displaying it
let contact1 = new AddressBookContact("John", "Doe", "123 Main St", "New York", "NY", "10001", "1234567890", "john.doe@example.com");

console.log(contact1.displayContact());
