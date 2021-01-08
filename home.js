function today(){

    //assigning the date object
    var d = new Date();

    //initialising the day  (as a number e.g Monday=1)
    var actualDate = d.getDay();
    
    //Initialising all days of the week
    var sun = '<h1>Its a Blessed Sunday</h1>';
    var mon = 'Its a Productive Monday';
    var tue = 'Its an Exciting Tuesday';
    var wed = 'Its a Great Wednesday';
    var thu = 'Its an Exciting Thursday';
    var fri = 'Its a Lit! Friday';
    var sat = '<h1>Its an Amazing Saturday</h1>';
 
    //just for fun addition
    let def = "It's an awesome day.";

    //Determining the actual day
    switch (actualDate){
        case 0: 
        return document.getElementById('day').innerHTML = sun;
        break;

        case 1: 
        return document.getElementById('day').innerHTML = mon;
        break;

        case 2: 
        return document.getElementById('day').innerHTML = tue;
        break;

        case 3: 
        return document.getElementById('day').innerHTML = wed;
        break;

        case 4: 
        return document.getElementById('day').innerHTML = thu;
        break;

        case 5: 
        return document.getElementById('day').innerHTML = fri;
        break;


        case 6: 
        return document.getElementById('day').innerHTML = sat;
        break;

        default:
        return def;
    }
}