// Code your solution in this file
function findMatching(drivers, name){
    return drivers.filter (function(driverName) { return driverName.toLowerCase() === name.toLowerCase()});

}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}
  
function fuzzyMatch(drivers, str){
    
   let len = str.length;

    return drivers.filter(function(name){
        return name.slice(0, len) === str;
    });
}

function matchName(drivers, name){
    return drivers.filter( function(driver) {
        return driver.name === name;
    });
}