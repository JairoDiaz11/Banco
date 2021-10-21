const connection=require('../conexion/conexion');
const cnn=connection();
const {render}=require('ejs');
const bcryptjs=require('bcryptjs')
const controller={};


controller.index=(req,res,next)=>{
    res.render('login')
    
}



controller.cliente=(req,res,next)=>{
    console.log("En la vista del usuario");
    res.render('Cliente');
}

controller.creditos=(req,res,next)=>{
    res.render('Creditos');
    
}

controller.lineas=(req,res,next)=>{
    res.render('Lineas');
}

controller.actcli=(req,res,next)=>{
    res.render('Actcli');
}
controller.credcli=(req,res,next)=>{
    res.render('Credcli');
}
controller.lineascli=(req,res,next)=>{
    res.render('Lineascli');
}






controller.consultageneral=(req,res,next)=>{
    if(req.session.login==true){

    
    cnn.query('SELECT * FROM usuarios',(err,resbd)=>{
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('F_Usuarios',{datos:resbd});
        }
    })
}
else{
    
    res.redirect('/');
    
}
}

controller.insertar=async(req,res,next)=>{
const d=req.body.doccli;
const u=req.body.nomusu;
const c=req.body.clave;
const r=req.body.rol;
const e=req.body.estado;
const i=req.body.imagen;

const password=await bcryptjs.hash(c,8);

console.log(d,u)
cnn.query('INSERT INTO usuarios SET?',{doccli:d,nomusu:u,clave:password,rol:r,estado:e,imagen:i},(err,resbd)=>{
if(err){
    next(new Error(err))
}
else{
res.redirect('/')   
}
});
}


controller.consultageneralcliente=(req,res,next)=>{
    if(req.session.login==true){

    
    cnn.query('SELECT * FROM clientes',(err,resbd)=>{
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('Eclientes',{datosc:resbd});
        }
    })
}
else{
    
    res.redirect('/');
    
}
}
controller.insertarc=async(req,res,next)=>{
    const nc=req.body.nomcli;
    const dc=req.body.doccli;
    const ac=req.body.apecli;
    const cc=req.body.correocli;
    const celc=req.body.celulra;
    const sc=req.body.sexo;
    const fnc=req.body.fechanacli;
    
    cnn.query('INSERT INTO clientes SET?',{nomcli:nc,doccli:dc,apecli:ac,correocli:cc,celulra:celc,sexo:sc,fechanacli:fnc},(err,resbd)=>{
    if(err){
        next(new Error(err))
    }
    else{
    res.redirect('Eclientes')   
    }
    });
}


controller.consultageneralcredito=(req,res,next)=>{
    if(req.session.login==true){

    
    cnn.query('SELECT * FROM creditos',(err,resbd)=>{
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('Creditos',{datoscre:resbd});
        }
    })
}
else{
    
    res.redirect('/');
    
}
}
controller.insertarcre=async(req,res,next)=>{
    const cccr=req.body.codigocredito;
    const dcr=req.body.doccli;
    const clcr=req.body.codlinea;
    const mpcr=req.body.montoprestado;
    const facr=req.body.fechaaproba;
    const pcr=req.body.plazo;
    
    
    cnn.query('INSERT INTO creditos SET?',{codigocredito:cccr,doccli:dcr,codlinea:clcr,montoprestado:mpcr,fechaaproba:facr,plazo:pcr},(err,resbd)=>{
    if(err){
        next(new Error(err))
    }
    else{
    res.redirect('Creditos')   
    }
    });
}




controller.consultagenerallcredito=(req,res,next)=>{
    if(req.session.login==true){

    
    cnn.query('SELECT * FROM lineas',(err,resbd)=>{
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('Lineas',{datoslcre:resbd});
        }
    })
}
else{
    
    res.redirect('/');
    
}
}
controller.insertarlcre=async(req,res,next)=>{
    const clc=req.body.codlinea;
    const nlc=req.body.nomlinea;
    const mlc=req.body.montomaxicredito;
    const pcl=req.body.plazomaxcred;

    
    
    cnn.query('INSERT INTO lineas SET?',{codlinea:clc,nomlinea:nlc,montomaxicredito:mlc,plazomaxcred:pcl},(err,resbd)=>{
    if(err){
        next(new Error(err))
    }
    else{
    res.redirect('Lineas')   
    }
    });
}








