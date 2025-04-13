



const flags=document.getElementById("flag-container")





async function country() {
   
    let response=await fetch("https://restcountries.com/v3.1/all")
    let data=await response.json()
    
    renderCountries(data)
       
    }

    document.getElementById("filters").addEventListener("change",function(event){
        flags.innerHTML="" 
        
        let selected=event.target.value
        getcountry(selected)
        async  function getcountry(selected){
        let response=await fetch("https://restcountries.com/v3.1/all")
        let data=await response.json()
       
        console.log(selected)
        let wanteds=data.filter(val=>val.region==selected)
         renderCountries(wanteds)
        }
    })
    function renderCountries(countries) {
        countries.map((val,index) => {
            const subContent = document.createElement("div");
            subContent.classList.add("col-4", "sub-c");
            subContent.id="f-contain"
            const img = document.createElement("img");
            img.src = val.flags.png;
            img.alt = "";
            img.classList.add("flag-img");
    
            const para = document.createElement("h4");
            para.textContent = val.name.common;
            para.id=index
            para.classList.add("c-para");
    
            const para2 = document.createElement("p");
            para2.textContent = `Population: ${val.population}`;
            para2.classList.add("c-para");
    
            const para3 = document.createElement("p");
            para3.textContent = `Region: ${val.region}`;
            para3.classList.add("c-para");
    
            const para4 = document.createElement("p");
            para4.textContent = `Capital: ${val.capital ? val.capital[0] : 'N/A'}`;
            para4.classList.add("c-para");
    
            // Append all to the card
            subContent.appendChild(img);
            subContent.appendChild(para);
            subContent.appendChild(para2);
            subContent.appendChild(para3);
            subContent.appendChild(para4);
    
            // Append the card to container
            flags.appendChild(subContent);
            subContent.addEventListener("click", () => {
              let conName=document.getElementById(index)
              let countryname=conName.textContent
               localStorage.setItem("selectedCountry", JSON.stringify(countryname));
               window.location.href = "country.html";
           });
        });
     
    } 
   
    document.getElementById("search").addEventListener("input", async function(event) {
        const keyword = event.target.value.trim().toLowerCase();
    
        
       
    
        let response = await fetch("https://restcountries.com/v3.1/all");
        let data = await response.json();
    
        
        const filtered = data.filter(val => val.name.common.toLowerCase().startsWith(keyword));
    
        flags.innerHTML = ""; 
    
        renderCountries(filtered); 
    });
    
    country()
let dark = true;
let image1=document.getElementById("h-image")

image1.src="img/sleep-mode.png"

document.getElementById("mode").textContent="Dark  mode"


image1.addEventListener("click", () => {
   
  if (dark) {
   
    image1.src="img/night-mode.png"
    document.documentElement.style.setProperty('--main--color', 'white');
    document.documentElement.style.setProperty('--content--color', '#f4f4f4');
    document.documentElement.style.setProperty('--normal--color', '#ddd');
    document.documentElement.style.setProperty('--light--mode', 'black');
    document.getElementById("mode").textContent="Light mode"

  } else {
    image1.src="img/sleep-mode.png"
    document.documentElement.style.setProperty('--main--color', 'rgb(33, 32, 48)');
    document.documentElement.style.setProperty('--content--color', 'rgba(21, 21, 31, 0.859)');
    document.documentElement.style.setProperty('--normal--color', 'rgb(48, 45, 63)');
    document.documentElement.style.setProperty('--light--mode', 'white');
     document.getElementById("mode").textContent="Dark mode"
  }
  dark = !dark;
});



