function saturdayFun(value) {
    if (value==="bathe my dog"){
        return "This Saturday, I want to bathe my dog!"
    }else{
    return "This Saturday, I want to roller-skate!";
    }
}

// saturdayFun = (value) => {
//     if(value==="bathe my dog"){
//         return "This Saturday, I want to bathe my dog!"
//     } else {
//         return "This Saturday, I want to roller-skate!"
//     }
// }

// mondayWork = (value) => {
//     if(value==="work from home"){
//         return "This Monday, I will work from home.";
//     }
//     else {
//         return "This Monday, I will go to the office.";
//     }
//  }
 function mondayWork(value) {
  if (value==="work from home"){
       return "This Monday, I will work from home."
    } else {
   return "This Monday, I will go to the office." ;  
 }
}

// function wrapAdjective(value){
//     let result = wrapAdjective(value)
//     let emphatic = result(value)

//     if(value==='*'){
//         return 'You are *a hard worker*!'
// } else if(value==='||'){
//     return 'You are ||a dedicated programmer||!'
// }


// }

const wrapAdjective = (flair='*') => {
    return (adjective) => `You are ${flair}${adjective}${flair}!`;
  }