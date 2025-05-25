---
title: "Let’s Make An \"Invisibility Cloak\"!"
excerpt: "**What if invisibility wasn’t just a fantasy but a reality within our grasp?** From Harry Potter’s enchanted cloak to high-tech military stealth, the dream of becoming unseen has fascinated us for centuries. Thanks to breakthroughs in metamaterials and transformation optics, scientists are bending light in ways that were once thought impossible—bringing invisibility cloaks out of fiction and into the lab. But while these cloaks can already manipulate microwaves and sound waves, perfecting them for visible light remains a thrilling challenge. As science threads the needle between magic and reality, the question is no longer if invisibility is possible, but when we’ll finally disappear from sight."
hero-image: "invisibilityCloak.png"
refs-file: "invisibilityCloak"
authors: ["Swarnendu Saha"]
author-affiliation: ["IISER Kolkata"]
author-bio: "A fifth year BS-MS student of IISER Kolkata, **Swarnendu Saha** is a student working with Prof. Rajesh Kumble Nayak, and is a travel enthusiast, who loves to travel anywhere below the sky. Instead of mentioning  his preferred fields in science, he would rather say that chemistry is the one he doesn't like at all! "
issue: 2
category: article
field: physics
permalink: /issue2/cloak/
feature: true

---

Among all the magical things to exist in the Harry Potter universe, the one that captures my imagination the most are invisibility cloaks. While such cloaks are quite common there, such accessories are still just a dream in our world. Nevertheless, there does exist some concrete physics that allows us to get pretty close to making such invisibility cloaks. Let’s try to understand this physics, and also come up with a practical setup for it. While the invisibility cloaks in Rowling’s universe were either woven from Demiguise hair or borrowed from Death, we will not have to go to such extreme measures, and can make do with some interesting physics.

Have you ever noticed how objects seem to bend or look like they're floating when placed in water? This fascinating phenomenon, which many of us first learned about in school, is caused by **refraction**. Refraction occurs when light changes direction as it passes from one medium to another—like from air to water—due to a change in its speed. The degree to which light bends depends on a property called the **refractive index** of the material. A higher refractive index means light slows down more and bends to a greater extent. This behavior is governed by a fundamental physics principle known as **Snell’s Law**. Snell’s Law mathematically relates the angles of incidence (the incoming light) and refraction (the bent light) using the equation:

$$ \frac{\sin \theta_i}{\sin \theta_r} = \frac{n_2}{n_1}$$

where \\(\theta_i\\) and \\(\theta_r\\) are the angles of incidence and refraction, and \\(n_1\\) and \\(n_2\\) are the refractive indices of the two media.

When light enters air from water, it bends away from the normal (a line perpendicular to the surface) because water has a higher refractive index than air. When the refracted light reaches us, our eyes extrapolate the refracted light straight backwards. This extrapolated position of the image is offset from the actual position, because of the bending, creating an apparent shift in the position of objects, **forming a virtual image within the denser medium** (e.g., water).

{% include figure.html image="fig1.png" caption="Advances in metamaterials, nanolenses, and transformation optics are paving the way for technology that can bend light around objects, allowing the background to remain visible. This could make it possible for incoming light from any angle and distance to create the illusion of invisibility. [Image Source: University of Rochester]." width=500 %}

Imagine an extreme case of this, where the angle of refraction \\(\theta_r\\) becomes greater than 180°; the virtual image will then be generated **outside the water**. This is somewhat similar to total internal reflection, where light reflects entirely within the water, and nothing is refracted. For the virtual image to occur outside the water, the refractive index itself has to be negative. How, if at all, is that even possible? This is where metamaterials come into the picture.

Metamaterials are not natural substances. Their properties have been **modified with grids**; a grid refers to a structured arrangement or pattern of small artificial components or units (often called meta-atoms) that are engineered to manipulate electromagnetic waves, such as light. The grid can take forms such as a lattice, periodic arrangement, or irregular structures. These are often composed of materials like metals or dielectrics. The spacing between the elements in the grid is **smaller than the wavelength of the light**. This enables precise control over the interaction between light and the material.

Light propagates through any material in the form of an electromagnetic wave, consisting of **simultaneous oscillations** of electric and magnetic fields. The speed and direction of propagation of these fields are determined, respectively, by the permittivity (\\(\varepsilon\\)) and the permeability (\\(\mu\\)) of the material. Together, they also determine the refractive index of the material, through the relation:

$$ n^2 = \varepsilon \mu $$

In 1968, Russian physicist Victor Vaselago showed that for materials in which both the permittivity and permeability are negative, it makes sense to **treat the refractive index to be negative**, by identifying \\( n = -\sqrt{\varepsilon \mu} \\) instead of the positive root. Why is this important for invisibility cloaks? Well, for an object to be visible, light reflected from the object must reach the eye of the observer. If an object is covered by a metamaterial with a negative refractive index, the virtual image coming from the object will be produced outside the body of the object and it **will not reach the eye of any observer**. Without any reflected light reaching the eye, the object will be practically invisible for the observer. It was about 30 years after Vaselago’s work that metamaterials could be produced, though with several limitations. 

{% include figure.html image="fig2.png" caption="Schematic representation of refraction when light passes from air into water. The light bends towards the normal as it enters the surface of water; the ratio of the sines of the incident angle     and the refracted angle       is given by the ratio of the refractive indices of the two media. The red dotted line is followed by our eye when light coming from water into air reaches it; the end of the dotted line is the location of the virtual image.  [Credit: K.Venkataramana]" width=500 %}

