$(document).ready(function(){
    

    $('.btnre').on('click',function(){
    
        let btn= $('.btnre').index(this);
        let doc=$('.doccli').eq(btn);
        let mont=$('.montocuenta').eq(btn);
        let tra=$('.transferencias').eq(btn);

    
        let docc=doc.val();
        let monto=mont.val();
        let tran=tra.val();


        let a=0,b;

        

        if(tran==0){
            alert("No tiene tranferencias pendientes")

        }
        else{
            b=prompt("Esta seguro que desea recibir la transferencia?");
            if(b=="Si" || b=="si" ||b== "SI"){
                total=parseInt(monto)+parseInt(tran);
                a=0;
                alert("Transferencia recibida exitosamente.Puede Verificar en su saldo")

                $.ajax({
    
                    type:"POST",
                    url:'/recibir',
                    data:{
                        rcudc:docc,rt:total,ttr:a
                    }
                });

            }
            else{
                alert("Proceso  cancelado")
            }
            
            
        }


       

    
        
    
    

    
    
    
    
    });
    
    
    });