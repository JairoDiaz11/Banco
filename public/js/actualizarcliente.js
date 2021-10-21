$(document).ready(function(){
    

    $('.btnactc').on('click',function(){
    
        let btn= $('.btnactc').index(this);
        let nc=$('.nomcli').eq(btn);
        let dc=$('.doccli').eq(btn);
        let ac=$('.apecli').eq(btn);
        let coc=$('.correocli').eq(btn);
        let cec=$('.celulra').eq(btn);
        let sc=$('.sexo').eq(btn);
        let fc=$('.fechanacli').eq(btn);
    
        let ncc=nc.val();
        let dcc=dc.val();
        let acc=ac.val();
        let cocc=coc.val();
        let cecc=cec.val();
        let scc=sc.val();
        let fcc=fc.val();
    
        alert("Datos actualizados");
    
    
        $.ajax({
    
            type:"POST",
            url:'/actualizarclient',
            data:{
                nccc:ncc,dccc:dcc,accc:acc,coccc:cocc,ceccc:cecc,sccc:scc,fccc:fcc
            }
        });
    
    
    
    
    });
    
    
    });