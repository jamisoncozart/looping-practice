jQuery(document).ready(function() {
  var tags = ["h1", "p", "img"]
  tags.forEach(function(tag){
    jQuery(tag).click(function(){
      alert("this is a " + tag)
    });
  });
}); 