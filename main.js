// for lower case//
var personname = "Tayyab Aziz";
console.log("lower case=", personname.toLowerCase());
// for upper case
console.log("uper case=", personname.toUpperCase());
// for title case
console.log("titlecase:", personname.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
