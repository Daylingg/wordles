export const obtPalabraFetch = async() => {

    try {
        const resp=await fetch('https://clientes.api.greenborn.com.ar/public-random-word?c=1&l=5')
        
        let data=await resp.json()
        
            const palabra=data[0]
    
            return palabra
        
    } catch (error) {
        
       throw new Error(error.statusText); 
        
    }
    
}