## Metamaterials, and How They Manipulate Electromagnetic Waves
In 2006, David Smith from Duke University advanced a concept initially proposed by British physicist John Pendry by developing a metamaterial to **manipulate microwave energy**. The paper "Controlling Electromagnetic Fields," authored by Pendry, Schurig, and Smith and published in Science in 2006, presents a groundbreaking design strategy for manipulating electromagnetic fields using artificially engineered metamaterials. By carefully designing the components' shape, size, and arrangement in these metamaterials, the authors show that **it is possible to guide, bend, and reshape electromagnetic fields**, achieving highly controlled propagation paths. This approach enables the redirection of electromagnetic energy around objects, avoiding scattering and absorption, and opens the door to innovative technologies that challenge traditional limitations of wave behavior. 

The 2006 paper "Metamaterial Electromagnetic Cloak at Microwave Frequencies" by Smith and co-workers presents the **first experimental demonstration** of a metamaterial-based cloak designed to render objects invisible to microwave radiation. Smith's innovation involved a fabric composed of concentric rings embedded with electronic microwave manipulators. When activated, this metamaterial can redirect microwaves around its central area, effectively **preventing the waves from interacting with any object placed within that area**.

While humans cannot see microwaves, this technology demonstrated a key principle: energy waves can be guided around an object.  The experimental evidence confirmed the theoretical predictions and demonstrated the feasibility of using metamaterials for cloaking applications. The work showcased the potential for such technology, revealing a path toward developing advanced forms of invisibility by tailoring these principles to various types of waves.

{% include figure.html image="fig3.png" caption="Propagation of light through a material involves the simultaneous oscillation of electric field (blue) and magnetic field (green). The propagation is affected by the properties of the material such as the permittivity and permeability. [Credit: Marko Petek]." width=500 %}

## The Bridge To Optical Wavelengths
By building on earlier work by Vladimir Shalaev from Purdue University, Igor Smolyaninov from the University of Maryland made some impressive advancements in the quest for invisibility in 2007. The paper "Negative Index of Refraction in Optical Metamaterials" by Shalaev et al. presented a significant advancement in the field of metamaterials by demonstrating a material with a negative refractive index at **optical communication wavelengths**. Using this work, Smolyaninov and co-workers achieved experimental realization of a non-magnetic electromagnetic cloak operating in the visible spectrum. This amazing cloak is only 10 micrometers wide and is made of concentric gold rings that are infused with polarized cyan light. These rings help to steer incoming light waves around the hidden object, **effectively making it disappear**. 

Meanwhile, researchers in China at Wuhan University are exploring a similar idea with sound waves, proposing an acoustic invisibility cloak that can redirect sound around an object.

However, these metamaterial cloaks do have some limitations. **They’re really tiny and only function in two dimensions**, making them unsuitable for use in our three-dimensional world. Also, the cloaks tend to be too heavy and cannot be carried around for personal purposes, but are more suitable for hiding stationary objects like buildings or military vehicles.

## Enter Metalenses
Metalenses are an innovative alternative to traditional lenses, **overcoming the "rainbow" effect**, where different colours of light slow down at different rates, by using tiny structures that focus all colours to the same point. Unlike conventional lenses, metalenses are ultra-thin, easy to manufacture, and more efficient at handling different wavelengths.

In 2018, Chen and co-workers discovered that by using tiny titanium "nanofins," metalenses can focus light across a broad range of colours, nearly eliminating the colour distortion problem.

{% include figure.html image="fig4.png" caption="Top panel: Through the power of a metalens, incoming light from across the spectrum along a wide area can be focused down to a point. If that light can be bent around an object, de-focused, and sent off in its initial direction, we would have an actual invisibility cloak. Bottom panels: The metalens is designed to provide spatially dependent group delays such that wavepackets from different locations arrive simultaneously at the focus.See [5]" width=500 %}

## How Optical Camouflage Makes You (Almost) Invisible
Since it is not yet possible for metamaterials to operate in the visible range, we will instead adopt a different technique to achieve invisibility. It involves using a coat made from a “magic fabric” referred to as **retro-reflective material**. The coat is made of tiny glass beads; when light hits these beads, it bounces right back to where it came from. This makes the fabric super bright at night and helps it reflect whatever’s behind it.

The setup involves the following components:

**Video Camera**: This camera sits behind you, capturing the scene that’s behind the cloak.

**Computer**: The computer takes that camera feed and adjusts it so it looks just right when projected onto the cloak.

**Projector**: The projector then beams this adjusted image onto the cloak. There’s a tiny pinhole that helps keep the image sharp.

**Combiner**: This is a special mirror that reflects the image onto the cloak and lets the light bounce off the cloak go through to your eyes.

Here’s how the magic happens:

**Step 1.** The camera films what’s behind you and passes the image/video to a computer. This is necessary to replace the image of the person with that of the background.

**Step 2.** The computer tweaks the footage so it fits perfectly with your cloak. This might involve making adjustments so that the distances and angles are accounted for. The processed data is passed to a projector.

**Step 3.** The projector shines this adjusted image/video onto the combiner through a tiny hole.

**Step 4.** The combiner mirror sends the image onto the cloak. The cloak acts as a screen and reflects the light back, passed through by the combiner so that you can still see the surroundings.

Ultimately, the cloak makes you look invisible because it **shows the background scene right on the fabric** while letting the real-world light reach your eyes. So, while you’re not precisely disappearing, you’re blending in pretty darn well!

{% include figure.html image="fig5.png" caption="Schematic representation of the invisibility setup. The background is captured by the camera and processed by the computer. This data is fed into the projector before being sent into the combiner and ultimately broadcast onto the cloak. The cloak returns the light back to the observer, effectively replacing the image of the target person with that of the background in the eye of the observer. See [7]." width=300 %}


