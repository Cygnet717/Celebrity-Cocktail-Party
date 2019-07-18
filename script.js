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

const byNameURL= 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

function cocktailByName(){
    $('.submitCocktailName').on('click', event=>{
        event.preventDefault();
        const cocktailname= $('.cocktailname').val();
        console.log(cocktailname);
        fetchNameURL(cocktailname);
    })
}

function fetchNameURL(name){
    const nameURL = byNameURL+name;
    fetch(nameURL)
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
}

const byIngredientURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='

function cocktailByIngredient(){
    $('.submitCocktailIngredient').on('click', event=>{
        event.preventDefault();
        const cocktailIng= $('.cocktailIngredient').val();
        console.log(cocktailIng);
        fetchIngURL(cocktailIng);
    })
}

function fetchIngURL(name){
    const ingURL = byIngredientURL+name;
    fetch(ingURL)
    .then(response =>{
        if (response.ok){
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayShortCocResults(responseJson))
    .catch (err =>{
        $('.resluts').text(`Something went wrong: ${err.message}`)
    })
}

const nonalcURL= 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'

function generateNonAlcoholic(){
    $('.nonalcoholic').on('click', event =>{
        event.preventDefault();
        fetch(nonalcURL)
        .then(response =>{
            if (response.ok){
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayShortCocResults(responseJson))
        .catch (err =>{
            $('.resluts').text(`Something went wrong: ${err.message}`)
        })
        })
}

function displayShortCocResults(results){
    console.log(results);
    $('.cocResults').empty();
    $('#cocktailResluts').removeClass('hidden');
    for (let i=0; i<results.drinks.length; i++){
    $('.cocResults').append(`<li class="totheside"><div><button type='submit' class='findingredients' value='${results.drinks[i].idDrink}'>${results.drinks[i].strDrink}</button><br><button type="submit" class="deleteItem">Delete</button></div><img src='${results.drinks[i].strDrinkThumb}' class="cocimage"></li>`);
    }
}

function displayCocResults(results){
    console.log(results);
    $('.cocResults').empty();
    $('#cocktailResluts').removeClass('hidden');
    for (let i=0; i<results.drinks.length; i++){
    $('.cocResults').append(`<li class="totheside"><div><label>${results.drinks[i].strDrink}</label><br><button type="submit" class="deleteItem">Delete</button></div><img src='${results.drinks[i].strDrinkThumb}' class="cocimage"><div>Instructions: ${results.drinks[i].strInstructions}<br>Ingredients:<br><ul class="ingredientList"><li>${results.drinks[i].strMeasure1} ${results.drinks[i].strIngredient1}</li><li>${results.drinks[i].strMeasure2} ${results.drinks[i].strIngredient2}</li><li>${results.drinks[i].strMeasure3} ${results.drinks[i].strIngredient3}</li><li>${results.drinks[i].strMeasure4} ${results.drinks[i].strIngredient4}</li><li>${results.drinks[i].strMeasure5} ${results.drinks[i].strIngredient5}</li><li>${results.drinks[i].strMeasure6} ${results.drinks[i].strIngredient6}</li><li>${results.drinks[i].strMeasure7} ${results.drinks[i].strIngredient7}</li><li>${results.drinks[i].strMeasure8} ${results.drinks[i].strIngredient8}</li></ul></div></li>`)
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

const findbyidURL='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

function pullCocIngredients(){
    $('.cocResults').on('click', '.findingredients', event=>{
        event.preventDefault();
        console.log('pull ingredients clicked');
        const drinkid= $(event.target).val();
        console.log (drinkid);
        var url= findbyidURL + drinkid;
        fetch (url)
        .then(response =>{
            if (response.ok){
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => $(event.target).closest("li").append(`<div>Instructions: ${responseJson.drinks[0].strInstructions}<br>Ingredients:<br><ul class="ingredientList"><li>${responseJson.drinks[0].strMeasure1} ${responseJson.drinks[0].strIngredient1}</li><li>${responseJson.drinks[0].strMeasure2} ${responseJson.drinks[0].strIngredient2}</li><li>${responseJson.drinks[0].strMeasure3} ${responseJson.drinks[0].strIngredient3}</li><li>${responseJson.drinks[0].strMeasure4} ${responseJson.drinks[0].strIngredient4}</li><li>${responseJson.drinks[0].strMeasure5} ${responseJson.drinks[0].strIngredient5}</li><li>${responseJson.drinks[0].strMeasure6} ${responseJson.drinks[0].strIngredient6}</li><li>${responseJson.drinks[0].strMeasure7} ${responseJson.drinks[0].strIngredient7}</li><li>${responseJson.drinks[0].strMeasure8} ${responseJson.drinks[0].strIngredient8}</li></ul></div>`))
        .catch (err=>{
            $('.cocResults').text(`Something went wrong: ${err.message}`)
        })
    })
}

function deleteCocktail(){
    $('.cocResults').on('click', '.deleteItem', event =>{
        $(event.target).closest('li').hide();
    })
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
    deleteCocktail();
};

runPage ();