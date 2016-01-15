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
  if (window.getSelection) {
    // IE9 and non-IE
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents();

      // Range.createContextualFragment() would be useful here but is
      // non-standard and not supported in all browsers (IE9, for one)
      var el = document.createElement("div");
      el.innerHTML = html;
      var frag = document.createDocumentFragment(), node, lastNode;
      while ( (node = el.firstChild) ) {
        lastNode = frag.appendChild(node);
      }
      range.insertNode(frag);
      
      // Preserve the selection
      if (lastNode) {
        range = range.cloneRange();
        range.setStartAfter(lastNode);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  } else if (document.selection && document.selection.type != "Control") {
    // IE < 9
    document.selection.createRange().pasteHTML(html);
  }
}