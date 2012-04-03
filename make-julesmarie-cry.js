/**
 * Make @julesmarie cry
 * bookmarklet that changes <a>Click here</a> to <a>Make @julesmarie cry</a>
 * http://github.com/desandro/make-julesmarie-cry
**/

/*jshint asi: true, curly: true, eqeqeq: true, forin: false, newcap: true, noempty: true, strict: false, undef: true, browser: true */

( function( window ) {

  var document = window.document
  var links = document.getElementsByTagName('a')
  var link, text, lowerText, replacement

  for ( var i=0, len = links.length; i < len; i++ ) {
    link = links[i]
    text = link.innerText
    lowerText = 
    text = link.innerText
    if ( text.toLowerCase() === 'click here' ) {
      replacement = text.charAt( 0 ) === 'C' ? 'M' : 'm'
      replacement += 'ake @julesmarie cry'
      link.textContent = replacement
    }
  }

})( window )
