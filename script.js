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
        populateAllergyList(allergylist);
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

    $('.')
}

//appetizer functions
const allergylist = ['Dairy', 'Egg', 'Gluten', 'Grain', 'Peanut', 'Seafood', 'Sesame', 'Shellfish', 'Soy', 
    'Sulfite', 'Tree Nut', 'Wheat']

function populateAllergyList(allergy){
    for(let i=0; i< allergy.length; i++){
        $('.selectAllergies').append(`<option value='${allergy[i]}' name='${allergy[i]}'>${allergy[i]}</option>`)
    }
}

function displayAppResults(res){
    $('.appResults').empty();
    $('.appalert').addClass('hidden');
    if (res.totalResults === 0){
        $('.appalert').removeClass('hidden');
    }
    $('#appetizerResults').removeClass('hidden');
    for (let i=0; i<res.results.length; i++){
    $('.appResults').append(`<li class="appli" key='${res.results.id}'>
    <label>${res.results[i].title}</label>
    <br>
    <div class="box">
        <img class="appimage" src="${res.results[i].image}">
        <button class='viewRecepie'>View Recipe</button>
    </div>
    <p class='creditsText'>Publisher:${res.results[i].creditsText}</p></li><br>`)
    }
    scrollAppToResults();
}

function displayAppRecepie(){
    
}

function scrollAppToResults(){
    var $container = $('html,body');
    var $scrollTo = $('.appetizerform');

	$container.animate({scrollTop: $scrollTo.offset().top - $container.offset().top + $container.scrollTop(), scrollLeft: 0},300);
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


const API_key= config.Spoontacular_api_key || 'api_key'
const SpoontacularURL = 'https://api.spoonacular.com/recipes/complexSearch?'
const staticParameters = 'type=appetizer&instructionsRequired=true&number=50&limitLicense=true&addRecipeInformation=true&'

function makeAppURL(allergen){
    let intolQuery = '';
    if(allergen !== 'default'){
        intolQuery = intolQuery.concat('intolerances=' + allergen);
    };
    const appURL = SpoontacularURL + 'apiKey='+ API_key + '&' + staticParameters + intolQuery;
    getApps(appURL);
}

function watchSelectAllergiesSearch(){
    $('.submitselectAllergies').on('click', event=>{
        event.preventDefault();
        const selectAllergies= $('.selectAllergies').val();
        makeAppURL(selectAllergies);
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
    scrollCelToResults();
};

function scrollCelToResults(){
    var $container = $('html,body');
    var $scrollTo = $('.celebrityform');

	$container.animate({scrollTop: $scrollTo.offset().top - $container.offset().top + $container.scrollTop(), scrollLeft: 0},300);
}

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
        $('.celalert').addClass('hidden');
        const femaleNames= $('.femaleNames').val();
        const maleNames =$('.maleNames').val();
        if (femaleNames>30 || maleNames>30){
            $('.celalert').removeClass('hidden');
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
        $('.cocalert').addClass('hidden');
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
        $('.cocalert').addClass('hidden');
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
        alert(`Sohomeshing went wrong: ${err.message}`);
        $('.cocalert').removeClass('hidden');
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
    $('.cocalert').addClass('hidden');
    $('#cocktailResults').removeClass('hidden');
    if (results == ''){
        $('.cocalert').removeClass('hidden');
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
    scrollToResults();
}

function displayCocResults(results){

    if (results.drinks == null){
        $('.cocalert').removeClass('hidden');
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
        <div class="instructions"><u>Instructions</u>: ${results.drinks[i].strInstructions}<br>
        <u>Ingredients</u>:<br>
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
    scrollToResults();
}

function scrollToResults(){
    var $container = $('html,body');
    var $scrollTo = $('.cocnav');

	$container.animate({scrollTop: $scrollTo.offset().top - $container.offset().top + $container.scrollTop(), scrollLeft: 0},300);
}

const randCoURL= 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

function generateRandomCocktail(){
    $('.random').on('click', event =>{
        event.preventDefault();
        $('.cocResults').empty();
        $('.cocalert').addClass('hidden');
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
        let displayString =`<div class="instructions"><u>Instructions</u>: ${results.drinks[i].strInstructions}<br>
        <u>Ingredients</u>:<br>
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
    $(target).children('.instructions').hide();
    $(target).children('.hide').hide();
    checkWindowSize(target);
    }
}

function checkWindowSize(target){
    if (window.matchMedia('(max-width: 465px)').matches){
        $(target).children('.instructions').slideDown();
    } else {
        $(target).animate({width: '90%'});
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
    watchSelectAllergiesSearch();
    watchCelebritySearch();
    cocktailByName();
    cocktailByIngredient();
    generateNonAlcoholic();
    generateRandomCocktail();
    pullCocIngredients();
    deleteCocktail();
};
runPage ();