controller.login=async(req,res,next)=>{
    const usu=await req.body.usuario;
    const cla=await req.body.login;
    cnn.query('SELECT * FROM  usuarios WHERE nomusu=?',[usu],async(err,results)=>{
        if(err){
            next(new Error("Error de consulta login",err));
        }
        if(results!=0){
            console.log("primer if")
            if(await(bcryptjs.compare(cla,results[0].clave))){

                console.log("Datos correctos")
            //res.redirect('F_Usuarios')
             docc=results[0].doccli;
             rol=results[0].rol;
             uss=results[0].nomusu;
             req.session.login=true;
             req.session.doccc=results[0].doccli;
             req.session.usss=results[0].nomusu
             switch(rol){

                case 'cliente':
                    res.redirect('Cliente');
                break;

                case 'empleado':

                    res.redirect('Empleado');
                break;

                case 'admin':
                    res.redirect('Admin')
            }


        }
        else{
            console.log("Datos Incorrectos");
            res.redirect('/');


        }

        }


            
    })
}



controller.actualizar=async(req,res,next)=>{
    const docx=req.body.dd;
    const usux=req.body.uu;
    const clax=req.body.cc;
    const rolx=req.body.rr;
    const estx=req.body.ee;
    const imgx=req.body.ii;
    const password=await bcryptjs.hash(clax,8);

console.log(docx)
    cnn.query('UPDATE usuarios SET  nomusu="'+usux+'",clave="'+password+'",rol="'+rolx+'",estado="'+estx+'",imagen="'+imgx+'" WHERE doccli="'+docx+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));

        }
        else{
            console.log("Actualizado")
            res.redirect('F_Usuarios')
        }




    })
}


controller.eliminar=async(req,res,next)=>{
    const d=req.body.dd

    cnn.query('DELETE  FROM usuarios WHERE doccli="'+d+'"',async(err,resbd)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("Eliminado");
            res.redirect('F_Usuarios');
        }
    })
}

controller.cerrar=(req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect('/');
    });

}
controller.consultadatoscli=(req,res,next)=>{
    

    
    cnn.query('SELECT * FROM clientes INNER JOIN usuarios on(clientes.doccli=usuarios.doccli) WHERE nomusu=?',[req.session.usss],(err,resbd)=>{
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('Cliente',{datoscl:resbd});
        }
    })
}


controller.consultadatosusu=(req,res,next)=>{
    if(req.session.login==true){
        console.log(req.session.usss)

    
    cnn.query('SELECT * FROM usuarios WHERE nomusu=?',[req.session.usss],(err,resbd)=>{
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('Actcli',{adatos:resbd});
        }
    })
}
else{
    
    res.redirect('/');
    
}
}

controller.consultalineascli=(req,res,next)=>{
    
        if(req.session.login){
       
       cnn.query('SELECT * FROM lineas',(err,resbd)=>{
           if(err){
             next(new Error(err))  
             console.log("Error en la consulta")
           }
           else{
              // console.log(resbd)
               res.render('Lineascli',{datoslicre:resbd});
           }
       }) 
       
        }
        else{
            res.redirect('/');
        }
    

}
controller.consultarcreditoscli=(req,res,next)=>{
    if(req.session.login){

    cnn.query('SELECT * FROM creditos INNER JOIN clientes on (creditos.doccli=clientes.doccli) INNER JOIN usuarios on (usuarios.doccli=clientes.doccli) WHERE nomusu=?',[req.session.usss],(err,resbd)=>{
        if(err){
            next(new Error(err))  
            console.log("Error en la consulta")
        }
        else{
            // console.log(resbd)
            res.render('Credcli',{datoscrec:resbd});
        }
    }) 
        
    }
    else{
        res.redirect('/');
    }
   
       
}






