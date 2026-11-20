const LOGO="https://images.squarespace-cdn.com/content/v1/619eafb3b13f9c13d4144fba/1c3abb52-7921-47a9-a7af-9fb6bb918df5/no%2Bpaws%2Bleft%2Bbehind%2Blogo.jpg";
const rescueFavicon=document.createElement("link");rescueFavicon.rel="icon";rescueFavicon.type="image/jpeg";rescueFavicon.href=LOGO;document.head.appendChild(rescueFavicon);
const nav=[["Home","index.html","home"],["Adopt","adopt.html","adopt"],["Get Involved","get-involved.html","involved"],["Events","events.html","events"],["Fundraisers","fundraisers.html","fundraisers"],["Our Rescue","about.html","about"],["Contact","contact.html","contact"]];
const page=document.body.dataset.page||"home";
const header=`<div class="topline">Rescue • Care • Community • Forever homes</div><header class="header"><div class="wrap nav"><a class="brand" href="index.html"><img src="${LOGO}" alt="No Paws Left Behind Kitty Rescue logo"><span class="brandtext">NO PAWS LEFT BEHIND<small>KITTY RESCUE</small></span></a><nav class="navlinks" id="navlinks">${nav.slice(0,2).map(([n,u,k])=>`<a class="${page===k?"active":""}" href="${u}">${n}</a>`).join("")}<div class="navdrop"><a class="${["involved","foster","tnr"].includes(page)?"active":""}" href="get-involved.html">Get Involved <span aria-hidden="true">⌄</span></a><div class="dropmenu"><a href="get-involved.html">Volunteer opportunities</a><a href="foster.html">Become a foster</a><a href="tnr.html">Community TNR</a></div></div>${nav.slice(3).map(([n,u,k])=>`<a class="${page===k?"active":""}" href="${u}">${n}</a>`).join("")}</nav><a class="btn pink navCta" href="donate.html">Donate</a><button class="menu" id="menu" aria-label="Open navigation">☰</button></div></header>`;
const footer=`<footer class="footer"><div class="wrap"><div class="footgrid"><div><img class="footlogo" src="${LOGO}" alt="No Paws Left Behind Kitty Rescue logo"><p>Helping homeless cats and kittens find safety, compassionate care, and loving forever homes.</p><p>Registered 501(c)(3) nonprofit · EIN 87-3360962</p></div><div><h4>Explore</h4><a href="adopt.html">Adoption</a><a href="get-involved.html">Volunteer & Get Involved</a><a href="foster.html">Fostering</a><a href="tnr.html">Trap-Neuter-Return</a><a href="events.html">Adoption Events</a><a href="fundraisers.html">Fundraisers</a></div><div><h4>Connect</h4><a href="donate.html">Donate</a><a href="about.html">About the Rescue</a><a href="contact.html">Contact</a><a href="https://www.facebook.com/NoPawsLeftBehindKittyRescue/" target="_blank" rel="noopener">Facebook ↗</a><a href="https://www.instagram.com/nopawsleftbehind.kittyrescue/" target="_blank" rel="noopener">Instagram ↗</a><a href="mailto:contact@nopawsleftbehindkittyrescue.com">Email the rescue</a><a href="https://www.petfinder.com/member/us/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/" target="_blank" rel="noopener">Find us on Petfinder ↗</a></div></div><div class="copyright">© ${new Date().getFullYear()} No Paws Left Behind Kitty Rescue · Independent website redesign preview. The rescue’s existing live website has not been changed.</div></div></footer>`;
const pages={
home:`<section class="hero"><div class="wrap heroGrid"><div><div class="eyebrow">A second chance starts here</div><h1>Every kitty deserves a <em>place to call home.</em></h1><p>We help homeless cats and kittens find safety, receive the care they need, and discover the loving families they deserve. And we work with our community to make life better for cats outdoors, too.</p><div class="actions"><a class="btn pink" href="adopt.html">Meet the cats</a><a class="btn teal" href="get-involved.html">Find your way to help</a></div></div><div class="heroPhoto"><img src="${LOGO}" alt="No Paws Left Behind Kitty Rescue logo"><div class="photoCaption">A volunteer-powered rescue built around compassion, thoughtful care, and second chances.</div></div></div></section><section class="section"><div class="wrap center"><div class="eyebrow">What we do</div><h2>Helping cats at every stage of the journey.</h2><p class="lead">From shelter rescue and foster care to adoption and community TNR, every part of the work matters.</p><div class="cards"><article class="card"><div class="number">01 / ADOPTION</div><h3>Find a forever friend</h3><p>Meet the cats and kittens in our care and learn how our adoption process helps find the right match.</p><a class="more" href="adopt.html">Explore adoption →</a></article><article class="card"><div class="number">02 / FOSTER & VOLUNTEER</div><h3>Be part of their care</h3><p>Help at adoption events, transport, fundraising, or open your home as a foster caregiver.</p><a class="more" href="get-involved.html">Explore ways to help →</a></article><article class="card"><div class="number">03 / COMMUNITY CATS</div><h3>Make TNR possible</h3><p>Learn how Trap-Neuter-Return helps reduce unwanted litters and supports healthier outdoor cat colonies.</p><a class="more" href="tnr.html">Understand TNR →</a></article></div></div></section><section class="section soft"><div class="wrap split"><div><div class="eyebrow">A rescue community</div><h2>Every helping hand makes a difference.</h2><p class="muted">No Paws Left Behind Kitty Rescue is a volunteer-based 501(c)(3) nonprofit working with foster caregivers, local veterinarians, shelters, and community members. Cats in our care receive appropriate medical care and preparation for adoption.</p><a class="btn teal" href="about.html">Get to know the rescue</a></div><div class="panel"><h3>Ways to be part of the story</h3><ul class="list"><li>Adopt a cat or kitten and make room for another rescue</li><li>Foster and provide a safe, temporary home</li><li>Volunteer at events, with transportation, or behind the scenes</li><li>Support medical care, food, supplies, and TNR efforts</li></ul><a class="more" href="get-involved.html">See all ways to help →</a></div></div></section><section class="section"><div class="wrap"><div class="banner"><div><h2>Help make the next happy ending possible.</h2><p>Your support helps provide care, comfort, and second chances.</p></div><a class="btn light" href="donate.html">Ways to donate</a></div></div></section>`,
adopt:`<section class="pageHero"><div class="wrap"><div class="crumb">Find your match</div><h1>Meet the cats and kittens.</h1><p>Every adoption opens space for another cat who needs help. Browse the rescue’s current Petfinder listings, learn about the adoption process, and reach out when a kitty catches your eye.</p><div class="subnav"><a href="#browse">Available cats</a><a href="#process">Adoption process</a><a href="#care">What adoption includes</a><a href="#faq">Adoption FAQs</a></div></div></section><section class="section" id="browse"><div class="wrap center"><div class="eyebrow">Current adoptables</div><h2>Your next best friend may be waiting.</h2><p class="lead">Meet the cats and kittens currently featured by the rescue.</p><div class="catGrid"><a class="catCard" href="cyrus.html"><img src="https://dbw3zep4prcju.cloudfront.net/animal/df8ae764-a6cd-4113-9e02-4df386b86e8f/image/41dba893-1e4b-4315-9274-f2bd6f1f913b.jpg?versionId=TmlLFe3rGN7psyZDlJjn9aXMGG8vFFld" alt="Cyrus, gray tabby"><div class="catCardText"><h3>Cyrus</h3></div></a><a class="catCard" href="kian.html"><img src="https://dbw3zep4prcju.cloudfront.net/animal/d660405a-2caa-4c1e-9d5b-1186a865fb08/image/06e5c2fe-9dd9-4bcf-abc3-812522bf4546.jpg?versionId=EACweAgvEeQe.tmGhQhVxpZDBnOrt3ny" alt="Kian, gray tabby"><div class="catCardText"><h3>Kian</h3></div></a></div><div class="allPetfinderCta"><a class="btn teal" href="https://www.petfinder.com/member/us/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/" target="_blank" rel="noopener">View all adoptable kittens on Petfinder</a></div></div></section><section class="section soft" id="process"><div class="wrap"><div class="center"><div class="eyebrow">A thoughtful match</div><h2>How adoption works.</h2><p class="lead">The rescue wants every cat to find a safe, lasting home and every adopter to find the right companion.</p></div><div class="steps"><div class="step"><strong>STEP 01</strong><h3>Tell us who interests you</h3><p class="muted">Send an inquiry through the website, email, or phone and let the team know which cat you’d like to meet.</p></div><div class="step"><strong>STEP 02</strong><h3>Complete an application</h3><p class="muted">The rescue will send an adoption application for you to complete and return for review.</p></div><div class="step"><strong>STEP 03</strong><h3>Meet your potential match</h3><p class="muted">Once an application is approved, the team arranges an in-person meet-and-greet.</p></div></div><p class="center" style="margin-top:25px"><a class="btn teal" href="https://www.nopawsleftbehindkittyrescue.com/forms" target="_blank" rel="noopener">View current adoption application forms ↗</a></p></div></section><section class="section" id="care"><div class="wrap split"><div><div class="eyebrow">Prepared for a new beginning</div><h2>Care comes first.</h2><p class="muted">Before adoption, kitties in the rescue’s care receive the appropriate veterinary and wellness services needed to prepare them for their new homes.</p><ul class="list"><li>Spay or neuter</li><li>Vaccinations</li><li>Testing for common feline diseases</li><li>Microchipping</li><li>Flea treatment and deworming</li><li>Behavioral assessment and necessary medical care</li></ul></div><div class="panel"><h3>Looking for a particular kind of companion?</h3><p class="muted">Tell the rescue about your home, household, and the kind of cat you hope to welcome. The team can help you think through a good fit.</p><a class="btn pink" href="contact.html">Ask about adoption</a></div></div></section><section class="section soft" id="faq"><div class="wrap center"><h2>Adoption questions</h2><div class="faq"><details><summary>Where can I see available cats?</summary><p>Visit the rescue’s Petfinder profile for current listings. Adoption events at local pet stores are another way to meet kitties.</p></details><details><summary>Can I meet a cat before applying?</summary><p>The rescue’s process begins with an inquiry and application review. Once an application is approved, the team schedules an in-person meet-and-greet.</p></details><details><summary>What if I don't see the right cat today?</summary><p>Check back on Petfinder and contact the rescue. New cats and kittens may become available as they enter care and prepare for adoption.</p></details></div></div></section>`,
"cyrus":`<section class="section catTop"><div class="wrap"><div class="catProfile"><div><div class="catGallery"><img class="catHeroImg" src="https://dbw3zep4prcju.cloudfront.net/animal/df8ae764-a6cd-4113-9e02-4df386b86e8f/image/41dba893-1e4b-4315-9274-f2bd6f1f913b.jpg?versionId=TmlLFe3rGN7psyZDlJjn9aXMGG8vFFld" alt="Cyrus, gray tabby"><div class="catThumbs"><button class="catThumb active" data-image="https://dbw3zep4prcju.cloudfront.net/animal/df8ae764-a6cd-4113-9e02-4df386b86e8f/image/41dba893-1e4b-4315-9274-f2bd6f1f913b.jpg?versionId=TmlLFe3rGN7psyZDlJjn9aXMGG8vFFld"><img src="https://dbw3zep4prcju.cloudfront.net/animal/df8ae764-a6cd-4113-9e02-4df386b86e8f/image/41dba893-1e4b-4315-9274-f2bd6f1f913b.jpg?versionId=TmlLFe3rGN7psyZDlJjn9aXMGG8vFFld" alt="Cyrus photo 1"></button><button class="catThumb" data-image="https://dbw3zep4prcju.cloudfront.net/animal/df8ae764-a6cd-4113-9e02-4df386b86e8f/image/3bd72f16-a6f9-458f-8783-6ee0f4c1b29d.jpg?versionId=1OKHGzP4tNc.XKL2TMnrVkS5V1sQiVVh"><img src="https://dbw3zep4prcju.cloudfront.net/animal/df8ae764-a6cd-4113-9e02-4df386b86e8f/image/3bd72f16-a6f9-458f-8783-6ee0f4c1b29d.jpg?versionId=1OKHGzP4tNc.XKL2TMnrVkS5V1sQiVVh" alt="Cyrus photo 2"></button><button class="catThumb" data-image="https://dbw3zep4prcju.cloudfront.net/animal/df8ae764-a6cd-4113-9e02-4df386b86e8f/image/7868a75e-3e46-405e-b9a0-2435a7d1bdc8.jpg?versionId=eHt6iw5zhfQOJYXRaYkmxmBVl7Jfc7c9"><img src="https://dbw3zep4prcju.cloudfront.net/animal/df8ae764-a6cd-4113-9e02-4df386b86e8f/image/7868a75e-3e46-405e-b9a0-2435a7d1bdc8.jpg?versionId=eHt6iw5zhfQOJYXRaYkmxmBVl7Jfc7c9" alt="Cyrus photo 3"></button><button class="catThumb" data-image="https://dbw3zep4prcju.cloudfront.net/animal/df8ae764-a6cd-4113-9e02-4df386b86e8f/image/8477e7f3-b9b8-43f6-af8b-09d1e8be0b77.jpg?versionId=X2FuzobnA48Z9btegf_NXMJc19G3km8f"><img src="https://dbw3zep4prcju.cloudfront.net/animal/df8ae764-a6cd-4113-9e02-4df386b86e8f/image/8477e7f3-b9b8-43f6-af8b-09d1e8be0b77.jpg?versionId=X2FuzobnA48Z9btegf_NXMJc19G3km8f" alt="Cyrus photo 4"></button></div><div class="catVideos"><a class="catVideoPreview" href="https://www.petfinder.com/cat/cyrus-df8ae764-a6cd-4113-9e02-4df386b86e8f/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/" target="_blank" rel="noopener"><img src="https://dbw3zep4prcju.cloudfront.net/animal/df8ae764-a6cd-4113-9e02-4df386b86e8f/video/de5ff688-aa74-4688-808b-31700f4a6217_thumb.0000001.jpg" alt="Cyrus video 1 preview"><span>▶ Watch Cyrus on Petfinder</span></a><a class="catVideoPreview" href="https://www.petfinder.com/cat/cyrus-df8ae764-a6cd-4113-9e02-4df386b86e8f/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/" target="_blank" rel="noopener"><img src="https://dbw3zep4prcju.cloudfront.net/animal/df8ae764-a6cd-4113-9e02-4df386b86e8f/video/a7de66ac-6765-4e9a-b2c3-be55c03d36fc_thumb.0000001.jpg" alt="Cyrus video 2 preview"><span>▶ Watch Cyrus on Petfinder</span></a></div></div><div class="catTitle catTitleUnder"><h1>Cyrus</h1><p>Playful, curious, savvy — and always up to something.</p></div></div><div class="catIntro"><div class="catQuick"><div><small>Age</small><strong>'+(pet.age||"Kitten · under 1 year")+'</strong></div><div><small>Gender</small><strong>Male</strong></div><div><small>Adoption fee</small><strong>$200</strong></div><div><small>Breed</small><strong>Tabby</strong></div></div><a class="btn pink" href="mailto:contact@nopawsleftbehindkittyrescue.com?subject=Adoption%20inquiry%20for%20Cyrus%20and%20Kian">Ask about adopting Cyrus & Kian</a><div class="pairPanel bondedPanel"><div class="eyebrow">Bonded Pair: <a href="kian.html">Kian</a></div><p>Cyrus and Kian are a bonded pair looking for a home together.</p><p>Together, they make the sweetest little team, ready to fill their new home with cuddles, playtime, and plenty of love.</p><div class="policyDivider"><div class="eyebrow">Adoption Policy</div><p>Per our adoption policy, kittens five months and younger are adopted in pairs, and bonded pairs must be adopted together.</p></div></div></div></div></section><section class="section soft"><div class="wrap catSections"><article class="panel"><div class="eyebrow">His story</div><h2>Meet Cyrus</h2><p><strong>Meet Cyrus: The Kirkland Towel Criminal</strong></p><p>Cyrus came from a hoarding situation, but thanks to JJ’s loving acceptance and Kian’s nonstop kitten nonsense, he’s blossoming into a playful, curious little guy.</p><p>He’s still slower to warm up to humans, but once he trusts you, you’ll discover his true personality: a highly specialized thief with a deep emotional attachment to kitchen towels.</p><p>Not just any towels. Kirkland towels.</p><p>And toilet paper? Hide it. Lock it up. Put it on the moon. Cyrus WILL find a way to reach it, and frankly, nobody understands how he keeps getting up there. Scientists are baffled.</p><p>Cyrus is also obsessed with the cat wheel and can often be seen sprinting on it like he’s training for an upcoming marathon nobody signed him up for.</p><p>He loves cat trees, wrestling with Kian, and launching himself off furniture with complete confidence in physics.</p><p>Because Cyrus and Kian are so bonded and close in age, they would love to continue their adventures together in the same forever home.</p><p>Together, this little family brings the perfect mix of sweetness, comedy, cuddles, and total household destruction. In other words: peak cat ownership.</p></article><article class="panel"><div class="eyebrow">Health & care</div><h2>Care checklist</h2><div class="careGrid"><div class="careItem"><span>✓</span><strong>Neutered</strong></div><div class="careItem"><span>✓</span><strong>Vaccinated</strong></div><div class="careItem"><span>✓</span><strong>Dewormed</strong></div><div class="careItem"><span>✓</span><strong>Flea-treated</strong></div><div class="careItem"><span>✓</span><strong>Microchipped</strong></div><div class="careItem"><span>✓</span><strong>Fostered & socialized</strong></div><div class="careItem"><span>✓</span><strong>Special needs: No</strong></div><div class="careItem"><span>✓</span><strong>Declawed: No</strong></div></div></article><article class="panel"><div class="eyebrow">Ideal home</div><h2>Compatibility</h2><div class="compatGrid"><div><span>Children</span><strong>Yes</strong></div><div><span>Dogs</span><strong>Yes</strong></div><div><span>Other cats</span><strong>Yes</strong></div><div><span>Other animals</span><strong>Unknown</strong></div></div><p class="compatDisclaimer">A smooth transition into a new home starts with slow, positive interactions. Every cat is different, so we encourage you to reach out to us directly with any questions about compatibility or introducing a new cat to your household. We’re happy to help.</p></article><article class="panel adoptPanel"><div class="eyebrow">How to adopt</div><h2>Ready to meet Cyrus?</h2><ol class="list"><li>Send an inquiry and mention Cyrus and Kian.</li><li>Complete the adoption application provided by the rescue.</li><li>Once approved, arrange an in-person meet-and-greet.</li></ol><p class="muted">You can arrange an in-person meet-and-greet or come visit us at one of our weekend adoption event locations.</p><a class="btn teal" href="mailto:contact@nopawsleftbehindkittyrescue.com?subject=Adoption%20inquiry%20for%20Cyrus%20and%20Kian">Inquire about Cyrus & Kian</a></article></div></section>`,
"kian":`<section class="section catTop"><div class="wrap"><div class="catProfile"><div><div class="catGallery"><img class="catHeroImg" src="https://dbw3zep4prcju.cloudfront.net/animal/d660405a-2caa-4c1e-9d5b-1186a865fb08/image/06e5c2fe-9dd9-4bcf-abc3-812522bf4546.jpg?versionId=EACweAgvEeQe.tmGhQhVxpZDBnOrt3ny" alt="Kian, gray tabby"><div class="catThumbs"><button class="catThumb active" data-image="https://dbw3zep4prcju.cloudfront.net/animal/d660405a-2caa-4c1e-9d5b-1186a865fb08/image/06e5c2fe-9dd9-4bcf-abc3-812522bf4546.jpg?versionId=EACweAgvEeQe.tmGhQhVxpZDBnOrt3ny"><img src="https://dbw3zep4prcju.cloudfront.net/animal/d660405a-2caa-4c1e-9d5b-1186a865fb08/image/06e5c2fe-9dd9-4bcf-abc3-812522bf4546.jpg?versionId=EACweAgvEeQe.tmGhQhVxpZDBnOrt3ny" alt="Kian photo 1"></button><button class="catThumb" data-image="https://dbw3zep4prcju.cloudfront.net/animal/d660405a-2caa-4c1e-9d5b-1186a865fb08/image/849ea916-8bd0-457a-bc7d-32f24a0df386.jpg?versionId=FUar8Cbl5qVc78Y_AcBZ_ElcOS_aWi9U"><img src="https://dbw3zep4prcju.cloudfront.net/animal/d660405a-2caa-4c1e-9d5b-1186a865fb08/image/849ea916-8bd0-457a-bc7d-32f24a0df386.jpg?versionId=FUar8Cbl5qVc78Y_AcBZ_ElcOS_aWi9U" alt="Kian photo 2"></button><button class="catThumb" data-image="https://dbw3zep4prcju.cloudfront.net/animal/d660405a-2caa-4c1e-9d5b-1186a865fb08/image/8e968974-b469-43b8-9cb7-02c27d37b9da.jpg?versionId=uy3GTSSzOPbXSdR3xYcdDsrEKL9sXE76"><img src="https://dbw3zep4prcju.cloudfront.net/animal/d660405a-2caa-4c1e-9d5b-1186a865fb08/image/8e968974-b469-43b8-9cb7-02c27d37b9da.jpg?versionId=uy3GTSSzOPbXSdR3xYcdDsrEKL9sXE76" alt="Kian photo 3"></button><button class="catThumb" data-image="https://dbw3zep4prcju.cloudfront.net/animal/d660405a-2caa-4c1e-9d5b-1186a865fb08/image/0f3762d2-807b-4ccf-9978-50c2fa910201.jpg?versionId=BsliFeBPRF1wy1sIfAA09nhQLQ4OVtTD"><img src="https://dbw3zep4prcju.cloudfront.net/animal/d660405a-2caa-4c1e-9d5b-1186a865fb08/image/0f3762d2-807b-4ccf-9978-50c2fa910201.jpg?versionId=BsliFeBPRF1wy1sIfAA09nhQLQ4OVtTD" alt="Kian photo 4"></button></div><div class="catVideos"><a class="catVideoPreview" href="https://www.petfinder.com/cat/kian-d660405a-2caa-4c1e-9d5b-1186a865fb08/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/" target="_blank" rel="noopener"><img src="https://dbw3zep4prcju.cloudfront.net/animal/d660405a-2caa-4c1e-9d5b-1186a865fb08/video/e84a8632-15ef-4bb2-a08d-d4f78cda974e_thumb.0000001.jpg" alt="Kian video 1 preview"><span>▶ Watch Kian on Petfinder</span></a><a class="catVideoPreview" href="https://www.petfinder.com/cat/kian-d660405a-2caa-4c1e-9d5b-1186a865fb08/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/" target="_blank" rel="noopener"><img src="https://dbw3zep4prcju.cloudfront.net/animal/d660405a-2caa-4c1e-9d5b-1186a865fb08/video/8d7ff616-c54f-4bc2-b369-644e6c4fbd07_thumb.0000001.jpg" alt="Kian video 2 preview"><span>▶ Watch Kian on Petfinder</span></a></div></div><div class="catTitle catTitleUnder"><h1>Kian</h1><p>Cyrus’s foster brother, bonded companion, and partner in all their adventures.</p></div><div class="videoNote"><strong>Kian’s videos</strong><p>His Petfinder listing includes two videos. We’ll bring those into this gallery when the original video files are available to embed.</p><a href="https://www.petfinder.com/cat/kian-d660405a-2caa-4c1e-9d5b-1186a865fb08/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/" target="_blank" rel="noopener">Watch Kian’s videos on Petfinder ↗</a></div></div><div class="catIntro"><div class="catQuick"><div><small>Age</small><strong>'+(pet.age||"Kitten · under 1 year")+'</strong></div><div><small>Gender</small><strong>Male</strong></div><div><small>Adoption fee</small><strong>$200</strong></div><div><small>Breed</small><strong>Tabby</strong></div></div><a class="btn pink" href="mailto:contact@nopawsleftbehindkittyrescue.com?subject=Adoption%20inquiry%20for%20Kian%20and%20Cyrus">Ask about adopting Kian & Cyrus</a><div class="pairPanel bondedPanel"><div class="eyebrow">Bonded Pair: <a href="cyrus.html">Cyrus</a></div><p>Kian and Cyrus are a bonded pair looking for a home together.</p><p>Together, they make the sweetest little team, ready to fill their new home with cuddles, playtime, and plenty of love.</p><div class="policyDivider"><div class="eyebrow">Adoption Policy</div><p>Per our adoption policy, kittens five months and younger are adopted in pairs, and bonded pairs must be adopted together.</p></div></div></div></div></section><section class="section soft"><div class="wrap catSections"><article class="panel"><div class="eyebrow">His story</div><h2>Meet Kian</h2><p><strong>Meet Kian: Flip-Flop Bandit &amp; Toe Enthusiast</strong></p><p>Kian is approximately 70 days old and already training for the Kitty Olympics. His hobbies include parkour, surprise attacks on unsuspecting toes, and stealing foster mom’s flip-flops like they owe him money.</p><p>Seriously, if you wear sandals around Kian, you are participating in his enrichment activities.</p><p>This playful little guy inherited JJ’s confidence and athleticism. Cat trees? Climbed. Furniture? Conquered. Human personal space? Optional.</p><p>Kian absolutely loves other cats and would love to stay with his adopted brother Cyrus, who joined the family later so Kian could have a buddy his age. Together, they zoom through the house like caffeinated squirrels.</p><p>Despite his chaotic tiny gremlin energy, Kian is incredibly loving and social.</p><p>When he finally crashes after his 87th wrestling match of the day, he transforms into a sweet cuddlebug who just wants affection and snacks.</p></article><article class="panel"><div class="eyebrow">Health & care</div><h2>Care checklist</h2><div class="careGrid"><div class="careItem"><span>✓</span><strong>Neutered</strong></div><div class="careItem"><span>✓</span><strong>Vaccinated</strong></div><div class="careItem"><span>✓</span><strong>Dewormed</strong></div><div class="careItem"><span>✓</span><strong>Flea-treated</strong></div><div class="careItem"><span>✓</span><strong>Microchipped</strong></div><div class="careItem"><span>✓</span><strong>Fostered & socialized</strong></div><div class="careItem"><span>✓</span><strong>Special needs: No</strong></div><div class="careItem"><span>✓</span><strong>Declawed: No</strong></div></div></article><article class="panel"><div class="eyebrow">Ideal home</div><h2>Compatibility</h2><div class="compatGrid"><div><span>Children</span><strong>Yes</strong></div><div><span>Dogs</span><strong>Yes</strong></div><div><span>Other cats</span><strong>Yes</strong></div><div><span>Other animals</span><strong>Unknown</strong></div></div><p class="compatDisclaimer">A smooth transition into a new home starts with slow, positive interactions. Every cat is different, so we encourage you to reach out to us directly with any questions about compatibility or introducing a new cat to your household. We’re happy to help.</p></article><article class="panel adoptPanel"><div class="eyebrow">How to adopt</div><h2>Ready to meet Kian?</h2><ol class="list"><li>Send an inquiry and mention Kian and Cyrus.</li><li>Complete the adoption application provided by the rescue.</li><li>Once approved, arrange an in-person meet-and-greet.</li></ol><a class="btn teal" href="mailto:contact@nopawsleftbehindkittyrescue.com?subject=Adoption%20inquiry%20for%20Kian%20and%20Cyrus">Inquire about Kian & Cyrus</a></article></div></section><section class="section"><div class="wrap center"><a class="btn light" style="border:1px solid var(--line)" href="adopt.html">← Back to all adoptable cats</a></div></section>`,
"involved":`<section class="pageHero"><div class="wrap"><div class="crumb">Make a difference</div><h1>There’s a place for you in rescue.</h1><p>Not everyone can foster, and that’s okay. The rescue needs all kinds of volunteers — from event helpers and drivers to people who can lend a hand with fundraising, outreach, and everyday tasks.</p><div class="subnav"><a href="#roles">Volunteer roles</a><a href="foster.html">Foster care</a><a href="#start">Get started</a></div></div></section><section class="section" id="roles"><div class="wrap center"><div class="eyebrow">Many ways to help</div><h2>Give your time in a way that fits.</h2><p class="lead">A few hours, a specific skill, or a helping hand at the right moment can make a real difference.</p><div class="cards"><article class="card"><div class="number">01 / EVENTS</div><h3>Adoption events</h3><p>Help set up, welcome visitors, share information about the cats, and support the team at local pet-store adoption events.</p></article><article class="card"><div class="number">02 / TRANSPORT</div><h3>Transportation</h3><p>Help move cats and supplies between foster homes, veterinary appointments, and other approved destinations.</p></article><article class="card"><div class="number">03 / FUNDRAISING</div><h3>Fundraising support</h3><p>Assist with fundraising events, donation drives, supply collections, and community campaigns.</p></article><article class="card"><div class="number">04 / OUTREACH</div><h3>Flyers & community outreach</h3><p>Help distribute flyers, share adoption posts, and spread the word about rescue programs and events.</p></article><article class="card"><div class="number">05 / BEHIND THE SCENES</div><h3>General volunteer help</h3><p>Offer practical help with projects and tasks that keep a volunteer-powered rescue moving.</p></article><article class="card"><div class="number">06 / FOSTER CARE</div><h3>Become a foster caregiver</h3><p>Fostering is a more hands-on volunteer role: caring for cats and kittens in your home while they prepare for adoption.</p><a class="more" href="foster.html">Explore fostering →</a></article></div></div></section><section class="section soft" id="start"><div class="wrap split"><div><div class="eyebrow">Ready to help?</div><h2>Let's find the right role for you.</h2><p class="muted">Let the rescue know what you’re interested in, what your availability looks like, and whether you have experience or skills you’d like to share.</p><a class="btn pink" href="https://www.nopawsleftbehindkittyrescue.com/forms" target="_blank" rel="noopener">View volunteer application ↗</a></div><div class="panel"><h3>Prefer a more hands-on role?</h3><p class="muted">Foster caregivers provide day-to-day care in their homes. The rescue can explain the commitment, support, and needs of the cats waiting for placement.</p><a class="btn teal" href="foster.html">Learn about fostering</a></div></div></section>`,
foster:`<section class="pageHero"><div class="wrap"><div class="crumb">Foster care</div><h1>A safe room can change a little life.</h1><p>Foster caregivers are a vital part of the rescue. They provide a temporary home, daily care, and the patience kittens and cats need while they grow, heal, and get ready for adoption.</p><div class="subnav"><a href="#role">What fosters do</a><a href="#support">Rescue support</a><a href="#apply">How to apply</a></div></div></section><section class="section" id="role"><div class="wrap split"><div><div class="eyebrow">More than a spare room</div><h2>Fostering is hands-on care.</h2><p class="muted">Unlike general volunteer roles, fostering means welcoming a cat or kitten into your home and taking responsibility for their everyday needs during their foster stay.</p><ul class="list"><li>Provide a safe, calm, and clean space</li><li>Offer food, water, comfort, and daily attention</li><li>Help kittens socialize and build confidence</li><li>Observe behavior and share updates with the rescue</li><li>Help prepare each kitty for a successful adoption</li></ul></div><div class="panel"><h3>New to fostering?</h3><p class="muted">You do not need to know everything on day one. Reach out to discuss what fostering involves, what type of placement may be suitable, and what questions you have before making a commitment.</p></div></div></section><section class="section soft" id="support"><div class="wrap center"><div class="eyebrow">A team effort</div><h2>You provide the home. The rescue coordinates the care.</h2><p class="lead">The rescue works with foster caregivers and veterinary partners to provide appropriate care for cats while they are in the program. Exact supplies, costs, and support arrangements should be confirmed with the rescue before a foster placement begins.</p><div class="cards"><article class="card"><h3>Communication</h3><p>Stay connected with the rescue about the cat’s needs, behavior, progress, and adoption readiness.</p></article><article class="card"><h3>Veterinary care</h3><p>Coordinate appointments and medical needs with the rescue rather than arranging treatment independently.</p></article><article class="card"><h3>Adoption journey</h3><p>Help the kitty become comfortable with people and everyday home life while the rescue works toward a permanent match.</p></article></div></div></section><section class="section" id="apply"><div class="wrap split"><div><div class="eyebrow">Take the first step</div><h2>Interested in becoming a foster?</h2><p class="muted">Start by reviewing the rescue’s current foster application. You can also contact the team with questions about timing, space, resident pets, and the types of cats who need foster homes.</p><a class="btn pink" href="https://www.nopawsleftbehindkittyrescue.com/forms" target="_blank" rel="noopener">View foster application ↗</a></div><div class="panel"><h3>Fostering is one kind of volunteering.</h3><p class="muted">If fostering isn't right for you right now, there are still many ways to help at adoption events, with transportation, fundraising, and community outreach.</p><a class="btn teal" href="get-involved.html">Explore volunteer roles</a></div></div></section>`,
tnr:`<section class="pageHero"><div class="wrap"><div class="crumb">Community cat care</div><h1>What is TNR — and why does it matter?</h1><p>Trap-Neuter-Return is a humane, community-based approach to helping free-roaming cats. It prevents future litters, supports healthier colonies, and allows cats who are not suited to indoor life to remain in familiar territory.</p><div class="subnav"><a href="#what">What TNR means</a><a href="#steps">How it works</a><a href="#benefits">Why it matters</a><a href="#help">How to help</a></div></div></section><section class="section" id="what"><div class="wrap split"><div><div class="eyebrow">Trap. Neuter. Return.</div><h2>A practical, humane solution for community cats.</h2><p class="muted">Community cats may live outdoors and may be unsocialized or fearful of people. TNR allows them to be humanely trapped, sterilized, vaccinated, identified, and returned to their outdoor home when it is safe and appropriate.</p><p class="muted">Friendly adult cats and kittens young enough to be socialized may instead be placed into foster care and considered for adoption.</p></div><div class="panel"><h3>Why not simply relocate them?</h3><p class="muted">Cats are strongly connected to their territory. Relocation can be stressful and may create new problems if another colony moves into the area. TNR focuses on stabilizing the colony where the cats already live, with care and local coordination.</p></div></div></section><section class="section soft" id="steps"><div class="wrap"><div class="center"><div class="eyebrow">The process</div><h2>How TNR works.</h2><p class="lead">Every situation is different, and trapping should be planned with experienced people and local veterinary partners.</p></div><div class="steps"><div class="step"><strong>01 / TRAP</strong><h3>Humane trapping</h3><p class="muted">Cats are safely captured using humane traps by trained caregivers or with experienced guidance.</p></div><div class="step"><strong>02 / NEUTER</strong><h3>Veterinary care</h3><p class="muted">Cats receive spay/neuter surgery and appropriate care, which may include vaccination and an ear-tip for clear identification.</p></div><div class="step"><strong>03 / RETURN</strong><h3>Return to their territory</h3><p class="muted">Once recovered and when safe to do so, cats are returned to the area they know, with ongoing colony care where possible.</p></div></div></div></section><section class="section" id="benefits"><div class="wrap center"><div class="eyebrow">Long-term community impact</div><h2>Why TNR makes a difference.</h2><div class="cards"><article class="card"><h3>Fewer unwanted litters</h3><p>Sterilization prevents cats from producing more kittens and helps stabilize colony size over time.</p></article><article class="card"><h3>Healthier cats</h3><p>Veterinary care and vaccination can improve the well-being of cats in managed colonies.</p></article><article class="card"><h3>More humane outcomes</h3><p>TNR offers a non-lethal approach for cats who are not candidates for traditional adoption.</p></article></div></div></section><section class="section tint" id="help"><div class="wrap split"><div><div class="eyebrow">You can help</div><h2>Start with a conversation.</h2><p class="muted">If you are caring for community cats or have noticed an outdoor colony, contact the rescue before attempting to trap cats. Share the location, approximate number of cats, and any urgent concerns. The rescue evaluates requests based on urgency, location, resources, and volunteer availability.</p><a class="btn teal" href="contact.html">Ask about TNR support</a></div><div class="panel"><h3>Ways to support TNR</h3><ul class="list"><li>Share accurate information with neighbors</li><li>Help coordinate food and colony observations</li><li>Support spay/neuter costs and veterinary care</li><li>Volunteer or help connect caregivers with local resources</li><li>Keep cats safe and avoid moving traps or trapped animals without guidance</li></ul></div></div></section>`,
about:`<section class="pageHero"><div class="wrap"><div class="crumb">Our rescue</div><h1>Compassion for cats. Commitment to community.</h1><p>No Paws Left Behind Kitty Rescue is a volunteer-based 501(c)(3) animal welfare organization dedicated to rescuing homeless cats and kittens from overcrowded shelters and assisting local community members.</p></div></section><section class="section"><div class="wrap split"><div><div class="eyebrow">Our mission</div><h2>Every cat deserves safety and a chance.</h2><p class="muted">The rescue works with foster caregivers, local veterinarians, shelters, and volunteer advocates to help cats and kittens receive care and find permanent homes. It also assists with Trap-Neuter-Return efforts to help community cats and prevent unwanted litters.</p><p class="muted">The rescue’s approach includes helping kittens and adult cats, supporting cats with medical needs, and recognizing the importance of keeping elderly pets with their bonded families whenever possible.</p></div><div class="panel"><h3>What happens while a cat is in care?</h3><p class="muted">Cats receive appropriate medical care, spay/neuter, testing for common diseases, behavioral assessment, microchipping, and vaccinations before adoption, as appropriate to each animal.</p></div></div></section><section class="section soft"><div class="wrap center"><div class="eyebrow">The people behind the paws</div><h2>A volunteer-powered community.</h2><p class="lead">The rescue depends on a network of foster caregivers, adopters, volunteers, veterinary partners, shelters, and donors. Every role helps make the work possible.</p><div class="cards"><article class="card"><h3>Foster caregivers</h3><p>Provide safe homes and daily care while cats prepare for adoption.</p></article><article class="card"><h3>Volunteers</h3><p>Help with events, transportation, fundraising, outreach, and practical tasks.</p></article><article class="card"><h3>Community supporters</h3><p>Help fund veterinary care, supplies, and programs that support cats in need.</p></article></div></div></section>`,
resources:`<section class="pageHero"><div class="wrap"><div class="crumb">Helpful information</div><h1>Resources for cats and the people who care for them.</h1><p>Find a starting point for adoption, fostering, community cat care, and local animal services. If the rescue cannot assist directly, it will make every effort to connect people with an appropriate local resource.</p></div></section><section class="section"><div class="wrap"><div class="cards"><article class="card"><div class="number">ADOPTION</div><h3>Adoption applications</h3><p>Current printable and editable adoption application forms are available through the rescue’s forms page.</p><a class="more" href="https://www.nopawsleftbehindkittyrescue.com/forms" target="_blank" rel="noopener">Open adoption forms ↗</a></article><article class="card"><div class="number">FOSTER & VOLUNTEER</div><h3>Foster and volunteer forms</h3><p>Review the current foster application and volunteer application before getting started.</p><a class="more" href="https://www.nopawsleftbehindkittyrescue.com/forms" target="_blank" rel="noopener">Open foster & volunteer forms ↗</a></article><article class="card"><div class="number">ADOPTABLE PETS</div><h3>Petfinder</h3><p>View current cats and kittens listed by No Paws Left Behind Kitty Rescue.</p><a class="more" href="https://www.petfinder.com/member/us/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/" target="_blank" rel="noopener">View Petfinder profile ↗</a></article><article class="card"><div class="number">LOCAL SERVICES</div><h3>Animal shelters</h3><p>For urgent or time-sensitive animal welfare needs, contact your local city or county animal services agency.</p><a class="more" href="https://www.contracosta.ca.gov/animalservices" target="_blank" rel="noopener">Contra Costa Animal Services ↗</a></article><article class="card"><div class="number">COMMUNITY CATS</div><h3>Learn about TNR</h3><p>Understand humane trapping, spay/neuter, vaccination, identification, and return.</p><a class="more" href="tnr.html">Read the TNR guide →</a></article><article class="card"><div class="number">GET HELP</div><h3>Contact the rescue</h3><p>The rescue evaluates requests based on urgency, location, the number of animals, and available resources.</p><a class="more" href="contact.html">Contact details →</a></article></div></div></section>`,
donate:`<section class="pageHero"><div class="wrap"><div class="crumb">Support the rescue</div><h1>Your generosity helps cats get the care they need.</h1><p>Donations help provide veterinary care, food, supplies, and support for cats and kittens in the rescue’s care, as well as community TNR efforts.</p></div></section><section class="section"><div class="wrap"><div class="cards"><article class="card"><div class="number">ONLINE GIVING</div><h3>Donate through PayPal</h3><p>Use the official donation button on the rescue’s existing donation page. We’ll replace this link with the confirmed direct destination before launch.</p><a class="more" href="https://www.nopawsleftbehindkittyrescue.com/donate" target="_blank" rel="noopener">Open official donation page ↗</a></article><article class="card"><div class="number">VENMO</div><h3>Give through Venmo</h3><p>Official handle listed by the rescue: @nopawsleftbehindkittyrescue. Please verify the recipient name before sending.</p><p style="font-weight:900;color:var(--teal)">@nopawsleftbehindkittyrescue</p></article><article class="card"><div class="number">WISH LIST</div><h3>Send needed supplies</h3><p>Shop the rescue’s Amazon wish list through the official donation page to help provide practical supplies.</p><a class="more" href="https://www.nopawsleftbehindkittyrescue.com/donate" target="_blank" rel="noopener">Find the wish list ↗</a></article></div><div class="panel" style="margin-top:22px"><h3>Prefer to mail a donation?</h3><p class="muted">Checks or money orders may be made payable to No Paws Left Behind Kitty Rescue and mailed to 2063 Main Street, #111, Oakley, CA 94561. Please confirm current mailing details before sending.</p><p><strong>501(c)(3) nonprofit · EIN 87-3360962</strong></p></div><p class="muted" style="font-size:12px;margin-top:18px">Donation options and details are based on information currently published by the rescue and should be reconfirmed by the rescue before this redesign goes live.</p></div></section>`,
contact:`<section class="pageHero"><div class="wrap"><div class="crumb">Get in touch</div><h1>We’re here to help you find the right next step.</h1><p>Questions about adoption, fostering, volunteering, donations, or community cats? Reach out to the rescue team.</p></div></section><section class="section"><div class="wrap contactGrid"><div><div class="eyebrow">Contact details</div><h2>Connect with the rescue.</h2><p class="muted">No Paws Left Behind Kitty Rescue receives many requests for help. Each request is evaluated based on urgency, location, number of animals, staff and volunteer availability, and available resources. The rescue focuses on feline welfare in the Northern California East Bay, Tri-Valley, East Contra Costa County, and surrounding communities.</p><p><strong>Email</strong><br><a style="color:var(--teal)" href="mailto:contact@nopawsleftbehindkittyrescue.com">contact@nopawsleftbehindkittyrescue.com</a></p><p><strong>Phone</strong><br><a style="color:var(--teal)" href="tel:+15108548843">(510) 854-8843 (510-8-KITTIES)</a></p><p><strong>Mailing address</strong><br>2063 Main Street, #111<br>Oakley, CA 94561</p><a class="btn teal" href="mailto:contact@nopawsleftbehindkittyrescue.com">Email the rescue</a><div class="actions"><a class="btn light" style="border:1px solid var(--line)" href="https://www.facebook.com/NoPawsLeftBehindKittyRescue/" target="_blank" rel="noopener">Follow on Facebook ↗</a><a class="btn light" style="border:1px solid var(--line)" href="https://www.instagram.com/nopawsleftbehind.kittyrescue/" target="_blank" rel="noopener">Follow on Instagram ↗</a></div></div><div class="panel"><h3>What should I include in my message?</h3><p class="muted">For adoption, tell the team which cat interests you. For TNR or animal assistance requests, include the general location, number of cats, and any urgent concerns. For volunteering, share the kind of help you’re interested in and your availability.</p><div class="notice">This preview uses the rescue’s published contact details. The live contact form and any application workflows will be connected only after the rescue approves them.</div><p style="margin-top:20px"><a class="btn pink" href="mailto:contact@nopawsleftbehindkittyrescue.com?subject=No%20Paws%20Left%20Behind%20Kitty%20Rescue%20Inquiry">Start an email</a><p class="muted" style="margin-top:18px">Stay connected for adoptable kitty spotlights, weekend adoption events, fundraisers, and rescue updates.</p><div class="actions"><a class="more" href="https://www.facebook.com/NoPawsLeftBehindKittyRescue/" target="_blank" rel="noopener">Facebook ↗</a><a class="more" href="https://www.instagram.com/nopawsleftbehind.kittyrescue/" target="_blank" rel="noopener">Instagram ↗</a></div></p></div></div></section>`
};
document.getElementById("site-header").innerHTML=header;
document.getElementById("site-main").innerHTML=pages[page]||pages.home;
document.getElementById("site-footer").innerHTML=footer;
document.getElementById("menu").addEventListener("click",()=>document.getElementById("navlinks").classList.toggle("open"));
document.querySelectorAll(".catThumb").forEach((thumb)=>thumb.addEventListener("click",()=>{const gallery=thumb.closest(".catGallery");const hero=gallery.querySelector(".catHeroImg");hero.src=thumb.dataset.image;gallery.querySelectorAll(".catThumb").forEach(t=>t.classList.remove("active"));thumb.classList.add("active");}));

