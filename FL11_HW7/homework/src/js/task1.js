let email = prompt('Enter your e-mail, please');
let password;
let confirmation;
let newPassword;
let newPasswordAgain;
let symbols=6;
let symbols2=5;
if (email==='' || email===null) {
    alert('Canceled');
} else if (email.length<symbols) {
    alert("I don't know any emails having name length less than 6 symbols");
    } else if (email==='user@gmail.com') {
    password=prompt('Enter your password, please');
    if (password==='' || password===null) {
        alert('Canceled');
    } else if (password==='UserPass') {
        confirmation = confirm('Do you want to change your password?');
        if (confirmation===true){
            password=prompt('Enter your password, please');
            if (password==='' || password===null) {
                alert('Canceled');
            } else if (password==='UserPass') {
                newPassword=prompt('Enter a new password, please');
                if (newPassword.length<symbols2) {
                    alert('It’s too short password. Sorry.');
                } else {
                    newPasswordAgain=prompt('Enter a new password again, please');
                    if (newPasswordAgain===newPassword) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change');
        }
    } else {
        alert('Wrong password');
    }
} else if (email==='admin@gmail.com') {
    password=prompt('Enter your password, please');
    if (password==='' || password===null) {
        alert('Canceled');
    } else if (password==='AdminPass') {
        confirmation = confirm('Do you want to change your password?');
        if (confirmation===true){
            password=prompt('Enter your password, please');
            if (password==='' || password===null) {
                alert('Canceled');
            } else if (password==='AdminPass') {
                newPassword=prompt('Enter a new password, please');
                if (newPassword.length<symbols2) {
                    alert('It’s too short password. Sorry.');
                } else {
                    newPasswordAgain=prompt('Enter a new password again, please');
                    if (newPasswordAgain===newPassword) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert("I don't know you");
}