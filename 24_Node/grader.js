function average(scores){
    // Add all scores together
    var total = 0;
    scores.forEach(function(score){
        total += score;
    });
    // Manual way:
    // for(var i = 0; i < scores.length; i++){
    //     total += scores[i];
    // }

    // Calculate avg
    var avg = total / scores.length;

    // Round off avg to whole number
    return Math.round(avg);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log("Average Score for Biology:", average(scores)); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log("Average Score for History:", average(scores2)); //should return 68
