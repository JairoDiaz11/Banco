$(document).ready(function(){

    $('.btnelicred').on('click',function(){
    
        let btn= $('.btnelicred').index(this);
        let ccred=$('.codigocredito').eq(btn);
    
    
        let cdc=ccred.val();
    
    
        alert("Datos borrados")
    
        $.ajax({
    
            type:"POST",
            url:'/eliminarcreditos',
            data:{
                ccr:cdc
            }
        });
    
    
    
    
    });
    
    
    });