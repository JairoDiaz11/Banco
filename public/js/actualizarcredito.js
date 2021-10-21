$(document).ready(function(){
    

    $('.btnactcreditos').on('click',function(){
    
        let btn= $('.btnactcreditos').index(this);

        let crc=$('.codigocredito').eq(btn);
        let crd=$('.doccli').eq(btn);
        let crcod=$('.codlinea').eq(btn);
        let crm=$('.montoprestado').eq(btn);
        let crf=$('.fechaaproba').eq(btn);
        let crp=$('.plazo').eq(btn);
    
        let ccrc=crc.val();
        let ccrd=crd.val();
        let ccrcod=crcod.val();
        let ccrm=crm.val();
        let ccrf=crf.val();
        let ccrp=crp.val();

        alert(ccrc)
        alert(ccrc)
        alert(ccrc)
        alert(ccrc)
        alert(ccrc)
        alert(ccrc)
    
        alert("Datos actualizados");
    
    
        $.ajax({
    
            type:"POST",
            url:'/actualizarcredit',
            data:{
                cred1:ccrc,cred2:ccrd,cred3:ccrcod,cred4:ccrm,cred5:ccrf,cred6:ccrp
            }
        });
    
    
    
    
    });
    
    
    });