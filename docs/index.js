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
      $('#startdiv').removeClass( "startdivvisible" )
      $('#startdiv').addClass( "startdivinvisible" )
    }
    function _nextButtonClickHandler(){
      if (TCG.LIL.currentQuestion != "")
      {
        //Hide current question
        $('#' + TCG.LIL.currentQuestion).removeClass( "noteattemptcardvisible" )
        $('#' + TCG.LIL.currentQuestion).addClass( "noteattemptcardinvisible" )

        //Hide current question answer text for next use
        //NB: we do this by removing both visibility control
        //classes and then adding back the 'invisible' one
        var idanswercard = _generateCurrentQuestionAnswerId();
        $('#' + idanswercard).removeClass( "answertextvisible" )
        $('#' + idanswercard).removeClass( "answertextinvisible" )
        $('#' + idanswercard).addClass( "answertextinvisible" )
        //Put buttons back to default state
        $('#' + TCG.LIL.currentQuestion).find('.tellmepitch').removeClass( "disabled" )
        $('#' + TCG.LIL.currentQuestion).find('.nextpitch').addClass( "disabled" )
      }
      //Get next question to be asked
      TCG.LIL.currentQuestion = TCG.LIL.arrdiv[_getNextQuestion()];
      console.log("TCG.LIL.currentQuestion is now " + TCG.LIL.currentQuestion);
      //Reveal what is now the current question
      $('#' + TCG.LIL.currentQuestion).removeClass( "noteattemptcardinvisible" )
      $('#' + TCG.LIL.currentQuestion).addClass( "noteattemptcardvisible" )
    }
    function _getNextQuestion(){
      return _getRandomInt(TCG.LIL.arrdiv.length)
    }
    function _tellAnswerButtonClickHandler(){
      //Reveal answer
      var idanswercard = _generateCurrentQuestionAnswerId();
      $('#' + idanswercard).addClass( "answertextvisible" )
      $('#' + idanswercard).removeClass( "answertextinvisible" )
      //Disable 'tell me' and enable 'next'
      $('#' + TCG.LIL.currentQuestion).find('.tellmepitch').addClass( "disabled" )
      $('#' + TCG.LIL.currentQuestion).find('.nextpitch').removeClass( "disabled" )
    }
    function _generateCurrentQuestionAnswerId(){
      return TCG.LIL.currentQuestion + '-answertext';
    }
    function reportDiagnostics(){
      console.log("This is pageElementsInitialization. v2");
      console.log(TCG.LIL.arrdiv);
      console.log(TCG.LIL.arrdiv.length);
      console.log(_getRandomInt(TCG.LIL.arrdiv.length));
    }
    return {
      //PUBLIC AREA
      currentQuestion : "",
      //
      arrdiv : _buildArrayOfDivs(),
      //
      pageElementsInitialization : function () {
        $( ".tellmepitch" ).click(function() {
          _tellAnswerButtonClickHandler()
        });
        $( ".nextpitch" ).click(function() {
          _nextButtonClickHandler();
        });
        $( ".startquestions" ).click(function() {
          _start();
          _nextButtonClickHandler();
        });
        //
        $(document).bind('keydown', 't', function assets() {
          console.log('t was pressed');
          _tellAnswerButtonClickHandler()
          return false;
        });
        $(document).bind('keydown', 'n', function assets() {
          console.log('n was pressed');
          _nextButtonClickHandler();
          return false;
        });
        $(document).bind('keydown', 's', function assets() {
          console.log('n was pressed');
          _start();
          _nextButtonClickHandler();
          return false;
        });
      },
  };
}();
$(document).ready(function () { 
    TCG.LIL.pageElementsInitialization();
});
