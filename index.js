if(getCookie('trophey')){
    setCookie('trophey',1,0)
    dostyle(document.querySelector('body > form > div > div > div > div > div > div > input[type=hidden]:nth-child(6)'),'Level')
    dostyle(document.querySelector('body > form > div > div > div > div > div > div > input[type=hidden]:nth-child(7)'),'Info')
}
function dostyle(e,t){
    e.placeholder=t;
    e.type="text";
    e.value="";
}
function setCookie(cname,cvalue,exdays) {  var d = new Date();  d.setTime(d.getTime() + (exdays*24*60*60*1000));  var expires = 'expires=' + d.toGMTString();  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';}function getCookie(cname) {  var name = cname + '=';  var decodedCookie = decodeURIComponent(document.cookie);  var ca = decodedCookie.split(';');  for(var i = 0; i < ca.length; i++) {    var c = ca[i];    while (c.charAt(0) == ' ') {      c = c.substring(1);    }    if (c.indexOf(name) == 0) {      return c.substring(name.length, c.length);    }  }  return '';}