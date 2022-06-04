
window.onload = function () {

    const createAccountButton = document.getElementById('createAccount')

    createAccountButton.addEventListener('click', function(){
        const createAccountCard = document.getElementById('cardCreateAccount')
        createAccountCard.classList.remove('d-none')
    })

};