/* Full-screen photo viewer with keyboard and arrow navigation */
if (page === "cyrus" || page === "kian") {
  const gallery = document.querySelector(".catGallery");
  if (gallery) {
    const hero = gallery.querySelector(".catHeroImg");
    const thumbs = Array.from(gallery.querySelectorAll(".catThumb"));
    const photos = thumbs.map(t => t.dataset.image);
    const modal = document.createElement("div");
    modal.className = "photoLightbox";
    modal.setAttribute("role","dialog");
    modal.setAttribute("aria-modal","true");
    modal.setAttribute("aria-label","Photo gallery");
    modal.innerHTML = '<button class="lightboxClose" aria-label="Close gallery">×</button><button class="lightboxArrow lightboxPrev" aria-label="Previous photo">‹</button><figure><img alt=""><video controls playsinline preload="metadata" hidden></video><figcaption></figcaption></figure><button class="lightboxArrow lightboxNext" aria-label="Next photo">›</button>';
    document.body.appendChild(modal);
    const modalImg = modal.querySelector("img");
    const modalVideo = modal.querySelector("video");
    const caption = modal.querySelector("figcaption");
    let photoIndex = 0;
    const videoFiles = page === "cyrus"
      ? ["/adoptable-kittens/Cyrus/Cyrus-Video-1.mp4","/adoptable-kittens/Cyrus/Cyrus-Video-2.mp4"]
      : ["/adoptable-kittens/Kian/Kian-Video-1.mp4","/adoptable-kittens/Kian/Kian-Video-2.mp4"];
    const videoTiles = Array.from(gallery.querySelectorAll(".catVideoPreview"));
    const showPhoto = (index) => {
      photoIndex = (index + photos.length) % photos.length;
      modalVideo.pause();
      modalVideo.hidden = true;
      modalImg.hidden = false;
      modalImg.src = photos[photoIndex];
      modalImg.alt = (page === "cyrus" ? "Cyrus" : "Kian") + " photo " + (photoIndex + 1);
      caption.textContent = (photoIndex + 1) + " of " + photos.length + " photos";
      thumbs.forEach((t,i)=>t.classList.toggle("active",i===photoIndex));
      hero.src = photos[photoIndex];
    };
    const openViewer = (index) => { showPhoto(index); modal.classList.add("open"); document.body.classList.add("lightboxOpen"); };
    const openVideo = (index) => {
      modalImg.hidden = true;
      modalVideo.hidden = false;
      modalVideo.pause();
      modalVideo.src = videoFiles[index];
      modalVideo.currentTime = 0;
      caption.textContent = "Video " + (index + 1) + " of " + videoFiles.length;
      modal.classList.add("open");
      document.body.classList.add("lightboxOpen");
      modalVideo.play().catch(()=>{});
    };
    const closeViewer = () => {
      modalVideo.pause();
      modalVideo.removeAttribute("src");
      modalVideo.load();
      modal.classList.remove("open");
      document.body.classList.remove("lightboxOpen");
    };
    hero.addEventListener("click",()=>openViewer(Math.max(0,photos.indexOf(hero.src))));
    thumbs.forEach((t,i)=>t.addEventListener("click",()=>openViewer(i)));
    videoTiles.forEach((tile,i)=>{
      tile.href = "#";
      tile.removeAttribute("target");
      tile.addEventListener("click",e=>{e.preventDefault();openVideo(i);});
    });
    modal.querySelector(".lightboxClose").addEventListener("click",closeViewer);
    modal.querySelector(".lightboxPrev").addEventListener("click",()=>showPhoto(photoIndex-1));
    modal.querySelector(".lightboxNext").addEventListener("click",()=>showPhoto(photoIndex+1));
    modal.addEventListener("click",e=>{if(e.target===modal)closeViewer();});
    document.addEventListener("keydown",e=>{
      if(!modal.classList.contains("open"))return;
      if(e.key==="Escape")closeViewer();
      if(e.key==="ArrowLeft")showPhoto(photoIndex-1);
      if(e.key==="ArrowRight")showPhoto(photoIndex+1);
    });
    const photoStrip=gallery.querySelector(".catThumbs");
    const videoStrip=gallery.querySelector(".catVideos");
    const videos=videoStrip ? Array.from(videoStrip.querySelectorAll(".catVideoPreview")) : [];
    if(videoStrip && photoStrip){
      videos.forEach(video=>{
        video.classList.add("galleryVideoTile");
        photoStrip.appendChild(video);
      });
      videoStrip.remove();
    }
    if(photos.length>4 && photoStrip){
      thumbs.slice(3).forEach(t=>t.hidden=true);
      const more=document.createElement("button");
      more.type="button";
      more.className="galleryMoreTile";
      more.innerHTML='<span>View all photos</span><strong>'+photos.length+' photos</strong>';
      more.addEventListener("click",()=>openViewer(3));
      photoStrip.appendChild(more);
    }
    if(videos.length>2 && photoStrip){
      videos.slice(1).forEach(video=>video.hidden=true);
      const more=document.createElement("button");
      more.type="button";
      more.className="galleryMoreTile videoMoreTile";
      more.innerHTML='<span>View all videos</span><strong>'+videos.length+' videos</strong>';
      more.addEventListener("click",()=>{
        videos.slice(1).forEach(video=>video.hidden=false);
        more.remove();
      });
      photoStrip.appendChild(more);
    }
  }
}




