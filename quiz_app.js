// Quiz start code
document.querySelector(".startBtn").addEventListener("click",()=>{
    document.querySelector(".startBtnBox").style.display = "none";
    document.querySelector(".container").style.display = "block";
})

const arrOfQues = [
    {
        question : "Which animal lays eggs?",
        options : ["Dog","Cat","Duck","Sheep"],
        answer : "Duck"
    },
    {
        question : "A male cow is called?",
        options : ["Dog","Ox","Monkey","Sheep"],
        answer : "Ox"
    },
    {
        question : "All animals need food ,air,and ____ to survive.",
        options : ["House","Water","Chocolate","Fruits"],
        answer : "Water"
    },
    {
        question : "What is Earth's natural satellite?",
        options : ["Sun","Mars","Venus","Moon"],
        answer : "Moon"
    },
    {
        question : "What part of the body helps you move?",
        options : ["Lungs","Eyes","Pancreas","Muscles"],
        answer : "Muscles"
    },
    {
        question : "Which system of the body controls the senses?",
        options : ["Circulatory system","Nervous system","Digestive system","Skeleton system"],
        answer : "Nervous system"
    },
    {
        question : "Who is the founder of Tesla?",
        options : ["Zhang Yiming","Mark Jukelberg","Elon Musk","Jeff Bezos"],
        answer : "Elon Musk"
    },
    {
        question : "Which Bollywood actor has been declared as the ‘National Icon’ of Election Commission of India (ECI) in 2022?",
        options : ["Pankaj Tripathi","Rajkumar Rao","Manoj Bajpayee","Nawazuddin Siddiqui"],
        answer : "Pankaj Tripathi"
    },
    {
        question : "Which Bollywood celebrity is the brand ambassador for the Chinese smartphone firm Tecno?",
        options : ["Shahrukh Khan","Amitabh Bacchan","Vidyut Jamwal","Ayushman Khurana"],
        answer : "Ayushman Khurana"
    },
    {
        question : "What was the Release date of Movie “Hum Aapke Hain Koun” ?",
        options : ["5 August 1994","5 August 1997","15 August 1997","26 January 1994"],
        answer : "5 August 1994"
    }
]
let qNo = 0;
let newButton = document.createElement('button');

document.querySelector(".queNo").innerText = 1;

document.querySelector(".questions").innerText = arrOfQues[0].question;
document.getElementById("option1").innerText = arrOfQues[0].options[0];
document.getElementById("option2").innerText = arrOfQues[0].options[1];
document.getElementById("option3").innerText = arrOfQues[0].options[2];
document.getElementById("option4").innerText = arrOfQues[0].options[3];

// Add eventlistener on next button
document.querySelector(".nextBtn").addEventListener("click",()=>{
    
    document.querySelector("#option1").style.backgroundColor = "white";
    document.querySelector("#option2").style.backgroundColor = "white";
    document.querySelector("#option3").style.backgroundColor = "white";
    document.querySelector("#option4").style.backgroundColor = "white";
    let currQueNo = document.querySelector(".queNo").innerText;
    
    for (let Q = currQueNo; Q <= currQueNo; Q++) {
        
        document.querySelector(".questions").innerText = arrOfQues[Q].question;
        document.getElementById("option1").innerText = arrOfQues[Q].options[0];
        document.getElementById("option2").innerText = arrOfQues[Q].options[1];
        document.getElementById("option3").innerText = arrOfQues[Q].options[2];
        document.getElementById("option4").innerText = arrOfQues[Q].options[3];

        if(currQueNo == 9){
            newButton.classList.add("submitButton");
            newButton.textContent = 'Submit';
            document.body.appendChild(newButton);
            document.querySelector(".prevNextBtn").style.display = "none";
            break;
        }
    }
    document.querySelector(".queNo").innerText++;
    qNo++;
    checkingAnswers();
});

