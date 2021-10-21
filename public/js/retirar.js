$(document).ready(function(){
    

    $('.btnreti').on('click',function(){
    
        let btn= $('.btnreti').index(this);
        let doc=$('.doccli').eq(btn);
        let mont=$('.montocuenta').eq(btn);

    
        let docc=doc.val();
        let monto=mont.val();


        let a,b;

        a=parseInt(prompt("Cuanto desea retirar?"));

        if(a>monto){
            alert("Ha ingresado un monto superior a su saldo. Ingrese un valor valido")

        }
        else{
            b=prompt("Esta seguro que desea retirar el valor de $"+a);
            if(b=="Si" || b=="si" ||b== "SI"){
                total=monto-a;
                alert("Retiro realizado exitosamente. Ya puede retirar su dinero")

                $.ajax({
    
                    type:"POST",
                    url:'/retirar',
                    data:{
                        cudc:docc,t:total
                    }
                });

            }
            else{
                alert("Proceso de retiro cancelado")
            }
            
            
        }


       

    
        
    
    

    
    
    
    
    });
    
    
    });