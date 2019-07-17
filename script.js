'use strict';

$('.cocktailsView').hide();
$('.appetizersView').hide();
$('.celebrityView').hide();

function watchNavClicks() {
    $("nav .cocktails").on('click', event =>{
        console.log ('cocktails clicked');
        $('.home').hide();
        $('.cocktailsView').show();
        $('.appetizersView').hide();
        $('.celebrityView').hide();
    });

    $("nav .appetizers").on('click', event =>{
        console.log ('appetizers clicked');
        $('.home').hide();
        $('.appetizersView').show();
        $('.cocktailsView').hide();
        $('.celebrityView').hide();
    });

    $("nav .celebrity").on('click', event =>{
        console.log ('celebrity clicked');
        $('.home').hide();
        $('.appetizersView').hide();
        $('.cocktailsView').hide();
        $('.celebrityView').show();
    });

    $('nav .homebutton').on('click', event=>{
        console.log('home clicked');
        $('.home').show();
        $('.appetizersView').hide();
        $('.cocktailsView').hide();
        $('.celebrityView').hide();
    })
}

function displayAppResults(responseJson){
    console.log (responseJson);
    $('.appResults').empty();
    $('#appetizerResults').removeClass('hidden');
    for (let i=0; i<responseJson.recipes.length; i++){
    $('.appResults').append(`<li>${responseJson.recipes[i].title}<br><img src='${responseJson.recipes[i].image_url}' class="appimage"><br><a target="_blank" href='${responseJson.recipes[i].source_url}'>View Recipe</a><br><a target="_blank" href='${responseJson.recipes[i].publisher_url}'>${responseJson.recipes[i].publisher}</a></li>`)
    }
}

function getApps(URL){
    fetch(URL)
    .then(response =>{
        if (response.ok){
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayAppResults(responseJson))
    .catch (err =>{
        $('.resluts').text(`Something went wrong: ${err.message}`)
    })
}

const food2forkURL = 'https://www.food2fork.com/api/search?'

function appURL(ingredient){
    const queryList = ingredient.replace(/\s+/g, '');
    const appURL = food2forkURL + 'q=appetizer,' + queryList + '&key=613b3cd66c7ab01c4ea3b354190b9fb6'
    console.log (appURL);
    getApps(appURL);
}

function watchAppIngredientSearch(){
    $('.submitAppIngredient').on('click', event=>{
        event.preventDefault();
        const appIngredient= $('.appIngredient').val();
        console.log(appIngredient);
        appURL(appIngredient);
    })
}

function generateRandom(numNames){
    //const randomNumberArray = Array.from({length: numNames}, () => Math.floor(Math.random() * 10));
    //console.log(randomNumberArray);
    $('.celResults').empty();
    $('#celebrityResults').removeClass('hidden');
for (var a=[],i=0;i<maleCelebrity.length;++i) a[i]=i;

// http://stackoverflow.com/questions/962802#962890
function shuffle(randomArray) {
  var tmp, current, top = randomArray.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = randomArray[current];
    randomArray[current] = randomArray[top];
    randomArray[top] = tmp;
  }
  console.log(randomArray)
  return randomArray;
}
a = shuffle(a);

var userArray = a.slice(0, numNames);
console.log (userArray)
    for (let i=0; i<userArray.length; i++){
        let location = userArray[i];
        $('.celResults').append(`<li>${maleCelebrity[location].name}<br><img class="celimage" src='${maleCelebrity[location].img}'></li>`);}
};

function watchCelebritySearch(){
    $('.submitCelebrity').on('click', event=>{
        event.preventDefault();
        const numNames= $('.numberNames').val();
        console.log(numNames);
        generateRandom(numNames);
    })
};

function runPage(){
    watchNavClicks();
    watchAppIngredientSearch();
    watchCelebritySearch();
};

runPage ();