
$(document).ready(function(){


    $('.btnelili').on('click',function(){
    
        let btn= $('.btnelili').index(this);
        let codl=$('.codlinea').eq(btn);
    
    
        let cl=codl.val();
        
    
    
        alert("Datos borrados")

    
        $.ajax({
    
            type:"POST",
            url:'/eliminarlineas',
            data:{
                c:cl
            }
        });
    
    
    
    
    });
    
    
    });