/* Individual cat profile layout refinements */

if (page === "adopt") {
  const cyrusCard = document.querySelector('.catCard[href="cyrus.html"] img');
  if (cyrusCard) {
    cyrusCard.addEventListener("error", function retryCardPhoto() {
      cyrusCard.removeEventListener("error", retryCardPhoto);
      cyrusCard.src = "https://dbw3zep4prcju.cloudfront.net/animal/df8ae764-a6cd-4113-9e02-4df386b86e8f/image/7868a75e-3e46-405e-b9a0-2435a7d1bdc8.jpg";
    });
  }
}
if (page === "cyrus" || page === "kian") {
  const catName = page === "cyrus" ? "Cyrus" : "Kian";
  const otherName = page === "cyrus" ? "Kian" : "Cyrus";
  const petfinderUrl = page === "cyrus"
    ? "https://www.petfinder.com/cat/cyrus-df8ae764-a6cd-4113-9e02-4df386b86e8f/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/"
    : "https://www.petfinder.com/cat/kian-d660405a-2caa-4c1e-9d5b-1186a865fb08/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/";
  const top = document.querySelector(".catProfile");
  const intro = document.querySelector(".catIntro");
  const title = document.querySelector(".catTitle");
  const quick = document.querySelector(".catQuick");
  const sections = document.querySelector(".catSections");
  if (top && intro && title && quick && sections) {
    title.classList.remove("catTitleUnder");
    title.classList.add("profileHeading");
    title.querySelector("p")?.remove();
    intro.prepend(title);
    quick.innerHTML =
      '<div><small>Age</small><strong>Kitten · under 1 year</strong></div>' +
      '<div><small>Gender</small><strong>Male</strong></div>' +
      '<div><small>Adoption fee</small><strong>$200</strong></div>' +
      '<div><small>Breed</small><strong>Tabby</strong></div>';
    const actionRow = document.createElement("div");
    actionRow.className = "profileActions";
    actionRow.innerHTML =
      '<a class="btn pink" href="mailto:contact@nopawsleftbehindkittyrescue.com?subject=' +
      encodeURIComponent("Interested in adopting " + catName) +
      '">Interested in adopting ' + catName + '?</a>' +
      '<a class="btn teal" href="' + petfinderUrl +
      '" target="_blank" rel="noopener">View ' + catName + ' on Petfinder</a>';
    const oldAdopt = intro.querySelector("a.btn");
    if (oldAdopt) oldAdopt.remove();
    quick.after(actionRow);
    const pair = intro.querySelector(".pairNotice");
    if (pair) {
      pair.classList.add("pairPanel");
      pair.innerHTML =
        '<div class="eyebrow">Bonded Pair: <a class="pairCatLink" href="' + otherName.toLowerCase() + '.html">' + otherName + '</a></div>' +
        '<p><strong>' + catName + ' and ' + otherName +
        ' are a bonded pair looking for a home together.</strong></p>' +
        '<p>Per our adoption policy, kittens five months and younger are adopted in pairs, and bonded pairs must be adopted together.</p>';
    }
    top.querySelectorAll(".videoNote").forEach(el => el.remove());
    sections.querySelectorAll(".panel").forEach(panel => {
      const heading = panel.querySelector("h2");
      if (!heading) return;
      const label = heading.textContent.trim().toLowerCase();
      if (label === "at a glance" || label === "physical traits") panel.remove();
      if (label === "care checklist") heading.textContent = "Health & Care";
      if (label === "compatibility") {
        const values = panel.querySelectorAll(".compatGrid strong");
        values.forEach(el => { if (el.textContent.trim() === "Confirm") el.textContent = "Yes"; });
        panel.querySelectorAll(".compatNote").forEach(note => note.remove());
        let disclaimer = panel.querySelector(".compatDisclaimer");
        if (!disclaimer) {
          disclaimer = document.createElement("p");
          disclaimer.className = "compatDisclaimer";
          panel.appendChild(disclaimer);
        }
        disclaimer.textContent = "A smooth transition into a new home starts with slow, positive interactions. Every cat is different, so we encourage you to reach out to us directly with any questions about compatibility or introducing a new cat to your household. We’re happy to help.";
        if (page === "cyrus") {
          const shyNote = document.createElement("p");
          shyNote.className = "compatNote";
          shyNote.textContent = "Cyrus is very shy and may take a little longer to warm up to new people. Once he trusts you, he is warm and affectionate.";
          disclaimer.before(shyNote);
        }
      }
      if (label === "meet " + catName.toLowerCase()) heading.textContent = "About " + catName;
      if (label === "ready to meet " + catName.toLowerCase() + "?") heading.textContent = "How to Adopt";
    });
    const care = sections.querySelector(".careGrid");
    if (care) {
      const items = Array.from(care.querySelectorAll(".careItem"));
      const symbols = ["💗","🩺","🐛","🐾","✨","🏡","💛","🐱"];
      items.forEach((item,i) => {
        const span = item.querySelector("span");
        if (span) span.textContent = symbols[i] || "💗";
        item.classList.add(i % 2 ? "careTone1" : "careTone0");
        const strong = item.querySelector("strong");
        if (strong && /special needs/i.test(strong.textContent)) strong.textContent = "Special needs: No";
      });
    }
    const bioPanel = Array.from(sections.querySelectorAll(".panel")).find(panel => {
      const h = panel.querySelector("h2");
      return h && h.textContent.trim() === "About " + catName;
    });
    if (bioPanel) {
      bioPanel.classList.add("bioPanel");
      const eyebrow = bioPanel.querySelector(".eyebrow");
      if (eyebrow) eyebrow.textContent = "Get to know " + catName;
    }
    const adoptPanel = sections.querySelector(".adoptPanel");
    if (adoptPanel) {
      adoptPanel.querySelectorAll("li").forEach(li => {
        li.textContent = li.textContent.replace(new RegExp(catName + " and " + otherName, "gi"), catName);
      });
      let visitNote = adoptPanel.querySelector("p.muted");
      if (!visitNote) {
        visitNote = document.createElement("p");
        visitNote.className = "muted";
        const steps = adoptPanel.querySelector("ol");
        if (steps) steps.after(visitNote);
        else adoptPanel.appendChild(visitNote);
      }
      visitNote.textContent = "You can arrange an in-person meet-and-greet or come visit us at one of our weekend adoption event locations.";
      const btn = adoptPanel.querySelector("a.btn");
      if (btn) {
        btn.textContent = "Interested in adopting " + catName + "?";
        btn.href = "mailto:contact@nopawsleftbehindkittyrescue.com?subject=" + encodeURIComponent("Interested in adopting " + catName);
      }
    }
    const allCats = document.createElement("div");
    allCats.className = "allPetfinderCta";
    allCats.innerHTML = '<a class="btn light" href="https://www.petfinder.com/member/us/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/" target="_blank" rel="noopener">View all adoptable kittens on Petfinder</a>';
    document.querySelector("#site-main").appendChild(allCats);
    const hero = document.querySelector(".catHeroImg");
    if (hero && page === "cyrus") {
      hero.addEventListener("error", function retryPhoto() {
        hero.removeEventListener("error", retryPhoto);
        hero.src = "https://dbw3zep4prcju.cloudfront.net/animal/df8ae764-a6cd-4113-9e02-4df386b86e8f/image/7868a75e-3e46-405e-b9a0-2435a7d1bdc8.jpg";
      });
    }
  }
}


