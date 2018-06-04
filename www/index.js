var TCG = TCG || function () { };
TCG.LIL = function () {
    _bar= function () {
      alert("This is bar");
    }
    _buildArrayOfDivs= function () {
      return ['octave-0-pitch-c',
       'octave-0-pitch-d',
       'octave-0-pitch-e',
       'octave-0-pitch-f',
       'octave-0-pitch-g',
       'octave-0-pitch-a',
       'octave-0-pitch-b',
       'octave-1-pitch-c',
       'octave-1-pitch-d',
       'octave-1-pitch-e',
       'octave-1-pitch-f',
       'octave-1-pitch-g',
       'octave-1-pitch-a',
       'octave-1-pitch-b'];
    }
    function _getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    function _start(){
      console.log( "Handler for startquestions .click() called." );
    }
    function _moveToNextQuestion(){
      if (TCG.LIL.currentQuestion != "")
      {
        $('#' + TCG.LIL.currentQuestion).removeClass( "noteattemptcardvisible" )
        $('#' + TCG.LIL.currentQuestion).addClass( "noteattemptcardinvisible" )
        //
        var idanswercard = _makeCurrentQuestionAnswerId();
        $('#' + idanswercard).removeClass( "answertextvisible" )
        $('#' + idanswercard).removeClass( "answertextinvisible" )
        //
        $('#' + idanswercard).addClass( "answertextinvisible" )
      }
      TCG.LIL.currentQuestion = TCG.LIL.arrdiv[_getNextQuestion()];

      $('#' + TCG.LIL.currentQuestion).removeClass( "noteattemptcardinvisible" )
      $('#' + TCG.LIL.currentQuestion).addClass( "noteattemptcardvisible" )
    }
    function _getNextQuestion(){
      return _getRandomInt(TCG.LIL.arrdiv.length)
    }
    function _tellMe(){
      var idanswercard = _makeCurrentQuestionAnswerId();

      $('#' + idanswercard).removeClass( "answertextinvisible" )
      $('#' + idanswercard).addClass( "answertextvisible" )
    }
    function _makeCurrentQuestionAnswerId(){
      return TCG.LIL.currentQuestion + '-answertext';
    }
    return {
      //PUBLIC AREA
      currentQuestion : "",
      arrdiv : _buildArrayOfDivs(),
      pageElementsInitialization : function () {
        console.log("This is pageElementsInitialization. v2");
        console.log(TCG.LIL.arrdiv);
        console.log(TCG.LIL.arrdiv.length);
        console.log(_getRandomInt(TCG.LIL.arrdiv.length));
        $( ".tellmepitch" ).click(function() {
          console.log( "Handler for tellmepitch .click() called." );
          _tellMe()
        });
        $( ".nextpitch" ).click(function() {
          console.log( "Handler for nextpitch .click() called." );
          _moveToNextQuestion();
        });
        $( ".startquestions" ).click(function() {
          _start();
          _moveToNextQuestion();
        });
      },
  };
}();
$(document).ready(function () { 
    TCG.LIL.pageElementsInitialization();
});
