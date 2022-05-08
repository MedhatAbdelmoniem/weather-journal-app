/* Global Variables */
const site = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const appid = '&appid=a2ab36e79d11c2bee3e1a58a4db92113&units=metric';
let zip = document.getElementById("zip");
let click = document.getElementById("generate");
let feel = document.getElementById("feelings");
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+ 1 + '.'+ d.getDate()+'.'+ d.getFullYear();



//This not only it is for taking the temprature but
//it post the necessary information

const getSite = async (site, appid, zip, newData, feelin)=>{

  const res = await fetch(site+zip+appid)
  try {
    const data = await res.json()
    console.log(data);
    console.log("the process is successful")
    postData('/',{temp:data,date:newDate,user:feelin}).then(
    updateUI());

  }  catch(error) {
    console.log("error, not successful", error);
  }
}



//for posting data

const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST',                                             
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), 
  });

    try {
      const newData = await response.json();

      return newData;
    }catch(error) {
    console.log("error, not successful", error);
    }
}





//to begin all the necessary functions

click.addEventListener('click',function(){

  getSite(site, appid, zip.value,newDate,feel.value);



});


//for getting the data and updating the ui with the received data

const updateUI = async () =>{

  const req = await fetch('/e');

  try{
    const allTheData = await req.json()
    console.log(allTheData);
    document.getElementById("date").innerHTML = "current date: " + allTheData.date;
    document.getElementById("temp").innerHTML = "current temperature: " + allTheData.temp;
    document.getElementById("content").innerHTML = "your feeling: " + allTheData.user;
  } catch(error){

    console.log("error, not successful", error);
  }

}



 



