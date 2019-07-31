'use strict';

$('.cocktailsView').hide();
$('.appetizersView').hide();
$('.celebrityView').hide();
$('.namediv').hide();
$('.ingredientdiv').hide();

function watchNavClicks() {
    $('nav .cocktails').on('click', event =>{
        $('.home').hide();
        $('.cocktailsView').show();
        $('.appetizersView').hide();
        $('.celebrityView').hide();
    });

    $('nav .appetizers').on('click', event =>{
        $('.home').hide();
        $('.appetizersView').show();
        $('.cocktailsView').hide();
        $('.celebrityView').hide();
    });

    $('nav .celebrity').on('click', event =>{
        $('.home').hide();
        $('.appetizersView').hide();
        $('.cocktailsView').hide();
        $('.celebrityView').show();
    });

    $('nav .homebutton').on('click', event=>{
        $('.home').show();
        $('.appetizersView').hide();
        $('.cocktailsView').hide();
        $('.celebrityView').hide();
    });

    $('.byname').on('click', event =>{
        $('.namediv').show();
        $('.ingredientdiv').hide();
    });

    $('.byingredient').on('click', event =>{
        $('.namediv').hide();
        $('.ingredientdiv').show();
    });

    $('.nonalcoholic, .random').on('click', event =>{
        $('.namediv').hide();
        $('.ingredientdiv').hide();
    });
}

//appetizer functions
function displayAppResults(responseJson){
    $('.appResults').empty();
    if (responseJson.recipes[0].recipe_id == '47349' || responseJson.count == 0){
        alert('We don\'t recognise that ingredient. We can give you our most popular recipes')
    }
    $('#appetizerResults').removeClass('hidden');
    for (let i=0; i<responseJson.recipes.length; i++){
    $('.appResults').append(`<li class="appli">
    <label>${responseJson.recipes[i].title}</label>
    <br>
    <div class="box">
        <img class="appimage" src="${responseJson.recipes[i].image_url}">
        <a target="_blank" href="${responseJson.recipes[i].source_url}" class="overlay"><b>View Recipe</b></a>
    </div>
    <p>Publisher:<a target="_blank" href="${responseJson.recipes[i].publisher_url}">${responseJson.recipes[i].publisher}</a></p></li><br>`)
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
        alert(`Something went wrong: ${err.message}`)
    })
}

const food2forkURL = 'https://www.food2fork.com/api/search?'

function makeAppURL(ingredient){
    const queryList = ingredient.replace(/\s+/g, '%20');
    const appURL = food2forkURL + 'q=appetizer,' + queryList + '&key=613b3cd66c7ab01c4ea3b354190b9fb6';
    getApps(appURL);
}

function watchAppIngredientSearch(){
    $('.submitAppIngredient').on('click', event=>{
        event.preventDefault();
        const appIngredient= $('.appIngredient').val();
        makeAppURL(appIngredient);
    })
}

// Celebrity functions
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
  };
  return randomArray;
}
a = shuffle(a);
let userArray = a.slice(0, numNames);

    for (let i=0; i<userArray.length; i++){
        let location = userArray[i];
        $('.femaleCelResults').append(`<li>${femaleCelebrity[location].name}<br>
        <img class="celimage" src="${femaleCelebrity[location].img}"></li>`);
    }
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
  };
  return randomArray;
}
a = shuffle(a);

let userArray = a.slice(0, numNames);
    for (let i=0; i<userArray.length; i++){
        let location = userArray[i];
        $('.maleCelResults').append(`<li>${maleCelebrity[location].name}<br>
        <img class="celimage" src="${maleCelebrity[location].img}"></li>`);
    }
};

function watchCelebritySearch(){
    $('.submitCelebrity').on('click', event=>{
        event.preventDefault();
        const femaleNames= $('.femaleNames').val();
        const maleNames =$('.maleNames').val();
        if (femaleNames>10 || maleNames>10){
            alert('Too many names requested. We can only give you 10 at this time.')
        }
        generateFRandom(femaleNames);
        generateMRandom(maleNames);
    })
};


// Cocktail functions
const byNameURL= 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

function cocktailByName(){
    $('.submitCocktailName').on('click', event=>{
        event.preventDefault();
        $('.cocResults').empty();
        const cocktailname= $('.cocktailname').val();
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
        alert(`Something went wrong: ${err.message}`)
    })
}

const byIngredientURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='

function cocktailByIngredient(){
    $('.submitCocktailIngredient').on('click', event=>{
        event.preventDefault();
        $('.cocResults').empty();
        let cocktailIng= $('.cocktailIngredient').val();
        cocktailIng = cocktailIng.replace(/\s/g, '%20');
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
        alert(`Something went wrong: ${err.message}`)
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
            alert(`Something went wrong: ${err.message}`)
        })
        })
}

function displayShortCocResults(results){
    $('.cocResults').empty();
    $('#cocktailResults').removeClass('hidden');
    if (results == ''){
        alert ('We don\'t recognize that ingredient.')
    }
    for (let i=0; i<results.drinks.length; i++){
    $('.cocResults').append(`<li class="dynamicResults">
    <div class="section1">
    <div class="drinkbuttons">
    <button type="submit" class="findingredients constcss drinkname" value="${results.drinks[i].idDrink}">${results.drinks[i].strDrink}</button><br>
    <button type="submit" class="deleteItem">Not Interested</button>
    </div>
    <img src="${results.drinks[i].strDrinkThumb}" class="cocimage">
    </div>
    </li>`);
    }
}

function displayCocResults(results){

    if (results.drinks == null){
        alert('That name is not recognized, please try another.')
    }
    $('#cocktailResults').removeClass('hidden');
    for (let i=0; i<results.drinks.length; i++){
        let displayString =`<li class="staticResults">
        <div class="section1">
        <div class="drinkbuttons">
        <label class="drinkname">${results.drinks[i].strDrink}</label><br>
        <button type="submit" class="deleteItem">Not Interested</button>
        </div>
        <img src="${results.drinks[i].strDrinkThumb}" class="cocimage">
        </div>
        <div class="instructions">Instructions: ${results.drinks[i].strInstructions}<br>
        Ingredients:<br>
        <ul class="ingredientList">`;

        for (let j=1; j<=10; j++){
            let localMea ='strMeasure'+j;
            let localIng ='strIngredient'+j;

            if (results.drinks[i][localMea] != null){
                displayString =displayString + `<li>${results.drinks[i][localMea]} ${results.drinks[i][localIng]}</li>`
                        }
        }
        displayString = displayString + `</ul>
        </div>
        </li>`;
    $('.cocResults').append(displayString);
    }
}

const randCoURL= 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

function generateRandomCocktail(){
    $('.random').on('click', event =>{
        event.preventDefault();
        $('.cocResults').empty();
        $('#cocktailResults').removeClass('hidden');
        fetch(randCoURL)
        .then(response =>{
            if (response.ok){
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayCocResults(responseJson))
        .catch (err =>{
            alert(`Something went wrong: ${err.message}`)
        })
        })
}

function displayIngList (results, target){
    for (let i=0; i<results.drinks.length; i++){
        let displayString =`<div class="instructions">Instructions: ${results.drinks[i].strInstructions}<br>
        Ingredients:<br>
        <ul class="ingredientList">`;

        for (let j=1; j<=10; j++){
            let localMea ='strMeasure'+j;
            let localIng ='strIngredient'+j;

            if (results.drinks[i][localMea] != null){
                displayString =displayString + `<li>${results.drinks[i][localMea]} ${results.drinks[i][localIng]}</li>`
                        }
        }
        displayString = displayString + `</ul>
        </div>
        </li>`;
    
    $(target).append(displayString);
    $(target).animate({width: '100%'});
    $(target).children('.instructions').hide();
    $(target).children('.instructions').delay(600).fadeIn();
    }
}

const findbyidURL='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

function pullCocIngredients(){
    $('.cocResults').on('click', '.findingredients', event=>{
        event.preventDefault();
        const drinkid= $(event.target).val();
        $(event.target).removeClass('findingredients');
        let target = $(event.target).closest('li');
        let url= findbyidURL + drinkid;
        fetch (url)
        .then(response =>{
            if (response.ok){
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayIngList(responseJson, target))
        .catch (err=>{
            alert(`Something went wrong: ${err.message}`)
        })
    })
}

function deleteCocktail(){
    $('.cocResults').on('click', '.deleteItem', event =>{
        $(event.target).closest('li').slideUp();
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