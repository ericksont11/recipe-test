//url call for displaying recipe information onclick of MORE DETAILS
var url = localStorage.getItem('recipe')

$.ajax({
    url: url,
    method: 'GET'
}).then(function (data) {
    $('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
    $('#recipe-title').text(data.meals[0].strMeal);
    $('#instructions').text(data.meals[0].strInstructions);
    $('#ingredients-list li').remove();
 //for loop to list all ingredients and measurements, if null, will not make list item
    for (let index = 1; index <= 15; index++) {
        var x='strMeasure' + index
        var y='strIngredient' + index
        if (data.meals[0][x] !== null) {
            $('#ingredients-list ul').append(`<li>${data.meals[0][x]} ${data.meals[0][y]}`)
        }  
    }
    return;
})