$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const inputTarefa = $('#input-tarefa').val();
        const novaTarefa = $(`<li style=" display: none"></li>`);
        $(`<p>${inputTarefa}</p>`).appendTo(novaTarefa)
        $(`<button type="button" id="btn-excluir">Excluir</button>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(500);

        $('#input-tarefa').val('')
    })

    $("ul").on("click", "p", function () {
        $(this).toggleClass("tarefa-completa");
    });

    $('ul').on('click', '#btn-excluir', function() {
        $(this).closest('li').fadeOut(500, function(){
            $(this).remove();
        });
    });
});
