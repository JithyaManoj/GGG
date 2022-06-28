Webcam.set({
    width:350 ,
    height:300 ,
    image_format:"png" ,
    png_quality:90
});

Webcam.attach("#camera");

function takepic(){
    Webcam.snap(function(pic){
        document.getElementById("result").innerHTML="<img id='i' src='"+pic+"'>";
    });
    
}

facemodel= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Wax12tE_0/model.json",modeloaded);

function modeloaded(){
console.log("YAY");
}

p1="";
p2="";

 
function speak(){
    speakdata1= "prediction 1 is" +p1;
    speakdata2= " and the prediction 2 is" +p2;
    speak_audio= new SpeechSynthesisUtterance(speakdata1+speakdata2);
    window.speechSynthesis.speak(speak_audio);
}

function check() {
    pic = document.getElementById("i");
    facemodel.classify(pic, getresults);
}

function getresults(e, r) {
    if (e) {
        console.error(e);
    } else {
        console.log(r)
        p1 = r[0].label;
        p2 = r[1].label;
        document.getElementById("emotionname1").innerHTML = p1;
        document.getElementById("emotionname2").innerHTML = p2;
        speak();
        if (p1 == "loser") {
            document.getElementById("emoj1").innerHTML = "&#128070";
        } else if (p1 == "thumbs up") {
            document.getElementById("emoj1").innerHTML = "&#128077";
        } else if (p1 == "peace out") {
            document.getElementById("emoj1").innerHTML = "&#9996";
        }
        if (p2 == "loser") {
            document.getElementById("emoj2").innerHTML = "&#128070";
        } else if (p2 == "thumbs up") {
            document.getElementById("emoj2").innerHTML = "&#128077";
        } else if (p2 == "peace out") {
            document.getElementById("emoj2").innerHTML = "&#9996";
        }

    }
}