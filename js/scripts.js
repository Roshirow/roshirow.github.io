// Everything OK?
console.log('OK');

// LIGHT GALLERY
$('#gallery-1').lightGallery({
    selector: 'a',
});
$('#gallery-2').lightGallery({
    selector: 'a',
});

//FOOTER COPYRIGHT
var today = new Date();

var year = today.getFullYear();

console.log( today, year  );

$('span').text( year );