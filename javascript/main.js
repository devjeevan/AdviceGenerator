let mainurl = `https://api.adviceslip.com/advice`;
const maindice = document.querySelector('.dicearea');
const innerdice = document.querySelector('.maindice');
const mainadvice = document.querySelector('.mainadvice p');
const advicenumber = document.querySelector('.advice');

maindice.addEventListener('click', (e) => {
    innerdice.classList.toggle('toggler');

    getadvice(mainurl).then((maindata) => {
        advicechanger(maindata);
    }).catch((erroring) => {
        console.log(erroring);
    })
});



function getadvice(parameter) {
    return new Promise((resolve, reject) => {
        fetch(parameter).then((ifresolve) => {
            if(ifresolve.ok){
                return ifresolve.json();
            }else{
                reject('not found');
            }
        }).then((finaldata) => {
            resolve(finaldata);
        })
    })
}


function advicechanger(advice) {
    console.log(advice)
    mainadvice.textContent = `"${advice.slip.advice}"`;
    advicenumber.textContent = `advice #${advice.slip.id}`;
}