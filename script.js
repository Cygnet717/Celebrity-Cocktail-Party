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
    for (let i=0; i<responseJson.recipes.length; i++){
    $('.results').append(`<li>${responseJson.recipes[i].title}<br><img src='${responseJson.recipes[i].image_url}'><br><a target="_blank"  class="appimage" href='${responseJson.recipes[i].source_url}'>View Recipe</a><a target="_blank"  class="appimage" href='${responseJson.recipes[i].publisher_url}'></a></li>`)
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

function runPage(){
    watchNavClicks();
    watchAppIngredientSearch();
}

runPage ();