controller.actdatoscli=async(req,res,next)=>{
    const docxc=req.body.dd;
    const usuxc=req.body.uu;
    const claxc=req.body.cc;
    const password=await bcryptjs.hash(claxc,8);

console.log(usuxc)
console.log(password)
    cnn.query('UPDATE usuarios SET  nomusu="'+usuxc+'",clave="'+password+'" WHERE doccli="'+docxc+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));

        }
        else{
            console.log("Actualizado")
           
        }
        res.redirect('login')




    })
}

controller.eliminardcliente=async(req,res,next)=>{

    const dc=req.body.ddc
    console.log(dc)

    cnn.query('DELETE  FROM clientes WHERE doccli="'+dc+'"',async(err,resbd)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("Eliminado");
            res.redirect('Cliente');
        }
    })
}




controller.eliminarlineasc=async(req,res,next)=>{

    const clinea=req.body.c
    

    cnn.query('DELETE  FROM lineas WHERE codlinea="'+clinea+'"',async(err,resbd)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("Eliminado");
            res.redirect('Lineas');
        }
    })
}
controller.eliminarcredit=async(req,res,next)=>{

    const codcredito=req.body.ccr
    

    cnn.query('DELETE  FROM creditos WHERE codigocredito="'+codcredito+'"',async(err,resbd)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("Eliminado");
            res.redirect('Creditos');
        }
    })
}

controller.actualizardatoscli=async(req,res,next)=>{
    const cnccc=req.body.nccc;
    const cdccc=req.body.dccc;
    const caccc=req.body.accc;
    const ccoccc=req.body.coccc;
    const cceccc=req.body.ceccc;
    const csccc=req.body.sccc;
    const ccfccc=req.body.fccc;
    
   

    cnn.query('UPDATE clientes SET  nomcli="'+cnccc+'",doccli="'+cdccc+'",apecli="'+caccc+'",correocli="'+ccoccc+'",celulra="'+cceccc+'",sexo="'+csccc+'",fechanacli="'+ccfccc+'" WHERE doccli="'+cdccc+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));

        }
        else{
            console.log("Actualizado")
           
        }
        res.redirect('Eclientes')




    })
}

controller.actualizardatoslineas=async(req,res,next)=>{
    const cln=req.body.llc;
    const nom=req.body.lln;
    const monto=req.body.llm;
    const plazo=req.body.llp;


   
    
   

    cnn.query('UPDATE lineas SET  codlinea="'+cln+'",nomlinea="'+nom+'",montomaxicredito="'+monto+'",plazomaxcred="'+plazo+'" WHERE codlinea="'+cln+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));

        }
        else{
            console.log("Actualizado")
           
        }
        res.redirect('Eclientes')




    })
}

controller.actualizarcreditoss=async(req,res,next)=>{
    const ccred1=req.body.cred1;
    const ccred2=req.body.cred2;
    const ccred3=req.body.cred3;
    const ccred4=req.body.cred4;
    const ccred5=req.body.cred5;
    const ccred6=req.body.cred6;
  
    
   

    cnn.query('UPDATE creditos SET  codigocredito="'+ccred1+'",doccli="'+ccred2+'",codlinea="'+ccred3+'",montoprestado="'+ccred4+'",fechaaproba="'+ccred5+'",plazo="'+ccred6+'" WHERE codigocredito="'+ccred1+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));

        }
        else{
            console.log("Actualizado")
           
        }
        res.redirect('Creditos')




    })
}


controller.consultageneralcuentas=(req,res,next)=>{
    if(req.session.login==true){

    
    cnn.query('SELECT * FROM cuentas',(err,resbd)=>{
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('Cuentas',{datoscuentas:resbd});
        }
    })
}
else{
    
    res.redirect('/');
    
}
}
controller.insertarcuentas=async(req,res,next)=>{
    const cucc=req.body.codcuenta;
    const cudc=req.body.doccli;
    const cumc=req.body.montocuenta;
    const cutc=req.body.tipocuenta;

    
    
    cnn.query('INSERT INTO cuentas SET?',{codcuenta:cucc,doccli:cudc,montocuenta:cumc,tipocuenta:cutc},(err,resbd)=>{
    if(err){
        next(new Error(err))
    }
    else{
    res.redirect('Cuentas')   
    }
    });
}




