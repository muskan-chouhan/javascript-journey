//  Immediately Invoked Function Expression


(function chaiO() {               //this called named iife
    console.log(`DB connected`);
    
} )();  //semicolon lgana pdta hai buz usko pta nhi hai kb rokna hai


( (name) => {
    console.log(`DB connected two ${name}`);
    
} ) ('hitesh');