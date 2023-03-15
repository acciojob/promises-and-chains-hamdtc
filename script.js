//your JS code here. If required.
let form = document.querySelector('form');
let age = document.getElementById('age');
let name = document.getElementById('name');

form.addEventListener('submit', (e) => {
    e.preventDefault();
  checkCanIVote(age.value).then((data) => {
    alert("Welcome, "+name.value+" "+data);
  }).catch((data)=>{
    alert("Oh sorry "+name.value+". "+data);
  })
})



function checkCanIVote(number) {
    // return the output using return keyword
    // do not console.log it
	let prom = new Promise((resolve, reject) =>{
		if(number >= 18){
			resolve("You can vote.");
		}else{
		    reject("You aren't old enough.");
		}
	});

	return prom;
}