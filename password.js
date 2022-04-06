function checkPassword() {
    var passwordBoxObject = document.getElementById("passwordBox");
    var passwordEntered = passwordBoxObject.value;
    console.log("User entered password:", passwordEntered);
    var sitePassword = "codeclub"
    if(passwordEntered==sitePassword){
        console.log("allow");
        window.location.assign("members.html"
        );
    }else{
        console.log("block");
        // style rule for incorrect-password element
        document.getElementById("incorrect-password").style.color = "red";
        // text for incorrect-password element
        document.getElementById("incorrect-password").innerHTML="Incorrect password. Please try again.";

    }
    }