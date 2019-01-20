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
    consentStatus = true;
    writeToLocalStorage("contactsforCarnet", []);
    consentStatus = false;
  }

  static updateAllContacts(listOfAllContacts){
    writeToLocalStorage("contactsforCarnet", listOfAllContacts);
  }
}
//initiating an instance of the object for all contacts
var listOfAllContactsObject = new ListOfAllContacts();
//populating the object of all contacts with current contacts
// console.log(listOfAllContacts);
if(listOfAllContacts!=="Unable to get data"){
  listOfAllContactsObject.populateList(listOfAllContacts);
  // listOfAllContactsObject.sort(compareValues('nom'));
}




/* ==================CONTACT OBJECTS====================== */
class Contact {
  constructor(sexe, nom, prenom, tel){
    this.sexe = sexe;
    this.nom = nom;
    this.prenom = prenom;
    this.tel = tel;
  }

  writeContact(listOfAllContacts){

    if(typeof listOfAllContacts==='string'){
      listOfAllContacts=[];
      // console.log("testing listOfAllContacts when there are no contacts" + typeof listOfAllContacts);
    }
    listOfAllContacts.push(this);
    ListOfAllContacts.updateAllContacts(listOfAllContacts);
    //upon writing new contact, I refresh list of contacts on screen
    refreshPage();
  }

}

//creation of a new contact object
let createNewContact = (sexe, nom, prenom, tel) => {
  let contact = new Contact(sexe, nom, prenom, tel);
  // console.dir(contact);
  contact.writeContact(listOfAllContacts);

};

// listOfAllContacts = readFromLocalStorage("contactsforCarnet");
// console.log(listOfAllContacts);
