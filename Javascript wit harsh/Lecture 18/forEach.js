const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((val)=>{
//     console.log(val);
    
// })

// coding.forEach((val,i)=>{
//     console.log(val,"->",i);
    
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    //console.log(item.languageName);
    console.log(item.languageFileName);
    
} )