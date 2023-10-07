const container=document.querySelector('.container')
const box=document.querySelector('.box');
const word=wordList[Math.floor(Math.random()*wordList.length)];
console.log(word) // get the answer in console
let i=0,j=0,guess='';
// typing letters -------------------------------------------------
window.addEventListener('keypress',type)
function type(e){
    const bx=document.querySelectorAll('.bx')
    // console.log(bx.className.split(' '))
    if (e.key != '' && e.key != 'Enter') {
        bx[i].innerHTML = e.key.toUpperCase();
        if (j < 4) {
            guess += e.key.toUpperCase();
        } else {
            j = -1;
            guess += e.key.toUpperCase();
            check();
            guess = '';
        }
    }
    i++;
    j++;
}
// check the word --------------------------------------------------
let x=0,y=0;
function check() {
    const bx=document.querySelectorAll('.bx')
    let arr=word.split('');
    for(x=0;x<=19;x++){
        if(guess[x]===word[x] && bx[x].innerHTML!==''){
            bx[x].style.backgroundColor='rgb(16, 200, 16)';
        }
        else if(arr.includes(guess[x])){
            bx[x].style.backgroundColor='rgb(255, 214, 50)';
        }
    }
    if (guess === word) {
        // alert('Congratulations! you won')
        window.removeEventListener('keypress',type);
    }
    else {
        console.log('Guessed: ',guess)
        console.log('no match')
    }
}
// drawing grid ----------------------------------------------------
window.addEventListener('load',()=>{
    for(let i=0;i<6;i++){
        for(let j=0;j<5;j++){
            const bx=document.createElement('div');
            bx.className='bx';
            box.appendChild(bx);
        }
    }
})