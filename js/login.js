function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

$(function () {
    $('form').on('submit',function (e) {

        var form = $('form').serializeArray();
        //var pwd_re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        var usr_re = /^[a-zA-Z0-9]+$/;
        if(usr_re.test(form[0].value)){
            console.log("Debug: Form OK");
            var users_obj = JSON.parse(Get("https://raw.githubusercontent.com/tommaso-perondi/eshop/master/login.json"));
            var found=0;
            for (var user in users_obj.users) {
                if(users_obj.users[user].name==form[0].value && users_obj.users[user].password==form[1].value) var found=1;
            }
            if(found==1){
                window.location.replace("shop.html");
            }else{
                document.getElementById("error-label").innerHTML = "Username or password not valid";
                }
        }else console.log("Debug: Form ERROR");
          e.preventDefault();
        });
});

function validateUser(user){
    var usr_re = /^[a-zA-Z0-9]+$/;
    if(!usr_re.test(user.value)){
        console.log("Debug: username not valid.");
        document.getElementById("error-label").innerHTML = "Username not valid";
    }else document.getElementById("error-label").innerHTML = "";
}
