$(document).ready(function(){
    

    $('.btnactli').on('click',function(){
    
        let btn= $('.btnactli').index(this);

        let cl=$('.codlinea').eq(btn);
        let nl=$('.nomlinea').eq(btn);
        let ml=$('.montomaxicredito').eq(btn);
        let pm=$('.plazomaxcred').eq(btn);

    
        let lc=cl.val();
        let ln=nl.val();
        let lm=ml.val();
        let lp=pm.val();

    
        alert("Datos actualizados");
    
    
        $.ajax({
    
            type:"POST",
            url:'/actualizarlineascredit',
            data:{
                llc:lc,lln:ln,llm:lm,llp:lp
            }
        });
    
    
    
    
    });
    
    
    });