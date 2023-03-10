const Validation=(values)=>{
    let errors={};

    if(!values.email){
        errors.email="Esse campo é obrigatório"
    }
    if(!values.password){
        errors.password="Esse campo é obrigatório"
    }
    if(!values.reemail){
        errors.reemail="Os dois e-mails devem ser iguais.Esse campo é obrigatório"
    }
    if(!values.check){
        errors.check="(Esse campo é obrigatório)"
    }
    return errors
}


export default Validation;