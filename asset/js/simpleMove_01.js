$(function(){
    'use strict';

    var doc = document,
        canvas = doc.getElementById('canvas'),
        stage = { stageWidth: canvas.width, stageHeight: canvas.height },
        point = { x: 0, y: 0 },
        context;

    if ( !canvas || !canvas.getContext ) {
        return false;
    }

    context = canvas.getContext('2d');

    setInterval(function(){ enterFrame(); }, 100);

    function enterFrame() {
        point.x+= 2;
        point.y+= 2;
        clear();
        render();
    }

    function render() {
        console.log( 'r', point.x, point.y );
        context.fillRect( point.x, point.y, 100 ,100 );
    }

    function clear() {
        context.clearRect( 0, 0, stage.stageWidth, stage.stageHeight );
    }
});


/*
    // setTimeout関数
    setTimeout(function(){
        document.write("Hi, setTimeout is Run!");   
    },1000);
    
    // setInterval関数
    var count = 0;
    setInterval(function(){
        document.write("Ok, setInterval is Run with "+ count);  
        count++;
    },3000);
    
    // setTimeout関数で連続して処理を行う場合の例...
    var count2 = 0;
    var countUp = function(){
        document.write(count2 + "!");
        count2++;
        setTimeout(countUp,1000);
    },1000);
    
    countUp();
    var id = setTimeout(countUp, 1000);
    
    //キャンセルする場合
    clearTimeout(id);
*/