	function resetDefaultSuggestion() {
	  chrome.omnibox.setDefaultSuggestion({
	  description: 'imdb: Search IMDb for %s'
	  });
	}

	resetDefaultSuggestion();

	chrome.omnibox.onInputCancelled.addListener(function() {
  		resetDefaultSuggestion();
	});

	function navigate(url) {
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.update(tabs[0].id, {url: url});
	  });
	}

	chrome.omnibox.onInputEntered.addListener(function(text) {
  		navigate("https://www.imdb.com/find?ref_=nv_sr_fn&q=" + text + "&s=all");
	});
