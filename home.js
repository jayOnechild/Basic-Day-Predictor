function today(){

    //assigning the date object
    var d = new Date();

    //initialising the day  (as a number e.g Monday=1)
    var actualDate = d.getDay();

    var actualYear = "<h1>"+d.getFullYear()+"</h1>";
    
    //Initialising all days of the week
    var sun = '<h1>Its a Blessed Sunday</h1>'+ actualYear;
    var mon = '<h1>Its a Productive Monday</h1>'+ actualYear;
    var tue = '<h1>Its an Exciting Tuesday</h1>'+ actualYear;
    var wed = '<h1>Its a Great Wednesday</h1>'+ actualYear;
    var thu = '<h1>Its an Exciting Thursday</h1>'+ actualYear;
    var fri = '<h1>Its a Lit! Friday</h1>'+ actualYear;
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