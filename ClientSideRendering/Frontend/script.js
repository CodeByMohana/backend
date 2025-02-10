const container = document.querySelector(".container");
const url = "http://localhost:4000/todos";
fetch(url)
  .then((res) => {
    return res.json(); //convert the response to javascript object it returns a promise
  })
  .then((datas) => {
    console.log(datas.datas);
    for(let data of datas.datas){
        const para = document.createElement("p");
        para.innerText = data;
        container.appendChild(para);
    }
  });
// The code above fetches the data from the server and displays it on the frontend. The code below does the same thing but for the todos data.
