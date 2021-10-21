$(document).ready(function(){
    

    $('.btnelicuentas').on('click',function(){
    
        let btn= $('.btnelicuentas').index(this);
        let doc=$('.doccli').eq(btn);

        let d=doc.val();
        
    
    
        
    
       
    alert(d)
    
        alert("Datos borrados")
       
    
        $.ajax({
    
            type:"POST",
            url:'/eliminarcuenta',
            data:{
                cud:d
            }
        });
    
    
    
    
    });
    
    
    });