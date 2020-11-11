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
    this._firstName = firstName;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    this._lastName = lastName;
  }

  get address() {
    return this._address;
  }
  set address(address) {
    this._address = address;
  }

  get city() {
    return this._city;
  }
  set city(city) {
    this._city = city;
  }

  get state() {
    return this._state;
  }
  set state(state) {
    this._state = state;
  }

  get zip() {
    return this._zip;
  }
  set zip(zip) {
    this._zip = zip;
  }

  get phoneNo() {
    return this._phoneNo;
  }
  set phoneNo(phoneNo) {
    this._phoneNo = phoneNo;
  }

  get email() {
    return this._email;
  }
  set email(email) {
    this._email = email;
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

console.log(addressBook);
