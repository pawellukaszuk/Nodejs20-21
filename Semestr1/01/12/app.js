// Import the filesystem module 
const fs = require("fs"); 
  
let directory_name = process.argv[2]; 
  
if(process.argv.length < 3){
    console.log('zbyt mało parametrów!');
} else if(process.argv.length > 3){
    console.log('zbyt dużo parametrów!');
}
else{
    // Function to get current filenames 
    // in directory 
    let fileNames = fs.readdirSync(directory_name); 
    
    console.log("Pliki i foldery w folderze", directory_name); 
    fileNames.forEach((file) => { 
        console.log(file); 
    }); 
}