/* First verified Petfinder import batch — individual profiles and roster cards. */
const importedPetProfiles =[
  {
    "name": "Raymond",
    "slug": "raymond",
    "id": "eaad2ec5-2d15-41d5-9967-5abc10225e8d",
    "url": "https://www.petfinder.com/cat/raymond-eaad2ec5-2d15-41d5-9967-5abc10225e8d/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Male",
    "age": "Young · 1–3 years",
    "size": "Medium · 7–11 lbs",
    "breed": "Domestic Medium Hair",
    "coat": "Medium",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/eaad2ec5-2d15-41d5-9967-5abc10225e8d/image/9cadfc13-4334-46ad-b212-a1556aa5e68b.jpg?versionId=OhV55Jdqh5OPw9X.o8OKKzjsTIo8ZWE1",
      "https://dbw3zep4prcju.cloudfront.net/animal/eaad2ec5-2d15-41d5-9967-5abc10225e8d/image/17884bce-2899-4461-a70e-b68014fad15f.jpg?versionId=cnyQHxKi9UQbK0dLNtw_sAr2qZzonn3h",
      "https://dbw3zep4prcju.cloudfront.net/animal/eaad2ec5-2d15-41d5-9967-5abc10225e8d/image/2b0661a8-f64e-49ba-a4ba-fd8b0c4f2013.jpg?versionId=s1lg.USU8JuFcmPt6tQ9IwS1ntBpdVvH",
      "https://dbw3zep4prcju.cloudfront.net/animal/eaad2ec5-2d15-41d5-9967-5abc10225e8d/image/da2d4762-55b7-4b4b-a41f-c7373ef1e9b3.jpg?versionId=885vpiqYNtBUzQh_NNs5MSPK3Yk.P3iq",
      "https://dbw3zep4prcju.cloudfront.net/animal/eaad2ec5-2d15-41d5-9967-5abc10225e8d/image/33687ed1-6702-44a8-b23a-b6430f532108.jpg?versionId=RcR2YnOUHKokOQYwuWLzJaipJfR4vvp8",
      "https://dbw3zep4prcju.cloudfront.net/animal/eaad2ec5-2d15-41d5-9967-5abc10225e8d/image/70fe0846-817a-402f-aa66-29340dc42daf.jpg?versionId=XkdDR6dIOlhsz.18F_o8FkKDEd8HsF6O"
    ],
    "bio": "Meet Raymond! He is a very affectionate, playful boy who absolutely loves being around people. Raymond loves being petted and has the loudest purrs when he’s getting attention, and he’s always happy to play and spend time with his people. Once he feels comfortable, his sweet personality really shines through.",
    "bondedTo": {
      "name": "Wally",
      "url": "wally.html"
    },
    "shyNote": "Raymond was recently returned and may need a little extra time to adjust, feel safe, and build trust in a new environment. A patient home that lets him settle in at his own pace will help him shine."
  },
  {
    "name": "Wally",
    "slug": "wally",
    "id": "064a5676-3e7c-430d-a699-37ba466c2400",
    "url": "https://www.petfinder.com/cat/wally-064a5676-3e7c-430d-a699-37ba466c2400/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Male",
    "age": "Young · 1–3 years",
    "size": "Medium · 7–11 lbs",
    "breed": "Tuxedo",
    "coat": "Short",
    "color": "Black and white / tuxedo",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/064a5676-3e7c-430d-a699-37ba466c2400/image/b4d8d19d-a485-4fe7-ab13-6205d407c0b7.jpg?versionId=ofwswmxo68K9jrBc4QPZV5zkgIcbj4_d",
      "https://dbw3zep4prcju.cloudfront.net/animal/064a5676-3e7c-430d-a699-37ba466c2400/image/916027c6-05f5-4677-a331-8e2c67776465.jpg?versionId=aHOwZCu_MvMXwZx0W8FjE_KTP1plbY8o",
      "https://dbw3zep4prcju.cloudfront.net/animal/064a5676-3e7c-430d-a699-37ba466c2400/image/66a71a08-fabc-4aef-a90b-1d4c8e993f90.jpg?versionId=B_89MnXSS2vIamVHciix9efO6XOGZvC5",
      "https://dbw3zep4prcju.cloudfront.net/animal/064a5676-3e7c-430d-a699-37ba466c2400/image/013802c6-d838-4eba-8e6f-bc0b30fbb794.jpg?versionId=RSz64i_ia.XBZOhNbwy8OAy4Ff4oxRwU",
      "https://dbw3zep4prcju.cloudfront.net/animal/064a5676-3e7c-430d-a699-37ba466c2400/image/634ab0eb-a4a5-4b5b-ac68-d08e964ef49b.jpg?versionId=ocxT_QKKJvTymAB1NWK_UqbykXRu4Ezm",
      "https://dbw3zep4prcju.cloudfront.net/animal/064a5676-3e7c-430d-a699-37ba466c2400/image/39d55786-9c09-4bb7-ac14-96d206576f6a.jpg?versionId=P_LFKIqYU_7vQIHIRvruDlh5m07uStAp"
    ],
    "bio": "Meet Wally! He loves getting pets and will rub against your legs when he wants some attention. When he is especially happy, he may even flop right over! Wally loves to play, purr, and spend time with his people. Once he knows you, he really enjoys being near you and soaking up all the love he can get.",
    "bondedTo": {
      "name": "Raymond",
      "url": "raymond.html"
    },
    "shyNote": "Wally is on the shy and timid side and may need a little time to adjust. A calm, patient home that gives him space to build trust at his own pace will help him feel secure."
  },
  {
    "name": "Valentina",
    "slug": "valentina",
    "id": "5a9bf649-de45-4bcf-b4d1-e47000b82ce7",
    "url": "https://www.petfinder.com/cat/valentina-5a9bf649-de45-4bcf-b4d1-e47000b82ce7/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "size": "Medium · 7–11 lbs",
    "breed": "Tabby",
    "coat": "Short",
    "color": "Buff / tan / fawn tabby and white",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/5a9bf649-de45-4bcf-b4d1-e47000b82ce7/image/7ef57074-f00c-4287-92e6-49eb1856e02f.jpg?versionId=hAsRIT7BXhsvzZ0TwFXIrLAvenu9Akww",
      "https://dbw3zep4prcju.cloudfront.net/animal/5a9bf649-de45-4bcf-b4d1-e47000b82ce7/image/172bb2e8-f0d2-4111-9535-6cdef42cae75.jpg?versionId=YEIvlLIGeNJbnZ6A28goKUStY.niTCb8",
      "https://dbw3zep4prcju.cloudfront.net/animal/5a9bf649-de45-4bcf-b4d1-e47000b82ce7/image/5fe524db-5c3d-4c67-895f-84ea72d68d65.jpg?versionId=9PbxlsC_bZKqaHwYKXTRo5SJWH0i5y64",
      "https://dbw3zep4prcju.cloudfront.net/animal/5a9bf649-de45-4bcf-b4d1-e47000b82ce7/image/ba08cb49-3b21-41f2-b582-0ce2227a15be.jpg?versionId=bQpaW4VCIMs4Qu0O2yHofhqGcIbmrsIl",
      "https://dbw3zep4prcju.cloudfront.net/animal/5a9bf649-de45-4bcf-b4d1-e47000b82ce7/image/3e354712-8b4c-48ed-aa4a-8195d13a1db5.jpg?versionId=eEuFQTv7NTQPh4O2x67B5qPepx8vBp4B"
    ],
    "bio": "Meet Valentina! She is a confident and playful kitten who loves exploring and being curious about everything around her. Valentina is not afraid of much and will often walk right up to people asking for pets. She enjoys being around people and is very social, often purring almost instantly when she is being pet. She is affectionate and playful, truly the best of both worlds.",
    "bond": "Valentina and her brother Diego are a bonded pair looking for a home together. Per our adoption policy, kittens five months and younger are adopted in pairs, and bonded pairs must be adopted together.",
    "other": "Unknown",
    "fee": 200,
    "bondedTo": {
      "name": "Diego",
      "url": "diego.html"
    }
  },
  {
    "name": "Diego",
    "slug": "diego",
    "id": "050b5d9b-599c-4483-98fc-b2957135ac14",
    "url": "https://www.petfinder.com/cat/diego-050b5d9b-599c-4483-98fc-b2957135ac14/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Male",
    "size": "Medium · 7–11 lbs",
    "breed": "Tabby",
    "coat": "Medium",
    "color": "Gray / blue / silver tabby and white",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/050b5d9b-599c-4483-98fc-b2957135ac14/image/ab45258d-8dea-4b82-90bd-56320414c1ec.jpg?versionId=VMEzH43RcO.IxzlAFDfmDCfIpiwxFrNP",
      "https://dbw3zep4prcju.cloudfront.net/animal/050b5d9b-599c-4483-98fc-b2957135ac14/image/46d73e60-a886-436e-9ae8-2c2e817461c5.jpg?versionId=uXbN41ZmAX79HUDu92o6vIT_vusoBT6g",
      "https://dbw3zep4prcju.cloudfront.net/animal/050b5d9b-599c-4483-98fc-b2957135ac14/image/e6d051d8-1f48-4c5d-865a-49f545847100.jpg?versionId=bk1JmQ2X7i.em67G8gxsVwDbUmRe9.Nj",
      "https://dbw3zep4prcju.cloudfront.net/animal/050b5d9b-599c-4483-98fc-b2957135ac14/image/a205d274-e7ca-418f-ae98-2c7fa65d2900.jpg?versionId=e50H8J.9YHTDwfj63B1LfIL9oxLV61t5",
      "https://dbw3zep4prcju.cloudfront.net/animal/050b5d9b-599c-4483-98fc-b2957135ac14/image/e28d4db9-1a6b-4938-aeb3-c2fb68a0801f.jpg?versionId=HS9wAhDgDDz_eTWcbFZR43AUWJclSpzu",
      "https://dbw3zep4prcju.cloudfront.net/animal/050b5d9b-599c-4483-98fc-b2957135ac14/image/ad3cecfe-cab8-4f11-8294-addb8d29b18f.jpg?versionId=p58Qgw5QjsGiXMLr9M4Bges7VXkQ4hbH"
    ],
    "bio": "Meet Diego! He is a super outgoing and playful kitten who spends most of his time running, jumping, wrestling, and climbing with his siblings. Diego loves carrying toys in his mouth and showing them off to anyone. He is social, enjoys being around people, and always wants to be a part of whatever is going on. He loves attention and often puts himself right in the middle of everything just to be involved.",
    "bond": "Diego and his sister Valentina are a bonded pair looking for a home together. Per our adoption policy, kittens five months and younger are adopted in pairs, and bonded pairs must be adopted together.",
    "other": "Unknown",
    "fee": 200,
    "bondedTo": {
      "name": "Valentina",
      "url": "valentina.html"
    }
  },
  {
    "name": "Paloma",
    "slug": "paloma",
    "id": "4a4706d0-5d49-4ff9-bd0a-c969e5d121c0",
    "url": "https://www.petfinder.com/cat/paloma-4a4706d0-5d49-4ff9-bd0a-c969e5d121c0/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Tabby",
    "coat": "Short",
    "color": "Gray / blue / silver tabby and white",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/4a4706d0-5d49-4ff9-bd0a-c969e5d121c0/image/062d1347-ef57-4109-af04-04f58406c392.jpg?versionId=IIk9IR71HL0LUtMZxybUlX.d7XqtSuYa",
      "https://dbw3zep4prcju.cloudfront.net/animal/4a4706d0-5d49-4ff9-bd0a-c969e5d121c0/image/ea636dca-d2a4-4178-84c7-d49772b87aff.jpg?versionId=T73Ol2AUH__1QxR7yRFFdaic7TQyEISl",
      "https://dbw3zep4prcju.cloudfront.net/animal/4a4706d0-5d49-4ff9-bd0a-c969e5d121c0/image/e999e31f-42ad-4128-89d8-963b6a2770ca.jpg?versionId=XVN91FWykfEQqk71LW_lN7bBTXOxQ47.",
      "https://dbw3zep4prcju.cloudfront.net/animal/4a4706d0-5d49-4ff9-bd0a-c969e5d121c0/image/0a568a88-a367-4f43-8356-c1ace1fed422.jpg?versionId=Bwjh9b0YuuSvpoOj7qfmHvgWWBh6Kmaj",
      "https://dbw3zep4prcju.cloudfront.net/animal/4a4706d0-5d49-4ff9-bd0a-c969e5d121c0/image/0b735696-aa27-43e3-ae56-9725c75aa860.jpg?versionId=e7dto91cVifwBpme034E7EVZgS3qETyp",
      "https://dbw3zep4prcju.cloudfront.net/animal/4a4706d0-5d49-4ff9-bd0a-c969e5d121c0/image/bbfa60cf-9507-4075-a77b-f586160bceaa.jpg?versionId=JorVsFGGFDf1JI2iQ5_AZlSbsJEaK4AO"
    ],
    "bio": "Meet Paloma! She is a sweet and gentle kitten who can be a bit shy when meeting new people, but she warms up quickly. Once she feels comfortable, she will happily curl up next to you for attention. She is on the calmer side compared to her siblings and enjoys spending time relaxing with her favorite people. One of her favorite things to do is kneading soft blankets.",
    "shyNote": "Paloma can be a little shy when meeting new people, but she warms up quickly. A gentle introduction and a little patience help her settle in.",
    "bondedTo": {
      "name": "Claudia",
      "url": "claudia.html"
    }
  },
  {
    "name": "Claudia",
    "slug": "claudia",
    "id": "ab77cbff-645f-41c9-9920-514a578d8796",
    "url": "https://www.petfinder.com/cat/claudia-ab77cbff-645f-41c9-9920-514a578d8796/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Domestic Short Hair",
    "coat": "Short",
    "color": "Black",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/ab77cbff-645f-41c9-9920-514a578d8796/image/1a0d0d11-c5b1-4e4f-8589-6fd03948cb2f.jpg?versionId=1NWFL5LEwJZXk4jZ_IoN7Cc1aC2lCvdR",
      "https://dbw3zep4prcju.cloudfront.net/animal/ab77cbff-645f-41c9-9920-514a578d8796/image/dd1dfd3c-dc09-4b04-bf8f-71f8c253efcc.jpg?versionId=K78zqrOWoPFsqzxyRUwsq_UmCWfwuywO",
      "https://dbw3zep4prcju.cloudfront.net/animal/ab77cbff-645f-41c9-9920-514a578d8796/image/900dc332-2291-460c-8f72-d9e4513a0fe3.jpg?versionId=z8b1tXMwhJoA9bUNjJ4WMq0U1wIF.oq5",
      "https://dbw3zep4prcju.cloudfront.net/animal/ab77cbff-645f-41c9-9920-514a578d8796/image/b3b54dcd-c72a-4226-880d-f8fd70d8d9a5.jpg?versionId=effsD0.94nWOZNFwWDzjI_GymXqGPy4A",
      "https://dbw3zep4prcju.cloudfront.net/animal/ab77cbff-645f-41c9-9920-514a578d8796/image/5d4d1f8c-8585-4b7a-9fdb-4a89094c99c1.jpg?versionId=7o3MNMIXBjG1rWt3D0vOK74eqp8AxjS4",
      "https://dbw3zep4prcju.cloudfront.net/animal/ab77cbff-645f-41c9-9920-514a578d8796/image/6b4cd522-4996-41e6-b718-dfb41309f059.jpg?versionId=2qTSoiWDtFam9TjSVuWX8j7RNx.eWs9T"
    ],
    "bio": "Meet Claudia! She loves playing and wrestling with her siblings and never sits out on the fun, always chasing toys and anything that moves. She is affectionate, enjoys pets, and will often purr loudly. At the end of the day, she often chooses to sleep right next to you.",
    "shyNote": "Claudia can be a little shy at first, but she warms up quickly and soon shows her playful, affectionate personality.",
    "bondedTo": {
      "name": "Paloma",
      "url": "paloma.html"
    }
  },
  {
    "name": "Harvey",
    "slug": "harvey",
    "id": "0f0b98a2-0b47-4449-97eb-349c1c9500b6",
    "url": "https://www.petfinder.com/cat/harvey-0f0b98a2-0b47-4449-97eb-349c1c9500b6/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Male",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Tuxedo",
    "coat": "Short",
    "color": "Black & white / tuxedo",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/0f0b98a2-0b47-4449-97eb-349c1c9500b6/image/109bb6e8-1161-4570-bbba-82e72a8d2971.jpg?versionId=2tZ8xr74K4lkLoo.putb4r0mUAcIXQm0",
      "https://dbw3zep4prcju.cloudfront.net/animal/0f0b98a2-0b47-4449-97eb-349c1c9500b6/image/8b85eecc-ca15-42e1-9370-4f08d5888f35.jpg?versionId=zD_zUyeNZ_zcbHYjqmUoboe.STlNEyvN",
      "https://dbw3zep4prcju.cloudfront.net/animal/0f0b98a2-0b47-4449-97eb-349c1c9500b6/image/c05e505a-f06e-4718-ba4e-3f24085257c6.jpg?versionId=JoZhT7jcVdTGEX2WClji0tjk4dC4gFis",
      "https://dbw3zep4prcju.cloudfront.net/animal/0f0b98a2-0b47-4449-97eb-349c1c9500b6/image/16be8648-a2bc-4212-921f-b016e008a47b.jpg?versionId=CE9653760FS_3XwtlZ5oNpHDb3.f9_nN",
      "https://dbw3zep4prcju.cloudfront.net/animal/0f0b98a2-0b47-4449-97eb-349c1c9500b6/image/2d2f4bfd-780f-42f2-9723-b2147533b85f.jpg?versionId=HFdgwXFQxr63JiCqviD798n5wJH3TOgv",
      "https://dbw3zep4prcju.cloudfront.net/animal/0f0b98a2-0b47-4449-97eb-349c1c9500b6/image/20c4ec4a-c858-4535-b641-b20c455da488.jpg?versionId=trRvSwwtrl4a44Bsk_99gwTnDK0ScPJv"
    ],
    "bio": "Meet Harvey! He is a very affectionate kitten who loves people and is happiest when he is being held or included in whatever is going on around him. He loves to play and enjoys just about every toy you can offer. After playtime, he is happiest making biscuits on a soft blanket nearby. He is very food motivated and gets excited for mealtimes.",
    "bondedTo": {
      "name": "Melody",
      "url": "melody.html"
    }
  },
  {
    "name": "Melody",
    "slug": "melody",
    "id": "e047bf81-ef41-4456-8ec4-b212aa61f721",
    "url": "https://www.petfinder.com/cat/melody-e047bf81-ef41-4456-8ec4-b212aa61f721/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Tuxedo",
    "coat": "Short",
    "color": "Black & white / tuxedo",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/e047bf81-ef41-4456-8ec4-b212aa61f721/image/5cc35096-fdd1-4de0-bdf3-2b23124f12d6.jpg?versionId=4UvxmnpE1fwGiiaJkuabiHh750UAWjcx",
      "https://dbw3zep4prcju.cloudfront.net/animal/e047bf81-ef41-4456-8ec4-b212aa61f721/image/bfd0cecc-1f71-443f-9730-775ae2203c9b.jpg?versionId=Gq8WFNm.z_i_Yv8ofrbENYQ4XgHkArhQ",
      "https://dbw3zep4prcju.cloudfront.net/animal/e047bf81-ef41-4456-8ec4-b212aa61f721/image/d96646c1-9029-421d-a3f7-0746c39d05a5.jpg?versionId=WBv2uKp0bBTJst.qqXuWVoUiLX.4UFfI",
      "https://dbw3zep4prcju.cloudfront.net/animal/e047bf81-ef41-4456-8ec4-b212aa61f721/image/85f28117-81e6-4933-9ab1-284575f4aa8a.jpg?versionId=3FBB.tsaFMcRgn5ee0M9Mo0euZWu_Sfx",
      "https://dbw3zep4prcju.cloudfront.net/animal/e047bf81-ef41-4456-8ec4-b212aa61f721/image/6cfc0221-b6bc-4bc5-851e-b6f4c6426ac8.jpg?versionId=.eN5p1I4POfLXUcR97iCocsqy5D.ScAL"
    ],
    "bio": "Meet Melody! She is a sweet, confident, and incredibly affectionate kitten who adores people and loves being involved in whatever you are doing. She loves being held, follows her people around, and is happiest when she can be close to them. Although she is smaller than her siblings, her tiny size does not hold her back. She is fearless, playful, and always ready to join in the fun.",
    "bondedTo": {
      "name": "Harvey",
      "url": "harvey.html"
    }
  },
  {
    "name": "Foxglove",
    "slug": "foxglove",
    "id": "8a3f4011-dfa8-4f56-a324-0c15955aa4f6",
    "url": "https://www.petfinder.com/cat/foxglove-8a3f4011-dfa8-4f56-a324-0c15955aa4f6/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Male",
    "size": "Medium · 7–11 lbs",
    "breed": "Tuxedo",
    "coat": "Short",
    "color": "Black and white / tuxedo",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/8a3f4011-dfa8-4f56-a324-0c15955aa4f6/image/95eb54ea-22df-43b1-a46f-b67f206de152.jpg?versionId=kQR3hmqXlu3uhyeRH1638ngot92d0Zba",
      "https://dbw3zep4prcju.cloudfront.net/animal/8a3f4011-dfa8-4f56-a324-0c15955aa4f6/image/a96a6ff6-d25b-48d3-9248-c1fb977b9174.jpg?versionId=apOVR_cJJZ6HAiQpFfkZbfV132i6oU07",
      "https://dbw3zep4prcju.cloudfront.net/animal/8a3f4011-dfa8-4f56-a324-0c15955aa4f6/image/6a57e988-de9a-4b72-a5cc-52a9a1268cc5.jpg?versionId=mhSpVpq7U8eqeZhKcNTAkCO3KkZ2RGEe",
      "https://dbw3zep4prcju.cloudfront.net/animal/8a3f4011-dfa8-4f56-a324-0c15955aa4f6/image/58f81191-cab3-4459-83eb-ed972e14496b.jpg?versionId=DwwMap.VDcmghS7Af7BrlTZ.bhWc5fsv",
      "https://dbw3zep4prcju.cloudfront.net/animal/8a3f4011-dfa8-4f56-a324-0c15955aa4f6/image/b908d0e8-1ed6-41b0-b116-8064335dee20.jpg?versionId=Suo1buX60x6TzdFEtpQ0iHHqIg_sfTel",
      "https://dbw3zep4prcju.cloudfront.net/animal/8a3f4011-dfa8-4f56-a324-0c15955aa4f6/image/f1bc3384-f653-4a5b-a53b-fb02bd17a218.jpg?versionId=u.iqivB_OLXfZt0.INeUBmuK6BZRk0ee"
    ],
    "bio": "Hi! I'm Foxglove, the kitten with a zest for life! Every day is an adventure for me here. I love exploring every nook and cranny, playing with my toys, and making everyone laugh with my goofy antics. I'm also a champion cuddler and will snuggle up with anyone who needs a furry friend. I'm brave, too, always ready to explore new things and make new friends. If you're looking for a playful, loving companion to add joy and laughter to your home, I'm your kitten! Let's make wonderful memories together.",
    "other": "Unknown",
    "fee": 200,
    "bondedTo": {
      "name": "Hyacinth",
      "url": "hyacinth.html"
    }
  },
  {
    "name": "Hyacinth",
    "slug": "hyacinth",
    "id": "1cd17919-438a-413a-acbc-ce2c312580d3",
    "url": "https://www.petfinder.com/cat/hyacinth-1cd17919-438a-413a-acbc-ce2c312580d3/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "size": "Medium · 7–11 lbs",
    "breed": "Tuxedo",
    "coat": "Short",
    "color": "Black and white / tuxedo",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/1cd17919-438a-413a-acbc-ce2c312580d3/image/5d09c186-a5d5-446b-8f86-629f3b6f9264.jpg?versionId=A1S693bj9bvA.F_NiWNGSbzkVTUBqAvC",
      "https://dbw3zep4prcju.cloudfront.net/animal/1cd17919-438a-413a-acbc-ce2c312580d3/image/6bc2118f-44f3-4947-9191-a1c51917625a.jpg?versionId=mFRhEoWTx3hw.cqgaE.Eyc.Lh2CyEOc8",
      "https://dbw3zep4prcju.cloudfront.net/animal/1cd17919-438a-413a-acbc-ce2c312580d3/image/ebbd4b66-0f92-45e3-bed6-34f47b8a889d.jpg?versionId=URPNFfnoI1GDvvn7971xKNUByyZxgV8r",
      "https://dbw3zep4prcju.cloudfront.net/animal/1cd17919-438a-413a-acbc-ce2c312580d3/image/1887684c-bfb0-4525-853b-801f6123f33e.jpg?versionId=eETdinYP7tVB_EfPY4K6ws9dStSE2DNp",
      "https://dbw3zep4prcju.cloudfront.net/animal/1cd17919-438a-413a-acbc-ce2c312580d3/image/f162d26d-667b-4671-9b1d-53ab1d6f0ef0.jpg?versionId=NdVNZoTYZ0RUhYAeNQ1fBfMnxaNilEbJ"
    ],
    "bio": "Hi! I'm Hyacinth, a bundle of joy packed into a kitten's life! Every day, I explore my cozy foster home, making friends and playing with every toy I can find. I love cuddles and will nuzzle up to you whenever you need a friend. My curious eyes are always spotting new adventures, and my playful paws can't wait to share them with you. I'm also very gentle, making me a perfect companion for quiet times. If you're looking for a sweet, funny, and energetic friend, I'm your kitten! Let's make wonderful memories together!",
    "bond": "Hyacinth and her brother Foxglove are a bonded pair looking for a home together. Per our adoption policy, kittens five months and younger are adopted in pairs, and bonded pairs must be adopted together.",
    "other": "Unknown",
    "rotatedPhotoIndex": 2,
    "fee": 200,
    "bondedTo": {
      "name": "Foxglove",
      "url": "foxglove.html"
    }
  },
  {
    "name": "Salsa",
    "slug": "salsa",
    "id": "45e498da-65e5-4076-976b-1e7d3d7bf237",
    "url": "https://www.petfinder.com/cat/salsa-45e498da-65e5-4076-976b-1e7d3d7bf237/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Tortoiseshell",
    "coat": "Short",
    "color": "Tortoiseshell",
    "kids": "No",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/45e498da-65e5-4076-976b-1e7d3d7bf237/image/949ba19b-76b3-452c-9e24-a5e139df7682.jpg?versionId=YDHJEOQRcJZbZ.ZEyaxZbcHAVfCKtAd0"
    ],
    "bio": "Salsa is a playful kitten who loves wrestling and playing with her siblings. Once she feels comfortable, she enjoys chin and head scratches.",
    "shyNote": "Salsa is very shy around people at first and does not like being held. Give her time to trust you and let her come to you."
  },
  {
    "name": "Cilantro",
    "slug": "cilantro",
    "id": "2024d020-e13d-4dc9-bc2c-dcd2474a172c",
    "url": "https://www.petfinder.com/cat/cilantro-2024d020-e13d-4dc9-bc2c-dcd2474a172c/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Male",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Tabby",
    "coat": "Short",
    "color": "Buff / tan / fawn tabby",
    "kids": "No",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/2024d020-e13d-4dc9-bc2c-dcd2474a172c/image/a965b5ac-affe-4182-822f-2dc8f05ee7ca.jpg?versionId=3B0Kodj1Fps8jGodsKkSekAXypWU8DrV"
    ],
    "bio": "Cilantro is a super playful kitten who loves playing with his siblings. He does not have one favorite toy, but cardboard to scratch on is near the top of his list.",
    "shyNote": "Cilantro can be shy at first, and meeting new people can feel like a lot. Give him a little time to settle in."
  },
  {
    "name": "Momma Fruit",
    "slug": "momma-fruit",
    "id": "967e5fe5-908d-4c98-8856-cfe4fb79405c",
    "url": "https://www.petfinder.com/cat/momma-fruit-967e5fe5-908d-4c98-8856-cfe4fb79405c/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "age": "Adult · 3–8 years",
    "size": "Medium · 7–11 lbs",
    "breed": "Tabby",
    "coat": "Short",
    "color": "Brown / chocolate tabby",
    "kids": "Unknown",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 150,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/967e5fe5-908d-4c98-8856-cfe4fb79405c/image/abc083c4-f940-4d44-897c-7446e77b3463.jpg?versionId=OfGZ3zl1oRmS1Bd29eZiD5hz_PuCqbA2",
      "https://dbw3zep4prcju.cloudfront.net/animal/967e5fe5-908d-4c98-8856-cfe4fb79405c/image/8fa35757-7cba-4029-b8ae-d3dc78fb1463.jpg?versionId=6KpFiwWC0T0x6CTidUFZlIx5eQKADpmB",
      "https://dbw3zep4prcju.cloudfront.net/animal/967e5fe5-908d-4c98-8856-cfe4fb79405c/image/49959126-f5f2-4112-90dd-ee4597ec541d.jpg?versionId=XWH1dt6OClGYJoj2.D.YLdnshnA3rqwQ",
      "https://dbw3zep4prcju.cloudfront.net/animal/967e5fe5-908d-4c98-8856-cfe4fb79405c/image/0711a0bd-23a6-4c45-9f85-459339505090.jpg?versionId=2lSspuP2odsyIZoAFcgtnNI4eCgUGcNR"
    ],
    "bio": "Momma Fruit is an approximately two-year-old tabby who cared for her own kittens and her sister's kittens. Her kittens have all been adopted, and she is now looking for a forever home.",
    "shyNote": "Momma Fruit can be shy at first and may need a little time to warm up. She does best in a quiet home where she can bond with people."
  },
  {
    "name": "Zenon",
    "slug": "zenon",
    "id": "704112bd-2c99-4671-a3cf-1d8d4ba9418c",
    "url": "https://www.petfinder.com/cat/zenon-704112bd-2c99-4671-a3cf-1d8d4ba9418c/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Male",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Tuxedo",
    "coat": "Short",
    "color": "Black & white / tuxedo",
    "kids": "Yes",
    "dogs": "Yes",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/704112bd-2c99-4671-a3cf-1d8d4ba9418c/image/ffdf4c57-a17f-4b0e-9c9e-3dd3df2f0e60.jpg?versionId=97T0jYjqu9K1aKoW1LjuM_15_izC2nSS",
      "https://dbw3zep4prcju.cloudfront.net/animal/704112bd-2c99-4671-a3cf-1d8d4ba9418c/image/2c851c0b-d462-4836-841c-c36442c3b32e.jpg?versionId=i70jTeUMQwK2lRo84SOobQOdahtW2oAz",
      "https://dbw3zep4prcju.cloudfront.net/animal/704112bd-2c99-4671-a3cf-1d8d4ba9418c/image/dbfef3eb-a3a9-4a99-b341-0643b9644cb4.jpg?versionId=YYouYLcXoS9lgGjDiEYKDS4kGi7YMXTs",
      "https://dbw3zep4prcju.cloudfront.net/animal/704112bd-2c99-4671-a3cf-1d8d4ba9418c/image/62f05d8b-2629-4c28-9a55-1e2ce196492a.jpg?versionId=EQhotmtKLSgtkSsJu5OBQsghxCmUWsIK",
      "https://dbw3zep4prcju.cloudfront.net/animal/704112bd-2c99-4671-a3cf-1d8d4ba9418c/image/faa04a3f-991b-40b5-83b7-03839f9874a8.jpg?versionId=jqnVLoMDDa4S9x5J56F5pOjhx_f_pscs"
    ],
    "bio": "Zenon loves playing with his siblings and chasing toys. He enjoys head pets and will rub against your leg for attention. He also loves cuddling with his brother and the other cats in the home.",
    "shyNote": "Zenon may be a little shy at first, but he quickly comes around."
  },
  {
    "name": "Pom Pom",
    "slug": "pom-pom",
    "id": "8becd943-fbc0-432f-b457-242808aa8f12",
    "url": "https://www.petfinder.com/cat/pom-pom-8becd943-fbc0-432f-b457-242808aa8f12/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "size": "Medium · 7–11 lbs",
    "breed": "Domestic Medium Hair",
    "coat": "Medium",
    "color": "Black",
    "kids": "No",
    "dogs": "No",
    "cats": "Yes",
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/8becd943-fbc0-432f-b457-242808aa8f12/image/e90f6687-d48c-4b68-9f7f-d7532e074d64.jpg?versionId=snRU9rBhgFPq.smH3vh8pzogxy5yo0m2",
      "https://dbw3zep4prcju.cloudfront.net/animal/8becd943-fbc0-432f-b457-242808aa8f12/image/eeef9ac4-8651-4b96-baaf-6211530d6ed4.jpg?versionId=SJwnFwK526oshBZGwEBtlWLyacicrn1b",
      "https://dbw3zep4prcju.cloudfront.net/animal/8becd943-fbc0-432f-b457-242808aa8f12/image/cdb5e647-a892-4e3f-90f2-1bab2e7d8059.jpg?versionId=5huJFNFAid1F7cvBP837GzYrDt8QXNqK"
    ],
    "bio": "Pom Pom is playful, energetic, and curious. She loves wrestling with her siblings and chasing toys around the room. She likes sleeping right up against her humans and looking out the window at all the birds and bugs that fly around. She is a bit shy and needs some time to warm up to her new home.",
    "shyNote": "Pom Pom can be a little shy, so she may need extra time to feel comfortable in a new home.",
    "bond": "Per our adoption policy, kittens five months and younger are adopted in pairs, and bonded pairs must be adopted together.\n\nWondering who this kitten lives with or which kittens might make a good match? Please reach out to us! We're happy to help you learn about our kittens' personalities and preferred pairings so you can find the right match for your home.",
    "other": "No",
    "fee": 200
  },
  {
    "name": "Stitch",
    "slug": "stitch",
    "id": "28bf3f2c-5b51-4b7a-ab5e-e2a2d939282a",
    "url": "https://www.petfinder.com/cat/stitch-28bf3f2c-5b51-4b7a-ab5e-e2a2d939282a/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Calico",
    "coat": "Short",
    "color": "Buff / tan / fawn, calico",
    "kids": "Yes",
    "dogs": "Yes",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/28bf3f2c-5b51-4b7a-ab5e-e2a2d939282a/image/d273bc7e-93b1-4f0a-bc05-833c7f87121f.jpg?versionId=4DPrXvdFLsGhfAwFoudh4ptXbJWN7s7H",
      "https://dbw3zep4prcju.cloudfront.net/animal/28bf3f2c-5b51-4b7a-ab5e-e2a2d939282a/image/66451713-e11b-4220-97ed-a834a39ab603.jpg?versionId=2ez7ueJeafSDxG4xPEJ504YXHkAOjWFH",
      "https://dbw3zep4prcju.cloudfront.net/animal/28bf3f2c-5b51-4b7a-ab5e-e2a2d939282a/image/bf3ec2c6-e769-4b38-b1bb-d89cdaa57cad.jpg?versionId=kcp4gd8IXmLDr2mDNdZTukyo0pHyMiJM",
      "https://dbw3zep4prcju.cloudfront.net/animal/28bf3f2c-5b51-4b7a-ab5e-e2a2d939282a/image/d48b4a82-1e52-4479-9151-11ec917090c6.jpg?versionId=BUf83bXTiedDFnheAkHHzFYkUcbd7uuX",
      "https://dbw3zep4prcju.cloudfront.net/animal/28bf3f2c-5b51-4b7a-ab5e-e2a2d939282a/image/7145ad2c-4641-428a-b59d-7937ce585a09.jpg?versionId=Ke93RBjeF9QdiZRwQR6zBJonck7F_qC5"
    ],
    "bio": "Stitch is a super energetic kitty who loves to play with her siblings. She may act independent, but secretly loves being held and petted; when picked up, she starts purring. She may need a little time to settle into a new home.",
    "idealHomeNote": "Stitch would do best in a home with another friendly cat."
  },
  {
    "name": "Zinc",
    "slug": "zinc",
    "id": "",
    "url": "",
    "gender": "",
    "age": "",
    "size": "",
    "breed": "",
    "coat": "",
    "kids": "Unknown",
    "dogs": "Unknown",
    "cats": "Unknown",
    "other": "Unknown",
    "fee": null,
    "photos": [],
    "careKnown": false,
    "bio": "Zinc and Xenon are being presented together. Zinc's full personality details and photos are being added.",
    "pairingNote": "Zinc and Xenon are being presented together."
  },
  {
    "name": "Xenon",
    "slug": "xenon",
    "id": "",
    "url": "",
    "gender": "",
    "age": "",
    "size": "",
    "breed": "",
    "coat": "",
    "kids": "Unknown",
    "dogs": "Unknown",
    "cats": "Unknown",
    "other": "Unknown",
    "fee": null,
    "photos": [],
    "careKnown": false,
    "bio": "Zinc and Xenon are being presented together. Xenon's full personality details and photos are being added.",
    "pairingNote": "Xenon and Zinc are being presented together."
  },
  {
    "name": "Zeek",
    "slug": "zeek",
    "id": "74ca40df-376a-4e3e-b634-d7be095a7f56",
    "url": "https://www.petfinder.com/cat/zeek-74ca40df-376a-4e3e-b634-d7be095a7f56/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Male",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Tabby",
    "coat": "Short",
    "color": "Gray / blue / silver tabby and white",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/74ca40df-376a-4e3e-b634-d7be095a7f56/image/95ff7fda-8cac-444f-ac68-d00192fbf387.jpg?versionId=adboWWnMmu2OgCigY_n3aY9_zwsso3D.",
      "https://dbw3zep4prcju.cloudfront.net/animal/74ca40df-376a-4e3e-b634-d7be095a7f56/image/8af1becc-08f8-4cca-af0e-6903334b7dd3.jpg?versionId=tKAMvTiO0Xvyx0Tu.o_Lk9slH5wgrKnJ"
    ],
    "bio": "Zeek is a playful and cuddly kitten who loves adventures. He explores every nook of his foster home, learns new games and tricks, and enjoys snuggling close to share purrs and warmth. He is gentle, friendly, and loving."
  },
  {
    "name": "Zena",
    "slug": "zena",
    "id": "5d18d1f6-2b7a-4698-855d-4a9a5a17a3fc",
    "url": "https://www.petfinder.com/cat/zena-5d18d1f6-2b7a-4698-855d-4a9a5a17a3fc/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Tabby",
    "coat": "Short",
    "color": "Gray / blue / silver tabby and white",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/5d18d1f6-2b7a-4698-855d-4a9a5a17a3fc/image/c1e238d0-fd1f-4b92-bb88-4a18ae52c6ff.jpg?versionId=7r5kUsYOi5FlvqbOfNn2GHgCFuTKgEQ2",
      "https://dbw3zep4prcju.cloudfront.net/animal/5d18d1f6-2b7a-4698-855d-4a9a5a17a3fc/image/0f56516d-ac42-44d1-a5d4-12fd7a5b62d1.jpg?versionId=0F_gCGluUH1AA28qH6BIEDDJhWxxEaKF"
    ],
    "bio": "Hi! I'm Zena, a playful kitten who loves to explore every corner of my world. I'm super smart and funny, always ready to pounce on a dangling string or chase my own tail. My days are filled with cuddles and curiosity, making everyone laugh with my silly antics. I'm friendly and gentle, perfect for a family looking for a mellow yet amusing companion. If you need a little sunshine and lots of love in your life, I'm just the kitten to make your home brighter and your heart fuller. Why not come meet me and my siblings?"
  },
  {
    "name": "Ryla",
    "slug": "ryla",
    "id": "94569da9-2346-4e83-be9f-9777667f3100",
    "url": "https://www.petfinder.com/cat/ryla-94569da9-2346-4e83-be9f-9777667f3100/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Calico",
    "coat": "Short",
    "color": "Calico",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/94569da9-2346-4e83-be9f-9777667f3100/image/5f5f044c-ab77-41c5-856e-9ace14ef9647.jpg?versionId=SEKVMIydMGqaUiZKu5qAgnIeeDc3hzIZ",
      "https://dbw3zep4prcju.cloudfront.net/animal/94569da9-2346-4e83-be9f-9777667f3100/image/024f3836-bc8e-41c3-bfc2-68105a88a5e4.jpg?versionId=aq0oBVMG48yJfQYRfg4JhsUgFtPkLQ6r",
      "https://dbw3zep4prcju.cloudfront.net/animal/94569da9-2346-4e83-be9f-9777667f3100/image/0b15f7f9-df58-44e2-8b69-e1ca9197033b.jpg?versionId=lNDpkegr3.CerhZtck8kVgbe02hQgPpq",
      "https://dbw3zep4prcju.cloudfront.net/animal/94569da9-2346-4e83-be9f-9777667f3100/image/a27b059a-f9b5-4d46-9050-e1e82fed0c1b.jpg?versionId=sFBr6Pk490w5eJbyryxqJsIcXDas.LLF"
    ],
    "bio": "Hi! I'm Ryla, a bundle of joy wrapped in whiskers. Every day is an adventure for me. I love exploring every nook of my foster home, chasing shadows, and pouncing on toy mice. When I'm not playing, I'm a champion cuddler, always ready to snuggle up and share purrs. I adore meeting new friends and I'm always the first to greet visitors with my cheerful meows. If you're looking for a spirited companion to bring laughter and love to your home, I'm your kitten! Let's make memories together!"
  },
  {
    "name": "Lexi",
    "slug": "lexi",
    "id": "4958af73-2820-43d8-a3e3-945e87760a27",
    "url": "https://www.petfinder.com/cat/lexi-4958af73-2820-43d8-a3e3-945e87760a27/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Domestic Short Hair",
    "coat": "Short",
    "color": "Gray / blue / silver",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/4958af73-2820-43d8-a3e3-945e87760a27/image/68bb5df3-1700-4d66-861b-ffa96a9c84c1.jpg?versionId=ypMXZ_BMYYzdAgDOAe9NWUC_9dWKDu6_",
      "https://dbw3zep4prcju.cloudfront.net/animal/4958af73-2820-43d8-a3e3-945e87760a27/image/3fb388f3-0a64-4b2b-93ce-7e35f2472976.jpg?versionId=Hbt.dpJQi5cGyyo3Fkjj1ITyG8Bhij4E",
      "https://dbw3zep4prcju.cloudfront.net/animal/4958af73-2820-43d8-a3e3-945e87760a27/image/65de6161-8ff9-4d8b-aa25-df8068ca40f8.jpg?versionId=1R.KwQXfre37R62q4fBY6wDgTIKBwrXt",
      "https://dbw3zep4prcju.cloudfront.net/animal/4958af73-2820-43d8-a3e3-945e87760a27/image/c674061b-5164-42db-9b80-6ee4300f0267.jpg?versionId=K22nH7zIOWf7nuZPgReF0Qv5hGTIBaDr"
    ],
    "bio": "Lexi is a kitten with a heart full of love and paws full of play. She can be a bit shy at first, but give her a moment and she will be cuddling up to you. She is curious about the little things around her, enjoys exploring, and loves playing with toys and making new friends.",
    "shyNote": "Lexi may be shy at first, but she warms up with a little time and enjoys cuddling once she feels comfortable."
  },
  {
    "name": "Tootsie",
    "slug": "tootsie",
    "id": "758e51c6-d928-4806-bc6f-a105800de749",
    "url": "https://www.petfinder.com/cat/tootsie-758e51c6-d928-4806-bc6f-a105800de749/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "size": "Small · 0–6 lbs",
    "breed": "Tuxedo",
    "coat": "Short",
    "color": "Black and white / tuxedo",
    "kids": "No",
    "dogs": "No",
    "cats": "Yes",
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/758e51c6-d928-4806-bc6f-a105800de749/image/7ea74222-5763-4f11-99ca-0327c8fbc2ab.jpg?versionId=vIHhgoZlN5c2akF_8bpBPBsi1nyinzJ_",
      "https://dbw3zep4prcju.cloudfront.net/animal/758e51c6-d928-4806-bc6f-a105800de749/image/40c93325-26fa-4727-9ea5-2d6452fcb7ac.jpg?versionId=FsAqWLMrf6YgrmPVSgP1KtYfeB.ZnLa6",
      "https://dbw3zep4prcju.cloudfront.net/animal/758e51c6-d928-4806-bc6f-a105800de749/image/a41735c0-49d7-475e-9027-2eaaa0281b6c.jpg?versionId=dwg.kGIa4z1403CiunNvAsvX9P3eFnJq"
    ],
    "bio": "Hi! I'm Tootsie, a bundle of joy wrapped in curiosity and energy. Each day is a new adventure, whether I'm exploring corners or chasing shadows. I love playing with my toys, but I can be a bit shy with new faces. Give me a little time, and I'll warm up, showing you my affectionate, playful side. I value my independence, enjoying moments alone just as much as playtime. If you're looking for a spirited companion who'll keep you entertained and cherish her quiet moments, I'm your girl. Let's create a forever home together!",
    "shyNote": "Tootsie can be a little shy, so she may need extra time to feel comfortable in a new home.",
    "bond": "Per our adoption policy, kittens five months and younger are adopted in pairs, and bonded pairs must be adopted together.\n\nWondering who this kitten lives with or which kittens might make a good match? Please reach out to us! We're happy to help you learn about our kittens' personalities and preferred pairings so you can find the right match for your home.",
    "other": "No",
    "fee": 200
  },
  {
    "name": "Hazel",
    "slug": "hazel",
    "id": "37365c0f-ff75-40ce-9dd7-bc058ef7f0f7",
    "url": "https://www.petfinder.com/cat/hazel-37365c0f-ff75-40ce-9dd7-bc058ef7f0f7/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Dilute Calico",
    "coat": "Short",
    "color": "Dilute calico",
    "kids": "Unknown",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/37365c0f-ff75-40ce-9dd7-bc058ef7f0f7/image/9a91be16-4fce-44a8-88d7-1e137a034c69.jpg?versionId=SRD45uPuUcAAptIipTbsl8DYmCRlJ5It",
      "https://dbw3zep4prcju.cloudfront.net/animal/37365c0f-ff75-40ce-9dd7-bc058ef7f0f7/image/5618ea01-2f86-477f-8e26-2c8d01903b47.jpg?versionId=G_racYr3Be1EKjN9Ptq.EDXzjYsrYjfy",
      "https://dbw3zep4prcju.cloudfront.net/animal/37365c0f-ff75-40ce-9dd7-bc058ef7f0f7/image/5a6aa868-7923-46bd-935f-b3a306465a4d.jpg?versionId=Mactt5ccSZgDrVv7C_.WDUufisq73UG6",
      "https://dbw3zep4prcju.cloudfront.net/animal/37365c0f-ff75-40ce-9dd7-bc058ef7f0f7/image/bdd0a7eb-8507-4c17-b665-7cc337ff418e.jpg?versionId=jchcmzHccN7e2IuCv8ga4D.fKVSoB5eP",
      "https://dbw3zep4prcju.cloudfront.net/animal/37365c0f-ff75-40ce-9dd7-bc058ef7f0f7/image/56836067-1d13-453b-a41f-f7b7fee048ce.jpg?versionId=DEC6j84nO6nQpKK37VIYJo95cbGka.x_"
    ],
    "bio": "Hazel is a dilute calico with a little bobtail. She loves running and playing with her sisters. She and her sisters came from outdoor life and are still getting used to being indoors. She is looking for a quiet home where she can feel safe, build trust, and settle in with her family.",
    "shyNote": "Hazel is shy at first and needs time to trust people before warming up. A quiet home and patience will help her adjust.",
    "pairingNote": "Hazel needs to go home with one of her sisters. She has four sisters to choose from, and Amber is her preferred match now that Autumn has been adopted. If Amber is no longer available, please contact the rescue to find the best available sister for Hazel."
  },
  {
    "name": "Amber",
    "slug": "amber",
    "id": "",
    "url": "",
    "gender": "Female",
    "age": "",
    "size": "",
    "breed": "",
    "coat": "",
    "kids": "Unknown",
    "dogs": "Unknown",
    "cats": "Unknown",
    "other": "Unknown",
    "fee": null,
    "photos": [],
    "careKnown": false,
    "bio": "Amber is Hazel's sister. Her full personality details and photos are being added."
  },
  {
    "name": "Faith",
    "slug": "faith",
    "id": "d81c82ad-f3aa-401a-bc5c-e2d3e1270702",
    "url": "https://www.petfinder.com/cat/faith-d81c82ad-f3aa-401a-bc5c-e2d3e1270702/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Domestic Medium Hair",
    "coat": "Medium",
    "color": "Black",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/d81c82ad-f3aa-401a-bc5c-e2d3e1270702/image/04627a5d-3f46-4a8e-9ae8-cf656f674c97.jpg?versionId=wRVAWu3A5UQhs_O1VvHadmsoIZrPVtLp",
      "https://dbw3zep4prcju.cloudfront.net/animal/d81c82ad-f3aa-401a-bc5c-e2d3e1270702/image/3c7394fd-2a0a-498a-a020-1ac44c0744bf.jpg?versionId=BOLrotB1heoKfveJCPPAtl4phP2UvwAd",
      "https://dbw3zep4prcju.cloudfront.net/animal/d81c82ad-f3aa-401a-bc5c-e2d3e1270702/image/b004b9a8-db14-4be4-a75d-db628ed7aa02.jpg?versionId=8_rU3wGp3giBTF8gO8dpyFNj5eDhPzrH",
      "https://dbw3zep4prcju.cloudfront.net/animal/d81c82ad-f3aa-401a-bc5c-e2d3e1270702/image/d76cee32-5b7d-43ab-a0cd-d695d696dcae.jpg?versionId=3kWu2mOqHaso._AeElrv0hnhv9fMF2f_",
      "https://dbw3zep4prcju.cloudfront.net/animal/d81c82ad-f3aa-401a-bc5c-e2d3e1270702/image/e7bfbe3f-6091-40b3-bdeb-9ee33b0bd595.jpg?versionId=vfiumNvK5WS4GCAOodCPYP9gNJY18vw6"
    ],
    "bio": "Faith is a curious and playful kitten living with her foster family. Each day is filled with games and explorations. She loves to cuddle up with friends, especially her siblings, after a long day of play. She is also quite smart and independent, learning new tricks. Despite her energetic spirit, she has a gentle touch and adores quiet moments. She is looking for a forever home where she can share all her love and curiosity.",
    "bond": "Faith is bonded with her sister Destiny, and they are looking for a home together."
  },
  {
    "name": "Destiny",
    "slug": "destiny",
    "id": "",
    "url": "",
    "gender": "Female",
    "age": "",
    "size": "",
    "breed": "",
    "coat": "",
    "kids": "Unknown",
    "dogs": "Unknown",
    "cats": "Unknown",
    "other": "Unknown",
    "fee": null,
    "photos": [],
    "careKnown": false,
    "bio": "Destiny is bonded with her sister Faith, and they need to be adopted together. Her full personality details and photos are being added.",
    "bondedTo": {
      "name": "Faith",
      "url": "faith.html"
    }
  },
  {
    "name": "Pandora",
    "slug": "pandora",
    "id": "a8c751a2-a5b8-414e-bb90-cb010537d097",
    "url": "https://www.petfinder.com/cat/pandora-a8c751a2-a5b8-414e-bb90-cb010537d097/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Tabby",
    "coat": "Short",
    "color": "Gray / blue / silver tabby",
    "kids": "No",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/a8c751a2-a5b8-414e-bb90-cb010537d097/image/d8ee0dec-d463-4f43-879e-8cc089c98d50.jpg?versionId=Su_wZkHpc26yVgSC4SL8tClXN5MEofBJ",
      "https://dbw3zep4prcju.cloudfront.net/animal/a8c751a2-a5b8-414e-bb90-cb010537d097/image/381a0360-a1ba-4aa2-9953-c4fff1194a45.jpg?versionId=YJDm5lL21GwSx9xLnxxNtRBg8j.0R0uN"
    ],
    "bio": "Pandora is a kitten with a heart full of love and paws full of play. She spends her days exploring every nook with her brother Mooki, who gives her courage when she feels shy. Together they chase shadows, pounce on pretend prey, and nap in cozy corners. Pandora and Mooki make a sweet team.",
    "bondedTo": {
      "name": "Mooki",
      "url": "mooki.html"
    },
    "shyNote": "Pandora is more timid and may need a little extra patience and reassurance as she settles into a new home."
  },
  {
    "name": "Mookii",
    "slug": "mooki",
    "id": "2ab812cd-d446-4061-b340-61ff531eda57",
    "url": "https://www.petfinder.com/cat/mookii-2ab812cd-d446-4061-b340-61ff531eda57/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Male",
    "age": "",
    "size": "Medium · 7–11 lbs",
    "breed": "",
    "coat": "Medium",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": null,
    "photos": [],
    "careKnown": false,
    "bio": "Mookii is bonded with his sister, Pandora, and needs to be adopted with her so they can stay together.",
    "bondedTo": {
      "name": "Pandora",
      "url": "pandora.html"
    }
  },
  {
    "name": "Donatello",
    "slug": "donatello",
    "id": "dae73616-24cd-4d30-a501-df27c247324b",
    "url": "https://www.petfinder.com/cat/donatello-dae73616-24cd-4d30-a501-df27c247324b/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Male",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Domestic Short Hair",
    "coat": "Short",
    "color": "Black and white",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/dae73616-24cd-4d30-a501-df27c247324b/image/b7c557de-8d6a-49e5-91cf-8575240b0e02.jpg?versionId=6ZsehDvsGRNB_NTEytbe2JIYc3Fq4azW",
      "https://dbw3zep4prcju.cloudfront.net/animal/dae73616-24cd-4d30-a501-df27c247324b/image/36d9276a-670d-4242-b9a6-9a9265dc5593.jpg?versionId=i22.F0zrB2Yb3.ctqyPX8T4HcEn0U61E",
      "https://dbw3zep4prcju.cloudfront.net/animal/dae73616-24cd-4d30-a501-df27c247324b/image/d34ef851-fdba-4a98-bc57-93a4824d0a7e.jpg?versionId=jdnaah3iVC61FgW_3JQlGnR9uUyMQt9m"
    ],
    "bio": "Donatello is a very active and brave little boy kitten. He and his brothers have so much energy that they will keep you entertained for hours. Donatello absolutely loves wrestling with his brother Leonardo. Their rescue feels they must go together. He also has another brother, Michelangelo, who is a bit more easygoing.",
    "pairingNote": "Donatello's brothers are Leonardo and Michelangelo. The three brothers should be considered together.",
    "siblingPair": true
  },
  {
    "name": "Leonardo",
    "slug": "leonardo",
    "id": "",
    "url": "",
    "gender": "",
    "age": "",
    "size": "",
    "breed": "",
    "coat": "",
    "kids": "Unknown",
    "dogs": "Unknown",
    "cats": "Unknown",
    "other": "Unknown",
    "fee": null,
    "photos": [
      "https://d308toqq2zpasi.cloudfront.net/images/pet_listings/cat/7/ae/00/id_18004916/b56a5a/domestic-long-hair-cat-for-adoption_medium.jpeg"
    ],
    "careKnown": false,
    "bio": "Leonardo is Donatello's brother. The three brothers—Donatello, Leonardo, and Michelangelo—should be considered together. His full personality details and photos are being added.",
    "siblingPair": true,
    "pairingNote": "Leonardo is Donatello's brother. Leonardo, Michelangelo, and Donatello should be considered together."
  },
  {
    "name": "Michelangelo",
    "slug": "michelangelo",
    "id": "aa4c0fe6-dab9-4350-8ff9-ef3603e9b181",
    "url": "https://www.petfinder.com/cat/michael-angelo-aa4c0fe6-dab9-4350-8ff9-ef3603e9b181/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Male",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Domestic Long Hair",
    "coat": "Long",
    "color": "Orange & White",
    "kids": "Yes",
    "dogs": "Unknown",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/aa4c0fe6-dab9-4350-8ff9-ef3603e9b181/image/0b9735f1-d933-4882-9893-c8e260570eb3.jpg?versionId=BLppboYcO7VbTokmrECxbIjiRVCP68Ry",
      "https://dbw3zep4prcju.cloudfront.net/animal/aa4c0fe6-dab9-4350-8ff9-ef3603e9b181/image/8e46d06e-0ea2-4122-8aa6-b0a5490b25e2.jpg?versionId=jsgRynJVCbYeI4C19HUrW7dNF.l5adz1",
      "https://dbw3zep4prcju.cloudfront.net/animal/aa4c0fe6-dab9-4350-8ff9-ef3603e9b181/image/d92f893c-03a6-4dc6-8f4e-1670d75afcec.jpg?versionId=IqWL5SreB7o.3zb1w3hv0uiDcm6hWW4a"
    ],
    "careKnown": true,
    "careItems": [["💙","Neutered"],["🩺","Up to date on vaccinations"],["💛","Special needs: No"],["🐱","Declawed: No"]],
    "bio": "This little guy is sweet and energetic. He enjoys playing as well as cuddle time. He has three other brothers who he enjoys playtime and wrestling with. He also has a quiet side and loves to just curl up and take a nap. He would do best in a home with one of his brothers or another cat around the same age.",
    "requiredPair": true,
    "pairingNote": "Michelangelo must either be adopted with one of his brothers or go to a home with another cat around the same age. This is a requirement for adoption.",
    "idealHomeNote": "Michelangelo enjoys the company of other cats. He needs either one of his brothers or another cat around his age in his home. Please contact the rescue with questions about the right match."
  },
  {
    "name": "Libby",
    "slug": "libby",
    "id": "86e1459c-e610-4f0c-be97-b34c68d1c035",
    "url": "https://www.petfinder.com/cat/libby-86e1459c-e610-4f0c-be97-b34c68d1c035/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Tabby",
    "coat": "Short",
    "color": "Orange / red tabby and white",
    "kids": "Yes",
    "dogs": "Yes",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/86e1459c-e610-4f0c-be97-b34c68d1c035/image/6a499a63-60f2-461c-836e-b48f18502776.jpg?versionId=YLGNk2gM9srm3zLexwq9VNAlTH41sMyB",
      "https://dbw3zep4prcju.cloudfront.net/animal/86e1459c-e610-4f0c-be97-b34c68d1c035/image/d4c80ddc-1022-45b1-83fa-3be15559094f.jpg?versionId=TkmTR6M4hkI18UmIQrs6ULY4iNvKDCZK"
    ],
    "bio": "Libby is a kitten full of life and ready to explore every corner of her new home. She loves playing with toys, chasing shadows, and sharing cuddles. Her days are full of fun and goofy antics, and she is gentle and sweet, making her a lovely companion for cozy nights and everyday adventures.",
    "shyNote": "Libby is described as gentle, playful, and affectionate. She enjoys cuddles and would love a home ready for her fun-loving personality."
  },
  {
    "name": "Lucky",
    "slug": "lucky",
    "id": "",
    "url": "",
    "gender": "",
    "age": "Kitten",
    "size": "",
    "breed": "",
    "coat": "",
    "kids": "Unknown",
    "dogs": "Unknown",
    "cats": "Unknown",
    "other": "Unknown",
    "fee": null,
    "photos": [],
    "careKnown": false,
    "singleCat": true,
    "bio": "Lucky is a rare exception to the usual kitten pairing preference. He is a single kitten who prefers to be the only cat in the home and can be adopted on his own. The general adoption policy still applies where relevant."
  },
  {
    "name": "Shay",
    "slug": "shay",
    "id": "5f28e1e0-35a3-4899-8acd-754839bce069",
    "url": "https://www.petfinder.com/cat/shay-5f28e1e0-35a3-4899-8acd-754839bce069/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Male",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Tabby",
    "coat": "Short",
    "color": "Tabby",
    "kids": "Yes",
    "dogs": "Yes",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/5f28e1e0-35a3-4899-8acd-754839bce069/image/4d8a79ca-33fb-4f0e-809a-fec2ae03985d.jpg?versionId=E_Z.GFECQZffY8bp6YXJAJNHToJTKSj2"
    ],
    "bio": "Shay is a loving kitten who enjoys snuggling and wrestling with his sister Vi. He also loves his toys and is looking for a family to call his own.",
    "bondedTo": {
      "name": "Vi",
      "url": "vi.html"
    }
  },
  {
    "name": "Vi",
    "slug": "vi",
    "id": "e7a5454a-f426-4caf-9872-eda7e6fd9d6f",
    "url": "https://www.petfinder.com/cat/vi-e7a5454a-f426-4caf-9872-eda7e6fd9d6f/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Female",
    "age": "Kitten · under 1 year",
    "size": "Medium · 7–11 lbs",
    "breed": "Tabby",
    "coat": "Short",
    "color": "Tabby",
    "kids": "Yes",
    "dogs": "Yes",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 200,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/e7a5454a-f426-4caf-9872-eda7e6fd9d6f/image/8ee520fd-3422-4932-9879-0ac71bc2f0e2.jpg?versionId=foVgW.a9fWgHR2_sSmLAd7d0BbJyR2vK"
    ],
    "bio": "Vi is a playful tabby who loves playtime and spending time with her siblings.",
    "bondedTo": {
      "name": "Shay",
      "url": "shay.html"
    }
  },
  {
    "name": "Shelby",
    "slug": "shelby",
    "id": "59d49308-9324-437d-9a14-147e0c930d8a",
    "url": "https://www.petfinder.com/cat/shelby-59d49308-9324-437d-9a14-147e0c930d8a/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    "gender": "Male",
    "age": "Kitten · about 6 months",
    "size": "Medium · 7–11 lbs",
    "breed": "Domestic Short Hair",
    "coat": "Short",
    "color": "Gray and white",
    "kids": "Yes",
    "dogs": "Yes",
    "cats": "Yes",
    "other": "Unknown",
    "fee": 150,
    "photos": [
      "https://dbw3zep4prcju.cloudfront.net/animal/59d49308-9324-437d-9a14-147e0c930d8a/image/8fad12f3-1137-4de1-aa48-3ee795aa543f.jpg?versionId=AjWyUm12NL2tva2SnYqYw6PuBHIT5x9A",
      "https://dbw3zep4prcju.cloudfront.net/animal/59d49308-9324-437d-9a14-147e0c930d8a/image/0be60e61-35bc-4443-929e-8dbfcb6254d2.jpg?versionId=RAH7_ygb6G4fIQPkuljGscuc0ITGuEu8",
      "https://dbw3zep4prcju.cloudfront.net/animal/59d49308-9324-437d-9a14-147e0c930d8a/image/68bb4d26-ae33-4369-8b04-112c05c07dbf.jpg?versionId=5y_ie0kSJ45FS0VoCsUwIVH1TPqOc1QH"
    ],
    "bio": "Shelby is about six months old, friendly, and loves to play. He enjoys hanging out with his brothers, wrestling, and chasing toys. When playtime is over, he and his brothers like to curl up in the cat tree."
  },
  {
    "name": "Milo",
    "slug": "milo",
    "id": "",
    "url": "",
    "gender": "",
    "age": "",
    "size": "",
    "breed": "",
    "coat": "",
    "kids": "Unknown",
    "dogs": "Unknown",
    "cats": "Unknown",
    "other": "Unknown",
    "fee": null,
    "photos": [],
    "careKnown": false,
    "bio": "Milo is grouped with Shelby and Salem. His full personality details and photos are being added.",
    "pairingNote": "Milo is grouped with Shelby and Salem."
  },
  {
    "name": "Salem",
    "slug": "salem",
    "id": "",
    "url": "",
    "gender": "",
    "age": "",
    "size": "",
    "breed": "",
    "coat": "",
    "kids": "Unknown",
    "dogs": "Unknown",
    "cats": "Unknown",
    "other": "Unknown",
    "fee": null,
    "photos": [],
    "careKnown": false,
    "bio": "Salem is grouped with Shelby and Milo. Full personality details and photos are being added.",
    "pairingNote": "Salem is grouped with Shelby and Milo."
  },
  {
    "name": "Jack & Jill",
    "slug": "jack-and-jill",
    "id": "",
    "url": "",
    "gender": "One boy and one girl",
    "age": "",
    "size": "",
    "breed": "",
    "coat": "",
    "kids": "Unknown",
    "dogs": "Unknown",
    "cats": "Unknown",
    "other": "Unknown",
    "fee": null,
    "photos": [
      "https://d308toqq2zpasi.cloudfront.net/images/pet_listings/cat/1/bd/d5/id_17979586/cf167d/domestic-short-hair-cat-for-adoption_medium.jpeg"
    ],
    "careKnown": false,
    "bio": "Jack and Jill are a boy-and-girl duo and are being presented together. Their full personality details and photos are being added.",
    "duoNote": "Jack and Jill are a duo and are being presented together on one card."
  }
];
const bondedPairDescriptions = [
  "These two make a wonderful duo, sharing a special bond and bringing twice the love, fun, and sweetness to their forever family.",
  "Together, they make the sweetest little team, ready to fill their new home with cuddles, playtime, and plenty of love.",
  "Their special connection makes them even more adorable together, and they can't wait to find a family who will love them both.",
  "Twice the whiskers, twice the mischief, and twice the love! These two are ready to start their next chapter side by side.",
  "Best friends through and through, these two share a beautiful bond and would love to find a forever home where they can grow and make memories together."
];
const bondedPairVariantByNames = {"Diego|Valentina":0,"Cyrus|Kian":1,"Foxglove|Hyacinth":2};
function getBondedPairDescription(pet){
  const pairKey = [pet.name, pet.bondedTo.name].sort().join("|");
  const variantIndex = bondedPairVariantByNames[pairKey] ?? (pairKey.split("").reduce((sum,char)=>sum+char.charCodeAt(0),0)%bondedPairDescriptions.length);
  return bondedPairDescriptions[variantIndex];
}
function renderImportedPet(pet){
  const photos=pet.photos.map((src,i)=>'<button class="catThumb '+(i===0?'active':'')+'" type="button" data-index="'+i+'" data-image="'+src+'"><img class="'+(i===pet.rotatedPhotoIndex?'rotatedPetPhoto':'')+'" src="'+src+'" alt="'+pet.name+' photo '+(i+1)+'" loading="lazy"></button>').join("");
  const careItems=pet.careItems||(pet.careKnown===false?[["ℹ️","See Petfinder for current care details"]]:[[pet.gender==="Female"?"💗":"💙",pet.gender==="Female"?"Spayed":"Neutered"],["🩺","Up to date on vaccinations"],["🐛","Dewormed"],["🐾","Flea-treated"],["✨","Microchipped"],["🏡","Foster-socialized"],["💛","Special needs: No"],["🐱","Declawed: No"]]);
  const shyNote=pet.shyNote||"";
  const pairingNote=pet.pairingNote||"";
  const quickFacts=[["Age",pet.age],["Gender",pet.gender],["Adoption fee",pet.fee!=null?"$"+pet.fee:""],["Breed",pet.breed]].filter(([label,value])=>value!==""&&value!=null).map(([label,value])=>'<div><small>'+label+'</small><strong>'+value+'</strong></div>').join("");
  const compatibilityNote="A smooth transition into a new home starts with slow, positive interactions. Every cat is different, so we encourage you to reach out to us directly with any questions about compatibility or introducing a new cat to your household. We’re happy to help.";
  const policyText="Per our adoption policy, kittens five months and younger are adopted in pairs, and bonded pairs must be adopted together.";
  const policyQuestion="Wondering who this kitten lives with or which kittens might make a good match? Please reach out to us! We're happy to help you learn about our kittens' personalities and preferred pairings so we can find the right match for your home.";
  const hasBondedPair=!!pet.bondedTo||!!(pet.bond&&/\b(?:is|are)\s+bonded\s+(?:to|with)\b/i.test(pet.bond));
  const hasSiblingPair=!!pet.siblingPair;
  const hasRequiredPair=!!pet.requiredPair;
  const pairHeading=pet.duoNote?'<div class="eyebrow">Meet the Duo</div>':hasBondedPair?'<div class="eyebrow">Bonded Pair'+(pet.bondedTo?': <a href="'+pet.bondedTo.url+'" target="'+(pet.bondedTo.url.startsWith("http")?"_blank":"_self")+'" rel="noopener">'+pet.bondedTo.name+'</a>':'')+'</div>':hasRequiredPair?'<div class="eyebrow">Required Pair</div>':hasSiblingPair?'<div class="eyebrow">Sibling Pair</div>':'<div class="eyebrow">Adoption Policy</div>';
  const pairBody=pet.duoNote?'<p>'+pet.duoNote+'</p>':hasBondedPair?(pet.bondedTo?'<p>'+pet.name+' and '+pet.bondedTo.name+' are a bonded pair looking for a home together.</p><p>'+getBondedPairDescription(pet)+'</p>':'<p>'+pet.bond.split(/Per our adoption policy/i)[0].trim()+'</p>'):hasRequiredPair?'<p>'+(pairingNote||pet.name+' must be adopted with a suitable companion.')+'</p>':hasSiblingPair?'<p>'+(pairingNote||'This kitten must be adopted with a sibling under our five-month adoption policy.')+'</p>':'<p>'+policyText+'</p>';
  const policySection=(hasBondedPair||hasSiblingPair||hasRequiredPair)?'<div class="policyDivider"><div class="eyebrow">Adoption Policy</div><p>'+policyText+'</p></div>':'';
  return '<section class="section catTop"><div class="wrap"><div class="catProfile"><div><div class="catGallery">'+(pet.photos.length?'<img class="catHeroImg" src="'+pet.photos[0]+'" alt="'+pet.name+'">':'<div class="catPhotoPlaceholder" role="img" aria-label="'+pet.name+' photo coming soon" style="min-height:320px;aspect-ratio:4/3;display:grid;place-items:center;background:#f8edf2;color:#ff4993;font-size:56px;border-radius:18px">♡</div>')+'<div class="catThumbs">'+photos+'</div></div></div><div class="catIntro"><div class="catTitle profileHeading"><h1>'+pet.name+'</h1></div><div class="catQuick">'+quickFacts+'</div><div class="profileActions"><a class="btn pink" href="mailto:contact@nopawsleftbehindkittyrescue.com?subject='+encodeURIComponent('Interested in adopting '+pet.name)+'">Interested in adopting '+pet.name+'?</a>'+(pet.url?'<a class="btn teal" href="'+pet.url+'" target="_blank" rel="noopener">View '+pet.name+' on Petfinder</a>':'')+'</div><div class="pairPanel '+(hasBondedPair?'bondedPanel':(hasSiblingPair||hasRequiredPair)?'siblingPanel':'adoptionPolicyPanel')+'">'+pairHeading+pairBody+(pairingNote&&!hasRequiredPair?'<p class="policyQuestion">'+pairingNote+'</p>':'')+policySection+(hasBondedPair||hasSiblingPair||pairingNote?'':'<p class="policyQuestion">'+policyQuestion+'</p>')+'</div></div></div></div></section><section class="section soft"><div class="wrap catSections"><article class="panel bioPanel"><div class="eyebrow">Get to know '+pet.name+'</div><h2>About '+pet.name+'</h2><p>'+pet.bio+'</p></article><article class="panel"><div class="eyebrow">Wellness</div><h2>Health & Care</h2><div class="careGrid">'+careItems.map((x,i)=>'<div class="careItem careTone'+(i%2)+'"><span>'+x[0]+'</span><strong>'+x[1]+'</strong></div>').join("")+'</div></article><article class="panel"><div class="eyebrow">A thoughtful match</div><h2>Ideal Home</h2><div class="compatGrid"><div><span>Children</span><strong>'+pet.kids+'</strong></div><div><span>Dogs</span><strong>'+pet.dogs+'</strong></div><div><span>Other cats</span><strong>'+pet.cats+'</strong></div><div><span>Other animals</span><strong>'+pet.other+'</strong></div></div>'+(shyNote?'<p class="compatNote">'+shyNote+'</p>':'')+(pet.idealHomeNote?'<p class="compatNote">'+pet.idealHomeNote+'</p>':'')+'<p class="compatDisclaimer">'+compatibilityNote+'</p></article><article class="panel adoptPanel"><div class="eyebrow">Next steps</div><h2>How to Adopt</h2><ol class="list"><li>Send an inquiry and mention '+pet.name+'.</li><li>Complete the adoption application provided by the rescue.</li><li>Once approved, arrange an in-person meet-and-greet.</li></ol><p class="muted">You can arrange an in-person meet-and-greet or come visit us at one of our weekend adoption event locations.</p><a class="btn pink" href="mailto:contact@nopawsleftbehindkittyrescue.com?subject='+encodeURIComponent('Interested in adopting '+pet.name)+'">Interested in adopting '+pet.name+'?</a></article></div></section><section class="section"><div class="wrap center"><a class="btn light" style="border:1px solid var(--line)" href="adopt.html">← Back to all adoptable cats</a></div></section>';
}
if(page==="adopt"){
  const grid=document.querySelector(".catGrid");
  if(grid){
    const counter=document.createElement("div");
    counter.className="rosterCounter";
    counter.innerHTML='<strong>41 profiles in this preview</strong><span>Additional profile photos and details are being added.</span>';
    grid.parentElement.insertBefore(counter,grid);
    importedPetProfiles.forEach(p=>{
      const a=document.createElement("a");a.className="catCard";a.href=p.slug+".html";
      a.innerHTML=(p.photos.length?'<img src="'+p.photos[0]+'" alt="'+p.name+'">':'<div role="img" aria-label="'+p.name+' photo coming soon" style="aspect-ratio:4/3;display:grid;place-items:center;background:#f8edf2;color:#ff4993;font-size:42px">♡</div>')+'<div class="catCardText"><h3>'+p.name+'</h3></div>';
      grid.appendChild(a);
    });
  }
}
if(importedPetProfiles.some(p=>p.slug===page)){
  const pet=importedPetProfiles.find(p=>p.slug===page);
  document.querySelector("#site-main").innerHTML=renderImportedPet(pet);
  const gallery=document.querySelector(".catGallery"), hero=gallery.querySelector(".catHeroImg");
  const thumbs=Array.from(gallery.querySelectorAll(".catThumb"));
  if(hero){
    thumbs.forEach(t=>t.addEventListener("click",()=>{hero.src=t.dataset.image;hero.classList.toggle("rotatedPetPhoto",Number(t.dataset.index)===pet.rotatedPhotoIndex);thumbs.forEach(x=>x.classList.remove("active"));t.classList.add("active");}));
    const modal=document.createElement("div");modal.className="photoLightbox";modal.innerHTML='<button class="lightboxClose" aria-label="Close">×</button><button class="lightboxArrow lightboxPrev" aria-label="Previous">‹</button><figure><img alt=""><figcaption></figcaption></figure><button class="lightboxArrow lightboxNext" aria-label="Next">›</button>';document.body.appendChild(modal);
    let current=0;const show=i=>{current=(i+pet.photos.length)%pet.photos.length;const modalImage=modal.querySelector("img");modalImage.src=pet.photos[current];modalImage.classList.toggle("rotatedPetPhoto",current===pet.rotatedPhotoIndex);modal.querySelector("figcaption").textContent=pet.name+" · Photo "+(current+1)+" of "+pet.photos.length;modal.classList.add("open");document.body.classList.add("lightboxOpen");};const close=()=>{modal.classList.remove("open");document.body.classList.remove("lightboxOpen");};
    hero.addEventListener("click",()=>show(thumbs.findIndex(t=>t.classList.contains("active"))<0?0:thumbs.findIndex(t=>t.classList.contains("active"))));
    thumbs.forEach((t,i)=>t.addEventListener("dblclick",()=>show(i)));
    modal.querySelector(".lightboxClose").addEventListener("click",close);modal.querySelector(".lightboxPrev").addEventListener("click",()=>show(current-1));modal.querySelector(".lightboxNext").addEventListener("click",()=>show(current+1));modal.addEventListener("click",e=>{if(e.target===modal)close();});
    document.addEventListener("keydown",e=>{if(!modal.classList.contains("open"))return;if(e.key==="Escape")close();if(e.key==="ArrowLeft")show(current-1);if(e.key==="ArrowRight")show(current+1);});
  }
}

