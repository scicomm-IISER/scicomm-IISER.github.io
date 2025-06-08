---
title: "Interactive Science Games"
permalink: /games/
---

### Quizzes
<ul>
{% for article in site.categories["quiz"] %}
<li>{{ article.title }} <a class="button" href="{{ article.url }}">Start</a></li>
{% endfor %}
</ul>

<br>
### Crosswords
<ul>
{% for article in site.categories["crossword"] limit: 4 %}
<li>{{ article.title }} <a class="button" href="{{ article.url }}">Start</a></li>
{% endfor %}
</ul>

<br>
### Linked Lists
<ul>
{% for article in site.categories["linkedlist"] limit: 4 %}
<li>{{ article.title }} <a class="button" href="{{ article.url }}">Start</a></li>
{% endfor %}
</ul>
