//preparing sent data for later transfering to database

let onClickSubmitNewContact = (sexe, nom, prenom, tel) => {//this function creates new contact
  createNewContact(sexe, nom, prenom, tel);
  // window.location.reload();
};

let onLoadDisplayAllData = (dynamicContactListHTML) => {//this function creates new contact. its parameter is the html node where they will be diplayed
  // console.log(listOfAllContactsObject);

  let dynamicContactList = createDOMElementForAllContacts(listOfAllContactsObject);
  dynamicContactListHTML.append(dynamicContactList);
};

let createDOMElementForAllContacts = (listOfAllContactsObject) => {
  let dynamicContactList = "";
  let contactItemHtmlStart = "<li class=\"list-group-item table-hover\" ";
  let contactItemHtmlId = "id=contact";
  let contactItemHtmlStart2 = ">";
  let contactItemHtmlEnd = "</li>";
  Object.entries(listOfAllContactsObject).forEach(([clé, valeur]) => {
    dynamicContactList += contactItemHtmlStart;
    dynamicContactList += contactItemHtmlId + clé;
    dynamicContactList += contactItemHtmlStart2;
    dynamicContactList += valeur.nom;
    dynamicContactList += contactItemHtmlEnd;
  });
  return dynamicContactList;
};

let onClickShowContact = (key, selectedContactHTMLNode) => {
  //this function take as parameter the key of the relevant contact sub-object, as well as jquery DOM elements to be filled
// console.log(listOfAllContactsObject[13]);
  //we can access the  contact object with the key within list of all contacts
  let clickedContact = listOfAllContactsObject[key];
  // console.log(clickedContact);
  console.log("Testing click on a contact " +clickedContact.nom);
  selectedContactHTMLNode.html("");
  let wrapperSelectedContact = "<div class=\"card\" style=\"width: 18rem;\">    <div class=\"card-body\">      <h4 class=\"card-title\">Details du contact</h4>  <p class=\"card-text\">";
  let titreSexe = (clickedContact.sexe == 'M' ? "M. " : 'Mme. ');
  wrapperSelectedContact += titreSexe + " ";
  wrapperSelectedContact += clickedContact.nom + " ";
  wrapperSelectedContact += clickedContact.prenom;
  wrapperSelectedContact += "</p><p>Téléphone : ";
  wrapperSelectedContact += clickedContact.tel + " ";
  wrapperSelectedContact += "</p><a href=\"#\" class=\"card-link\">Editer le contact</a></div></div>";
  // console.log(selectedContactHTMLNode);
  selectedContactHTMLNode.append(wrapperSelectedContact);
};
