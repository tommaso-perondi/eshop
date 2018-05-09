$(function () {
    $('form').on('submit',function (e) {

        var form = $('form').serializeArray();
        var pwd_re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        var usr_re = /[a-zA-Z0-9]/;
        if(pwd_re.test(form[1].value) && usr_re.test(form[0].value)){
            console.log("Debug: Form OK");
        }else console.log("Debug: Form ERROR");
          e.preventDefault();
        });
});

function validateUser(user){
    var usr_re = /[a-zA-Z0-9]/;
    if(!usr_re.test(user.value)){
        console.log("Debug: username not valid.");
        document.getElementById("error-label").style.display = "inline";
    }else document.getElementById("error-label").style.display = "none";
}
