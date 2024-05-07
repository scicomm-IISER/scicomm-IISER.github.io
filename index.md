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
{% include article-item.html %}
{% endfor %}
