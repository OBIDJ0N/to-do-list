"use strict";

const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const submitEl = document.getElementById("submit");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    if (inputEl.value === "") {
        console.warn("You should write somethin in the input")
    } else {
        const itemEl = document.createElement("div");
        itemEl.classList.add("item");
        itemEl.innerHTML = `
            <p>
                ${inputEl.value}
            </p>
            <div class="item-box">
                <button class="complete">
                    <i class="fa-solid fa-circle-check"></i>
                 </button>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
        
        setTimeout(() => {
            formEl.appendChild(itemEl);
        },100);

        const completeItem = itemEl.querySelector(".complete");
        completeItem.addEventListener("click", () => {
            itemEl.classList.add("checked");
        });
        
        const deleteItem = itemEl.querySelector(".delete");
        deleteItem.addEventListener("click", () => {
            setTimeout(() => {
                formEl.removeChild(itemEl);
            },100);
        });

        inputEl.value = "";
    }
});
