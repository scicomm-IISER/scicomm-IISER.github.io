---
title: "Games"
permalink: /games/
---

We are working on some **science quizzes**, **crosswords** and other word games. Stay tuned!

## Quizzes
<ul>
{% for article in site.categories["quiz"] %}
<li>{{ article.title }} <a href="{{ article.url }}">[PLAY]</a></li>
{% endfor %}
</ul>

<br>
## Crosswords
<ul>
{% for article in site.categories["crossword"] limit: 4 %}
<li>{{ article.title }} <a href="{{ article.url }}">[PLAY]</a></li>
{% endfor %}
</ul>

<br>
## Linked Lists
We are currently working on this. Please check out the PDF of the magazine for a non-interactive version of the game.
