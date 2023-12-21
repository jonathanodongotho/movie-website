document.addEventListener('DOMContentLoaded', function(){

    setTimeout(function() {
        document.querySelectorAll('.item-image').forEach(function(item) {
            item.classList.add('scaled')
        });
    }, 500);



    /* --------------menu bar toggle on smal screen------------- */
    let barContainer = document.getElementById('menuBar-notactive');
    let barContainer_ = document.getElementById('menuBar-active');
    let menuSmall = document.getElementById('menu');

    barContainer.addEventListener('click', function(){
        menuSmall.classList.add('open');
    });
    barContainer_.addEventListener('click', function(){
        menuSmall.classList.remove('open');
    });



    
});


