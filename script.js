'use strict';

$('.cocktailsView').hide();
$('.appetizersView').hide();
$('.celebrityView').hide();
$('.namediv').hide();
$('.ingredientdiv').hide();

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
    });

    $('.byname').on('click', event =>{
        console.log('search by name clicked');
        $('.namediv').show();
        $('.ingredientdiv').hide();
    });

    $('.byingredient').on('click', event =>{
        console.log('search by ingredient clicked');
        $('.namediv').hide();
        $('.ingredientdiv').show();
    });

    $('.nonalcoholic, .random').on('click', event =>{
        console.log('random or nonalcoholic clicked');
        $('.namediv').hide();
        $('.ingredientdiv').hide();
    });
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

function generateFRandom(numNames){
    $('.femaleCelResults').empty();
    $('#femaleCelebrityResults').removeClass('hidden');
for (var a=[],i=0;i<femaleCelebrity.length;++i) a[i]=i;

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
        $('.femaleCelResults').append(`<li>${femaleCelebrity[location].name}<br><img class="celimage" src='${femaleCelebrity[location].img}'></li>`);}
};

function generateMRandom(numNames){
    $('.maleCelResults').empty();
    $('#maleCelebrityResults').removeClass('hidden');
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
        $('.maleCelResults').append(`<li>${maleCelebrity[location].name}<br><img class="celimage" src='${maleCelebrity[location].img}'></li>`);}
};

function watchCelebritySearch(){
    $('.submitCelebrity').on('click', event=>{
        event.preventDefault();
        const femaleNames= $('.femaleNames').val();
        const maleNames =$('.maleNames').val();
        console.log("the number of female names: " +femaleNames);
        console.log("the number of male names: " +maleNames);
        generateFRandom(femaleNames);
        generateMRandom(maleNames);
    })
};

function cocktailByName(){

}

function cocktailByIngredient(){

}

const nonalcURL= 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'

function generateNonAlcoholic(){
    $('.nonalcoholic').on('click', event =>{
        event.preventDefault();
        $('.cocResults').empty();
        $('#cocktailResluts').removeClass('hidden');
        fetch(nonalcURL)
        .then(response =>{
            if (response.ok){
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayCocResults(responseJson))
        .catch (err =>{
            $('.resluts').text(`Something went wrong: ${err.message}`)
        })
        })
}

function displayCocResults(results){
    console.log(results);
    for (let i=0; i<results.drinks.length; i++){
        $('.cocResults').append(`<li><button type='submit' class='findingredients' value='${results.drinks[i].idDrink}'>${results.drinks[i].strDrink}</button><br><img src='${results.drinks[i].strDrinkThumb}' class="cocimage"></li>`)
        }
}

const randCoURL= 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

function generateRandomCocktail(){
    $('.random').on('click', event =>{
        event.preventDefault();
        $('.cocResults').empty();
        $('#cocktailResluts').removeClass('hidden');
        fetch(randCoURL)
        .then(response =>{
            if (response.ok){
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayCocResults(responseJson))
        .catch (err =>{
            $('.resluts').text(`Something went wrong: ${err.message}`)
        })
        })
}

const findbyidURL='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid='

function pullCocIngredients(){
    
}

function runPage(){
    watchNavClicks();
    watchAppIngredientSearch();
    watchCelebritySearch();
    cocktailByName();
    cocktailByIngredient();
    generateNonAlcoholic();
    generateRandomCocktail();
    pullCocIngredients();
};

runPage ();