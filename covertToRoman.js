function convertToRoman(num) {

    const romans = [
        {1:"I", 2:"II", 3:"III", 4:"IV", 5:"V", 6:"VI", 7:"VII", 8:"VIII", 9:"IX"},
        {10:"X", 20:"XX", 30:"XXX", 40:"XL", 50:"L", 60:"LX", 70:"LXX", 80:"LXXX", 90:"XC"},
        {100:"C", 200:"CC", 300:"CCC", 400:"CD", 500:"D", 600:"DC", 700:"DCC", 800:"DCCC", 900:"CM"},
        {1000: "M", 2000: "MM", 3000: "MMM"}]

    const lookUp = function(level, n, arr) {
        return arr[level][n];  
    } 

    const resolver = function() {

        let result = [...arguments];

        result = result.filter(function(x) {
            return x !== undefined;
        });
        return result.join("");
    }

    let str = num.toString().split("");
    
    if (str.length === 4) {
        const ths = lookUp(3, (str[0] * 1000), romans);
        const hds = lookUp(2, (str[1] * 100), romans);
        const tns = lookUp(1, (str[2] * 10), romans);
        const ons = lookUp(0, (str[3]), romans);
        return resolver(ths, hds, tns, ons);
    }
    else if (str.length === 3) {
        const hds = lookUp(2, (str[0] * 100), romans);
        const tns = lookUp(1, (str[1] * 10), romans);
        const ons = lookUp(0, (str[2]), romans);
        return resolver(hds, tns, ons);
    }
    else if (str.length === 2) {
        const tns = lookUp(1, (str[0] * 10), romans);
        const ons = lookUp(0, (str[1]), romans);
        return resolver(tns, ons);
    }
    else if (str.length === 1) {
        const ons = lookUp(0, (str[0]), romans);
        return resolver(ons);
    }
}
convertToRoman(36);


//A note on "DRY": For the sake of practicality I ended up with this 
//solution which may may be far from perfect. You may critize it in many ways,
// but it was built fast and solves the problem at hand. 