if(page==="adopt"){
  const grid=document.querySelector(".catGrid");
  if(grid){
    const adoptScrollKey="nplb-adopt-scroll";
    grid.addEventListener("click",event=>{
      const card=event.target.closest("a.catCard");
      if(!card)return;
      try{sessionStorage.setItem(adoptScrollKey,String(window.scrollY));}catch(e){}
    });
    const restoreAdoptScroll=()=>{
      try{
        const saved=sessionStorage.getItem(adoptScrollKey);
        if(saved===null)return;
        const y=Math.max(0,Number(saved)||0);
        document.documentElement.style.scrollBehavior="auto";
        window.scrollTo(0,y);
        requestAnimationFrame(()=>{
          window.scrollTo(0,y);
          document.documentElement.style.scrollBehavior="smooth";
        });
        sessionStorage.removeItem(adoptScrollKey);
      }catch(e){}
    };
    window.addEventListener("pageshow",restoreAdoptScroll);
    restoreAdoptScroll();
  }
}
if(page==="cyrus"||page==="kian"||importedPetProfiles.some(p=>p.slug===page)){
  const profileWrap=document.querySelector(".catTop .wrap");
  if(profileWrap&&!profileWrap.querySelector(".catBackRow")){
    const backRow=document.createElement("div");
    backRow.className="catBackRow";
    backRow.innerHTML='<a class="btn light" href="adopt.html">← Back to adoptable cats</a>';
    profileWrap.insertBefore(backRow,profileWrap.firstChild);
  }
}
