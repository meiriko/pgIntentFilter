(function () {
    "use strict";
    
	alert('xxx1');
    function triggerOpenURL() {
		alert('xxx2');
          cordova.exec(
              (typeof handleOpenURL == "function" ? handleOpenURL : null),
              null,
              "MeirPlug",
              "checkIntent",
              []);
		alert('xxx3');
    }

  document.addEventListener("deviceready", triggerOpenURL, false);
}());
