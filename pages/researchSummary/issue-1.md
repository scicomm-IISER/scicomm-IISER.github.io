---
title: "On The Fronters - Issue #1"
permalink: /research-summary-1/
---

{% for item in site.data.researchSummary["Issue-1"] %}
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

