import "./style.css";

const mainBlock = document.querySelector(".wrapper-main");

fetch("http://localhost:3000/posts/")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(element => {
            
            const currentPost = `<div class="post"><p>${element.title}</p><p>${element.author}</p></div>`;
            mainBlock.insertAdjacentHTML("afterbegin", currentPost);
        });
    })
    .catch(error => {
        console.log("error", error);
    });
 