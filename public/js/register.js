function register(e) {
    e.preventDefault();
    let result = checkInput(e.target)
    if (result[0]) {
        customAlert(0,'loading...');
        fetch('/register', {
            method: 'post',
            headers: {
                "Content-type": 'application/json',
            },
            body: JSON.stringify(result[1])
        }).then(response => response.json()).then(value => {
            if (value.status) {
                return customAlert(1,value.message);
            }
            customAlert(1,value.message)
            //Do things with the returned user object
        }).catch(err => {
            customAlert(1, 'An error occured while reaching the server.Please try again later');
        });
    }
}



const formObj = document.querySelector('main > form');
formObj.addEventListener('submit', register);