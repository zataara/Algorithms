function flyBy(lamps, drone){
    let os = drone.length;
    let xs = lamps.length - drone.length
    let ls = lamps.length
    let out = [];
    
    //if there are more drone spaces than lamps, return all lamps on.
    if(os > ls) {
        while(ls > 0) {
            out.push('o');
            ls--;
        }
        return out.join('');
    }
    
    //add number of lamps on for number of drone spaces
    while(os > 0) {
        out.push('o');
        os--;
    }
    
    //add remaining number of lamps as off
    while(xs > 0) {
        out.push('x');
        xs--;
    }
    return out.join('')
}