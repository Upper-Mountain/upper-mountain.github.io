window.onscroll = function() {
  var sticky = document.getElementById('nav-bar');
  if( document.body.scrollTop+document.documentElement.scrollTop > document.getElementById('hero').scrollHeight - document.getElementById('nav-bar').scrollHeight)
    sticky.className = "stuck";
  else sticky.className = "";
};
