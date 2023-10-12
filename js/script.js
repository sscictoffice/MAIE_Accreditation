function onSignIn(googleUser){
  var profile=googleUser.getBasicProfile();
  $(".textonSignIn").css("display", "none");
  $(".data").css("display","block");
  $("#email").text(profile.getEmail());
  var logName = profile.getGivenName()+" "+profile.getFamilyName();
  $("#loginName").text(logName);
  $(".signInCredentials").css("display", "block");
}
