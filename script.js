$(function(){
  
  $("header img").click(function(){
  window.location = "index.html";  
   });
 
  $("#learnPianoBtn").click(function(){
  window.location = "piano.html";  
   });
 
  $("#learnSheetBtn").click(function(){
  window.location = "trebleclef.html";  
   });
  
$("#readMore2").click(function(){
  window.location = "olivia.html";  
   });

  $("#readMore").click(function(){
  window.location = "jerry.html";  
   });

  
  
$("#learnClarinetBtn").click(function(){
  window.location = "clarinet.html";  
   });
  
  
  $("#readMore").hover(testings, outTestings);

  function testings(){
  
  $("#readMore").animate({backgroundColor: "white", color: "rgba(25,25,112, 0.8)"}, "fast"); 
}
  
  function outTestings(){
     $("#readMore").animate({backgroundColor: "transparent", color: "white"}, "fast"); 
    
  }
  
  $("#readMore2").hover(testings2, outTestings2);

  function testings2(){
  
  $("#readMore2").animate({backgroundColor: "white", color: "rgba(25,25,112, 0.8)"}, "fast"); 
}
  
  function outTestings2(){
     $("#readMore2").animate({backgroundColor: "transparent", color: "white"}, "fast"); 
    
  }
  
  
  
  $("#readMore3").hover(testings3, outTestings3);

  function testings3(){
  
  $("#readMore3").animate({backgroundColor: "white", color: "rgba(25,25,112, 0.8)"}, "fast"); 
}
  
  function outTestings3(){
     $("#readMore3").animate({backgroundColor: "transparent", color: "white"}, "fast"); 
    
  }
  
  
  
  
  $("#learnPianoBtn").hover(testing, outTesting);

  function testing(){
  
  $("#learnPianoBtn").animate({backgroundColor: "white", color: "rgba(10,135,135, 1)"}, "fast"); 
}
  
  function outTesting(){
     $("#learnPianoBtn").animate({backgroundColor: "transparent", color: "white"}, "fast"); 
    
  }
  
  
  
  
  $("#learnSheetBtn").hover(testing1, outTesting2);

  function testing1(){
  
  $("#learnSheetBtn").animate({backgroundColor: "white", color: "rgba(255,140,0, 1)"}, "fast"); 
}
  
  function outTesting2(){
     $("#learnSheetBtn").animate({backgroundColor: "transparent", color: "white"}, "fast"); 
    
  }
  
  
  
  
  $("#learnClarinetBtn").hover(testing11, outTesting22);

  function testing11(){
  
  $("#learnClarinetBtn").animate({backgroundColor: "white", color: "rgba(221,160,221, 1)"}, "fast"); 
}
  
  function outTesting22(){
     $("#learnClarinetBtn").animate({backgroundColor: "transparent", color: "white"}, "fast"); 
    
  }
  
  
    if(window.location.href.indexOf("index") > -1){
 $("a").parent().eq(0).css({borderBottom:"0.1px solid orange"});
  }else if(window.location.href.indexOf("clarinet") > -1){
           $("a").parent().eq(2).css({borderBottom:"0.1px solid orange"});
  } else if(window.location.href.indexOf("trebleclef") > -1){
           $("a").parent().eq(1).css({borderBottom:"0.1px solid orange"});
   } else if(window.location.href.indexOf("piano") > -1){
           $("a").parent().eq(3).css({borderBottom:"0.1px solid orange"});
     } else if(window.location.href.indexOf("about") > -1){
           $("a").parent().eq(4).css({borderBottom:"0.1px solid orange"});
           }else{} 
 
  $("#up").click(function(){
 $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
  });
 
   
});