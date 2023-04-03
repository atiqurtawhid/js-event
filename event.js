/***
document.getElementById("inputChange").addEventListener("change",(e)=>{
	document.getElementById("header").innerText=e.target.value;
	if(e.target.value.length===5){
		document.getElementById("header").style.color="red"
	}
	
	else if(e.target.value.length===6){
		
	document.getElementById("header").style.color="green"
		
	}
	else if(e.target.value.length===7){
		
	document.getElementById("header").style.color="#566437"
		
	}
	else if(e.target.value.length===8){
		
	document.getElementById("header").style.color="yellow"
		
	}
	else if(e.target.value.length===9){
		
	document.getElementById("header").style.color="tomato"
		
	}
	else if(e.target.value.length===10){
		
	document.getElementById("header").style.color="orange"
		
	}
	else if(e.target.value.length===11){
		
	document.getElementById("header").style.color="black"
		
	}
	else if(e.target.value.length===12){
		
	document.getElementById("header").style.color="gray"
		
	}
	else if(e.target.value.length===13){
		
	document.getElementById("header").style.color="gold"
		
	}
	
	else{
		document.getElementById("header").style.color="blue"
		
		
	}
	
	
})



// chackbox 


const programs = document.querySelectorAll("input[name='program]")

Array.from(programs).map(program=>{
	console.log(program)
	program.addEventListener("change",(e)=>{
		console.log(e.target.value)
	})
})



// select 


document.getElementById("department").addEventListener("change",(e)=>{
	console.log(e.target.value)
	document.getElementById("header").innerText=e.target.value
})



// form  


const form = document.querySelector("form");
const namee = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");
console.log(namee)

form.addEventListener("submit",(e)=>{
	console.log(e.target.value)
	e.preveniDefault()
	const userInfo = {
		name:namee.value,
		email:email.value,
		password:password
	}
	
	console.log(userInfo)
	
	
	//name.value="",
//	email.value="",
//	password.value=""
	
	
})


document.querySelector("video").addEventListener("canplay",()=>{
	console.log("canplay")
})

document.querySelector("video").addEventListener("play",()=>{
	console.log("play")
})
document.querySelector("video").addEventListener("playing",()=>{
	console.log("playing")
})
document.querySelector("video").addEventListener("pause",()=>{
	console.log("pause")
})
document.querySelector("video").addEventListener("ended",()=>{
	console.log("Thinking for watching")
})
document.querySelector("video").addEventListener("volumechange",()=>{
	console.log("volumechange")
})
document.querySelector("video").addEventListener("waiting",()=>{
	console.log("waiting")
})




// load unload


window.addEventListener("load",()=>{
	console.log("LoadCountry")
})
window.addEventListener("unload",()=>{
	console.log("unload")
	
	
	
	
})



window.addEventListener("scroll",()=>{
	console.log("scrolling")
})



window.addEventListener("resize",()=>{
	const width = window.outerWidth
	const height = window.outerHeight
	
	document.getElementById("header").innerText= `width ${width}, height ${height}`
	console.log(width, height)
	
})


document.querySelector("details").addEventListener("toggle",(e)=>{
	if(e.target.open===true){
		alert("Taggle is Open ")
	}
	
	else{
		alert("Taggle is Closed")
	}
})



const buttons = document.querySelectorAll(".btn")

console.log(buttons)

Array.from(buttons).map(button=>{
	button.addEventListener("click",(e)=>{
		console.log(e.target.id)
	})
})




document.querySelector("textarea").addEventListener("keyup",(e)=>{
	console.log(e.shiftKey)
})



document.querySelector("textarea").addEventListener("keydown",(e)=>{
	if(e.repeat){
		console.log("You are Repeat This Letter")
	}
	
	else{
		console.log("You are not Repeat the Leater")
	}
})


const input = document.getElementById("inp")
//input.addEventListener("blur",()=>{
	//console.log("blur")
//})



input.addEventListener("focus",()=>{
	input.style.backgroundColor="red"
})



/***
input.addEventListener("focusin",()=>{
	console.log("focusin")
})

input.addEventListener("focusout",()=>{
	console.log("focusout")
})





const p = document.getElementById("p")
p.addEventListener("copy",()=>{
console.log("copied")

	
})

 

const btn = document.getElementById("btnn")
btn.addEventListener("click",(e)=>{
 
   
   btn.innerText="copied"
})




//clikbord copy


 let text = document.getElementById('myText').innerHTML;
 let btnn =document.getElementById("btn")
 
 btnn.addEventListener("click",async()=>{
 	console.log(6676)
 	try {
 		await navigator.clipboard.writeText(text)
 		console.log("copied")
 		btnn.innerText="copied"
 } catch (e) {
 		console.log("copied failed", e)
 	}
 
 })
 
 
 /***
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
  
  ***/
  
  
  const div = document.getElementById("mydiv")
  const p = document.getElementById("drag1")
  
  
  p.addEventListener("dragstart",(e)=>{
  	e.dataTransfer.setData("Text", e.target.id)
  	console.log("dragstart")
  })
  
  
  div.addEventListener("dragover",(e)=>{
  	e.preventDefault()
  	console.log("over")
  })
  
  
  div.addEventListener("drop",(e)=>{
  	let id = e.dataTransfer.getData("Text")
  	let getTag = document.getElementById(id)
  	let getText = getTag.innerText
  	div.appendChild(getTag)
  	
  	console.log(getText)
  	
  	
  })
  
  