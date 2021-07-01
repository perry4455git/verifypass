const verifypass = (password) =>{

    if(password === null){
        
        throw new Error('password should not be null')
    
    }
    else{

        if(password.length <= 8){
            
            throw new Error('length should not be less than 8')

        }else{

            if(  password === password.toLowerCase() ){

                throw new Error('atleast 1 upper case car should be present')
   
            }
            if(  password === password.toUpperCase() ){

                throw new Error('atleast 1 lower case ')
   
            }
            if( !(/\d/.test(password)) ){

                throw new Error('No digit Error')

            }

    
        }
        
       
    }

}

module.exports = {verifypass};