define(['jquery'], function($) {

  return {

    removeHash: function(){ 
      var loc = window.location;
      if ("pushState" in history){
        history.pushState("", document.title, loc.pathname + loc.search);
      }
    },

    renderTable: function(cells, cssClass){
      var html = '';
      for (var index = 0; index < cells.length; index++) {
        if (index % 2 === 0){
          html += '<tr>';
        }
        html += '<td class="' + cssClass;
        if (index === 0 || index === cells.length - 1){
          html += ' txt';
        }
        html += '"';
        if (index === cells.length - 1 && cells.length % 2 === 1){
          html += ' colspan="2"';
        }
        html += '>';
        html += cells[index];
        html += '</td>';
        if (index % 2 !== 0){
          html += '</tr>';
        }
      }
      return html;
    }

  };

});
