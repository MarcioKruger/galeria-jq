$(document).ready(function(){
    
    $('header button').click(()=>{
        $('form').slideDown();
    })

    $('#btn-cancelar').click(()=>{
        $('form').slideUp();
    })

    $('form').on('submit', (e)=>{
        e.preventDefault();
        let endercoNovaImagem = $('#endereco-imagem-nova').val();
        let novoItem = $('<li style="display: none"></li>')
        $(`<img src="${endercoNovaImagem}" />`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link">
            <a href="${endercoNovaImagem}" target="_black" title="Ver imagem em tamanho real.">
                Ver imagem em tamanho real
            </a>
            </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#endereco-imagem-nova').val('');
    })
})