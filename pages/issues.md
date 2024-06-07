---
title: Magazine Issues
permalink: /issues
---

{% include latest-issue.html %}

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
