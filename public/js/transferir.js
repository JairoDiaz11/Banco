$(document).ready(function(){
    

    $('.btntrans').on('click',function(){
    
        let btn= $('.btntrans').index(this);
        let doc=$('.doccli').eq(btn);
        let mont=$('.montocuenta').eq(btn);

    
        let docc=doc.val();
        let monto=mont.val();


        let a,b;

        a=parseInt(prompt("Cuanto desea transferir"));
        nc=parseInt(prompt("Ingrese el numero de cuenta"));

        if(a>monto){
            alert("Ha ingresado un monto superior a su saldo. Ingrese un valor valido")

        }
        else{
            b=prompt("Esta seguro que desea transferirr el valor de $"+a);
            if(b=="Si" || b=="si" ||b== "SI"){
                total=monto-a;
                alert("Transferencia realizada exitosamente.")

                $.ajax({
    
                    type:"POST",
                    url:'/transferir',
                    data:{
                        tcudc:docc,tc:total,tr:a,noc:nc
                    }
                });

            }
            else{
                alert("Proceso de transferencia cancelado")
            }
            
            
        }


       

    
        
    
    

    
    
    
    
    });
    
    
    });