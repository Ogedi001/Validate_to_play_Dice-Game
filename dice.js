
let mode = document.querySelector('.lightMode')
let light =document.querySelector('#light')

let buttn = document.querySelector('#switch')
buttn.addEventListener('click',()=>{
  let value = mode.classList.toggle('darkMode')
  console.log(value)
  if(value==true){
    light.innerHTML = 'Dark Mode'
  }else if (value==false){
    light.innerHTML = 'Light Mode'
  }
})
const player = [
    
    {
        name: 'Friday Micheal',
        Email: 'fridaymicheal@gmail.com',
        Password: '1234',
        Phone: '08161520429'
    },
    {
        name: 'Ogedi Favour',
        Email: 'ogedifavour2@gmail.com',
        Password: '2468',
        Phone: '08130088400'
    },
    {
        name: 'Joe Micheal',
        Email: 'Joemicheal@gmail.com',
        Password: '9876',
        Phone: '09030088409'
    }, 
 
    {
        name: 'Jenifer Micheal',
        Email: 'Janimicheal@gmail.com',
        Password: '12345687',
        Phone: '08100020429'
    },
    {
        name: 'Gabriel Micheal',
        Email: 'Gabrielmicheal@gmail.com',
        Password: '3456',
        Phone: '08161520000'
    },
    {
        name: 'Micheal Amanda',
        Email: 'amanda@gmail.com',
        Password: '63456',
        Phone: '0906000429'
    },  

]
let playerName = document.querySelector('.plyName'),
    playerEmail = document.querySelector('.plyEmail')
    img = document.querySelector('#img'),
    hiddenDiv = document.querySelector('.Div-hidden')

//form validation
const form =document.querySelector('#form'),
input =document.querySelectorAll('.input'),
fail = document.querySelectorAll('.failure-icon '),
success = document.querySelectorAll('.success-icon '),
errorMsg =document.querySelectorAll('.error')

let username = input[0],
      email =input[1],
      password =input[2],
      phone_number=input[3]

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
   let Array = player.find(e=>e.name == username.value)
    if (Array.name == username.value && username.id=='username')
       {
         fail[0].style.opacity='0'
         success[0].style.opacity='1'
       }
       else{
        errorMsg[0].innerHTML= 'Username not recognize'
        fail[0].style.opacity='1'
    success[0].style.opacity='0'
       }
   
   if (Array.Email==email.value && email.id =='email') {
    fail[1].style.opacity='0'
     success[1].style.opacity='1'
   } 
   else {
    errorMsg[1].innerHTML= 'Email address not recognize'
    fail[1].style.opacity='1'
success[1].style.opacity='0'
   }

   if (Array.Password == password.value && password.id =='password') {
    fail[2].style.opacity='0'
     success[2].style.opacity='1'
   } 
   else {
    errorMsg[2].innerHTML= 'Password not recognize'
    fail[2].style.opacity='1'
success[2].style.opacity='0'
   }  

   if (Array.Phone == phone_number.value && phone_number.id =='phone number') {
    fail[3].style.opacity='0'
     success[3].style.opacity='1'
   } 
   else {
    errorMsg[3].innerHTML= 'Phone number not recognize '
    fail[3].style.opacity='1'
success[3].style.opacity='0'
   }
 
   if(Array.name == username.value && Array.Email==email.value && Array.Password == password.value && Array.Phone == phone_number.value)
{

   playerName.innerHTML = `Welcome back 🤝  ${Array.name}`
   playerEmail.innerHTML = `${Array.Email}`
   hiddenDiv.style.display='block'
   
    if (Array.name=='Ogedi Favour') {
      img.src = 'images/male2.jpg'
    }else if (Array.name =='Friday Micheal') {
      img.src = 'images/male1.jpg'
    }else if (Array.name =='Joe Micheal') {
      img.src = 'images/male3.jpg'
    }else if (Array.name =='Jenifer Micheal') {
      img.src = 'images/female1.jpg'
    }else if (Array.name=='Gabriel Micheal') {
      img.src = 'images/male4.jpg'
    }else if (Array.name =='Micheal Amanda') {
      img.src = 'images/female2.jpg'
    }
}
})


let rolldie =document.querySelector('#rolldie'),
h5 = document.querySelectorAll('h5'),
scores = document.querySelector('.span-score'),
myModal =document.querySelector('#myModal'),
mdn = document.querySelector('#mdn')



rolldie.addEventListener('click',()=> {
  let die1 = Math.floor(Math.random()*6) +1
  let die2 = Math.floor(Math.random()*6) +1
  h5[0].innerHTML= die1
  h5[1].innerHTML = die2
  if (die1 == 6 && die2 ==6) {
   scores.innerHTML= Number(scores.innerHTML) + 1
  }

 
 })


const startBtn = document.querySelector('#startBtn')
startBtn.addEventListener('click',startTimer)

// Default inital value of timer
const defaultValue = 5 * 60;

// variable to the time
var countDownTime = defaultValue;

// Function calculate time string
function findTimeString () {
  var minutes = String(Math.trunc(countDownTime / 60));
  var seconds = String(countDownTime % 60);
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  return minutes + seconds;
};

// Select Every Count Container
const countContainer = document.querySelectorAll(".count-digit");


// Function to display coundown on screen
function renderTime  () {
  const time = findTimeString();
  countContainer.forEach((count, index) => {
    count.innerHTML = time.charAt(index);
  });
};

function startTimer  () {
  
    TimeID= setInterval(runCountDown, 1000);
  
}

// function to execute timer
function runCountDown () {
  // decrement time
 
  countDownTime -= 1;
 
  //Display updated time
  renderTime();
  
  if(countDownTime==0)
  {
    mystop()
  }
  
  
}
function mystop(){
  clearInterval(TimeID)
  scoreDiv.innerHTML =` Your score is: ${scores.innerHTML}`
countDownTime = defaultValue
scores.innerHTML =''
myModal.classList.remove('modal')
mdn.style.display='block'

}
const scoreDiv = document.querySelector('.scoreDiv')

function closeMdn(){
  mdn.style.display="none"
  location.reload()
}


window.onclick = function(event) {
  if (event.target == mdn) {
    mdn.style.display = "none";
  }
}

