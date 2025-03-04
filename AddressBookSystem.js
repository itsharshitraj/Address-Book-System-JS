// UC-2: Ensure only valid contacts are added

class AddressBookContact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
         // Validation before assigning values
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
// Testing valid contact
try {
    let contact1 = new AddressBookContact("John", "Doe", "123 Main St", "New York", "NYCs", "100001", "1234567890", "john.doe@example.com");
    console.log(contact1.displayContact());
} catch (error) {
    console.error(error.message);
}



