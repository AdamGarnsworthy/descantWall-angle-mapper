
// Global Variables
var NumCrystals = 60;
var CrystalDistance = 0;
var CloverLocation = ['Downstream Lampshade', 'Corona', 'Corona', 'Upstream Lampshade'];
var CrystalTheta = [];
var CrystalPhi = [];
var RadToDeg = DegToRad = (Math.PI / 180.000);
var AngularBinsAngle = [];
var AngularBinsWeight = [];
var ExcludedCrystalsList = [];
var selectedAngle = 0;


// 110mm
var angular_bins = [
 0.000, 18.787, 25.602, 26.690, 31.946, 33.654, 44.364, 46.794, 48.576, 49.798,
 53.834, 60.151, 62.705, 63.086, 65.016, 66.461, 67.456, 69.864, 70.860, 73.084,
 76.381, 78.669, 83.043, 86.228, 86.238, 88.474, 91.526, 93.762, 93.772, 96.957,
 101.331, 103.619, 106.916, 109.140, 110.136, 112.544, 113.539, 114.984, 116.914,
 117.295, 119.849	, 126.166, 130.202, 131.424, 133.206, 135.636, 146.346, 148.054,
  153.310, 154.398, 161.213, 180.000
];

/*
// 145mm
var angular_bins = [
 0.000, 15.442, 21.905, 29.143, 33.143, 38.382, 44.57, 47.445, 48.741, 51.473,
  55.170, 59.978, 60.102, 62.340, 62.492, 63.423, 68.957, 71.431, 73.358, 73.629,
   75.774, 80.942, 81.546, 83.894, 86.868, 88.966, 91.034, 93.132, 96.106, 98.454,
    99.058, 104.226, 106.371, 106.642, 108.569, 111.043, 116.577, 117.508, 117.660,
    119.898, 120.022, 124.830, 128.527, 131.259, 132.555, 135.430, 141.618, 146.857,
     150.857, 158.095, 164.558, 180.000
];
*/

// index corresponds to position within towers array
var tower_names = ["West6","West5","West4","West3","West2","West1",
                   "East1","East2","East3","East4","East5","East6"];
var towers = [
54	, 58	,59	,55	,51	,
44	,48	,49	,45	,41	,
40	,36	,31	,33	,37	,
30	,26	,17	,23	,27	,
22	,12	,7	,9	,19	,
16	,6	,1	,3	,13	,
15	,5	,2	,4	,14	,
21	,11	,8	,10	,20	,
29	,25	,18	,24	,28	,
39	,35	,32	,34	,38	,
43	,47	,50	,46	,42	,
53	,57	,60	,56	,52
];


document.onload = initialSetup();

