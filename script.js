

let submit=document.getElementById("submit");

function display(){
    let title=document.getElementById("title").value;
    let content=document.getElementById("content").value;

    let blogtitle=document.getElementById("blogtitle");
    let blogcontent=document.getElementById("blogcontent");

    location.assign("Blog.html");
    blogtitle.textContent=title;
    blogcontent.textContent=content;
    console.log(title);
}


