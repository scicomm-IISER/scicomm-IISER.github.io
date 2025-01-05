---
title: "What is InScight?"
permalink: /about/
---
InScight is a student-run online magazine hosted by IISER Kolkata, dedicated to making pure science accessible and engaging. Our mission is to bring the wonders of science to a broader audience by exploring innovative research and scientific discoveries. We present well-researched and thought-provoking articles on this website and publish periodical magazines based on such articles. The content is contributed by a diverse community of enthusiasts, aiming to inspire curiosity and a deeper understanding of science among readers. 

InScight is the spiritual successor to [Cogito](/cogitoOld/pages/vision.html), continuing the legacy of promoting scientific knowledge and inquiry. Our editorial board comprises passionate students and researchers from various scientific disciplines, ensuring a rich and diverse range of topics. We also encourage contributions from the wider community, welcoming submissions that delve into any aspect of science that is interesting and non-trivial, and that can be appreciated by a general audience. If you want to submit content to us (written article, video, interview, etc), visit [this page](/submit).

In addition to articles, we offer interactive content such as games and interviews with prominent scientists, providing multiple avenues for readers to engage with science. Our latest release includes a quantum physics-themed crossword, showcasing our commitment to making science both educational and entertaining. 

## Contact Information
- You can always get in touch via [email]({{ site.data.socials["email"] }}).
- If you want to remain anonymous, you can submit [this form]({{ site.data.socials["feedbackForm"] }}).
- You can also reach out to us on our social media accounts: <a class="nf" href="{{ site.data.socials["facebook"] }}"></a> <a class="nf" href="{{ site.data.socials["twitter"] }}"></a>

<p></p>

{% for category in site.data.members %}
## {{ category[0] }}
{% for member in category[1] %}
<div class="member-info">
<img class="member-image" src="/assets/images/members/{{member["image"]}}"/>
<div class="member-details" markdown=1>
<span class="member-name">**{{ member["name"] }}**
</span>
<div class="member-links">
{%- if member["email"] -%}<span class="email-id nf nf-md-email" data="{{ member["email"] }}">󰇮</span>{%- endif -%}
{%- if member["website"] -%}<a class="nf nf-md-web" href="{{ member["website"] }}">󰖟</a>{%- endif -%}
{%- if member["github"] -%}<a class="nf nf-fa-github" href="{{ member["github"] }}"></a>{%- endif -%}
{%- if member["linkedin"] -%}<a class="nf nf-fa-linkedin_square" href="{{ member["linkedin"] }}"></a>{%- endif -%}
{%- if member["twitter"] -%}<a class="nf nf-fa-twitter_square" href="{{ member["twitter"] }}"></a>{%- endif -%}
{%- if member["facebook"] -%}<a class="nf nf-md-facebook" href="{{ member["facebook"] }}"></a>{%- endif -%}
{%- if member["instagram"] -%}<a class="nf nf-fa-instagram" href="{{ member["instagram"] }}"></a>{%- endif -%}

</div>

{{ member["desc"] }}
{: .members-desc }

</div>
</div>
{% endfor %}
{% endfor %}

<script src="/assets/js/copyEmail.js"></script>