function initialSetup() {

    // Populate the exlucded crystals list
    for(i=1; i<=NumCrystals; i++){
	ExcludedCrystalsList[i]=0;
    }

    // Draw the DESCANT Wall Map
    // 15 columns
    // 5 rows
    // 60 detectors arranged in 12 towers
    var cell = [];
    document.getElementById("MapTable").innerHTML = '';
    // Titles
    var row = document.getElementById("MapTable").insertRow(0);
    for(var i=0; i<15; i++){
        cell[i] = row.insertCell(i);
    }
    cell[0].innerHTML = 'West6';
    cell[1].innerHTML = 'W5';
    // leave 2 blank for a gap
    cell[3].innerHTML = 'W4';
    cell[4].innerHTML = 'W3';
    cell[5].innerHTML = 'W2';
    cell[6].innerHTML = 'W1';
    // leave 7 blank for a gap
    cell[8].innerHTML = 'E1';
    cell[9].innerHTML = 'E2';
    cell[10].innerHTML = 'E3';
    cell[11].innerHTML = 'E4';
    // leave 13 blank for a gap
    cell[13].innerHTML = 'E5';
    cell[14].innerHTML = 'East6';

    // 5th Story
    var row = document.getElementById("MapTable").insertRow(-1);
    for(var i=0; i<15; i++){
        cell[i] = row.insertCell(i);
    }
    cell[0].innerHTML = '51';    cell[0].id = 'CellCrystal51';
    cell[1].innerHTML = '41';    cell[1].id = 'CellCrystal41';
    // leave 2 blank for a gap
    cell[3].innerHTML = '37';    cell[3].id = 'CellCrystal37';
    cell[4].innerHTML = '27';    cell[4].id = 'CellCrystal27';
    cell[5].innerHTML = '19';    cell[5].id = 'CellCrystal19';
    cell[6].innerHTML = '13';    cell[6].id = 'CellCrystal13';
    // leave 7 blank for a gap
    cell[8].innerHTML = '14';    cell[8].id = 'CellCrystal14';
    cell[9].innerHTML = '20';    cell[9].id = 'CellCrystal20';
    cell[10].innerHTML = '28';    cell[10].id = 'CellCrystal28';
    cell[11].innerHTML = '38';    cell[11].id = 'CellCrystal38';
    // leave 13 blank for a gap
    cell[13].innerHTML = '42';    cell[13].id = 'CellCrystal42';
    cell[14].innerHTML = '52';    cell[14].id = 'CellCrystal52';

    // 4th Story
    var row = document.getElementById("MapTable").insertRow(-1);
    for(var i=0; i<15; i++){
        cell[i] = row.insertCell(i);
    }
    cell[0].innerHTML = '55';    cell[0].id = 'CellCrystal55';
    cell[1].innerHTML = '45';    cell[1].id = 'CellCrystal45';
    // leave 2 blank for a gap
    cell[3].innerHTML = '33';    cell[3].id = 'CellCrystal33';
    cell[4].innerHTML = '23';    cell[4].id = 'CellCrystal23';
    cell[5].innerHTML = '9';    cell[5].id = 'CellCrystal9';
    cell[6].innerHTML = '3';    cell[6].id = 'CellCrystal3';
    // leave 7 blank for a gap
    cell[8].innerHTML = '4';    cell[8].id = 'CellCrystal4';
    cell[9].innerHTML = '10';    cell[9].id = 'CellCrystal10';
    cell[10].innerHTML = '24';    cell[10].id = 'CellCrystal24';
    cell[11].innerHTML = '34';    cell[11].id = 'CellCrystal34';
    // leave 13 blank for a gap
    cell[13].innerHTML = '46';    cell[13].id = 'CellCrystal46';
    cell[14].innerHTML = '56';    cell[14].id = 'CellCrystal56';

    // 3rd Story
    var row = document.getElementById("MapTable").insertRow(-1);
    for(var i=0; i<15; i++){
        cell[i] = row.insertCell(i);
    }
    cell[0].innerHTML = '59';    cell[0].id = 'CellCrystal59';
    cell[1].innerHTML = '49';    cell[1].id = 'CellCrystal49';
    // leave 2 blank for a gap
    cell[3].innerHTML = '31';    cell[3].id = 'CellCrystal31';
    cell[4].innerHTML = '17';    cell[4].id = 'CellCrystal17';
    cell[5].innerHTML = '7';    cell[5].id = 'CellCrystal7';
    cell[6].innerHTML = '1';    cell[6].id = 'CellCrystal1';
    // leave 7 blank for a gap
    cell[8].innerHTML = '2';    cell[8].id = 'CellCrystal2';
    cell[9].innerHTML = '8';    cell[9].id = 'CellCrystal8';
    cell[10].innerHTML = '18';    cell[10].id = 'CellCrystal18';
    cell[11].innerHTML = '32';    cell[11].id = 'CellCrystal32';
    // leave 13 blank for a gap
    cell[13].innerHTML = '50';    cell[13].id = 'CellCrystal50';
    cell[14].innerHTML = '60';    cell[14].id = 'CellCrystal60';

    // 2nd Story
    var row = document.getElementById("MapTable").insertRow(-1);
    for(var i=0; i<15; i++){
        cell[i] = row.insertCell(i);
    }
    cell[0].innerHTML = '58';    cell[0].id = 'CellCrystal58';
    cell[1].innerHTML = '48';    cell[1].id = 'CellCrystal48';
    // leave 2 blank for a gap
    cell[3].innerHTML = '36';    cell[3].id = 'CellCrystal36';
    cell[4].innerHTML = '26';    cell[4].id = 'CellCrystal26';
    cell[5].innerHTML = '12';    cell[5].id = 'CellCrystal12';
    cell[6].innerHTML = '6';    cell[6].id = 'CellCrystal6';
    // leave 7 blank for a gap
    cell[8].innerHTML = '5';    cell[8].id = 'CellCrystal5';
    cell[9].innerHTML = '11';    cell[9].id = 'CellCrystal11';
    cell[10].innerHTML = '25';    cell[10].id = 'CellCrystal25';
    cell[11].innerHTML = '35';    cell[11].id = 'CellCrystal35';
    // leave 13 blank for a gap
    cell[13].innerHTML = '47';    cell[13].id = 'CellCrystal47';
    cell[14].innerHTML = '57';    cell[14].id = 'CellCrystal57';

    // 1st Story
    var row = document.getElementById("MapTable").insertRow(-1);
    for(var i=0; i<15; i++){
        cell[i] = row.insertCell(i);
    }
    cell[0].innerHTML = '54';    cell[0].id = 'CellCrystal54';
    cell[1].innerHTML = '44';    cell[1].id = 'CellCrystal44';
    // leave 2 blank for a gap
    cell[3].innerHTML = '40';    cell[3].id = 'CellCrystal40';
    cell[4].innerHTML = '30';    cell[4].id = 'CellCrystal30';
    cell[5].innerHTML = '22';    cell[5].id = 'CellCrystal22';
    cell[6].innerHTML = '16';    cell[6].id = 'CellCrystal16';
    // leave 7 blank for a gap
    cell[8].innerHTML = '15';    cell[8].id = 'CellCrystal15';
    cell[9].innerHTML = '21';    cell[9].id = 'CellCrystal21';
    cell[10].innerHTML = '29';    cell[10].id = 'CellCrystal29';
    cell[11].innerHTML = '39';    cell[11].id = 'CellCrystal39';
    // leave 13 blank for a gap
    cell[13].innerHTML = '43';    cell[13].id = 'CellCrystal43';
    cell[14].innerHTML = '53';    cell[14].id = 'CellCrystal53';


    // Add the onclick functions to the Crystal Map
    for(i=0; i<document.getElementById("MapTable").rows.length; i++){
	for(j=0; j<document.getElementById("MapTable").rows[i].cells.length; j++){
	    if(document.getElementById("MapTable").rows[i].cells[j].innerHTML.length>0){
		document.getElementById("MapTable").rows[i].cells[j].className = "crystal";
		document.getElementById("MapTable").rows[i].cells[j].onclick = function(e){
		    ToggleExcludeCrystal(this.innerHTML);
		};
	    }
	}
    }

    // Set up the crystal selection drop-down select
    sel = document.getElementById("crystalSelector");
    for(i=0; i<NumCrystals; i++){
	var opt = document.createElement("option");
	opt.value = i;
  var thisStory = (towers.indexOf(i+1)%5);
  switch(thisStory){
    case(0): var thisStoryString = "1st Story"; break;
    case(1): var thisStoryString = "2nd Story"; break;
    case(2): var thisStoryString = "3rd Story"; break;
    case(3): var thisStoryString = "4th Story"; break;
    case(4): var thisStoryString = "5th Story"; break;
    default: thisStoryString = "Unknown";
  }
	opt.text = 'Detector '+(i+1) + ", Tower " + tower_names[Math.floor(towers.indexOf(i+1)/5)] + ", " + thisStoryString;
	sel.appendChild(opt);
    }
    // Set up the Angular bins drop-down select
    CalculateAngularBins();
    document.getElementById("angleSelector").innerHTML = "";
    sel = document.getElementById("angleSelector");
    for(i=0; i<AngularBinsAngle.length; i++){
	var opt = document.createElement("option");
	opt.value = i;
	opt.text = 'Index '+(i+1)+', Angle '+AngularBinsAngle[i]+', Weight '+AngularBinsWeight[i];
	sel.appendChild(opt);
    }
    sel.value = selectedAngle;
    sel.onchange = function(){ selectedAngle=sel.value; PlotTables();};

    //Draw initial Tables
    PlotTables();


}// End of initialSetup()

