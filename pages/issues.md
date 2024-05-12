---
title: Magazine Issues
permalink: /issues
---

{% assign latestIssue = site.data.magazines | first %}

### Latest Issue 
<div id="latest-issue" markdown=1>
<img src="/assets/magazine-thumbnails/{{ latestIssue[1][0]["thumbnailFileName"] }}"/>
<div id="latest-issue-desc">
    <span>{{ latestIssue[1][0]["month"] | upcase }}, {{ latestIssue[0] }}</span>
    <div id="latest-issue-focus">
    ISSUE FOCUS:<br>
    <strong>{{ latestIssue[1][0]["focus"] }}</strong>
    </div>
    <a id="latest-issue-link" href="/assets/magazines/{{latestIssue[1][0]["fileName"]}}">View/Download this issue.</a>
</div>
</div>

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
