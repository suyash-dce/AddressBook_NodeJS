class Contact {
    constructor(...params) {
      this.firstName = params[0];
      this.lastName = params[1];
      this.address = params[2];
      this.city = params[3];
      this.state = params[4];
      this.zip = params[5];
      this.phoneNo = params[6];
      this.email = params[7];
    }
  
    get firstName() {
      return this._firstName;
    }
    set firstName(firstName) {
      const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
      if (nameRegex.test(firstName)) this._firstName = firstName;
      else throw "Given first name is in wrong format";
    }
  
    get lastName() {
      return this._lastName;
    }
    set lastName(lastName) {
      const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
      if (nameRegex.test(lastName)) this._lastName = lastName;
      else throw "Givenl ast name is in wrong format";
    }
  
    get address() {
      return this._address;
    }
    set address(address) {
      const nameRegex = RegExp("^[A-Za-z0-9/,]{4,}$");
      if (nameRegex.test(address)) this._address = address;
      else throw "Given address is in wrong format";
    }
  
    get city() {
      return this._city;
    }
    set city(city) {
      const nameRegex = RegExp("^[A-Z]{1}[A-Za-z\\s]{3,}$");
      if (nameRegex.test(city)) this._city = city;
      else throw "Given city is in wrong format";
    }
  
    get state() {
      return this._state;
    }
    set state(state) {
      const nameRegex = RegExp("^[A-Z]{1}[A-Za-z\\s]{3,}$");
      if (nameRegex.test(state)) this._state = state;
      else throw "Given state is in wrong format";
    }
  
    get zip() {
      return this._zip;
    }
    set zip(zip) {
      const zipRegex = RegExp("^[0-9]{3}\\s?[0-9]{3}$");
      if (zipRegex.test(zip)) this._zip = zip;
      else throw "Given zip is in wrong format";
    }
  
    get phoneNo() {
      return this._phoneNo;
    }
    set phoneNo(phoneNo) {
      const phoneNoRegex = RegExp("^[0-9]{5}\\s?[0-9]{5}$");
      if (phoneNoRegex.test(phoneNo)) this._phoneNo = phoneNo;
      else throw "Given zip is in wrong format";
    }
  
    get email() {
      return this._email;
    }
    set email(email) {
      const emailRegex = RegExp(
        "^[a-z][0-9a-z_+-]*\\.?[0-9a-z_+-]+@\\w+(\\.[a-z]{2,}){1,2}$"
      );
      if (emailRegex.test(email)) this._email = email;
      else throw "Given email is in wrong format";
    }
  }
  
  let addressBook = [
    new Contact(
      "Suyash",
      "Jain",
      "Najafgarh",
      "New Delhi",
      "Delhi",
      "110043",
      "9810224035",
      "suyash.jain@gmail.com"
    ),
  ];

 addressBook.push(
    new Contact(
      "Harshit",
      "Jain",
      "Njf",
      "New Delhi",
      "Delhi",
      "110043",
      "8285683470",
      "harshit.jain@gmail.com"
    )
  );
  console.log(addressBook);

addressBook.find((contact) => contact.firstName == "Harshit").firstName =
  "Harsh";
console.log(addressBook);

//UC5 Delete Contact
addressBook = addressBook.filter((contact) => contact.firstName !== "Suyash");
console.log("UC5:Delete Contact");
console.log(addressBook);

//UC6 Count Contact
function counter(count) {
    return ++count;
  }
  numbersOfContact = addressBook.reduce(counter, 0);
  console.log("UC6:Contact Count");
  console.log("Number of contacts: " + numbersOfContact);

//UC7 Delete Duplicate Contacts on the basis of First Name

  //Add Duplicate Contact
  addressBook.push(
    new Contact(
      "Harsh",
      "Jain",
      "Njf",
      "New Delhi",
      "Delhi",
      "110043",
      "8285683470",
      "harshit.jain@gmail.com"
    )
  );

 
  console.log("UC7: Don't allow duplicate contact while adding")

  function addNewContact(addressBook, newContact) {
    if (
      addressBook.find(
        (contact) =>
          contact.firstName === newContact.firstName &&
          contact.lastName === newContact.lastName
      ) === undefined
    )
      addressBook.push(newContact);
    else throw "Contact with same name already exists";
  }

  //Check for duplicate contact
  let newContact = new Contact(
    "Harsh",
      "Jain",
      "Njf",
      "New Delhi",
      "Delhi",
      "110043",
      "8285683470",
      "harshit.jain@gmail.com"
  );
  try {
    addNewContact(addressBook, newContact);
  } catch (e) {
    console.error(e);
  }
  //Check for new contact
  let contact2=new Contact(
    "Suyash",
    "Jain",
    "Najafgarh",
    "New Delhi",
    "Delhi",
    "110043",
    "9810224035",
    "suyash.jain@gmail.com"
  );
  try {
    addNewContact(addressBook, contact2);
  } catch (e) {
    console.error(e);
  }
  console.log(addressBook);

//UC8 Search By City or State
  function searchByCity(addressBook, city) {
    return addressBook.filter((contact) => contact.city === city);
  }
  
  function searchByState(addressBook, state) {
    return addressBook.filter((contact) => contact.state === state);
  }
  let person=searchByCity(addressBook, "New Delhil");
  
  console.log("~~~~~"+person);
  console.log("~~~~"+searchByState(addressBook, "Delhi"));

//UC9 View By City or State
  function viewByCity(addressBook) {
    let contactsByCity = new Map();
    addressBook.filter((contact) =>
      contactsByCity.set(contact.city, searchByCity(addressBook, contact.city))
    );
    return contactsByCity;
  }
  function viewByState(addressBook) {
    let contactsByState = new Map();
    addressBook.filter((contact) =>
      contactsByState.set(
        contact.state,
        searchByState(addressBook, contact.state)
      )
    );
    return contactsByState;
  }
  console.log(viewByCity(addressBook));
  console.log(viewByState(addressBook));

//UC10 Count By City or State
console.log("UC10 :Count by City or State")
  let countByCity = new Map();
viewByCity(addressBook).forEach((value, key) =>
  countByCity.set(key, value.length)
);
console.log(countByCity);

let countByState = new Map();
viewByState(addressBook).forEach((value, key) =>
  countByState.set(key, value.length)
);
console.log(countByState);

//UC11-12 Sort by name ,city, state zip
function sortAddressBook(addressBook, field) {
  switch (field) {
    case "name":
      return addressBook.sort((a, b) =>
        (a.firstName + " " + a.lastName).localeCompare(
          b.firstName + " " + b.lastName
        )
      );
      break;
    case "city":
      return addressBook.sort((a, b) => a.city.localeCompare(b.city));
      break;
    case "state":
      return addressBook.sort((a, b) => a.state.localeCompare(b.state));
      break;
    case "zip":
      return addressBook.sort((a, b) => a.zip.localeCompare(b.zip));
      break;
    default:
      return null;
  }
}
console.log("UC11:Sorted By Name: ");
console.log(sortAddressBook(addressBook, "name"));
console.log("UC12:Sorted By City: ");
console.log(sortAddressBook(addressBook, "city"));
console.log("\nUC12:Sorted By State: ");
console.log(sortAddressBook(addressBook, "state"));
console.log("\nUC12:Sorted By Zip: ");
console.log(sortAddressBook(addressBook, "zip"));
