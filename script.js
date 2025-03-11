const btn = document.querySelector(".btn");
const jokediv = document.querySelector(".joke");
let p = document.querySelector("p");
const loader = document.querySelector(".loader"); // ✅ Loader select kiya

const accessKey = "I8yGyGdhL6RXD63Gq586VA==pe8CHVqzvy7kBBpy";
let url = "https://api.api-ninjas.com/v1/dadjokes";

btn.addEventListener("click", () => {
    getjoke(url);
});

async function getjoke(url) {
    try {
        p.innerText = " "; 
        loader.style.display ="block";

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-Api-Key": accessKey
            }
        });

        const data = await response.json();
        console.log(data[0].joke);
        
        p.innerText = data[0].joke;
        jokediv.append(p);
    } catch (error) {
        console.error("Error fetching joke:", error);
        p.innerText = "Failed to load joke. 😅";
        jokediv.append(p);
    }
    finally {
        loader.style.display = "none";  // ✅ Spinner hata dena after joke load
    }
}
