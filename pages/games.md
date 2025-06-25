---
title: "Interactive Science Games"
permalink: /games/
---

## Recent Highlights
{% assign categories = "crossword,quiz" | split: "," %}
<div class="highlight-small">
{% for cat in categories %}
 {% assign post = site.categories[cat][0] %}
 {% assign image = "/assets/images" | append: post.permalink | append: post.hero-image | relative_link %}
 <div class="highlight-desc">
 <a href="{{ post.permalink }}" id="highlight-{{ cat }}-url">
 <img id="highlight-{{ cat }}-image" src="{{ image }}"/>
 </a>
 <strong id="highlight-{{ cat }}-title">{{ post.title | markdownify | remove: '<p>' | remove: '</p>' }}</strong>
 <span class="archive-author" id="highlight-{{ cat }}-author"> {{ post.authors | join: ", " }} </span>
 <p class="home-button"><span>{{ site.color-emoji["browse"] }} <a href="{{post["permalink"]}}" id="highlight-{{ cat }}-link"> Browse </a></span><span class="shuffle" id="{{ cat }}-shuffle"></span></p>
 </div>
 {% endfor %}
</div>

## Quick links
[Quizzes](#quizzes)

[Crosswords](#crosswords)

[Linked Lists](#linked-lists)

## Quizzes
<div class="magazine-summary" markdown=1>
{% for article in site.categories["quiz"] %}
{{ article.title }} \| <span class="magazine-summary-author">{{ article.date | date:"%b, %Y" }}</span> <a class="reveal" href="{{ article.url }}">Start</a>
{% endfor %}
</div>

## Crosswords
<div class="magazine-summary" markdown=1>
{% for article in site.categories["crossword"] %}
{{ article.title }} \| <span class="magazine-summary-author">{{ article.date | date:"%b, %Y" }}</span> <a class="reveal" href="{{ article.url }}">Start</a>
{% endfor %}
</div>

## Linked Lists
<div class="magazine-summary" markdown=1>
{% for article in site.categories["linkedlist"] %}
{{ article.title }} \| <span class="magazine-summary-author">{{ article.date | date:"%b, %Y" }}</span> <a class="reveal" href="{{ article.url }}">Start</a>
{% endfor %}
</div>

<script src="/assets/js/randomHighlight.js"></script>
