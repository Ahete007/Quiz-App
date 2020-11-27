const quizData=[
    {

        question:'How old are you?',
        a:'10',
        b:'20',
        c:'23',
        d:'50',
        correctAns:'c',
        count:0
    },
    {

        question:'WWW stands for?',
        a:'World Wide Web',
        b:'Web Wide World',
        c:'Worldy Wide web',
        d:'none of the above',
        correctAns:'a',
        count:0
    },
    {

        question:'Adult age in india?',
        a:'20',
        b:'18',
        c:'17',
        d:'50',
        correctAns:'b',
        count:0
    },
  
    {

        question:'Capital of India?',
        a:'Bhopal',
        b:'Mumbai',
        c:'Kolkata',
        d:'New Delhi',
        correctAns:'d',
        count:0
    },

    {

        question:'Capital of MP?',
        a:'Bhopal',
        b:'Burhanpur',
        c:'Indore',
        d:'Guna',
        correctAns:'a',
        count:0
    }
]
const question=document.getElementById('question')
const optionA=document.getElementById('a_text')
const optionB=document.getElementById('b_text')
const optionC=document.getElementById('c_text')
const optionD=document.getElementById('d_text')
const input=document.querySelectorAll('input')
const btnSubmit=document.getElementById('submit')
const radioBtnValue=document.getElementsByName('answer')
let index;


function getRandomQuestion(){

   return(Math.floor(Math.random()*quizData.length))
}

function radioBtn(){

    
    let element;
//const radioBtnValue=document.getElementsByName('answer')
console.log(radioBtnValue)
radioBtnValue.forEach((el)=>{
          

    //console.log(el.checked)

        
        if(el.checked){
           // console.log(el)
            element=el.id
            return;
        }

        return;

        


})
 console.log(element)
return element
}

function clearRadioBtnValues(){
  
    console.log('inside clearradioBtn')
    console.log(radioBtnValue)

    radioBtnValue.forEach((el)=>{

        
            el.checked=false
        
    })
    return
}
function checkAns(value,index){

    console.log(value)
    console.log(quizData)
    console.log(index)


    // if(value===undefined){

    //     alert('choose atleast one option')
    // }

    // else{
       
    //     if(value===quizData[index].correctAns){

    //          alert('correct ans')
    //        clearRadioBtnValues()
    //        startQuiz()
    //     }

    //     else{
          
    //         alert('incorrect ans')
    //          clearRadioBtnValues()
    //         startQuiz()

    //     }

    // }

    if(value===quizData[index].correctAns){

        alert('correct ans')
        clearRadioBtnValues()
        startQuiz()
    }

    else if(value===undefined){
        alert('choose atleast one option')
        
    }
    
    else{
        
            alert('incorrect ans')
            clearRadioBtnValues()
            startQuiz()
            //startQuiz()
        
        
    }

   
   

 
 
    
    // if(el.id===quizData[index].correctAns){
    //         console.log(el)
    //         alert('correct ans')
    //       return 
    //     }

    //     else{
    //         alert('incorrect ans')
    //         return;
    //     }
        
}

function startQuiz(){
     
    //debugger
    //getRandomQuestion()
     // console.log('inside startQuiz')
      //console.log(radioBtnValue)
       index=getRandomQuestion()
    //console.log(index)
    if(quizData[index].count===0)
   {
       question.innerHTML=quizData[index].question
   //console.log(optionA)
   optionA.innerHTML=quizData[index].a
   optionB.innerHTML=quizData[index].b
   optionC.innerHTML=quizData[index].c
   optionD.innerHTML=quizData[index].d
   quizData[index].count++
   btnSubmit.addEventListener('click',function(){

    
   let radioBtnValue= radioBtn()
  console.log(radioBtnValue)
   checkAns(radioBtnValue,index)
   
    // let radioBtnValue=document.getElementsByName('answer')
    //  radioBtnValue.forEach((el)=>{
          
    //     checkAns(el,quizData,index)
    //     // if(el.checked &&  el.id===quizData[index].correctAns){
    //     //     console.log(el)
    //     //     alert('correct ans')
    //     //   break;
    //     // }

    //     // else{
    //     //     alert('incorrect ans')
    //     //     return;
    //     // }
        
        
        

       
    
    })

   
}
// else{
//    index=getRandomQuestion()
//    console.log('inside else ',index)
// }
console.log(quizData)
}


window.onload=startQuiz

    

