// fetch('wordsApi.json')
// .then(response=>response.json())
// .then(data=>{
//     console.log(data)
// })
// .catch(error=>{
//     console.error("couldn't get word: ",error);
// });

const container=document.querySelector('.container')
const box=document.querySelector('.box');
const word=wordList[Math.floor(Math.random()*wordList.length)];
console.log(word) // get the answer in console
let i=0,j=0,x=0,guess='';
// typing letters -------------------------------------------------
window.addEventListener('keypress',type)
function type(e){
    const bx=document.querySelectorAll('.bx')
    if (e.key != '' && e.key != 'Enter') {
        bx[i].innerHTML = e.key.toUpperCase();
        if (j < 4) {
            guess += e.key.toUpperCase();
        } else {
            j = -1;
            guess += e.key.toUpperCase();
            check();
            x=x+5;
            guess = '';
        }
    }
    i++;
    j++;
}
// check the word --------------------------------------------------
let y=0;
function check(){
    const bx=document.querySelectorAll('.bx')
    let arr=word.split('');
    const animation_duration=500;
    let z=x;
    for(y=0;y<5;y++) {
        if(guess[y]===word[y]&&bx[y].innerHTML !==''){
            bx[z].style.backgroundColor='rgb(16, 200, 16)';
            bx[z].classList.add('animated');
            bx[z].style.animationDelay=`${(y*animation_duration)/2}ms`;            
        }
        else if(arr.includes(guess[y])){
            bx[z].style.backgroundColor='rgb(255, 214, 50)';
            bx[z].classList.add('animated');
            bx[z].style.animationDelay=`${(y*animation_duration)/2}ms`; 
        } else{
            bx[z].classList.add('animated');
            bx[z].style.animationDelay=`${(y*animation_duration)/2}ms`;
        }
        z++;
    }
    if(guess===word){
        setTimeout(() => { // no need to call as it is predefined function
            alert('Congratulations! you won');
        }, 1500);
        window.removeEventListener('keypress',type);
    }
    else{
        console.log('No Match!,You Guessed: ',guess)
    }
}
// drawing grid ----------------------------------------------------
window.addEventListener('load',()=>{
    for(let i=0;i<30;i++){
        const bx=document.createElement('div');
        bx.className='bx';
        box.appendChild(bx);
    }
})