// Add eventlistener on previous button
document.querySelector(".prevBtn").addEventListener("click",()=>{
    
    let currQueNo = document.querySelector(".queNo").innerText;
    console.log(currQueNo);
    let prev = document.querySelector(".queNo").innerText-1;
    document.querySelector(".queNo").innerText = prev;
    console.log(prev);
    
    for (let Q = prev; Q < currQueNo; Q++) {
        
        document.querySelector(".questions").innerText = arrOfQues[Q].question;
        document.getElementById("option1").innerText = arrOfQues[Q].options[0];
        document.getElementById("option2").innerText = arrOfQues[Q].options[1];
        document.getElementById("option3").innerText = arrOfQues[Q].options[2];
        document.getElementById("option4").innerText = arrOfQues[Q].options[3];
        console.log("in loop");
        if(Q == 1){
            break;
        }
    }
    
    console.log(prev);
    
});
     // Checking Answers and updating score
let score = document.querySelector(".score").innerText;
document.querySelector(".score").innerText = 0;    
function checkingAnswers(){
          
    document.querySelector(".choices").addEventListener("click",(e)=>{
        
        if(e.target.innerText == arrOfQues[qNo].answer){
            e.target.style.backgroundColor = "#6bff93";
            score = parseInt(score+10);
            document.querySelector(".score").innerText = score;
        }
        else{
            e.target.style.backgroundColor = "#ff6b6b";
        }
    
    },{once:true});
};
checkingAnswers();

// display score on the screen
newButton.addEventListener("click",()=>{
    document.querySelector(".container").style.display = "none";
    document.querySelector(".scoreBoardContainer").style.display = "flex";
    document.querySelector(".scoreBoardContainer").style.height = "95vh";
    document.querySelector(".displayScore").style.display = "block";
    document.querySelector(".SCORE").style.display = "block";
    document.querySelector(".SCORE").innerText = score;
    document.querySelector(".SCORE").style.fontSize = "3rem";
    newButton.style.display = "none";
});

