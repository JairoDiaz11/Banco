$(document).ready(function(){
    $('.btnelic').on('click',function(){

    
        let btn= $('.btnelic').index(this);
        let doc=$('.doccli').eq(btn);
    
    
        let d=doc.val();
    
        
        alert("Datos borrados")
    
        $.ajax({   

            
            type:"POST",
            url:'/eliminarc',
            data:{
                ddc:d
            }
        });
    
    
    
    
    });
    
    
    });