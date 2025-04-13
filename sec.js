let dark = true;
let image2=document.getElementById("p-image")

image2.src="img/sleep-mode.png"

document.getElementById("modes").textContent="Dark  mode"


image2.addEventListener("click", () => {
   
  if (dark) {
   
    image2.src="img/night-mode.png"
    document.documentElement.style.setProperty('--main--color', 'white');
    document.documentElement.style.setProperty('--content--color', '#f4f4f4');
    document.documentElement.style.setProperty('--normal--color', '#ddd');
    document.documentElement.style.setProperty('--light--mode', 'black');
    document.getElementById("modes").textContent="Light mode"

  } else {
    image2.src="img/sleep-mode.png"
    document.documentElement.style.setProperty('--main--color', 'rgb(33, 32, 48)');
    document.documentElement.style.setProperty('--content--color', 'rgba(21, 21, 31, 0.859)');
    document.documentElement.style.setProperty('--normal--color', 'rgb(48, 45, 63)');
    document.documentElement.style.setProperty('--light--mode', 'white');
     document.getElementById("modes").textContent="Dark mode"
  }
  dark = !dark;
});

let selected=JSON.parse(localStorage.getItem("selectedCountry"))

async function first(selected){
   let response=await fetch("https://restcountries.com/v3.1/all")
   let data=await response.json()
   
  
   let wanted=data.filter((val)=>val.name.common==selected)
   renders(wanted)
  
}
first(selected)
function renders(con){
    console.log(con)
con.map((val)=>{
const detailFlagSection = document.querySelector('.detail-flag');

// Create flag-img div
const flagImgDiv = document.createElement('div');
flagImgDiv.className = 'flag-img';

const img = document.createElement('img');
img.src = val.flags.png;
img.alt = '';
flagImgDiv.appendChild(img);

// Create flag-name div
const flagNameDiv = document.createElement('div');
flagNameDiv.className = 'flag-name';

const namePara = document.createElement('h3');
const Para1 = document.createElement('p');
const Para2 = document.createElement('p');
const Para3 = document.createElement('p');
const Para4 = document.createElement('p');
const Para5 = document.createElement('p');

namePara.textContent = val.name.common;
const [firstKey] = Object.keys(val.name.nativeName);
const mergedNativeName = val.name.nativeName[firstKey];

Para1.textContent = `Native Name: ${mergedNativeName.common}`;
Para1.classList.add("flag1")
Para2.textContent = `Population: ${val.population}`;
Para3.textContent = `Region: ${val.region}`;
Para4.textContent=`Sub Region: ${val.subregion}`;
Para5.textContent=`Capital: ${val.capital}`;





flagNameDiv.appendChild(namePara);
flagNameDiv.appendChild(Para1);
flagNameDiv.appendChild(Para2);
flagNameDiv.appendChild(Para3);
flagNameDiv.appendChild(Para4);
flagNameDiv.appendChild(Para5);

// Create extra div
const extraDiv = document.createElement('div');
extraDiv.classList.add("flag-secondary")
const Para6 = document.createElement('p');
const Para8 = document.createElement('p');
const Para7 = document.createElement('p');
let top=val.altSpellings.filter((val,index)=>index==0)
Para6.textContent=`Top Level Domain:     ${top}`;
let [first]=Object.keys(val.currencies)
let currency=val.currencies[first]
Para7.textContent=`Currencies:   ${currency.name}`
let Languages=Object.values(val.languages).join(',')

Para8.textContent=`Language:   ${Languages}`




extraDiv.appendChild(Para6);
extraDiv.appendChild(Para7);
extraDiv.appendChild(Para8);

// Append all created elements to .detail-flag
detailFlagSection.appendChild(flagImgDiv);
detailFlagSection.appendChild(flagNameDiv);
detailFlagSection.appendChild(extraDiv);
})
}

function main(){
    window.location.href="index.html"
}