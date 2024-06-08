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

## Team Members
{% for category in site.data.members %}
### {{ category[0] }}
{% for name in category[1] %}
![](/assets/images/about/{{ name[1]["imageName"] }})
<span>
**{{ name[0] }}**<br><br>
{{ name[1]["description"] }}
</span>
{: .member-desc }

{% endfor %}
{% endfor %}

