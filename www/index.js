var TCG = TCG || function () { };
TCG.LIL = function () {
    _countStates = function () {
      alert("This is _countStates");
    }
    _buildData = function () {
      alert("This is _buildData");
    }
    return {
      //PUBLIC AREA
      boardstates : null,
      boardstateslength : null,
      boardidx : 0,
      intHandle : null, 
      playerFundsChart : null,
      playerPropHldngChart : null,

      foo: function () {
      },
      pageElementsInitialization : function () {
        alert("This is pageElementsInitialization");
      },
  };
}();
$(document).ready(function () { 
    TCG.LIL.pageElementsInitialization();
});
