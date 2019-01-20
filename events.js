//preparing sent data for later transfering to database
let buttonEditContact = $('#edit_contact');
let buttonGetContact = $('#submit_new_contact');
let dataFromSexeField =  $("input[name=gridRadios]:checked");
let dataFromFamilyNameField = $("#inputNom");
let dataFromFirstNameField = $("#inputPrenom");
let dataFromTelField = $("#inputTel");

let onClickSubmitNewContact = (sexe, nom, prenom, tel) => {//this function creates new contact
  if(nom && tel){
    createNewContact(sexe, nom, prenom, tel);
    refreshPage();
  }

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
  // console.log("testing if I get the correct sex " + clickedContact.sexe)
  let titreSexe = (clickedContact.sexe == 'H' ? "M. " : 'Mme. ');
  wrapperSelectedContact += titreSexe + " ";
  wrapperSelectedContact += clickedContact.nom + " ";
  wrapperSelectedContact += clickedContact.prenom;
  wrapperSelectedContact += "</p><p>Téléphone : ";
  wrapperSelectedContact += clickedContact.tel + " ";
  wrapperSelectedContact += "</p><a href=\"#\" class=\"card-link\">Editer le contact</a></div></div>";
  wrapperSelectedContact += "</p><a href=\"#\" class=\"card-link2\">Supprimer le contact</a></div></div>";
  // console.log(selectedContactHTMLNode);
  selectedContactHTMLNode.append(wrapperSelectedContact);

  let pullupContact = $('.card-link');
  let deleteContact = $('.card-link2');
  pullupContact.click(function(){onClickPullUpContactDetails(key, clickedContact)});
  deleteContact.click(function(){onClickDeleteContact(key)});
};

let onClickPullUpContactDetails = (key, clickedContact) => {

  buttonGetContact.hide();
  buttonEditContact.show();
  if(clickedContact.sexe==='F'){
    $("input[value=F]" ).prop( "checked", true );
  }else{
    $("input[value=H]" ).prop( "checked", true );
  };
  dataFromFamilyNameField.val(clickedContact.nom);
  dataFromFirstNameField.val(clickedContact.prenom);
  dataFromTelField.val(clickedContact.tel);
  // console.log("testing usability of key "+key);

  let buttonSubmitEditContact = $('#edit_contact');
  buttonSubmitEditContact.click((key)=>{
    onClickSubmitEditContact();
  });
};
let onClickDeleteContact = (key) => {
  listOfAllContacts.splice(key, 1);
  ListOfAllContacts.updateAllContacts(listOfAllContacts);
  refreshPage();
};
let onClickSubmitEditContact = (key) => {
  dataFromSexe =  $("input[name=gridRadios]:checked");
  buttonGetContact.show();
  buttonEditContact.hide();
  listOfAllContacts.splice(key, 1);

  onClickSubmitNewContact(dataFromSexe.val(), dataFromFamilyNameField.val(), dataFromFirstNameField.val(), dataFromTelField.val());
};
let onClickDeleteAllContacts = () => {
  ListOfAllContacts.deleteAllContacts();
  refreshPage();
};