controller.consultacuentacli=(req,res,next)=>{
    

    
    cnn.query('SELECT * FROM cuentas INNER JOIN clientes on(cuentas.doccli=clientes.doccli) INNER JOIN usuarios on(clientes.doccli=usuarios.doccli) WHERE nomusu=?',[req.session.usss],(err,resbd)=>{
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('Cuentacli',{cdatoscuentas:resbd});
        }
    })
}




controller.consultanombre=(req,res,next)=>{
    if(req.session.login==true){
        console.log(req.session.usss)

    
    cnn.query('SELECT * FROM clientes INNER JOIN usuarios on (clientes.doccli=usuarios.doccli) WHERE nomusu=?',[req.session.usss],(err,resbd)=>{
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('Empleado',{nombrec:resbd});
        }
    })
}
else{
    
    res.redirect('/');
    
}
}



controller.consultanombrea=(req,res,next)=>{
    if(req.session.login==true){
        console.log(req.session.usss)

    
    cnn.query('SELECT * FROM clientes INNER JOIN usuarios on (clientes.doccli=usuarios.doccli) WHERE nomusu=?',[req.session.usss],(err,resbd)=>{
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('Admin',{nombreca:resbd});
        }
    })
}
else{
    
    res.redirect('/');
    
}
}


controller.eliminarcuentas=async(req,res,next)=>{

    const cudd=req.body.cud
    

    cnn.query('DELETE  FROM cuentas WHERE doccli="'+cudd+'"',async(err,resbd)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("Eliminado");
            res.redirect('Cuentas');
        }
    })
}
controller.consultageneralclientea=(req,res,next)=>{
    if(req.session.login==true){

    
    cnn.query('SELECT * FROM clientes',(err,resbd)=>{
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('Admincli',{addatosc:resbd});
        }
    })
}
else{
    
    res.redirect('/');
    
}
}

controller.retiroscli=async(req,res,next)=>{

    const documento=req.body.cudc;
    const mnuevo=req.body.t;

    console.log(mnuevo)

  
    
   

    cnn.query('UPDATE cuentas SET  montocuenta="'+mnuevo+'" WHERE doccli="'+documento+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));

        }
        else{
            console.log("Actualizado")
           
        }
        res.redirect('Cuentacli')




    })
}

controller.consignarcli=async(req,res,next)=>{

    const cdocumento=req.body.ccudc;
    const cmnuevo=req.body.tc;

    

  
    
   

    cnn.query('UPDATE cuentas SET  montocuenta="'+cmnuevo+'" WHERE doccli="'+cdocumento+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));

        }
        else{
            console.log("Actualizado")
           
        }
        res.redirect('Cuentacli')




    })
}

controller.transcli=async(req,res,next)=>{

    const tdocumento=req.body.tcudc;
    const tmnuevo=req.body.tc;
    const trans=req.body.tr;
    const ncuenta=req.body.noc;

    console.log(tmnuevo)

  
    
   

    cnn.query('UPDATE cuentas SET  montocuenta="'+tmnuevo+'" WHERE doccli="'+tdocumento+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));

        }
        else{
            console.log("Actualizado")
           
        }
        res.redirect('Cuentacli')




    })
    cnn.query('UPDATE cuentas SET  transferencias="'+trans+'" WHERE nocuenta="'+ncuenta+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));

        }
        else{
            console.log("Actualizado")
           
        }
        res.redirect('Cuentacli')




    })
}


controller.recibircli=async(req,res,next)=>{

    const tdocumento=req.body.rcudc;
    const tmnuevo=req.body.rt;
    const transnuevo=req.body.ttr;

    

  
    
   

    cnn.query('UPDATE cuentas SET  montocuenta="'+tmnuevo+'",transferencias="'+transnuevo+'" WHERE doccli="'+tdocumento+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));

        }
        else{
            console.log("Actualizado")
           
        }
        res.redirect('Cuentacli')




    })
}
module.exports=controller;





