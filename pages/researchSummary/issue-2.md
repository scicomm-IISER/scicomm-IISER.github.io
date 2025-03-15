---
title: "On The Fronters - Issue #2"
permalink: /research-summary-2/
---

{% for item in site.data.researchSummary["Issue-2"] %}
<div class="summary-head">
<b>{{ item["Title"] }}</b><br>
{{ item["Reference"] }}<br>
Contributed by: {{ item["Author"] }} ({{ item["Affiliation"] }})<br>
Keywords: {{ item["Keywords"] | join: ", " }}<br><br>
</div>
<div class="summary-content">{{ item["Summary"] }}</div>
<br>

<hr> 
{% endfor %}

