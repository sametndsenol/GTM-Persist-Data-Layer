
(function(){
  // GTM Custom HTML – Persist GAEvent and replay as GAEvent2
  window.dataLayer = window.dataLayer || [];

  // Keep reference to original push
  var originalPush = window.dataLayer.push;

  // Override dataLayer.push to capture GAEvent
  window.dataLayer.push = function() {
    for (var i = 0; i < arguments.length; i++) {
      var evt = arguments[i];
      if (evt && evt.event === 'GAEvent') {
        try {
          localStorage.setItem('GAEventData', JSON.stringify(evt));
        } catch (e) {
          console.error('Unable to save GAEvent to localStorage', e);
        }
      }
    }
    return originalPush.apply(window.dataLayer, arguments);
  };

  // On any subsequent page load, replay stored event as GAEvent2
  try {
    var stored = localStorage.getItem('GAEventData');
    if (stored) {
      var data = JSON.parse(stored);
      // Build replay event
      var replay = {
        event: 'GAEvent2',
        eventCategory: data.eventCategory || '',
        eventAction: data.eventAction || '',
        eventLabel: data.eventLabel || '',
        platform: data.platform || ''
      };
      // Push replay event
      window.dataLayer.push(replay);
      console.log('Replayed as GAEvent2 on new page:', replay);
      // Remove storage to avoid duplicate triggers
      localStorage.removeItem('GAEventData');
    }
  } catch (e) {
    console.error('Error reading or replaying GAEvent', e);
  }
})();
