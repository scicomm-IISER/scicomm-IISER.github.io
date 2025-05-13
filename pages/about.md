---
title: "What is InScight?"
permalink: /about/
---

# {{ page.title }}

InScight is a student-run online magazine hosted by IISER Kolkata, dedicated to making pure science accessible and engaging. Our mission is to bring the wonders of science to a broader audience by exploring innovative research and scientific discoveries. We present well-researched and thought-provoking articles on this website and publish periodical magazines based on such articles. The content is contributed by a diverse community of enthusiasts, aiming to inspire curiosity and a deeper understanding of science among readers. 

InScight is the spiritual successor to [Cogito](/cogitoOld/pages/vision.html), continuing the legacy of promoting scientific knowledge and inquiry. Our editorial board comprises passionate students and researchers from various scientific disciplines, ensuring a rich and diverse range of topics. We also encourage contributions from the wider community, welcoming submissions that delve into any aspect of science that is interesting and non-trivial, and that can be appreciated by a general audience. If you want to submit content to us (written article, video, interview, etc), visit [this page](/submit).

In addition to articles, we offer interactive content such as games and interviews with prominent scientists, providing multiple avenues for readers to engage with science. Our latest release includes a quantum physics-themed crossword, showcasing our commitment to making science both educational and entertaining. 

## Contact Information
- You can always get in touch via [email]({{ site.data.socials["email"] }}).
- If you want to remain anonymous, you can submit [this form]({{ site.data.socials["feedbackForm"] }}).
- You can also reach out to us on our social media accounts: {% include socials.html %}

<p></p>
## Buy Us A Coffee
If you are feeling generous and wish to sponsor some printed copies of our magazine for greater distribution, you are requested to use this [form](https://docs.google.com/forms/d/e/1FAIpQLSc1XWwxSF3UDJZVXpvmdlTDRUjmi0Gv4l5vk24VnTs_aUhsVQ/viewform?usp=preview). Feel free to get in touch with us at [scicomm@iiserkol.ac.in]({{ site.data.socials["email"] }}) if you need any clarification.

<p></p>
## Members

{% for category in site.data.members %}
### {{ category[0] }}
<div class="team-group">
{% for member in category[1] %}
<div class="member-info">
<img class="member-image" src="/assets/images/members/{{member["image"]}}"/>
<div class="member-details" markdown=1>
**{{ member["name"] }}**
<br>
{%- if member["email"] -%}<span class="social-links email-id nf nf-md-email" href="mailto:{{ member["email"] }}">󰇮</span>{%- endif -%}
{%- if member["website"] -%}<a class="social-links nf nf-md-web" href="{{ member["website"] }}">󰖟</a>{%- endif -%}
{%- if member["github"] -%}<a class="social-links nf nf-fa-github" href="{{ member["github"] }}"></a>{%- endif -%}
{%- if member["linkedin"] -%}<a class="social-links nf nf-fa-linkedin_square" href="{{ member["linkedin"] }}"></a>{%- endif -%}
{%- if member["twitter"] -%}<a class="social-links nf nf-fa-twitter_square" href="{{ member["twitter"] }}"></a>{%- endif -%}
{%- if member["facebook"] -%}<a class="social-links nf nf-md-facebook" href="{{ member["facebook"] }}"></a>{%- endif -%}
{%- if member["instagram"] -%}<a class="social-links nf nf-fa-instagram" href="{{ member["instagram"] }}"></a>{%- endif -%}
<br>

{{ member["desc"] }}
{: .members-desc }

</div>
</div>
{% endfor %}
</div>
<br>
{% endfor %}

<script src="/assets/js/copyEmail.js"></script>
