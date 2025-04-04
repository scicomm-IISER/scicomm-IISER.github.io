---
title: "Interactive Science Games"
permalink: /games/
---

### Quizzes
<ul class="quizzes-list">
{% for article in site.categories["quiz"] %}
<li>{{ article.title }} <a class="button" href="{{ article.url }}">Start</a></li>
{% endfor %}
</ul>

<br>
### Crosswords
<ul class="crosswords-list">
{% for article in site.categories["crossword"] limit: 4 %}
<li>{{ article.title }} <a class="button" href="{{ article.url }}">Start</a></li>
{% endfor %}
</ul>

<br>
### Linked Lists
We are currently working on this. Please check out the PDF of the magazine for a non-interactive version of the game.
