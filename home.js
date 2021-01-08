function today(){

    //assigning the date object
    var d = new Date();

    //initialising the day  (as a number e.g Monday=1)
    var actualDate = d.getDay();

    var actualYear = "<h1>"+d.getFullYear()+"</h1>";
    
    //Initialising all days of the week
    var sun = '<h1>Its a Blessed Sunday</h1>'+ actualYear;
    var mon = 'Its a Productive Monday'+ actualYear;
    var tue = 'Its an Exciting Tuesday'+ actualYear;
    var wed = 'Its a Great Wednesday'+ actualYear;
    var thu = 'Its an Exciting Thursday'+ actualYear;
    var fri = 'Its a Lit! Friday'+ actualYear;
    var sat = '<h1>Its an Amazing Saturday of </h1>'+ actualYear;
 
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