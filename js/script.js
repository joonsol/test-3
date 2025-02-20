$(function(){
    $('header ul>li').mouseenter(function(){
      
        
        $('.sub_menu').slideDown()
        
        
    });
    
    $('.sub_menu').mouseleave(function(){
        setTimeout(function(){
        $('.sub_menu').slideUp()
            
        },2000)
        
    })
    

    function slide(){
    let i=$('.visual>ul>li.On').index();
        
        $('.visual>ul>li').removeClass('On');

        if (i < 3) {
           i++;
         } 
        if(i==3) {
            i=0
          }
        
        $('.visual>ul>li').eq(i).addClass('On');
          console.log(i);
    
}
    
     setInterval(slide,3000);

   

    
    $('.notice ul li:nth-child(1) a').click(function(){
        $('.popup').fadeIn();
    });
    
    
    
    $('a.close').click(function(){
        $('.popup').fadeOut();
        
    })
     
    $('.go').click(function(){
                   window.location.href = $('#site').val()
                   })

    
})