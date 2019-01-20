// import {writeToLocalStorage} from 'tools';
//my global object to contain all contacts
var listOfAllContacts = [];
var consentStatus = false;
// console.log(typeof listOfAllContacts);
$( document ).ready(function(){


// console.log(window.cookieconsent.status);
  let buttonGetContactDetails = $('#submit_new_contact');
  let buttonSubmitEditContact = $('#edit_contact');
  let displayedContacts = $('ul#allContactsSection1');
  let buttonDeleteAllContacts = $('#reset-contacts');
  buttonSubmitEditContact.hide();

  onLoadDisplayAllData(displayedContacts); //on page load, I display all content on Storage
  let selectedContact = $('#allContactsSection1 li'); //since li's are created dynamically, they should be located after onLoadDisplayAllData which creates them
  let selectedContactDisplay = $('ul#allContactsSection2');



  // dataFromSexeField.val("");
  dataFromFamilyNameField.val("");
  dataFromFirstNameField.val("");
  dataFromTelField.val("");


  // console.log(selectedContactDisplay);
    // on click submit_new_contact
  buttonGetContactDetails.click(function() {
    //getting input elements for events

    let dataFromSexeField =  $("input[name=gridRadios]:checked");
    // console.log(dataFromSexeField.val());
    // let dataFromSexeField =  "sexe";
    // let dataFromSexeField = sexe.options[sexe.selectedIndex].value;

    let dataFromFamilyNameField = $("#inputNom");
    // console.log(dataFromFamilyNameField);
    // console.log("test");
    let dataFromFirstNameField = $("#inputPrenom");
    let dataFromTelField = $("#inputTel");
    // if(dataFromSexeField && dataFromFamilyNameField && dataFromFirstNameField && dataFromTelField){
    // console.log(dataFromSexeField.val(), dataFromFamilyNameField.val(), dataFromFirstNameField.val(), dataFromTelField.val());

    onClickSubmitNewContact(dataFromSexeField.val(), dataFromFamilyNameField.val(), dataFromFirstNameField.val(), dataFromTelField.val());
    // console.log("test");
      // }
  });


  //on click edit any contact
  selectedContact.click(function(){
    // console.log("test");
    // console.log(this);
    buttonGetContact.show();
    buttonEditContact.hide();
    let clickedContactId = this.id.replace("contact", "");

    let selectedContactHTMLNode = onClickShowContact(clickedContactId, selectedContactDisplay);

  });
  buttonDeleteAllContacts.click(()=>{onClickDeleteAllContacts();});
  listOfAllContacts = readFromLocalStorage("contactsforCarnet");

  // console.log(listOfAllContacts);


});
