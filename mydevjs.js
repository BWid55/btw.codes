//\test jquery import success

// window.onload = function() {
//     if (window.jQuery) {
//         alert("jQuery is loaded");
//     } else {
//         alert("jQuery is not loaded");
//     }
// }

// Project Show/Hide
$(function() {
    $('#project-selector').change(function(){
        $('.projects').hide();
        $('#' + $(this).val()).slideDown(1000);
    });
});
// End Project Show/Hide