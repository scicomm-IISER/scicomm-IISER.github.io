---
layout: default
title: Magazine Issues
permalink: /issues
---

{% for year in site.data.magazines limit:1 %}
{% for issue in year[1] limit:1 %}
### Latest Issue 
<div id="latest-issue" markdown=1>
<img src="/assets/magazine-thumbnails/{{ issue["thumbnailFileName"] }}"/>
<div id="latest-issue-desc">
    <span>{{ issue["month"] | upcase }}, {{ year[0] }}</span>
    <div id="latest-issue-focus">
    ISSUE FOCUS:<br>
    <strong>{{ issue["focus"] }}</strong>
    </div>
    <a id="latest-issue-link" href="/assets/magazines/{{issue["fileName"]}}">View/Download this issue.</a>
</div>
</div>
{% endfor %}
{% endfor %}

{% for mag_year in site.data.magazines %}
### {{ mag_year[0] }}
<div class="magazine-thumbnails" markdown=1>
{% for issue in mag_year[1] %}
<a class="magazine-thumbnail-item" href="/assets/magazines/{{issue["fileName"]}}">
<img src="/assets/magazine-thumbnails/{{ issue["thumbnailFileName"] }}"/>
<strong>{{ issue["month"] }}</strong>
</a>
{% endfor %}
</div>
{% endfor %}
