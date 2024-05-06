---
layout: home
hero-image: banner.svg
---

{% for year in site.data.magazines limit:1 %}
{% for issue in year[1] limit:1 %}
## Latest Issue ([View All](/issues))
<div id="latest-issue" markdown=1>
<img src="/assets/magazine-thumbnails/{{ issue["thumbnailFileName"] }}"/>
<div id="latest-issue-desc">
    <span>{{ issue["month"] | upcase }}, {{ year[0] }}</span>
    <div id="latest-issue-focus">
    ISSUE FOCUS:<br>
    <strong>{{ issue["focus"] }}</strong>
    </div>
    <a id="latest-issue-link" href="{{issue["fileName"]}}">View/Download this issue.</a>
    <a id="latest-issue-link" href="/issues">Explore our older publications.</a>
</div>
</div>
{% endfor %}
{% endfor %}

## Recent Articles ([View All](/articles))

{% for article in site.posts limit:5 %}
<div class="article-item" markdown=1>
<a href="{{ article.url }}"><img class="article-thumbnail" src="/assets/hero-images/{{article.hero-image}}"/></a>
<span class="article-item-details">
	<span> <span class="article-item-title">{{ article.title }} </span> | <a href="{{ article.url }}">View article</a></span>
	<span>󰙈 {{ article.author }} |  {{ article.date | date:"%b %d, %Y" }}</span>
	<span class="article-item-excerpt">{{ article.excerpt | truncate: 150 }}</span>
	<span class="article-item-tags">{% for tag in article.tags %}<span class="button">{{ tag }}</span>{% endfor %}</span>
</span>
</div>
{% endfor %}
