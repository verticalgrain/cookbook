document.getElementById('directions__text').onclick = function(e){

  var element =  document.getElementById('highlighter');
  if (typeof(element) != 'undefined' && element != null)
  {
    removeExistingHighlight();
    setTimeout(function() {
      insertHighlightAtCaret('<b id="highlighter"><div></div></b>');
    },5);
  } else {
    insertHighlightAtCaret('<b id="highlighter"><div></div></b>');
  }
}


function removeExistingHighlight() {
  var el = document.querySelector( '#highlighter' );
  el.parentNode.removeChild( el );
}


function insertHighlightAtCaret(html) {
  var sel, range;

  sel = window.getSelection();
  if (sel.getRangeAt && sel.rangeCount) {
    range = sel.getRangeAt(0);
    range.deleteContents();

    var el = document.createElement("div");
    el.innerHTML = html;
    var frag = document.createDocumentFragment(), node, lastNode;
    while ( (node = el.firstChild) ) {
      lastNode = frag.appendChild(node);
    }
    range.insertNode(frag);   
  }
}