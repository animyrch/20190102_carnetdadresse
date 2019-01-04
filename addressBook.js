//populating global variable for list of contacts
listOfAllContacts = readFromLocalStorage("contactsforCarnet");

/* ==================OBJECT FOR ALL CONTACT OBJECTS====================== */
class ListOfAllContacts {
  constructor(){
  }

  populateList(listArray){
    let listArrayLength = listArray.length;
    for (var i = 0; i < listArrayLength; i++) {
      this[i] = listArray[i];
    }
  }
  //
  // static getAllContacts(){
  //   return readFromLocalStorage("contactsforCarnet");
  // }

  static deleteAllContacts(){

  }

  static updateAllContacts(listOfAllContacts){
    writeToLocalStorage("contactsforCarnet", listOfAllContacts);
  }
}
//initiating an instance of the object for all contacts
var listOfAllContactsObject = new ListOfAllContacts();
//populating the object of all contacts with current contacts
listOfAllContactsObject.populateList(listOfAllContacts);
// listOfAllContactsObject.sort(compareValues('nom'));



/* ==================CONTACT OBJECTS====================== */
class Contact {
  constructor(sexe, nom, prenom, tel){
    this.sexe = sexe;
    this.nom = nom;
    this.prenom = prenom;
    this.tel = tel;
  }

  writeContact(listOfAllContacts){
    listOfAllContacts.push(this);
    ListOfAllContacts.updateAllContacts(listOfAllContacts);
  }

}

//creation of a new contact object
let createNewContact = (sexe, nom, prenom, tel) => {
  let contact = new Contact(sexe, nom, prenom, tel);
  contact.writeContact(listOfAllContacts);

};

// listOfAllContacts = readFromLocalStorage("contactsforCarnet");
// console.log(listOfAllContacts);
