function isAndroid(){
    return navigator.userAgent.indexOf("Android") > 0;
}

function isiOS(){
    return ( navigator.userAgent.indexOf("iPhone") > 0 || navigator.userAgent.indexOf("iPad") > 0
        || navigator.userAgent.indexOf("iPod") > 0);
}

if(isAndroid()){
    document.write('<script charset="utf-8" src="cordova-2.1.0-android.js"><\/script>');
}else if(isiOS()){
    document.write('<script charset="utf-8" src="cordova-2.1.0-ios.js"><\/script>');
}