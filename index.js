let Data=[]

const getData=async()=>{
    try{
        const response=await fetch("data.json");
        const data=await response.json();
        Data=data;
        display(Data);
        
    }catch(error){
        console.error("Error fetching data:", error);
    }
}
getData();
const display=(data)=>{
    const extensions=document.getElementById("extensions");
    extensions.innerHTML=""; // Clear previous content
    data.forEach((item)=>{
        const extensionDiv=document.createElement("div");
        extensionDiv.className="extension";
        extensionDiv.innerHTML=`
              <div class="extension-info">
                <div>
                <img src="${item.logo}" alt="${item.name}"/>
                </div>
                <div>
                <h1>${item.name}</h1>
                <p>${item.description}</p>
                </div>
                </div>
                 <div class="extension-actions">

                <button type="button" onclick="removeExtension('${item.name}')" class="btn-remove">Remove</button>
                <label class="switch" >
                <input type="checkbox" ${item.isActive===true?'checked':""}  id="check">
                <span class="slider"></span>
                </label>

            </div>
        `;
        
        extensions.appendChild(extensionDiv);
    })
}
const activeData=()=>{
    const filterdata=Data.filter((item)=>{

        return item.isActive===true
    })
    display(filterdata);
     }
     
const inactiveData=()=>{
    const filterdata=Data.filter((item)=>{
        return item.isActive===false
    })
    display(filterdata);
}

// Function to remove an extension by name
const removeExtension=(name)=>{
    Data=Data.filter((item)=>item.name!==name);
    display(Data);
    
}
// function to toggle dark mode
const toggleDarkMode=()=>{
    const mood=document.getElementById("icon-sun");
    mood.addEventListener("click",()=>{
        document.body.classList.toggle("light-mode");
        if(document.body.classList.contains("light-mode")){
            mood.src="./assets/images/icon-moon.svg";
        }else{
            mood.src="./assets/images/icon-sun.svg";
        }
    })
}
toggleDarkMode();

