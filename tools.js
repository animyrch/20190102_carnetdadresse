//MY FUNCTIONS FOR ACCESSING LOCAL STORAGE

let writeToLocalStorage = (key, data) => {//we need a key for writing to localStorage as well as data to be added to that key
  dataInJsonForm = encodeAsJson(data);
  localStorage.setItem(key, dataInJsonForm); //writing into the localStorage
};

let readFromLocalStorage = (key) => {//we need a key in order to fetch the data associated with it from localStorage
  let data = 'Unable to get data'; //initialise the variable to be returned as result with inital value of error message in case function fails
  dataAlreadyPresent = localStorage.getItem(key);//getting contents of the localStorage elements stored under the relevant key
  if(dataAlreadyPresent){//if successful, return dataAlreadyPresent, or else return error message
    presentDataInArray = decodeJson(dataAlreadyPresent);//returning acquired data after decoding json into array
    return presentDataInArray;
  }else{
    return data;
  }

};

//MY FUNCTION FOR MANIPULATING DATA AS JSON
let encodeAsJson = (array) => {
  let jsonArray = JSON.stringify(array);
  return jsonArray;
};
let decodeJson = (string) => {
  let decodedArray = JSON.parse(string);
  return decodedArray;
};
