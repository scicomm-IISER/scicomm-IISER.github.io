---
title: Published Articles
permalink: /articles/
---

<a class="button" href="/tags/">Tags</a>
<a class="button" href="/archives">Archives</a>
<a class="button" href="#recent-articles">Recent</a>

{% include latest-article.html %}

## Recent Articles
{% for article in site.categories["articles"] limit:10 %}
{% include article-item.html %}
{% endfor %}
