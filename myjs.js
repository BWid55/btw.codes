var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function(){
  $('#upwork_check').on('change',function(){
    $('.to_be_displayed').hide();
    $('#' + $(this).val()).slideDown(750);
  }).change();
})