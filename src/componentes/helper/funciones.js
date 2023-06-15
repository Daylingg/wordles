export const removeAccents = (str) => {
    return str.normalize('NFD')
    .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
    .normalize()
    
  } 


  export const validateWord=(word,wordApi='')=>{
    if(wordApi.length===5){
      if(word.trim().length<5){
      return 'La palabra debe tener 5 caracteres'
    }else{
      let expReg=/^[A-Za-zñ\s]+$/g.test(word)
        if(!expReg){
      return 'La palabra no debe tener numeros'
    }
  } 
   }else  if(wordApi.length===4){
    if(word.trim().length<4 || word.trim().length>4){
    return 'La palabra debe tener 4 caracteres'
  }else{
    let expReg=/^[A-Za-zñ\s]+$/g.test(word)
      if(!expReg){
    return 'La palabra no debe tener numeros'
  }
}
} 
    
  }