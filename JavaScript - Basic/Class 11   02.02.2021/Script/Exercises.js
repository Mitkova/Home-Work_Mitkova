$(document).redy(function(){


    $("button").click(function (){

        let inputNaslov = $("#naslovID").val();
        let inputAvtor = $("#avtorID").val();
        let inputTelefon = $("#telefonID").val();
        let inputDate = $("#dateID").val();

        let ulist = $("ul");
        ulist.append(`<h3>Result:</h3>
                      <li>Naslov na knigata: ${inputNaslov}</li><br>
                      <li>Avtor na knigata: ${inputAvtor}</li><br>
                      <li>Telefon: ${inputTelefon}</li><br>
                      <li>Datum: ${inputDate}</li><br><br><br>`);
    });
});

