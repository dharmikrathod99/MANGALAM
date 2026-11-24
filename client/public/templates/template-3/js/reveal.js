(function(){
window['Reveal']=(function(){'use strict';function a(){var b=document['querySelectorAll']('[data-reveal]');if(!('IntersectionObserver'in window)){b['forEach'](function(d){d['classList']['add']('is-in');});return;}var c=new IntersectionObserver(function(d){d['forEach'](function(e){if(!e['isIntersecting'])return;e['target']['classList']['add']('is-in'),c['unobserve'](e['target']);});},{'threshold':0.1,'rootMargin':'0px\x200px\x20-60px\x200px'});b['forEach'](function(d){c['observe'](d);});}return{'watch':a};}());
})();
