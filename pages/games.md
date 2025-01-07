---
title: "Games"
permalink: /games/
---

We are working on some **science quizzes**, **crosswords** and other word games. Stay tuned!

{% for article in site.categories["quiz"] %}
<a href="{{ article.url }}">Read Article</a>
{% endfor %}

<!-- Include the CryptoJS library for hashing the user id before sending it to the PuzzleMe server. -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
<!-- Include the javascript library for embedding this puzzle. -->
<script id="pm-script" src="https://puzzleme.amuselabs.com/pmm/js/puzzleme-embed.js"></script>
<!-- Specify the Amuse Labs server name from where the puzzles will be served and trigger the embed flow. -->
<script>
    PM_Config.PM_BasePath = "https://puzzleme.amuselabs.com/pmm/";
</script>
<!-- Specifies the puzzle to be embedded on the page. If you want to render multiple games on your page then you can copy paste it multiple times. -->
<div class="pm-embed-div" data-id="the_qrossword" data-set="0f2008d8845731e3634527c9ceec252c915a083f82d229222a91210aa3df1ddc" data-puzzleType="crossword" data-height="800px" data-mobileMargin="10px"></div>

<script>
function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}
waitForElementToDisplay(".crossword-footer-message",function(){alert("Hi");},1000,9000);
</script>
