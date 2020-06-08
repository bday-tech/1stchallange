
var questions = [
     {
           prompt: "Was schafft die Struktur der Website?\n(a) HTML\n\ (b) CSS\n(c) JavaScrips",
           answer: "a"
     },
     {
          prompt: "In welchem Tag steht der Inhalt der Website?\n(a) HTML\n\ (b) Head\n(c) Body",
          answer: "c"
     },
     {
          prompt: "Ist HTML5 der aktuelle Standart?\n(a) Ja\n\ (b) Nein, HTML 5 gibt es noch gar nicht. Es ist noch in Entwicklung\n(c) Nein, es ist die aktuellste Version, wird aber kaum verwendet.",
          answer: "a"
     }
     {
         promt: "Wo stellt man den Titel der Website ein?\n(a) Heading\n\ (b) Head\n(c) Body"
         answer: "b"
     }
     {
        promt: "Was ist CSS ausgeschrieben?\n(a) Code Style Sheets\n\ (b) Cascade Style Source\n(c) Cascade Style Sheets"
        answer: "c"
    }
    {
        promt: "Welchen Zweck hat <canvas>?\n(a) erzeugt Leinwand\n\ (b) erstellt Datenbank\n(c) ersetzt Flash Player"
        answer: ""
    }
    {
        promt: "Werden Tabellen zur Formatierung genutzt?\n(a) Ja, aber nur bei veralteten Websites\n\ (b)Ja, generell\n(c) Nein"
        answer: "a"
    }
    {
        promt: "An welche Programmiersprache ist JavaScripts entfernt angelehnt?\n(a) Java\n\ (b) C++\n(c) Python"
        answer: "b"
    }
    {
        promt: "Was ist Reverse Engineering?\n(a) Ein Fachbereich in der Website Entwicklung\n\ (b) Ein Fachbereich der Datenanalyse\n(c) Ein Fachbereich der Websitanalyse"
        answer: "b"
    }
    {
        promt: "Was ist HTML ausgeschrieben?\n(a) HyperText Makeup Language\n\ (b) HyperTool Makeup Language\n(c) HyperText Markup Language"
        answer: "c"
    }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
          score++;
          alert("Richtig!");
     } else {
          alert("Leider falsch!");
     }
}
alert("Du hast " + score + "/" + questions.length + "Fragen richtig!");

if(score==questions.lenght){
    alert("Congrats, du hast es geschafft! Unter https://github.com/bday-tech/3rdchallenge geht es morgen weiter!")
}


