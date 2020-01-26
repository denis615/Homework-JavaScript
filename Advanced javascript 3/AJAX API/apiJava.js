




let btn1 = document.getElementById("btn1");

let outsideResponse = {};
btn1.addEventListener("click", function(){
    let xhr = new XMLHttpRequest(); 
    xhr.onload = function(){ 
        console.log("We got a response!");
        
        if(xhr.status >= 200 && xhr.status < 300){
            console.log("We successfully got our stuff!");
            let response = JSON.parse(xhr.response);
            console.log(response);
            console.log(typeof(response))    
            function doTheMagic() 
{
    let header = document.createElement("H1");
    let text1 = document.createTextNode(`${response.name}`); 
    header.appendChild(text1); 
    document.body.appendChild(header);

    var table = document.getElementById("myTable");

    header.appendChild(table)


let row = table.insertRow(0);


let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);


cell1.innerHTML = `Height`;
cell2.innerHTML = `Weight`;
cell3.innerHTML = `Eye Color`;
cell4.innerHTML = `Hair Color`;


let row1 = table.insertRow(1);


let cell5 = row1.insertCell(0);
let cell6 = row1.insertCell(1);
let cell7 = row1.insertCell(2);
let cell8 = row1.insertCell(3);


cell5.innerHTML = `${response.height}`;
cell6.innerHTML = `${response.mass}`;
cell7.innerHTML = `${response.eye_color}`;
cell8.innerHTML = `${response.hair_color}`;
} 
 
       doTheMagic()

      




       
      
                        
        } else {
            console.log("Something went wrong!");
            console.log(xhr.responseText); // Will write the text from the response
        }
    }

    //The Original link gives this error: Access to XMLHttpRequest at 'https://swapi.co/api/people/1' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.--- I am happy to discuss in class.
    
    xhr.open("GET", "https://swapi.co/api/people/1/");
   
    xhr.send();
})


