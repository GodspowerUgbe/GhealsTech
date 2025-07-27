if (isLoggedIn) {
    alertSystem.alert('An account is signed in already. Do you want to logout the account?',{act:0,buttons:true});
}

function login(e) {
    e.preventDefault();
    let result = checkInput(e.target)
    if (result[0]) {
        customAlert(0,'loading...');
        fetch('/login', {
            method: 'post',
            headers: {
                "Content-type": 'application/json',
            },
            body: JSON.stringify(result[1])
        }).then(response => response.json()).then(value => {
            if (value.status) {
                return customAlert(1,value.message);
            }
            customAlert(value.message,{act:1});
            setTimeout("window.location.replace('/dashboard')",2000);
            //Do things with the returned user object
        }).catch(err => {
            customAlert('An error occured while reaching the server.Please try again later',{act:1});
        });
    }
}




const formObj = document.querySelector('main > form');
formObj.addEventListener('submit', login);