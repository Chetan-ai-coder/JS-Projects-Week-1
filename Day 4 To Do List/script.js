const tasks = [];

document.getElementById("sub_btn").addEventListener("click", () =>{
    const data = document.getElementById("data").value;

    const box = document.createElement("div");

    const output = document.createElement("p");
    output.textContent = `${data}`;

    const del = document.createElement("button");
    del.innerText = "Delete";
    del.addEventListener("click", () =>{
        box.remove();
    });
    
    box.appendChild(output);
    box.appendChild(del);
    document.body.appendChild(box);

    box.style.display = "flex";
    box.style.gap = "10px";

    tasks.push(data);
    console.log(tasks);

    document.getElementById("data").value = "";



});