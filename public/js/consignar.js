$(document).ready(function(){
    

    $('.btnconsig').on('click',function(){
    
        let btn= $('.btnconsig').index(this);
        let doc=$('.doccli').eq(btn);
        let mont=$('.montocuenta').eq(btn);

    
        let cdocc=doc.val();
        let monto=mont.val();


        let c,b;

        c=parseInt(prompt("Cuanto dinero desea consignar a su cuenta?"));

            b=prompt("Esta seguro que desea consignar el valor de $"+c);
            if(b=="Si" || b=="si" ||b== "SI"){
                totalc=parseInt(monto)+parseInt(c);
                
                alert("Consignacion realizada exitosamente. Ya está el dinero en su cuenta")
        

                $.ajax({
    
                    type:"POST",
                    url:'/consignar',
                    data:{
                        ccudc:cdocc,tc:totalc
                    }
                });

            }
            else{
                alert("Proceso de consignacion cancelado")
            }
            
            
        


       

    
        
    
    

    
    
    
    
    });
    
    
    });