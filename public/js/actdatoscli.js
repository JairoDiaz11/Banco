$(document).ready(function(){
    
    

    $('.btnactcl').on('click',function(){
    
        let btn= $('.btnactcl').index(this);
        let doc=$('.doc').eq(btn);
        let usu=$('.usu').eq(btn);
        let cla=$('.cla').eq(btn);
    
        let d=doc.val();
        let u=usu.val();
        let c=cla.val();


    
        alert("Datos actualizados");
        alert("Vuelva a iniciar sesion con los datos actualizados");
    
    
        $.ajax({
    
            type:"POST",
            url:'/actualizarcli',
            data:{
                dd:d,uu:u,cc:c
            }
        });
    
    
    
    
    });
    
    
    });