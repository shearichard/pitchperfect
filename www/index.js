var TCG = TCG || function () { };
TCG.LIL = function () {
    _bar= function () {
      alert("This is bar");
    }
    return {
      //PUBLIC AREA
      pageElementsInitialization : function () {
        alert("This is pageElementsInitialization. v1");
      },
  };
}();
$(document).ready(function () { 
    TCG.LIL.pageElementsInitialization();
});
