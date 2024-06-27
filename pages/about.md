---
title: "What is InScight?"
permalink: /about/
---

InScight is an online magazine dedicated to making pure science accessible and engaging. We have tasked ourselves with bringing the wonders of science to a broader audience by exploring innovative research and the scientific discoveries that come with it. This is accomplished by presenting well-researched and thought-provoking articles on this website, and publishing periodical magazines based on such articles. The articles are written by the wider community of enthusiasts. 

If you want to submit content to us (written article, video, interview, etc), visit [this page](/submit/).

## Contact Information
- You can always get in touch via [email]({{ site.data.socials["email"] }}).
- If you want to remain anonymous, you can submit [this form]({{ site.data.socials["feedbackForm"] }}).
- You can also reach out to us on our social media accounts: <a class="nf nf-fa-facebook_square" href="{{ site.data.socials["facebook"] }}"></a> <a class="nf nf-fa-twitter_square" href="{{ site.data.socials["twitter"] }}"></a>

{% for category in site.data.members %}
## {{ category[0] }}
{% for member in category[1] %}
<div class="member-info">
<img class="member-image" src="/assets/images/members/{{member["image"]}}"/>
<div class="member-details" markdown=1>
<span class="member-name">**{{ member["name"] }}**
</span>
<div class="member-links">
{%- if member["email"] -%}<span class="email-id nf nf-md-email" data="{{ member["email"] }}"></span>{%- endif -%}
{%- if member["website"] -%}<a class="nf nf-md-web" href="{{ member["website"] }}"></a>{%- endif -%}
{%- if member["github"] -%}<a class="nf nf-fa-github" href="{{ member["github"] }}"></a>{%- endif -%}
{%- if member["linkedin"] -%}<a class="nf nf-fa-linkedin_square" href="{{ member["linkedin"] }}"></a>{%- endif -%}
{%- if member["twitter"] -%}<a class="nf nf-fa-twitter_square" href="{{ member["twitter"] }}"></a>{%- endif -%}
{%- if member["facebook"] -%}<a class="nf nf-md-facebook" href="{{ member["facebook"] }}"></a>{%- endif -%}
{%- if member["instagram"] -%}<a class="nf nf-fa-instagram" href="{{ member["instagram"] }}"></a>{%- endif -%}
</div>

{{ member["desc"] }}
{: .members-desc }

</div>
</div>
{% endfor %}
{% endfor %}

<script src="/assets/js/copyEmail.js"></script>