function restart(){
    const arrOfQues = [
        {
            question : "Which animal lays eggs?",
            options : ["Dog","Cat","Duck","Sheep"],
            answer : "Duck"
        },
        {
            question : "A male cow is called?",
            options : ["Dog","Ox","Monkey","Sheep"],
            answer : "Ox"
        },
        {
            question : "All animals need food ,air,and ____ to survive.",
            options : ["House","Water","Chocolate","Fruits"],
            answer : "Water"
        },
        {
            question : "What is Earth's natural satellite?",
            options : ["Sun","Mars","Venus","Moon"],
            answer : "Moon"
        },
        {
            question : "What part of the body helps you move?",
            options : ["Lungs","Eyes","Pancreas","Muscles"],
            answer : "Muscles"
        },
        {
            question : "Which system of the body controls the senses?",
            options : ["Circulatory system","Nervous system","Digestive system","Skeleton system"],
            answer : "Nervous system"
        },
        {
            question : "Who is the founder of Tesla?",
            options : ["Zhang Yiming","Mark Jukelberg","Elon Musk","Jeff Bezos"],
            answer : "Elon Musk"
        },
        {
            question : "Which Bollywood actor has been declared as the ‘National Icon’ of Election Commission of India (ECI) in 2022?",
            options : ["Pankaj Tripathi","Rajkumar Rao","Manoj Bajpayee","Nawazuddin Siddiqui"],
            answer : "Pankaj Tripathi"
        },
        {
            question : "Which Bollywood celebrity is the brand ambassador for the Chinese smartphone firm Tecno?",
            options : ["Shahrukh Khan","Amitabh Bacchan","Vidyut Jamwal","Ayushman Khurana"],
            answer : "Ayushman Khurana"
        },
        {
            question : "What was the Release date of Movie “Hum Aapke Hain Koun” ?",
            options : ["5 August 1994","5 August 1997","15 August 1997","26 January 1994"],
            answer : "5 August 1994"
        }
    ]
    let qNo = 0;
    let newButton = document.createElement('button');
    
    document.querySelector(".queNo").innerText = 1;
    
    document.querySelector(".questions").innerText = arrOfQues[0].question;
    document.getElementById("option1").innerText = arrOfQues[0].options[0];
    document.getElementById("option2").innerText = arrOfQues[0].options[1];
    document.getElementById("option3").innerText = arrOfQues[0].options[2];
    document.getElementById("option4").innerText = arrOfQues[0].options[3];
    
    // Add eventlistener on next button
    document.querySelector(".nextBtn").addEventListener("click",()=>{
        
        document.querySelector("#option1").style.backgroundColor = "white";
        document.querySelector("#option2").style.backgroundColor = "white";
        document.querySelector("#option3").style.backgroundColor = "white";
        document.querySelector("#option4").style.backgroundColor = "white";
        let currQueNo = document.querySelector(".queNo").innerText;
        
        for (let Q = currQueNo; Q <= currQueNo; Q++) {
            
            document.querySelector(".questions").innerText = arrOfQues[Q].question;
            document.getElementById("option1").innerText = arrOfQues[Q].options[0];
            document.getElementById("option2").innerText = arrOfQues[Q].options[1];
            document.getElementById("option3").innerText = arrOfQues[Q].options[2];
            document.getElementById("option4").innerText = arrOfQues[Q].options[3];
    
            if(currQueNo == 9){
                newButton.classList.add("submitButton");
                newButton.textContent = 'Submit';
                document.body.appendChild(newButton);
                document.querySelector(".prevNextBtn").style.display = "none";
                break;
            }
        }
        document.querySelector(".queNo").innerText++;
        qNo++;
        checkingAnswers();
    });
    
    // Add eventlistener on previous button
    document.querySelector(".prevBtn").addEventListener("click",()=>{
        
        let currQueNo = document.querySelector(".queNo").innerText;
        console.log(currQueNo);
        let prev = document.querySelector(".queNo").innerText-1;
        document.querySelector(".queNo").innerText = prev;
        console.log(prev);
        
        for (let Q = prev; Q < currQueNo; Q++) {
            
            document.querySelector(".questions").innerText = arrOfQues[Q].question;
            document.getElementById("option1").innerText = arrOfQues[Q].options[0];
            document.getElementById("option2").innerText = arrOfQues[Q].options[1];
            document.getElementById("option3").innerText = arrOfQues[Q].options[2];
            document.getElementById("option4").innerText = arrOfQues[Q].options[3];
            console.log("in loop");
            if(Q == 1){
                break;
            }
        }
        
        console.log(prev);
        
    });
         // Checking Answers and updating score
    let score = document.querySelector(".score").innerText;
    document.querySelector(".score").innerText = 0;    
    function checkingAnswers(){
              
        document.querySelector(".choices").addEventListener("click",(e)=>{
            
            if(e.target.innerText == arrOfQues[qNo].answer){
                e.target.style.backgroundColor = "#6bff93";
                score = parseInt(score+10);
                document.querySelector(".score").innerText = score;
            }
            else{
                e.target.style.backgroundColor = "#ff6b6b";
                console.log("inside else");
            }
        
        },{once:true});
    };
    checkingAnswers();
    
    // display score on the screen
    newButton.addEventListener("click",()=>{
        document.querySelector(".container").style.display = "none";
        document.querySelector(".scoreBoardContainer").style.display = "flex";
        document.querySelector(".scoreBoardContainer").style.height = "95vh";
        document.querySelector(".displayScore").style.display = "block";
        document.querySelector(".SCORE").style.display = "block";
        document.querySelector(".SCORE").innerText = score;
        document.querySelector(".SCORE").style.fontSize = "3rem";
        newButton.style.display = "none";
    });
}

// document.querySelector(".restart").addEventListener("click",restart(),true);
