window.addEventListener("load", function(){

window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#237afc"
    },
    "button": {
      "background": "#fff",
      "text": "#237afc"
    }
  },
  "type": "opt-in",
  "content": {
    "message": "Ce site se sert des cookies stockés indéfiniment sur votre machine locale. Acceptez-vous leur utilisation ? Vous pouvez changer votre avis à tout moment.",
    "policy": 'Paramètres de Cookie',
    "href": "https://cookieconsent.insites.com"
  },
  "elements":{
    // "header": 'Des cookies sont nécessaires pour le fonctionnement de cette page!',
    "allow": '<a aria-label="allow cookies" role="button" tabindex="0" class="cc-btn cc-allow" data-toggle="tooltip" data-placement="top" title="Cela est nécessaire pour le bon fonctionnement de la page">J\'accepte</a>',
    "deny": '<a aria-label="deny cookies" role="button" tabindex="0" class="cc-btn cc-deny" data-toggle="tooltip" data-placement="top" title="Cela supprime également vos données qu\'on a stockées">Je refuse</a>',
    // link: '<a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="http://test.com" target="_blank">test</a>'
  },
  revokable:true,
  expiryDays: -1,
  animateRevokable: false, //Pour laisser les paramètres de cookies toujours visible
  // close: '&#x274c;',
  // link: 'Informations détaillées (en anglais)',
  // link: '<a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a>',
  // href: 'http://cookiesandyou.com',
  onInitialise: function (status) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // console.log("opt in");
      consentStatus = true;
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies if opt-out method is used
      // console.log("opt out");
    }
  },
  onStatusChange: function(status, chosenBefore) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      consentStatus = true;
      // console.log(consentStatus);
    }
    if (type == 'opt-in' && !didConsent) {
      consentStatus = false;
      // console.log(consentStatus);
      ListOfAllContacts.deleteAllContacts();
      refreshPage();
    }
  },
})});