function PlotTables() {

    //Decide which table is selected
    var whichTable = document.getElementById("tableSelector").value;

    // Set the angles for this distance
    SetupAngles();

    switch(whichTable)
    {
	case "crystals" : PlotCrystalsTable(); break;
	case "combinations" : PlotCombinationsTable(); break;
	case "angles" : PlotAnglesTable(); generateCtable(); break;
	case "angle-combinations" : PlotAngleCombinationsTable(); break;
    }

}

function SetupAngles() {

	CrystalTheta = [
    7.0	,
7.0	,
18.4	,
18.4	,
18.4	,
18.4	,
21.0	,
21.0	,
26.8	,
26.8	,
26.8	,
26.8	,
32.2	,
32.2	,
32.2	,
32.2	,
35.0	,
35.0	,
37.3	,
37.3	,
37.3	,
37.3	,
38.4	,
38.4	,
38.4	,
38.4	,
45.7	,
45.7	,
45.7	,
45.7	,
49.0	,
49.0	,
51.2	,
51.2	,
51.2	,
51.2	,
56.0	,
56.0	,
56.0	,
56.0	,
124.0	,
124.0	,
124.0	,
124.0	,
128.8	,
128.8	,
128.8	,
128.8	,
131.0	,
131.0	,
134.3	,
134.3	,
134.3	,
134.3	,
141.6	,
141.6	,
141.6	,
141.6	,
145.0	,
145.0
	];
	CrystalPhi = [
    0.0	,
180.0	,
68.3	,
111.7	,
248.3	,
291.7	,
0.0	,
180.0	,
40.5	,
139.5	,
220.5	,
319.5	,
78.8	,
101.2	,
258.8	,
281.2	,
0.0	,
180.0	,
59.7	,
120.3	,
239.7	,
300.3	,
28.1	,
151.9	,
208.1	,
331.9	,
46.9	,
133.1	,
226.9	,
313.1	,
0.0	,
180.0	,
22.1	,
157.9	,
202.1	,
337.9	,
39.1	,
140.9	,
219.1	,
320.9	,
39.1	,
140.9	,
219.1	,
320.9	,
22.1	,
157.9	,
202.1	,
337.9	,
0.0	,
180.0	,
46.9	,
133.1	,
226.9	,
313.1	,
28.1	,
151.9	,
208.1	,
331.9	,
0.0	,
180.0
	];

    // Set up the Angular bins drop-down select
    CalculateAngularBins();
    document.getElementById("angleSelector").innerHTML = "";
    sel = document.getElementById("angleSelector");
    for(i=0; i<AngularBinsAngle.length; i++){
	var opt = document.createElement("option");
	opt.value = i;
	opt.text = 'Index '+(i+1)+', Angle '+AngularBinsAngle[i]+', Weight '+AngularBinsWeight[i];
	sel.appendChild(opt);
    }
    sel.value = selectedAngle;
    sel.onchange = function(){ selectedAngle=sel.value; PlotTables(); };

}//End of SetupAngles()


