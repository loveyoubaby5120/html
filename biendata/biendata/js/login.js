var hideLoginForm = function(){
   $("#id-nav-login").css("display", "none");
   $(document).unbind("click");
};
var showLoginForm = function(e){
   $("#id-nav-login").css("display", "block");
   $(document).click(hideLoginForm);
   e.stopPropagation();
};

$(document).ready(function(){
   if($("#id-login-btn").length>0){
      $("#id-nav-login").click(function(e){
         e.stopPropagation();
      });

      $("#id-login-btn").click(showLoginForm);
   }
});
