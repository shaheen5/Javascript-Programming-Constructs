/* UNIT CONVERSIONS */

//A] Feet to Inches Conversion

let oneFoot = 12; // one foot is equals to 12 inch
let inch = 42;
let inchToFootConversion = inch/oneFoot;
console.log("42 inches is equals to: "+inchToFootConversion+" ft");

//B] Rectangular Plot of 60 feet x 40 feet in meters
let lengthOfPlot = 60;
let breadthOfPlot = 40;
let oneMeter = 3.28; //one meter is equals to 3.2 feet
let areaOfPlotInMeters = (lengthOfPlot * breadthOfPlot) / oneMeter;
console.log("Area of rectangular plot is: "+areaOfPlotInMeters.toFixed(2)+" metre squares");

//C] area of 25 rectangular  plots in acres
let totalareaOfPlots = 25 * (areaOfPlotInMeters);
let areaInAcres = totalareaOfPlots / 4046.85;
console.log("Area of 25 Rectangular Plots in Acres : "+areaInAcres.toFixed(2) +" acres");

