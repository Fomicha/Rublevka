$(function(){
  $('body').click(function() {
    $('.select1').removeClass('is-open');
  });

  $('.select1').on('click','.placeholder1',function(e){
    e.stopPropagation();
        var parent = $(this).closest('.select1');
    if (!parent.hasClass('is-open')){
      parent.addClass('is-open');
      $('.select.is-open').not(parent).removeClass('is-open');
    }else{
      parent.removeClass('is-open');
    }
  }).on('click','ul>li',function(){
    var parent = $(this).closest('.select1');
    parent.removeClass('is-open').find('.placeholder1').text( $(this).text() );
    parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
  });
});