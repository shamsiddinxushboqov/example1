// Modalni ochish
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

 // Modalni yopish
span.onclick = function() {
  modal.style.display = "none";
}
// Modal tashqarisidagi har qanday joy bosilganda yopilsin
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var data = [
{
  "Ismi": "Saman",
  "Familyasi": "Avazov",
  "Yoshi": 22,
  "Guruhi": "217-17",
  "Stipendiyasi": 476000
}, 
{
  "Ismi": "Odil",
  "Familyasi": "Mardanaqulov",
  "Yoshi": 23,
  "Guruhi": "217-17",
  "Stipendiyasi": 476000
},
{
  "Ismi": "Asror",
  "Familyasi": "Ergashev",
  "Yoshi": 22,
  "Guruhi": "217-17",
  "Stipendiyasi": 476000
}, 
{
  "Ismi": "Shamsiddin",
  "Familyasi": "Xushboqov",
  "Yoshi": 23,
  "Guruhi": "217-17",
  "Stipendiyasi": 476000
},

];

drawTable(data);

function drawTable(data) {

  // Modal header qismi
  var head = $("<tr />")
  $("#DataTable").append(head);
  for (var j = 0; j < Object.keys(data[0]).length; j++) {
    head.append($("<th>" + Object.keys(data[0])[j] + "</th>"));
  }

  // DataTableda qatorlarni chiqarish
  for (var i = 0; i < data.length; i++) {
    drawRow(data[i]);
  }

}

function drawRow(rowData) {
  var row = $("<tr />")
  $("#DataTable").append(row);
  row.append($("<td>" + rowData["Ismi"] + "</td>"));
  row.append($("<td>" + rowData["Familyasi"] + "</td>"));
  row.append($("<td>" + rowData["Yoshi"] + "</td>"));
  row.append($("<td>" + rowData["Guruhi"] + "</td>"));
  row.append($("<td>" + rowData["Stipendiyasi"] + "</td>"));
}



$('#txt-search').keyup(function(){
            var searchField = $(this).val();
      if(searchField === '')  {
        $('#filter-records').html('');
        return;
      }
      
            var regex = new RegExp(searchField, "i");
            var output = '<div class="row">';
            var count = 1;
        $.each(data, function(key, val){
        if ((val.Familyasi.search(regex) != -1) || (val.Ismi.search(regex) != -1)) {
          output += '<div class="col-md-6 well">';
          // output += '<div class="col-md-3"><img class="img-responsive" src="'+val.profile_image+'" alt="'+ val.Ismi +'" /></div>';
          output += '<div class="col-md-7">';
          output += '<h5>' + val.Ismi + '</h5>';
          output += '<p>' + val.Familyasi + '</p>'
          output += '</div>';
          output += '</div>';
          if(count%2 == 0){
          output += '</div><div class="row">'
          }
          count++;
        }
        });
        output += '</div>';
        $('#filter-records').html(output);
        });