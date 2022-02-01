Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'>";
    });
}

console.log("ml5 version is -",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/h2IriZpL1/model.json',model_loaded);

function model_loaded(){
    console.log("model is loaded");
}