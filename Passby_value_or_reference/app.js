// pass by value
function change(b) {
	b = 2;
}

var a = 1;
change(a);
console.log(a);

// pass by reference
function changeObj(d) {
	d.prop1 = function() {};
	d.prop2 = {};
	d.prop3 = 2;
}

var c = {};
c.prop1 = {};
c.prop3 = 1;
changeObj(c);
console.log(c.prop3);