function PlotCrystalsTable() {

    document.getElementById("TableTitle").innerHTML = 'Detector Angles:';

    // Crystal Angles Table
    document.getElementById("MultiTable").innerHTML = '';
    var row = document.getElementById("MultiTable").insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = 'Position';
    cell2.innerHTML = 'Name';
    cell3.innerHTML = 'Location';
    cell4.innerHTML = 'Theta';
    cell5.innerHTML = 'Phi';

    for(var num=0; num<NumCrystals; num++){
	var row = document.getElementById("MultiTable").insertRow(document.getElementById("MultiTable").rows.length);
	row.id = (num+1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
	cell1.innerHTML = (num+1);
	cell2.innerHTML = "DSW" + (num+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + "XN00X";

  var thisTowerString = "Tower " + tower_names[Math.floor(towers.indexOf(num+1)/5)];
  var thisStory = (towers.indexOf(num+1)%5);
  switch(thisStory){
    case(0): var thisStoryString = "1st Story"; break;
    case(1): var thisStoryString = "2nd Story"; break;
    case(2): var thisStoryString = "3rd Story"; break;
    case(3): var thisStoryString = "4th Story"; break;
    case(4): var thisStoryString = "5th Story"; break;
    default: thisStoryString = "Unknown";
  }
  cell3.innerHTML = thisTowerString + ", " + thisStoryString;
	cell4.innerHTML = CrystalTheta[num].toFixed(1);
	cell5.innerHTML = CrystalPhi[num].toFixed(1);

	row.addEventListener('mouseover', function(e){
	    if(ExcludedCrystalsList[parseInt(this.id)]==1){ color="red"; }else{ color="yellow"; }
	    this.style.backgroundColor = color;
	    document.getElementById('CellCrystal'+(this.id)).style.backgroundColor = color;
	});
	row.addEventListener('mouseout', function(e){
	    if(ExcludedCrystalsList[parseInt(this.id)]==1){ color="red"; }else{ color="white"; }
	    this.style.backgroundColor = "white";
	    document.getElementById('CellCrystal'+(this.id)).style.backgroundColor = color;
	});
    }

}

function PlotCombinationsTable() {

    document.getElementById("TableTitle").innerHTML = 'Detector Combinations:';

    // Crystal Combinations Table
    document.getElementById("MultiTable").innerHTML = '';
    var row = document.getElementById("MultiTable").insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    cell1.innerHTML = 'Position';
    cell2.innerHTML = 'Location';
    cell3.innerHTML = 'Theta';
    cell4.innerHTML = 'Phi';
    cell5.innerHTML = 'Position';
    cell6.innerHTML = 'Location';
    cell7.innerHTML = 'Theta';
    cell8.innerHTML = 'Phi';
    cell9.innerHTML = 'Angular Difference';

    selectedCrystal = parseInt(document.getElementById("crystalSelector").value);
    for(var num=0; num<NumCrystals; num++){
	var row = document.getElementById("MultiTable").insertRow(document.getElementById("MultiTable").rows.length);
	row.id = (num+1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	cell1.innerHTML = (selectedCrystal+1);
    var thisTowerString = "Tower " + tower_names[Math.floor(towers.indexOf(selectedCrystal+1)/5)];
    var thisStory = (towers.indexOf(selectedCrystal+1)%5);
    switch(thisStory){
      case(0): var thisStoryString = "1st Story"; break;
      case(1): var thisStoryString = "2nd Story"; break;
      case(2): var thisStoryString = "3rd Story"; break;
      case(3): var thisStoryString = "4th Story"; break;
      case(4): var thisStoryString = "5th Story"; break;
      default: thisStoryString = "Unknown";
    }
	cell2.innerHTML = thisTowerString+", "+thisStoryString;
	cell3.innerHTML = CrystalTheta[selectedCrystal].toFixed(1);
	cell4.innerHTML = CrystalPhi[selectedCrystal].toFixed(1);
	cell5.innerHTML = (num+1);
    var thisTowerString = "Tower " + tower_names[Math.floor(towers.indexOf(num+1)/5)];
    var thisStory = (towers.indexOf(num+1)%5);
    switch(thisStory){
      case(0): var thisStoryString = "1st Story"; break;
      case(1): var thisStoryString = "2nd Story"; break;
      case(2): var thisStoryString = "3rd Story"; break;
      case(3): var thisStoryString = "4th Story"; break;
      case(4): var thisStoryString = "5th Story"; break;
      default: thisStoryString = "Unknown";
    }
	row.addEventListener('mouseover', function(e){
	    if(ExcludedCrystalsList[parseInt(this.id)]==1){ color="red"; }else{ color="yellow"; }
	    this.style.backgroundColor = color;
	    this.cells[0].style.backgroundColor = "green";
	    document.getElementById('CellCrystal'+(selectedCrystal+1)).style.backgroundColor = "green";
	    document.getElementById('CellCrystal'+(this.id)).style.backgroundColor = color;
	});
	row.addEventListener('mouseout', function(e){
	    if(ExcludedCrystalsList[parseInt(this.id)]==1){ color="red"; }else{ color="white"; }
	    this.style.backgroundColor = "white";
	    this.cells[0].style.backgroundColor = "white";
	    document.getElementById('CellCrystal'+(selectedCrystal+1)).style.backgroundColor = "white";
	    document.getElementById('CellCrystal'+(this.id)).style.backgroundColor = color;
	});
	cell6.innerHTML = thisTowerString+", "+thisStoryString;
	cell7.innerHTML = CrystalTheta[num].toFixed(1);
	cell8.innerHTML = CrystalPhi[num].toFixed(1);
	cell9.innerHTML = CalculateAngularDifference(selectedCrystal,num);

    }
}
function PlotAnglesTable() {

    document.getElementById("TableTitle").innerHTML = 'Angular bins:';

    CalculateAngularBins();

    // Plot the Angular Bins table
    document.getElementById("MultiTable").innerHTML = '';
    var row = document.getElementById("MultiTable").insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = 'Index';
    cell2.innerHTML = 'Angular Difference';
    cell3.innerHTML = 'Number of Pairs';


      string = 'float angular_bins['+AngularBinsAngle.length+'] = {\n';
    for(var num=0; num<AngularBinsAngle.length; num++){
	var thisRowNum = document.getElementById("MultiTable").rows.length;
	var row = document.getElementById("MultiTable").insertRow(thisRowNum);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = thisRowNum;
	cell2.innerHTML = AngularBinsAngle[num];
	cell3.innerHTML = AngularBinsWeight[num];
  string += AngularBinsAngle[num] + ',';
    }
    string += '}\n';
    console.log(string);

}//End of PlotTables


function PlotAngleCombinationsTable() {

    document.getElementById("TableTitle").innerHTML = 'Detector Combinations for anglular bin of '+AngularBinsAngle[parseInt(document.getElementById("angleSelector").value)]+', with '+AngularBinsWeight[parseInt(document.getElementById("angleSelector").value)]+' pairs';

    // Crystal Combinations Table
    document.getElementById("MultiTable").innerHTML = '';
    var row = document.getElementById("MultiTable").insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    cell1.innerHTML = 'Crystal';
    cell2.innerHTML = 'Clover';
    cell3.innerHTML = 'Theta';
    cell4.innerHTML = 'Phi';
    cell5.innerHTML = 'Crystal';
    cell6.innerHTML = 'Clover';
    cell7.innerHTML = 'Theta';
    cell8.innerHTML = 'Phi';
    cell9.innerHTML = 'Angular Difference';


    for(i=0; i<NumCrystals; i++){
	if(ExcludedCrystalsList[i+1]==1){ continue; }
	for(j=0; j<NumCrystals; j++){
	    if(ExcludedCrystalsList[j+1]==1){ continue; }

	    // Calculate the angular difference for this pair of crystals.
	    // The function returns 3 decimal place precision
	    thisAngle = CalculateAngularDifference(i,j);
	    if(isNaN(thisAngle)){
		if(i==j){ thisAngle = 0.0; }
		else{ thisAngle = 180.0; }
	    }
	    if(thisAngle == AngularBinsAngle[parseInt(document.getElementById("angleSelector").value)]){

		var row = document.getElementById("MultiTable").insertRow(document.getElementById("MultiTable").rows.length);
		row.id = (i+1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		var cell6 = row.insertCell(5);
		var cell7 = row.insertCell(6);
		var cell8 = row.insertCell(7);
		var cell9 = row.insertCell(8);
		cell1.innerHTML = (i+1);
      var thisTowerString = "Tower " + tower_names[Math.floor(towers.indexOf(i+1)/5)];
      var thisStory = (towers.indexOf(i+1)%5);
      switch(thisStory){
        case(0): var thisStoryString = "1st Story"; break;
        case(1): var thisStoryString = "2nd Story"; break;
        case(2): var thisStoryString = "3rd Story"; break;
        case(3): var thisStoryString = "4th Story"; break;
        case(4): var thisStoryString = "5th Story"; break;
        default: thisStoryString = "Unknown";
      }
		cell2.innerHTML = thisTowerString+", "+thisStoryString;
		cell3.innerHTML = CrystalTheta[i].toFixed(1);
		cell4.innerHTML = CrystalPhi[i].toFixed(1);
		cell5.innerHTML = (j+1);
		row.addEventListener('mouseover', function(e){
		    crystalA = parseInt(this.cells[0].innerHTML);
		    crystalB = parseInt(this.cells[4].innerHTML);
		    if(ExcludedCrystalsList[crystalA]==1 || ExcludedCrystalsList[crystalB]==1){ color="red"; }else{ color="yellow"; }
		    this.style.backgroundColor = color;
		    document.getElementById('CellCrystal'+crystalA).style.backgroundColor = color;
		    document.getElementById('CellCrystal'+crystalB).style.backgroundColor = color;
		});
		row.addEventListener('mouseout', function(e){
		    crystalA = parseInt(this.cells[0].innerHTML);
		    crystalB = parseInt(this.cells[4].innerHTML);
		    if(ExcludedCrystalsList[crystalA]==1 || ExcludedCrystalsList[crystalB]==1){ color="red"; }else{ color="white"; }
		    this.style.backgroundColor = "white";
		    document.getElementById('CellCrystal'+crystalA).style.backgroundColor = "white";
		    document.getElementById('CellCrystal'+crystalB).style.backgroundColor = "white";
		});
      var thisTowerString = "Tower " + tower_names[Math.floor(towers.indexOf(j+1)/5)];
      var thisStory = (towers.indexOf(j+1)%5);
      switch(thisStory){
        case(0): var thisStoryString = "1st Story"; break;
        case(1): var thisStoryString = "2nd Story"; break;
        case(2): var thisStoryString = "3rd Story"; break;
        case(3): var thisStoryString = "4th Story"; break;
        case(4): var thisStoryString = "5th Story"; break;
        default: thisStoryString = "Unknown";
      }
		cell6.innerHTML = thisTowerString+", "+thisStoryString;
		cell7.innerHTML = CrystalTheta[j].toFixed(1);
		cell8.innerHTML = CrystalPhi[j].toFixed(1);
		cell9.innerHTML = CalculateAngularDifference(i,j);
	    }
	}
    }
}

function ToggleExcludeCrystal(ThisCrystalID) {

    crystalID = parseInt(ThisCrystalID);

    if(ExcludedCrystalsList[crystalID]==0){
	document.getElementById('CellCrystal'+(crystalID)).style.backgroundColor = "red";
	ExcludedCrystalsList[crystalID]=1;
    }else{
	document.getElementById('CellCrystal'+(crystalID)).style.backgroundColor = "white";
	ExcludedCrystalsList[crystalID]=0;
    }

    // Redraw whichever table is displayed
    PlotTables()

}

function generateCtable(){
var string = "";

  string = 'ge_angles['+64+'] = {\n';
  for(i=0; i<NumCrystals; i++){
  string += '{';
for(j=0; j<NumCrystals; j++){

thisAngle = CalculateAngularDifference(i,j);
if(isNaN(thisAngle)){
if(i==j){ thisAngle = 0.0; }
else{ thisAngle = 180.0; }
}

for(k=0; k<angular_bins.length; k++){
if((thisAngle >= parseFloat(angular_bins[k] - 0.001)) && (thisAngle <= parseFloat(angular_bins[k] + 0.001))){
  if(j>0){ string += ','; }
  string += k;
  break;
}
}


}
string += '},\n';
    }
    string += '};\n';
console.log(string);
}

function CalculateAngularBins(){
    // Zero the angular bins JSON object
    AngularBinsAngle = []; AngularBinsWeight = [];
    // Fill the angular bins JSON object
    for(i=0; i<NumCrystals; i++){
	if(ExcludedCrystalsList[i+1]==1){ continue; }
	for(j=0; j<NumCrystals; j++){
	    if(ExcludedCrystalsList[j+1]==1){ continue; }

	    // Calculate the angular difference for this pair of crystals.
	    // The function returns 3 decimal place precision
	    thisAngle = CalculateAngularDifference(i,j);
	    if(isNaN(thisAngle)){
		if(i==j){ thisAngle = 0.0; }
		else{ thisAngle = 180.0; }
	    }

	    // found is zero until the angular bin is found, if it is still zero then a new entry is created.
	    var found=0;

	    // If no angular bins have yet been created, create the first one.
	    if(AngularBinsAngle.length<1){
		AngularBinsAngle[0] = thisAngle;
		AngularBinsWeight[0] = 1;
		continue;
	    }

	    // Search through the angular bins already identified to see if there is a match for the current one.
	    for(k=0; k<AngularBinsAngle.length; k++){
        //console.log([parseFloat(AngularBinsAngle[k] - 2.5),thisAngle,parseFloat(AngularBinsAngle[k] + 2.5)]);
		if((parseFloat(thisAngle) >= parseFloat(AngularBinsAngle[k] - 2.5)) && (parseFloat(thisAngle) <= parseFloat(AngularBinsAngle[k] + 2.5))){
		    AngularBinsWeight[k]++;
		    found=1;
		    break;
		}
	    }

	    // If found is still zero at this point then an angular bin matching the
	    // current value was not found and we need to create a new one.
	    if(!found){
		AngularBinsAngle[AngularBinsAngle.length] = thisAngle;
		AngularBinsWeight[AngularBinsWeight.length] = 1;
	    }
	}

    }

    // Manually sort the angular bin and weight arrays to maintain the same order.
    // One by one move boundary of unsorted subarray
    for(i = 0; i < AngularBinsAngle.length - 1; i++) {

        // Find the minimum element in unsorted array
        var min_idx = i;
        for(j = i + 1; j < AngularBinsAngle.length; j++){
	    if(parseFloat(AngularBinsAngle[j]) < parseFloat(AngularBinsAngle[min_idx])){
                min_idx = j;
	    }
	}
        // Swap the found minimum element with the first element for both angles and weights arrays
	var temp = AngularBinsAngle[min_idx];
	AngularBinsAngle[min_idx] = AngularBinsAngle[i];
	AngularBinsAngle[i] = parseFloat(temp);
        temp = AngularBinsWeight[min_idx];
	AngularBinsWeight[min_idx] = AngularBinsWeight[i];
	AngularBinsWeight[i] = parseFloat(temp);
    }
}

function CalculateAngularDifference(crystal1,crystal2) {
    // Function to calculate the angular difference between two crystals
    // ACOS(SIN($F$3)*SIN(F3)*COS($G$3-G3)+COS($F$3)*COS(F3)) /(PI()/180)
    return parseFloat(Math.acos(Math.sin(CrystalTheta[crystal1]*DegToRad) * Math.sin(CrystalTheta[crystal2]*DegToRad) * Math.cos( (CrystalPhi[crystal1]*DegToRad) - (CrystalPhi[crystal2]*DegToRad) ) + (Math.cos(CrystalTheta[crystal1]*DegToRad) * Math.cos(CrystalTheta[crystal2]*DegToRad)))/ RadToDeg).toFixed(3);
}
