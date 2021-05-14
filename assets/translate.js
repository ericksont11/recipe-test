//Translations for Index.html
$(".translateButton").click(function () {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#header5").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#header5").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });
});

$(".translateButton").click(function () {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#header1").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#header1").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });
});

$(".translateButton").click(function () {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#span1").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#span1").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });
});

$(".translateButton").click(function () {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#span2").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#span2").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });
});

$(".translateButton").click(function () {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#span3").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#span3").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });
});


$(".translateButton").click(function () {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#click1").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#click1").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });
});

$(".translateButton").click(function () {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#paragraph1").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#paragraph1").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });
});


$(".translateButton").click(function () {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#contacts1").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#contacts1").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });
});

$(".translateButton").click(function () {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#contacts2").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#contacts2").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });
});


//translation for recipe.html

//get the instructions of the recepie and translates them 
$(".translateButton").click(function () {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#instructions").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#instructions").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });
});

//Get the ingredients and translates them

$(".translateButton").click(function () {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#ingredients-list").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#ingredients-list").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });
});


//translation for more deails in cards
$(".translateButton").click(function () {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#moreRatDetails").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#moreRatDetails").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });
});

$(".translateButton").click(function () {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#moreEnchDetails").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#moreEnchDetails").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });
});

$(".translateButton").click(function () {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#moreLasDetails").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#moreLasDetails").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });
});

$(".translateButton").click(function () {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#moreYakiDetails").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#moreYakiDetails").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });
});

$(".translateButton").click(function () {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#moreMeeDetails").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#moreMeeDetails").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });
});

$(".translateButton").click(function () {

    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#moreLambDetails").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#moreLambDetails").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });
});




// NAOMI- I changed the #targetLanguage to "This" in order to select 
//        the target language by clicking on the button this displays to


// This is previous code...  
// $("#translateButton").click(function () {

// 	var url = "https://translation.googleapis.com/language/translate/v2";
// 	//Strings requiring translation
// 	url += "?q=" + escape($("#click2").text());
// 	url += "&q=" + escape($(".translationtext").text());
// 	//Target language
// 	url += "&target=" + $("#targetLanguage").val();
// 	//Replace with your API key
// 	url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
// 	$.get(url, function (data, status) {
// 		//Results are returned in an array following the order they were passed. 
// 		$("#click2").text(data.data.translations[0].translatedText);
// 		$(".translationtext").text(data.data.translations[1].translatedText);
// 	});       
// });