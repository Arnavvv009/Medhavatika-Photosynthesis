/* =========================================================
   MedhaVatika — Photosynthesis Quest (Photosynthesis Adventure)
   Interactive Engine & Laboratory Simulations
   With Full English & Hindi Bilingual Translation Engine
   ========================================================= */

let currentLang = 'en';

// Ensure module opens from the top (Home page) on initial load and refresh
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
  const hero = document.getElementById('hero');
  if (hero) {
    hero.scrollIntoView({ behavior: 'auto' });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  initLanguageEngine();
  initFlipbookEngine();
  initSpectrumLab();
  initStomataLab();
  initLightReactionsLab();
  initCalvinChallenge();
  initLimitingFactorsLab();
  initAmbientParticles();
  initScrollTopAndNav();
});

/* =========================================================
   1. SAFE NO-OP AUDIO STUBS (Audio & Audio Button Removed)
   ========================================================= */
function playTone() {}
function playClickSound() {}
function playSliderTick() {}
function playPageFlipSound() {}
function playSuccessFanfare() {}

/* =========================================================
   2. BILINGUAL TRANSLATION SYSTEM (English & Hindi)
   ========================================================= */
const TRANSLATIONS = {
  en: {
    nav_brand_title: "MedhāVatika",
    nav_brand_subtitle: "A Garden of Intellect",
    nav_home: "Home",
    nav_story: "Medha's Story <span class=\"mv-nav-badge\">Book</span>",
    nav_chlorophyll: "Chlorophyll",
    nav_stomata: "Stomata",
    nav_light_reactions: "Light Reactions",
    nav_calvin: "Calvin Cycle <span class=\"mv-nav-badge\">Game</span>",
    nav_factors: "Factors",
    nav_applications: "Applications",
    btn_book_demo: "Book A Demo",

    hero_chip: "MedhaLab™ · Life Science Interactive Quest",
    hero_title: "Photosynthesis <br><span class=\"gradient-text\">Adventure</span>",
    hero_desc: "Step into an exciting biological journey where plant cells come alive and every photon tells a story! <strong>Photosynthesis Adventure</strong> by <em>MedhāVatika</em> transforms the powerhouse of life on Earth into an engaging, playful quest filled with hands-on lab simulations and interactive challenges.",
    hero_btn_story: "📖 Open Interactive Storybook",
    hero_btn_lab: "🔬 Explore Lab Simulations",
    stat_stages: "Interactive Stages",
    stat_sims: "Live Lab Simulations",
    stat_mastery: "Hands-On Mastery",
    stat_grades: "Grades 6–10",
    stat_curriculum: "Curriculum Aligned",
    hero_art_zone: "Exploration Zone: <b>Chloroplast Stroma &amp; Thylakoid Grana</b>",
    hero_art_status: "Status: <b>Active Reaction ⚡</b>",

    fb_pill: "✨ Interactive Flipbook Reader",
    fb_heading: "Medha's Photosynthesis Adventure",
    fb_subtitle: "Turn through 13 fully illustrated storybook pages with Medha and her wise Owl companion as they unravel the mystery of how sunlight transforms into energy.",
    fb_page_label: "Page",
    fb_of_pages: "of 13",
    fb_toc_title: "📑 Table of Contents",
    toc_1: "Page 1: Cover & Title", toc_b1: "Cover",
    toc_2: "Page 2: Prologue — The Green Leaf", toc_b2: "Ch. 0",
    toc_3: "Page 3: Inside the Chloroplast", toc_b3: "Ch. 1",
    toc_4: "Page 4: The Solar Spectrum Trap", toc_b4: "Ch. 1",
    toc_5: "Page 5: Stomata & Guard Cells", toc_b5: "Ch. 2",
    toc_6: "Page 6: Splitting Water (Photolysis)", toc_b6: "Ch. 3",
    toc_7: "Page 7: The Electron Highway (ETC)", toc_b7: "Ch. 3",
    toc_8: "Page 8: ATP Synthase Turbine", toc_b8: "Ch. 3",
    toc_9: "Page 9: The Calvin Cycle Wheel", toc_b9: "Ch. 4",
    toc_10: "Page 10: Building Glucose (C₆H₁₂O₆)", toc_b10: "Ch. 4",
    toc_11: "Page 11: Limiting Factor Bottlenecks", toc_b11: "Ch. 5",
    toc_12: "Page 12: Earth & Space Ecology", toc_b12: "Apps",
    toc_13: "Page 13: Quest Mastery Certificate", toc_b13: "End",

    ch1_ribbon: "Stage 1 · Light Absorption &amp; Spectrum",
    ch1_title: "Catching Sunlight with Chlorophyll",
    ch1_subtitle: "Plants do not absorb all colours of sunlight equally. Chlorophyll molecules act as tuned biological antennas, capturing high-energy blue and red light while reflecting green light back to our eyes.",
    ch1_theory_title: "Photon Absorption &amp; Pigment Physics",
    ch1_theory_p: "Sunlight is a spectrum of electromagnetic waves ranging from violet (380 nm) to deep red (750 nm). Chlorophyll pigments embedded in the thylakoid membrane have precise quantum energy gaps.",
    ch1_formula_box: "Photon Energy: E = (h · c) / λ<br><small>h = 6.626×10⁻³⁴ J·s, c = 3×10⁸ m/s, λ = wavelength</small>",
    ch1_theory_list: `<li><strong>Chlorophyll a:</strong> Primary reaction-center pigment; absorption peaks at <strong>430 nm (Blue)</strong> and <strong>660 nm (Red)</strong>.</li>
<li><strong>Chlorophyll b:</strong> Accessory antenna pigment; peaks at <strong>450 nm (Blue)</strong> and <strong>640 nm (Orange-Red)</strong>.</li>
<li><strong>The "Green Window":</strong> Light around 500–550 nm has very low absorption; it is reflected, making vegetation look green.</li>`,
    ch1_exercise_title: "Solved Exercise 1.1 — Photon Energy Comparison",
    ch1_exercise_step: `<b>Problem:</b> Compare the photon energy of Blue light (450 nm) vs Red light (680 nm).<br>
<b>Solution:</b><br>
E_blue = (6.63×10⁻³⁴ · 3×10⁸) / (450×10⁻⁹) ≈ <b>4.42 × 10⁻¹⁹ J (2.76 eV)</b><br>
E_red = (6.63×10⁻³⁴ · 3×10⁸) / (680×10⁻⁹) ≈ <b>2.92 × 10⁻¹⁹ J (1.82 eV)</b><br>
<i>Result: Blue photons pack ~50% more energy per photon to excite chlorophyll electrons!</i>`,
    ch1_tip: `<strong>Owl's Lab Tip:</strong> "Notice how the chlorophyll molecules never waste a single blue or red photon — each one kicks an electron into a higher orbital!"`,
    ch1_lab_status: "Live Spectrum Simulation",
    ch1_lab_title: "Chlorophyll Absorption Spectrum Explorer",
    ch1_lab_desc: "Drag the wavelength slider across the visible spectrum (380–720 nm) to observe real-time photon absorption curves and leaf reflectance.",
    ch1_slider_label: "Wavelength (λ)",
    ch1_metric_absorb: "Absorption",
    ch1_metric_reflect: "Reflectance",
    ch1_metric_energy: "Photon Energy",
    ch1_metric_color: "Light Color",

    ch2_ribbon: "Stage 2 · Gas Exchange &amp; Diffusion",
    ch2_title: "Breathing Through Stomata Valves",
    ch2_subtitle: "Before sunlight can build sugar, the leaf needs raw carbon. Microscopic pores called stomata act as dynamic gates — balancing carbon dioxide intake against precious water loss.",
    ch2_lab_status: "Guard Cell Simulator",
    ch2_lab_title: "Stomata Gas-Exchange &amp; Turgor Lab",
    ch2_lab_desc: "Adjust environmental sunlight and humidity to watch kidney-shaped guard cells swell with water pressure, opening the pore for gas diffusion.",
    ch2_slider_light: "☀️ Light Intensity",
    ch2_slider_humidity: "💧 Ambient Humidity",
    ch2_metric_radius: "Pore Radius (r)",
    ch2_metric_flux: "Fick's CO₂ Flux (J)",
    ch2_metric_transp: "H₂O Transpiration (E)",
    ch2_metric_ratio: "Loss Ratio (H₂O : CO₂)",
    ch2_diagnostic_label: "🔬 Osmotic State:",
    ch2_theory_title: "Guard Cell Mechanics &amp; Fick's Law",
    ch2_theory_p: "Guard cells regulate gas exchange through osmotic turgor pressure. In sunlight, active transport pumps potassium ions (K⁺) into guard cells, causing water to rush in by osmosis and buckle the cells open.",
    ch2_formula_box: "Fick's Diffusion Flux: J = -D · (ΔC / Δx)<br><small>D = diffusion coefficient, ΔC = concentration gradient, Δx = stomatal depth</small>",
    ch2_theory_list: `<li><strong>CO₂ Influx:</strong> Atmospheric CO₂ (~420 ppm) diffuses down its gradient into the substomatal cavity for the Calvin cycle.</li>
<li><strong>Transpiration Cost:</strong> For every 1 molecule of CO₂ gained, a plant typically loses up to 400 molecules of H₂O vapour.</li>
<li><strong>Drought Protection:</strong> When humidity drops or roots detect water deficit, the plant hormone Abscisic Acid (ABA) rapidly closes stomata to prevent dehydration.</li>`,
    ch2_exercise_title: "Solved Exercise 2.1 — Diffusion Rate vs Aperture",
    ch2_exercise_step: `<b>Problem:</b> If guard cells reduce stomatal pore radius from 12 μm to 4 μm in dry wind, by what factor does the pore area and gas conductance drop?<br>
<b>Solution:</b><br>
Area Ratio = (π · 4²) / (π · 12²) = 16 / 144 = <b>1/9 ≈ 11.1%</b><br>
<i>Result: Stomatal resistance increases by ~900%, dramatically curtailing transpiration during heatwaves!</i>`,
    ch2_observation: `<strong>Medhā's Observation:</strong> "The leaf is constantly making a trade-off: open wide for carbon food, or close tight to save water!"`,

    ch3_ribbon: "Stage 3 · Light Reactions &amp; Z-Scheme",
    ch3_title: "The Light-Dependent Reactions &amp; ETC",
    ch3_subtitle: "Inside the thylakoid membrane, light energy splits water molecules apart, pushing electrons down an Electron Transport Chain (ETC) to create cellular fuel: ATP and NADPH.",
    ch3_theory_title: "Photolysis, Electron Flow &amp; Chemiosmosis",
    ch3_theory_p: "Photons strike Photosystem II (P680), extracting high-energy electrons by splitting water molecules in a reaction called photolysis. The electrons cascade down protein complexes to Photosystem I (P700) and ultimately reduce NADP⁺ into NADPH.",
    ch3_formula_box: "Water Splitting: 2 H₂O → 4 H⁺ + 4 e⁻ + O₂ ↑<br>Yield: 2 H₂O + 2 NADP⁺ + 3 ADP + 3 P_i → O₂ + 2 NADPH + 3 ATP",
    ch3_theory_list: `<li><strong>Photosystem II (PSII):</strong> Absorbs 680 nm light; oxidizes water and pumps protons (H⁺) into the thylakoid lumen.</li>
<li><strong>Cytochrome b₆f:</strong> Bridges the electron flow while amplifying the electrochemical proton gradient (ΔpH).</li>
<li><strong>ATP Synthase Turbine:</strong> Protons stream back through this rotary motor into the stroma, generating ATP from ADP and inorganic phosphate.</li>`,
    ch3_exercise_title: "Solved Exercise 3.1 — ATP &amp; NADPH Energy Yield",
    ch3_exercise_step: `<b>Problem:</b> How many water molecules must be split to produce the 18 ATP and 12 NADPH needed to synthesize 1 molecule of glucose (C₆H₁₂O₆)?<br>
<b>Solution:</b><br>
Each H₂O yields 2 e⁻. Building 12 NADPH requires 24 e⁻.<br>
Total Water = 24 e⁻ / 2 = <b>12 H₂O molecules</b>.<br>
By-product released = <b>6 O₂ molecules</b>.<br>
<i>Result: Exactly 6 diatomic oxygen molecules are released into the air for every glucose made!</i>`,
    ch3_wisdom: `<strong>Owl's Wisdom:</strong> "Every breath of oxygen you take right now was created when PSII split a water molecule inside a plant cell!"`,
    ch3_lab_status: "Z-Scheme Membrane Runner",
    ch3_lab_title: "Thylakoid Membrane &amp; Chemiosmosis Visualizer",
    ch3_lab_desc: "Run the electron transport chain, track proton accumulation in the lumen, and observe real-time conservation of photon energy.",
    ch3_sync_label: "Energy Conservation:",
    ch3_sync_text: "100% Conserved",
    ch3_btn_run: "▶ Run Reaction",
    ch3_btn_pause: "⏸ Pause Reaction",
    ch3_btn_reset: "↺ Reset",
    ch3_label_speed: "Speed:",
    ch3_metric_atp: "ATP Synthesized",
    ch3_metric_nadph: "NADPH Formed",
    ch3_metric_o2: "O₂ Released",
    ch3_metric_grad: "Proton Gradient",

    ch4_ribbon: "Stage 4 · Calvin Cycle &amp; Sugar Synthesis",
    ch4_title: "The Calvin Cycle: Build-a-Sugar Challenge",
    ch4_subtitle: "Using the ATP and NADPH fuel generated in the light reactions, the stroma's master enzyme — <strong>RuBisCO</strong> — captures CO₂ and turns it into organic sugar.",
    ch4_badge_title: "🎯 Sugar Shaper Challenge",
    ch4_lab_title: "Calvin Cycle Parameter Transformer",
    ch4_lab_desc: "Tune the 4 metabolic sliders ($A, B, \\varphi, D$) to match the target molecule's stoichiometric requirement with minimal error!",
    ch4_slider_a: "Carbon Fixation Influx (A: CO₂ Moles)",
    ch4_slider_b: "RuBisCO Catalytic Efficiency (B: Rate)",
    ch4_slider_phi: "ATP / NADPH Power Input (φ: Energy)",
    ch4_slider_d: "Stroma Temperature Shift (D: Offset)",
    ch4_score_error: "Avg Error |Δmoles|",
    ch4_score_yield: "Carbon Yield",
    ch4_btn_random: "🎲 Random Challenge",
    ch4_btn_reset: "↺ Reset Ideal",
    ch4_theory_title: "Three Phases of the Calvin Cycle",
    ch4_theory_p: "Named after Melvin Calvin, this light-independent cycle operates in the stroma using 3 distinct enzymatic phases.",
    ch4_formula_box: "Phase 1: 3 RuBP (5C) + 3 CO₂ (1C) → 6 3-PGA (3C)<br>Phase 2: 6 3-PGA + 6 ATP + 6 NADPH → 6 G3P (3C)<br>Phase 3: 5 G3P + 3 ATP → 3 RuBP regenerated (+ 1 G3P net output)",
    ch4_theory_list: `<li><strong>Carbon Fixation:</strong> The enzyme RuBisCO attaches CO₂ onto ribulose-1,5-bisphosphate (RuBP), yielding 3-phosphoglycerate.</li>
<li><strong>Reduction:</strong> ATP adds energy and NADPH donates electrons to form Glyceraldehyde-3-Phosphate (G3P).</li>
<li><strong>Regeneration:</strong> 5 G3P molecules are rearranged back into 3 RuBP so the cycle can continue forever.</li>`,
    ch4_exercise_title: "Solved Exercise 4.1 — Building 1 Glucose Molecule",
    ch4_exercise_step: `<b>Problem:</b> Since 1 net G3P (3C) leaves the cycle every 3 turns, how many turns of the cycle are needed to synthesize 1 Glucose (6C)?<br>
<b>Solution:</b><br>
Glucose = 2 × G3P = 2 × (3 turns) = <b>6 full turns</b>.<br>
Total ATP consumed = 6 × 3 = <b>18 ATP</b>.<br>
Total NADPH consumed = 6 × 2 = <b>12 NADPH</b>.<br>
<i>Result: Exactly 6 CO₂ + 18 ATP + 12 NADPH = 1 C₆H₁₂O₆ (Glucose)!</i>`,
    ch4_discovery: `<strong>Medhā's Discovery:</strong> "RuBisCO is the most abundant protein on planet Earth — every carbohydrate we eat was touched by this enzyme!"`,

    ch5_ribbon: "Stage 5 · Blackman's Law of Limiting Factors",
    ch5_title: "Environmental Bottlenecks &amp; Rate Factors",
    ch5_subtitle: "Photosynthesis does not operate in a vacuum. Under <strong>Blackman's Law</strong>, the overall reaction speed is strictly determined by whichever essential factor is in shortest supply.",
    ch5_theory_title: "The Principle of Limiting Factors",
    ch5_theory_p: "F.F. Blackman (1905) established that when a process depends on multiple independent factors, its pace is constrained by the factor closest to its minimum value.",
    ch5_formula_box: "Photosynthetic Rate R = min(f(Light), g(CO₂), h(Temp))",
    ch5_theory_list: `<li><strong>Light Intensity:</strong> Drives photolysis &amp; ATP synthesis. Reaches a plateau when pigments are saturated (~2000 μmol/m²/s).</li>
<li><strong>CO₂ Concentration:</strong> Determines the carboxylation rate of RuBisCO. Current ambient CO₂ (~0.04%) is usually a limiting bottleneck.</li>
<li><strong>Temperature:</strong> Governs enzyme kinetics. Rate doubles every 10°C (Q₁₀ ≈ 2) until the thermal optimum (~30–35°C), after which RuBisCO denatures.</li>`,
    ch5_exercise_title: "Solved Exercise 5.1 — Greenhouse CO₂ Enrichment",
    ch5_exercise_step: `<b>Problem:</b> Commercial greenhouse growers increase indoor CO₂ from 400 ppm to 1200 ppm in full sunlight at 26°C. How much does crop yield increase?<br>
<b>Solution:</b><br>
Eliminating CO₂ as the limiting factor increases RuBisCO carboxylation efficiency and suppresses photorespiration.<br>
<i>Result: Yield increases by <b>35% to 50%</b> with accelerated harvesting cycles!</i>`,
    ch5_diagnostic: `<strong>Owl's Diagnostic:</strong> "If a plant has blinding sunshine and warmth but no CO₂, cranking up the light does zero good — you must fix the bottleneck first!"`,
    ch5_lab_status: "Multi-Factor Rate Analyzer",
    ch5_lab_title: "Blackman Limiting Factors Explorer",
    ch5_lab_desc: "Manipulate Light, CO₂, and Temperature sliders to reveal the active bottleneck and visualize the multi-variable saturation curve.",
    ch5_slider_light: "☀️ Light Intensity",
    ch5_slider_co2: "💨 CO₂ Concentration",
    ch5_slider_temp: "🌡️ Stroma Temperature",
    ch5_metric_rate: "Overall Rate",
    ch5_metric_limiter: "Current Limiting Bottleneck",
    ch5_metric_thermal: "Thermal State",

    eq_eyebrow: "🌿 The Master Equation of Life on Earth 🌿",
    eq_light: "☀️ Light Energy",
    eq_glucose: "🍬 C₆H₁₂O₆ (Glucose)",

    app_pill: "🌍 Real-World Science Impact",
    app_title: "Photosynthesis Across Science &amp; Technology",
    app_subtitle: "From precision agricultural genetics to planetary climate moderation and closed-loop life support for human space exploration.",
    app_c1_title: "Agriculture &amp; Crop Engineering",
    app_c1_p: "Understanding photosynthetic pathways allows plant geneticists to optimize crop yields to feed a growing global population.",
    app_c1_list: `<li>C4 and CAM pathway engineering in rice and wheat</li>
<li>Indoor vertical farming with LED wavelength tuning</li>
<li>Greenhouse CO₂ enrichment systems</li>
<li>Drought-resistant stomatal conductance breeding</li>`,
    app_c2_title: "Planetary Ecology &amp; Carbon Sinks",
    app_c2_p: "Photosynthetic organisms form the foundation of Earth's oxygen budget and act as the primary defense against climate change.",
    app_c2_list: `<li>Ocean phytoplankton generating >50% of Earth's oxygen</li>
<li>Forest carbon sequestration storing gigatons of CO₂</li>
<li>Oceanic biological carbon pump buffering ocean acidification</li>
<li>Wetland and mangrove blue carbon restoration</li>`,
    app_c3_title: "Synthetic Bio &amp; Space Missions",
    app_c3_p: "Engineers mimic photosynthesis to create renewable solar fuels and life-support systems for deep-space colonization.",
    app_c3_list: `<li>Artificial photosynthesis for green hydrogen generation</li>
<li>Microalgae photobioreactors for Mars habitats (ECLSS)</li>
<li>Continuous O₂ recycling &amp; edible biomass production</li>
<li>Bio-solar cells harvesting electrons directly from thylakoids</li>`,

    footer_tagline: "A Garden of Intellect",
    footer_about: "MedhaVatika transforms foundational STEM learning through storytelling, gamified simulations, interactive quests, and rigorous curriculum mastery.",
    footer_quests_title: "Interactive Quests",
    footer_link_photo: "Photosynthesis Quest",
    footer_link_trig: "Trigonometry Quest",
    footer_company_title: "Company &amp; Policies",
    footer_link_instructor: "Become an Instructor",
    footer_link_terms: "Terms &amp; Conditions",
    footer_link_privacy: "Privacy Policy",
    footer_link_refund: "Refund Policy",
    footer_link_affiliate: "Affiliate Program",
    footer_contact_title: "Contact MedhaVatika",
    footer_office: "<b>🏢 Office:</b> Medhavatika Edlabs Pvt. Ltd.<br>Pune, Maharashtra, India",
    footer_phone: "<b>📞 Phone:</b> +91 8007614867",
    footer_email: "<b>✉️ Email:</b> contact@medhavatika.com",
    footer_rights: "MedhāVatika Edlabs Pvt. Ltd. All rights reserved.",
    footer_dedication: "Designed with 💚 for curious young scientists worldwide"
  },
  hi: {
    nav_brand_title: "मेधावाटिका",
    nav_brand_subtitle: "ज्ञान का उपवन",
    nav_home: "होम",
    nav_story: "मेधा की कहानी <span class=\"mv-nav-badge\">पुस्तक</span>",
    nav_chlorophyll: "क्लोरोफिल",
    nav_stomata: "रंध्र (स्टोमेटा)",
    nav_light_reactions: "प्रकाश अभिक्रियाएं",
    nav_calvin: "केल्विन चक्र <span class=\"mv-nav-badge\">खेल</span>",
    nav_factors: "सीमांत कारक",
    nav_applications: "अनुप्रयोग",
    btn_book_demo: "डेमो बुक करें",

    hero_chip: "मेधा लैब™ · जीव विज्ञान संवादात्मक खोज",
    hero_title: "प्रकाश संश्लेषण <br><span class=\"gradient-text\">अभियान</span>",
    hero_desc: "एक रोमांचक जैविक यात्रा में कदम रखें जहाँ पादप कोशिकाएँ जीवंत हो उठती हैं और प्रत्येक फोटॉन एक कहानी कहता है! <strong>प्रकाश संश्लेषण अभियान</strong> (मेधावाटिका द्वारा) पृथ्वी पर जीवन के ऊर्जा घर को व्यावहारिक प्रयोगशाला सिमुलेशन और संवादात्मक चुनौतियों से भरपूर एक आनंदमयी खोज में बदल देता है।",
    hero_btn_story: "📖 संवादात्मक कहानी पुस्तक खोलें",
    hero_btn_lab: "🔬 प्रयोगशाला सिमुलेशन देखें",
    stat_stages: "संवादात्मक चरण",
    stat_sims: "सक्रिय लैब सिमुलेशन",
    stat_mastery: "व्यावहारिक प्रवीणता",
    stat_grades: "कक्षा 6–10",
    stat_curriculum: "पाठ्यक्रम आधारित",
    hero_art_zone: "अन्वेषण क्षेत्र: <b>क्लोरोप्लास्ट स्ट्रोमा और थाइलाकोइड ग्राना</b>",
    hero_art_status: "स्थिति: <b>सक्रिय अभिक्रिया ⚡</b>",

    fb_pill: "✨ संवादात्मक फ्लिपबुक रीडर",
    fb_heading: "मेधा का प्रकाश संश्लेषण अभियान",
    fb_subtitle: "मेधा और उसके बुद्धिमान उल्लू साथी के साथ 13 सचित्र पन्नों को पलटें और जानें कि सूर्य का प्रकाश ऊर्जा में कैसे बदलता है।",
    fb_page_label: "पृष्ठ",
    fb_of_pages: "कुल 13",
    fb_toc_title: "📑 विषय सूची",
    toc_1: "पृष्ठ 1: आवरण और शीर्षक", toc_b1: "आवरण",
    toc_2: "पृष्ठ 2: प्रस्तावना — हरी पत्ती का रहस्य", toc_b2: "अध्याय 0",
    toc_3: "पृष्ठ 3: क्लोरोप्लास्ट के अंदर", toc_b3: "अध्याय 1",
    toc_4: "पृष्ठ 4: सौर स्पेक्ट्रम का रहस्य", toc_b4: "अध्याय 1",
    toc_5: "पृष्ठ 5: रंध्र और द्वार कोशिकाएं", toc_b5: "अध्याय 2",
    toc_6: "पृष्ठ 6: जल का प्रकाशीय अपघटन", toc_b6: "अध्याय 3",
    toc_7: "पृष्ठ 7: इलेक्ट्रॉन परिवहन शृंखला (ETC)", toc_b7: "अध्याय 3",
    toc_8: "पृष्ठ 8: एटीपी सिंथेस टरबाइन", toc_b8: "अध्याय 3",
    toc_9: "पृष्ठ 9: केल्विन चक्र का पहिया", toc_b9: "अध्याय 4",
    toc_10: "पृष्ठ 10: ग्लूकोज का निर्माण (C₆H₁₂O₆)", toc_b10: "अध्याय 4",
    toc_11: "पृष्ठ 11: सीमांत कारक एवं बाधाएं", toc_b11: "अध्याय 5",
    toc_12: "पृष्ठ 12: पृथ्वी एवं अंतरिक्ष पारिस्थितिकी", toc_b12: "अनुप्रयोग",
    toc_13: "पृष्ठ 13: अभियान प्रवीणता प्रमाण पत्र", toc_b13: "समापन",

    ch1_ribbon: "चरण 1 · प्रकाश अवशोषण एवं स्पेक्ट्रम",
    ch1_title: "क्लोरोफिल द्वारा सूर्य के प्रकाश को पकड़ना",
    ch1_subtitle: "पौधे सूर्य के प्रकाश के सभी रंगों को समान रूप से अवशोषित नहीं करते। क्लोरोफिल अणु ट्यून किए गए जैविक एंटीना की तरह काम करते हैं, जो उच्च ऊर्जा वाले नीले और लाल प्रकाश को अवशोषित करते हैं जबकि हरे प्रकाश को परावर्तित करते हैं।",
    ch1_theory_title: "फोटॉन अवशोषण एवं वर्णक भौतिकी",
    ch1_theory_p: "सूर्य का प्रकाश बैंगनी (380 nm) से लेकर गहरे लाल (750 nm) तक विद्युत चुम्बकीय तरंगों का एक स्पेक्ट्रम है। थाइलाकोइड झिल्ली में स्थित क्लोरोफिल वर्णकों में सटीक क्वांटम ऊर्जा अंतराल होते हैं।",
    ch1_formula_box: "फोटॉन ऊर्जा: E = (h · c) / λ<br><small>h = 6.626×10⁻³⁴ J·s, c = 3×10⁸ m/s, λ = तरंगदैर्ध्य</small>",
    ch1_theory_list: `<li><strong>क्लोरोफिल a (Chlorophyll a):</strong> प्राथमिक अभिक्रिया-केंद्र वर्णक; अवशोषण शिखर <strong>430 nm (नीला)</strong> और <strong>660 nm (लाल)</strong> पर।</li>
<li><strong>क्लोरोफिल b (Chlorophyll b):</strong> सहायक एंटीना वर्णक; शिखर <strong>450 nm (नीला)</strong> और <strong>640 nm (नारंगी-लाल)</strong> पर।</li>
<li><strong>"हरा अंतराल" (Green Window):</strong> 500–550 nm के आसपास प्रकाश का अवशोषण बहुत कम होता है; यह परावर्तित होता है, जिससे पत्तियां हरी दिखाई देती हैं।</li>`,
    ch1_exercise_title: "हल किया गया अभ्यास 1.1 — फोटॉन ऊर्जा तुलना",
    ch1_exercise_step: `<b>समस्या:</b> नीले प्रकाश (450 nm) बनाम लाल प्रकाश (680 nm) की फोटॉन ऊर्जा की तुलना करें।<br>
<b>हल:</b><br>
E_blue = (6.63×10⁻³⁴ · 3×10⁸) / (450×10⁻⁹) ≈ <b>4.42 × 10⁻¹⁹ J (2.76 eV)</b><br>
E_red = (6.63×10⁻³⁴ · 3×10⁸) / (680×10⁻⁹) ≈ <b>2.92 × 10⁻¹⁹ J (1.82 eV)</b><br>
<i>परिणाम: नीले फोटॉन क्लोरोफिल इलेक्ट्रॉनों को उत्तेजित करने के लिए प्रति फोटॉन ~50% अधिक ऊर्जा प्रदान करते हैं!</i>`,
    ch1_tip: `<strong>उल्लू की लैब टिप:</strong> "ध्यान दें कि क्लोरोफिल अणु कभी भी एक भी नीले या लाल फोटॉन को व्यर्थ नहीं जाने देते — प्रत्येक फोटॉन एक इलेक्ट्रॉन को उच्च कक्षा में भेजता है!"`,
    ch1_lab_status: "सक्रिय स्पेक्ट्रम सिमुलेशन",
    ch1_lab_title: "क्लोरोफिल अवशोषण स्पेक्ट्रम अन्वेषक",
    ch1_lab_desc: "वास्तविक समय में फोटॉन अवशोषण वक्र और पत्ती के परावर्तन को देखने के लिए तरंगदैर्ध्य स्लाइडर को दृश्य स्पेक्ट्रम (380–720 nm) पर खिसकाएं।",
    ch1_slider_label: "तरंगदैर्ध्य (λ)",
    ch1_metric_absorb: "अवशोषण",
    ch1_metric_reflect: "परावर्तन",
    ch1_metric_energy: "फोटॉन ऊर्जा",
    ch1_metric_color: "प्रकाश का रंग",

    ch2_ribbon: "चरण 2 · गैस विनिमय एवं विसरण",
    ch2_title: "रंध्र (स्टोमेटा) कपाटों द्वारा श्वसन एवं गैस विनिमय",
    ch2_subtitle: "सूर्य का प्रकाश शर्करा बना सके, उससे पहले पत्ती को कच्चे कार्बन की आवश्यकता होती है। रंध्र सूक्ष्म छिद्रों के रूप में कार्य करते हैं — जो कार्बन डाइऑक्साइड के प्रवेश और जल की हानि के बीच संतुलन बनाते हैं।",
    ch2_lab_status: "द्वार कोशिका सिमुलेटर",
    ch2_lab_title: "रंध्र गैस विनिमय एवं स्फीति (टर्गर) लैब",
    ch2_lab_desc: "वृक्काकार द्वार कोशिकाओं में जल के दबाव से स्फीति और गैस विसरण के लिए रंध्र के खुलने को देखने के लिए सूर्य के प्रकाश और आर्द्रता को समायोजित करें।",
    ch2_slider_light: "☀️ प्रकाश की तीव्रता",
    ch2_slider_humidity: "💧 परिवेशीय आर्द्रता",
    ch2_metric_radius: "रंध्र त्रिज्या (r)",
    ch2_metric_flux: "फिक का CO₂ प्रवाह (J)",
    ch2_metric_transp: "H₂O वाष्पोत्सर्जन (E)",
    ch2_metric_ratio: "हानि अनुपात (H₂O : CO₂)",
    ch2_diagnostic_label: "🔬 परासरणी स्थिति:",
    ch2_theory_title: "द्वार कोशिका यांत्रिकी एवं फिक का नियम",
    ch2_theory_p: "द्वार कोशिकाएं परासरणी स्फीति दबाव के माध्यम से गैस विनिमय को नियंत्रित करती हैं। सूर्य के प्रकाश में, सक्रिय परिवहन पोटेशियम आयनों (K⁺) को द्वार कोशिकाओं में पंप करता है, जिससे परासरण द्वारा पानी अंदर भर जाता है और छिद्र खुल जाता है।",
    ch2_formula_box: "फिक का विसरण प्रवाह: J = -D · (ΔC / Δx)<br><small>D = विसरण गुणांक, ΔC = सांद्रता प्रवणता, Δx = रंध्र गहराई</small>",
    ch2_theory_list: `<li><strong>CO₂ प्रवेश:</strong> वायुमंडलीय CO₂ (~420 ppm) केल्विन चक्र के लिए उप-रंध्रीय गुहा में अपनी प्रवणता के अनुसार विसरित होती है।</li>
<li><strong>वाष्पोत्सर्जन लागत:</strong> प्राप्त 1 अणु CO₂ के बदले, एक पौधा सामान्यतः 400 अणु H₂O वाष्प खो देता है।</li>
<li><strong>सूखे से सुरक्षा:</strong> जब आर्द्रता घटती है या जड़ें पानी की कमी महसूस करती हैं, तो पादप हार्मोन एब्सिसिक एसिड (ABA) निर्जलीकरण रोकने के लिए रंध्रों को तुरंत बंद कर देता है।</li>`,
    ch2_exercise_title: "हल किया गया अभ्यास 2.1 — विसरण दर बनाम रंध्र क्षेत्रफल",
    ch2_exercise_step: `<b>समस्या:</b> यदि शुष्क हवा में द्वार कोशिकाएं रंध्र की त्रिज्या 12 μm से घटाकर 4 μm कर देती हैं, तो रंध्र क्षेत्र और गैस चालकता किस अनुपात में घटती है?<br>
<b>हल:</b><br>
क्षेत्रफल अनुपात = (π · 4²) / (π · 12²) = 16 / 144 = <b>1/9 ≈ 11.1%</b><br>
<i>परिणाम: रंध्रीय प्रतिरोध ~900% बढ़ जाता है, जिससे गर्मी के दौरान वाष्पोत्सर्जन में भारी कमी आती है!</i>`,
    ch2_observation: `<strong>मेधा का प्रेक्षण:</strong> "पत्ती लगातार एक संतुलन बनाती है: भोजन बनाने के लिए रंध्र खोलना या पानी बचाने के लिए उन्हें बंद रखना!"`,

    ch3_ribbon: "चरण 3 · प्रकाश अभिक्रियाएं एवं Z-स्कीम",
    ch3_title: "प्रकाश-निर्भर अभिक्रियाएं एवं इलेक्ट्रॉन परिवहन शृंखला (ETC)",
    ch3_subtitle: "थाइलाकोइड झिल्ली के भीतर, प्रकाश ऊर्जा जल के अणुओं को विभाजित करती है और इलेक्ट्रॉनों को इलेक्ट्रॉन परिवहन शृंखला में भेजकर कोशिकीय ईंधन: ATP और NADPH बनाती है।",
    ch3_theory_title: "प्रकाशीय अपघटन, इलेक्ट्रॉन प्रवाह एवं रसोपरासरण",
    ch3_theory_p: "फोटॉन फोटोसिस्टम II (P680) से टकराते हैं और फोटोलीसिस नामक अभिक्रिया में जल के अणुओं को विभाजित करके उच्च-ऊर्जा इलेक्ट्रॉन निकालते हैं। इलेक्ट्रॉन प्रोटीन परिसरों से होकर फोटोसिस्टम I (P700) तक जाते हैं और अंततः NADP⁺ को NADPH में अपचयित करते हैं।",
    ch3_formula_box: "जल अपघटन: 2 H₂O → 4 H⁺ + 4 e⁻ + O₂ ↑<br>उत्पादन: 2 H₂O + 2 NADP⁺ + 3 ADP + 3 P_i → O₂ + 2 NADPH + 3 ATP",
    ch3_theory_list: `<li><strong>फोटोसिस्टम II (PSII):</strong> 680 nm प्रकाश को अवशोषित करता है; जल का ऑक्सीकरण करता है और प्रोटॉनों (H⁺) को थाइलाकोइड ल्यूमेन में पंप करता है।</li>
<li><strong>साइटोक्रोम b₆f (Cytochrome b₆f):</strong> इलेक्ट्रॉन प्रवाह को जोड़ता है और विद्युत रासायनिक प्रोटॉन प्रवणता (ΔpH) को बढ़ाता है।</li>
<li><strong>एटीपी सिंथेस टरबाइन:</strong> प्रोटॉन इस घूर्णन मोटर के माध्यम से स्ट्रोमा में वापस प्रवाहित होते हैं, जिससे ADP और अकार्बनिक फॉस्फेट से ATP का निर्माण होता है।</li>`,
    ch3_exercise_title: "हल किया गया अभ्यास 3.1 — ATP एवं NADPH ऊर्जा उत्पादन",
    ch3_exercise_step: `<b>समस्या:</b> ग्लूकोज (C₆H₁₂O₆) के 1 अणु को संश्लेषित करने के लिए आवश्यक 18 ATP और 12 NADPH के निर्माण हेतु कितने जल अणुओं का अपघटन होना चाहिए?<br>
<b>हल:</b><br>
प्रत्येक H₂O 2 e⁻ देता है। 12 NADPH बनाने के लिए 24 e⁻ की आवश्यकता होती है।<br>
कुल जल = 24 e⁻ / 2 = <b>12 H₂O अणु</b>.<br>
उत्पन्न सह-उत्पाद = <b>6 O₂ अणु</b>.<br>
<i>परिणाम: प्रत्येक ग्लूकोज अणु के निर्माण पर वायु में ठीक 6 द्वि-परमाणुक ऑक्सीजन अणु मुक्त होते हैं!</i>`,
    ch3_wisdom: `<strong>उल्लू का ज्ञान:</strong> "इस समय आपके द्वारा ली जाने वाली ऑक्सीजन की प्रत्येक सांस तब बनी थी जब किसी पादप कोशिका में PSII ने पानी के अणु को तोड़ा था!"`,
    ch3_lab_status: "Z-स्कीम झिल्ली धावक",
    ch3_lab_title: "थाइलाकोइड झिल्ली एवं रसोपरासरण प्रदर्शक",
    ch3_lab_desc: "इलेक्ट्रॉन परिवहन शृंखला चलाएं, ल्यूमेन में प्रोटॉन संचय को ट्रैक करें, और वास्तविक समय में फोटॉन ऊर्जा संरक्षण देखें।",
    ch3_sync_label: "ऊर्जा संरक्षण:",
    ch3_sync_text: "100% संरक्षित",
    ch3_btn_run: "▶ अभिक्रिया प्रारंभ करें",
    ch3_btn_pause: "⏸ अभिक्रिया रोकें",
    ch3_btn_reset: "↺ रीसेट करें",
    ch3_label_speed: "गति:",
    ch3_metric_atp: "निर्मित ATP",
    ch3_metric_nadph: "निर्मित NADPH",
    ch3_metric_o2: "मुक्त O₂",
    ch3_metric_grad: "प्रोटॉन प्रवणता",

    ch4_ribbon: "चरण 4 · केल्विन चक्र एवं शर्करा संश्लेषण",
    ch4_title: "केल्विन चक्र: शर्करा निर्माण चुनौती",
    ch4_subtitle: "प्रकाश अभिक्रियाओं में उत्पन्न ATP और NADPH ईंधन का उपयोग करके, स्ट्रोमा का प्रमुख एंजाइम — <strong>RuBisCO</strong> — CO₂ को ग्रहण करता है और इसे कार्बनिक शर्करा में बदलता है।",
    ch4_badge_title: "🎯 शर्करा निर्माता चुनौती",
    ch4_lab_title: "केल्विन चक्र प्राचल परिवर्तक",
    ch4_lab_desc: "न्यूनतम त्रुटि के साथ लक्ष्य अणु की रससमीकरणमितीय आवश्यकता से मिलान करने के लिए 4 उपापचयी स्लाइडर्स को ट्यून करें!",
    ch4_slider_a: "कार्बन स्थिरीकरण प्रवाह (A: CO₂ मोल)",
    ch4_slider_b: "RuBisCO उत्प्रेरक दक्षता (B: दर)",
    ch4_slider_phi: "ATP / NADPH ऊर्जा इनपुट (φ: ऊर्जा)",
    ch4_slider_d: "स्ट्रोमा तापमान विचलन (D: ऑफसेट)",
    ch4_score_error: "औसत त्रुटि |Δमोल|",
    ch4_score_yield: "कार्बन उत्पादकता",
    ch4_btn_random: "🎲 यादृच्छिक चुनौती",
    ch4_btn_reset: "↺ आदर्श मान पर रीसेट",
    ch4_theory_title: "केल्विन चक्र के तीन चरण",
    ch4_theory_p: "मेल्विन केल्विन के नाम पर आधारित, यह प्रकाश-स्वतंत्र चक्र 3 विशिष्ट एंजाइमी चरणों का उपयोग करके स्ट्रोमा में संचालित होता है।",
    ch4_formula_box: "चरण 1: 3 RuBP (5C) + 3 CO₂ (1C) → 6 3-PGA (3C)<br>चरण 2: 6 3-PGA + 6 ATP + 6 NADPH → 6 G3P (3C)<br>चरण 3: 5 G3P + 3 ATP → 3 RuBP पुनर्जीवित (+ 1 G3P शुद्ध उत्पादन)",
    ch4_theory_list: `<li><strong>कार्बन स्थिरीकरण:</strong> एंजाइम RuBisCO CO₂ को राइबुलोज-1,5-बिसफॉस्फेट (RuBP) से जोड़ता है, जिससे 3-फॉस्फोग्लिसरेट बनता है।</li>
<li><strong>अपचयन:</strong> ATP ऊर्जा जोड़ता है और NADPH ग्लिसराल्डिहाइड-3-फॉस्फेट (G3P) बनाने के लिए इलेक्ट्रॉन दान करता है।</li>
<li><strong>पुनरुद्भवन:</strong> 5 G3P अणुओं को वापस 3 RuBP में पुनर्व्यवस्थित किया जाता है ताकि चक्र निरंतर चल सके।</li>`,
    ch4_exercise_title: "हल किया गया अभ्यास 4.1 — 1 ग्लूकोज अणु का निर्माण",
    ch4_exercise_step: `<b>समस्या:</b> चूँकि प्रत्येक 3 चक्रों में 1 शुद्ध G3P (3C) बाहर निकलता है, 1 ग्लूकोज (6C) को संश्लेषित करने के लिए चक्र के कितने फेरे आवश्यक हैं?<br>
<b>हल:</b><br>
ग्लूकोज = 2 × G3P = 2 × (3 चक्र) = <b>6 पूर्ण चक्र</b>.<br>
उपयोग हुआ कुल ATP = 6 × 3 = <b>18 ATP</b>.<br>
उपयोग हुआ कुल NADPH = 6 × 2 = <b>12 NADPH</b>.<br>
<i>परिणाम: ठीक 6 CO₂ + 18 ATP + 12 NADPH = 1 C₆H₁₂O₆ (ग्लूकोज)!</i>`,
    ch4_discovery: `<strong>मेधा की खोज:</strong> "RuBisCO पृथ्वी पर सबसे प्रचुर मात्रा में पाया जाने वाला प्रोटीन है — हमारे द्वारा खाए जाने वाले प्रत्येक कार्बोहाइड्रेट को इस एंजाइम ने छुआ है!"`,

    ch5_ribbon: "चरण 5 · ब्लैकमैन का सीमांत कारक नियम",
    ch5_title: "पर्यावरणीय सीमाएं एवं दर नियंत्रक कारक",
    ch5_subtitle: "प्रकाश संश्लेषण किसी शून्य में काम नहीं करता। <strong>ब्लैकमैन के नियम</strong> के अनुसार, कुल अभिक्रिया दर पूरी तरह से उस आवश्यक कारक द्वारा निर्धारित होती है जिसकी आपूर्ति सबसे कम होती है।",
    ch5_theory_title: "सीमांत कारकों का सिद्धांत",
    ch5_theory_p: "एफ. एफ. ब्लैकमैन (1905) ने स्थापित किया कि जब कोई प्रक्रिया कई स्वतंत्र कारकों पर निर्भर करती है, तो उसकी गति अपने न्यूनतम मूल्य के सबसे करीब वाले कारक द्वारा बाधित होती है।",
    ch5_formula_box: "प्रकाश संश्लेषक दर R = min(f(प्रकाश), g(CO₂), h(तापमान))",
    ch5_theory_list: `<li><strong>प्रकाश तीव्रता:</strong> फोटोलीसिस और ATP संश्लेषण को संचालित करती है। वर्णक संतृप्त होने पर दर स्थिर हो जाती है (~2000 μmol/m²/s)।</li>
<li><strong>CO₂ सांद्रता:</strong> RuBisCO की कार्बोक्सिलेशन दर निर्धारित करती है। वर्तमान परिवेशी CO₂ (~0.04%) आमतौर पर एक सीमित करने वाली बाधा है।</li>
<li><strong>तापमान:</strong> एंजाइम गतिकी को नियंत्रित करता है। अनुकूलतम तापमान (~30–35°C) तक प्रति 10°C दर दोगुनी होती है, जिसके बाद RuBisCO विकृत हो जाता है।</li>`,
    ch5_exercise_title: "हल किया गया अभ्यास 5.1 — ग्रीनहाउस CO₂ संवर्धन",
    ch5_exercise_step: `<b>समस्या:</b> वाणिज्यिक ग्रीनहाउस उत्पादक 26°C पर पूर्ण सूर्य के प्रकाश में इनडोर CO₂ को 400 ppm से बढ़ाकर 1200 ppm कर देते हैं। फसल की उपज में कितनी वृद्धि होती है?<br>
<b>हल:</b><br>
सीमांत कारक के रूप में CO₂ की कमी को दूर करने से RuBisCO कार्बोक्सिलेशन दक्षता बढ़ जाती है और प्रकाशीय श्वसन दब जाता है।<br>
<i>परिणाम: तीव्र फसल चक्रों के साथ उपज में <b>35% से 50%</b> की वृद्धि होती है!</i>`,
    ch5_diagnostic: `<strong>उल्लू का निदान:</strong> "यदि किसी पौधे के पास तेज धूप और गर्मी है लेकिन CO₂ नहीं है, तो रोशनी बढ़ाने से कोई लाभ नहीं होगा — आपको पहले मुख्य बाधा को ठीक करना होगा!"`,
    ch5_lab_status: "बहु-कारक दर विश्लेषक",
    ch5_lab_title: "ब्लैकमैन सीमांत कारक अन्वेषक",
    ch5_lab_desc: "सक्रिय बाधा का पता लगाने और बहु-चर संतृप्ति वक्र देखने के लिए प्रकाश, CO₂, और तापमान स्लाइडर्स को समायोजित करें।",
    ch5_slider_light: "☀️ प्रकाश की तीव्रता",
    ch5_slider_co2: "💨 CO₂ सांद्रता",
    ch5_slider_temp: "🌡️ स्ट्रोमा तापमान",
    ch5_metric_rate: "कुल दर",
    ch5_metric_limiter: "वर्तमान सीमांत बाधा",
    ch5_metric_thermal: "तापीय स्थिति",

    eq_eyebrow: "🌿 पृथ्वी पर जीवन का मुख्य समीकरण 🌿",
    eq_light: "☀️ प्रकाश ऊर्जा",
    eq_glucose: "🍬 C₆H₁₂O₆ (ग्लूकोज)",

    app_pill: "🌍 वास्तविक दुनिया में विज्ञान का प्रभाव",
    app_title: "विज्ञान एवं प्रौद्योगिकी में प्रकाश संश्लेषण",
    app_subtitle: "सटीक कृषि आनुवंशिकी से लेकर ग्रहीय जलवायु संतुलन और मानव अंतरिक्ष अन्वेषण के लिए जीवन रक्षक प्रणालियों तक।",
    app_c1_title: "कृषि एवं फसल इंजीनियरिंग",
    app_c1_p: "प्रकाश संश्लेषक मार्गों को समझने से पादप आनुवंशिकीविदों को बढ़ती वैश्विक आबादी के लिए फसल की पैदावार बढ़ाने में मदद मिलती है।",
    app_c1_list: `<li>चावल और गेहूं में C4 और CAM मार्ग इंजीनियरिंग</li>
<li>LED तरंगदैर्ध्य ट्यूनिंग के साथ इनडोर वर्टिकल फार्मिंग</li>
<li>ग्रीनहाउस CO₂ संवर्धन प्रणालियाँ</li>
<li>सूखा प्रतिरोधी रंध्रीय चालकता प्रजनन</li>`,
    app_c2_title: "ग्रहीय पारिस्थितिकी एवं कार्बन सिंक",
    app_c2_p: "प्रकाश संश्लेषक जीव पृथ्वी के ऑक्सीजन बजट की नींव बनाते हैं और जलवायु परिवर्तन के खिलाफ प्राथमिक रक्षा के रूप में कार्य करते हैं।",
    app_c2_list: `<li>समुद्री फाइटोप्लांकटन पृथ्वी की >50% ऑक्सीजन उत्पन्न करते हैं</li>
<li>वन कार्बन पृथक्करण गीगाटन CO₂ का भंडारण करते हैं</li>
<li>महासागरीय जैविक कार्बन पंप महासागरीय अम्लीकरण को संतुलित करता है</li>
<li>आर्द्रभूमि और मैंग्रोव ब्लू कार्बन पुनर्स्थापन</li>`,
    app_c3_title: "सिंथेटिक बायोलॉजी एवं अंतरिक्ष मिशन",
    app_c3_p: "इंजीनियर गहरे अंतरिक्ष उपनिवेशीकरण के लिए नवीकरणीय सौर ईंधन और जीवन रक्षक प्रणाली बनाने के लिए प्रकाश संश्लेषण की नकल करते हैं।",
    app_c3_list: `<li>हरित हाइड्रोजन उत्पादन के लिए कृत्रिम प्रकाश संश्लेषण</li>
<li>मंगल ग्रह के आवासों के लिए सूक्ष्म शैवाल फोटोबायोरिएक्टर (ECLSS)</li>
<li>निरंतर O₂ पुनर्चक्रण एवं खाद्य बायोमास उत्पादन</li>
<li>थाइलाकोइड से सीधे इलेक्ट्रॉन एकत्र करने वाले बायो-सोलर सेल</li>`,

    footer_tagline: "ज्ञान का उपवन",
    footer_about: "मेधावाटिका कहानी कहने, गेमिफाइड सिमुलेशन, इंटरैक्टिव खोज और कठोर पाठ्यक्रम प्रवीणता के माध्यम से एसटीईएम शिक्षा को बदलती है।",
    footer_quests_title: "संवादात्मक खोज",
    footer_link_photo: "प्रकाश संश्लेषण अभियान",
    footer_link_trig: "त्रिकोणमिति खोज",
    footer_company_title: "कंपनी एवं नीतियां",
    footer_link_instructor: "प्रशिक्षक बनें",
    footer_link_terms: "नियम एवं शर्तें",
    footer_link_privacy: "गोपनीयता नीति",
    footer_link_refund: "वापसी नीति",
    footer_link_affiliate: "संबद्ध कार्यक्रम",
    footer_contact_title: "मेधावाटिका से संपर्क करें",
    footer_office: "<b>🏢 कार्यालय:</b> मेधावाटिका एडलैब्स प्राइवेट लिमिटेड<br>पुणे, महाराष्ट्र, भारत",
    footer_phone: "<b>📞 फोन:</b> +91 8007614867",
    footer_email: "<b>✉️ ईमेल:</b> contact@medhavatika.com",
    footer_rights: "मेधावाटिका एडलैब्स प्राइवेट लिमिटेड। सर्वाधिकार सुरक्षित।",
    footer_dedication: "विश्वभर के जिज्ञासु युवा वैज्ञानिकों के लिए 💚 से निर्मित"
  }
};

function initLanguageEngine() {
  const langSelect = document.getElementById('lang-select');
  const savedLang = localStorage.getItem('mv_photosynthesis_lang') || 'en';
  
  if (langSelect) {
    langSelect.value = savedLang === 'hi' ? 'hi' : 'en';
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
  
  setLanguage(savedLang === 'hi' ? 'hi' : 'en', false);
}

function setLanguage(lang, persist = true) {
  currentLang = (lang === 'hi') ? 'hi' : 'en';
  if (persist) {
    try {
      localStorage.setItem('mv_photosynthesis_lang', currentLang);
    } catch(e) {}
  }
  
  document.documentElement.lang = currentLang;
  
  const dict = TRANSLATIONS[currentLang];
  if (!dict) return;

  // Update all [data-i18n] DOM elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update Hero Art SVG Character Labels
  const owlLabel = document.getElementById('hero-owl-label');
  const medhaLabel = document.getElementById('hero-medha-label');
  if (owlLabel) owlLabel.textContent = currentLang === 'hi' ? 'उल्लू गाइड' : 'Owl Guide';
  if (medhaLabel) medhaLabel.textContent = currentLang === 'hi' ? 'मेधा' : 'Medhā';

  // Update Calvin Challenge target dropdown options
  const targetSelect = document.getElementById('calvin-target-select');
  if (targetSelect) {
    const val = targetSelect.value;
    targetSelect.innerHTML = currentLang === 'hi' ? `
      <option value="glucose">लक्ष्य: 1 ग्लूकोज (C₆H₁₂O₆)</option>
      <option value="g3p">लक्ष्य: 2 G3P (C₃H₇O₆P)</option>
      <option value="sucrose">लक्ष्य: 1 सुक्रोज (C₁₂H₂₂O₁₁)</option>
      <option value="starch">लक्ष्य: स्टार्च बहुलक (3× ग्लूकोज)</option>
    ` : `
      <option value="glucose">Target: 1 Glucose (C₆H₁₂O₆)</option>
      <option value="g3p">Target: 2 G3P (C₃H₇O₆P)</option>
      <option value="sucrose">Target: 1 Sucrose (C₁₂H₂₂O₁₁)</option>
      <option value="starch">Target: Starch Polymer (3× Glucose)</option>
    `;
    targetSelect.value = val;
  }

  // Update Flipbook Pages
  if (window.renderFlipbookPages) {
    window.renderFlipbookPages(window.currentFlipPage || 1);
  }

  // Trigger lab re-evaluations
  if (window.updateSpectrumLabUI) window.updateSpectrumLabUI();
  if (window.updateStomataUI) window.updateStomataUI();
  if (window.updateCalvinChallengeUI) window.updateCalvinChallengeUI();
  if (window.updateFactorsUI) window.updateFactorsUI();
}

/* =========================================================
   3. INTERACTIVE 13-PAGE FLIPBOOK ENGINE
   Bilingual "Medha's Photosynthesis Adventure"
   ========================================================= */
const FLIPBOOK_PAGES_EN = [
  {
    page: 1,
    isCover: true,
    tag: "MEDHAVATIKA STORYBOOK",
    title: "Medha's Photosynthesis Adventure",
    body: `<div style="text-align:center; padding: 20px 0;">
      <div style="font-size: 54px; margin-bottom: 12px;">🌿✨</div>
      <h3 style="font-size: 1.5rem; color: #fef08a; margin-bottom: 8px;">Photosynthesis Adventure</h3>
      <p style="color: #cbd5e1; font-size: 0.95rem; max-width: 320px; margin: 0 auto 16px;">
        Join Medha and her wise Owl guide as they journey inside a leaf to discover how sunlight turns into food!
      </p>
      <span style="display:inline-block; background:rgba(245,158,11,0.2); border:1px solid #f59e0b; color:#fef08a; padding:4px 14px; border-radius:99px; font-size:0.8rem; font-weight:700;">
        Grade 6–10 Life Science
      </span>
    </div>`
  },
  {
    page: 2,
    tag: "PROLOGUE",
    title: "The Secret of the Green Leaf",
    body: `<p>Medha and her companion Owl gazed up at the giant canopy of the ancient banyan tree. "Owl," Medha asked, holding up a glowing crystal lens, "how does a quiet leaf make all the energy that powers the forest?"</p>
    <div class="fb-dialogue">"Look closely through your lens, Medha," hooted the Owl. "A leaf is not just green paint — it is a bustling cosmic solar factory!"</div>
    <p>Every second, trillions of photons from our Sun journey 150 million kilometers across space to crash into tiny cellular solar panels called <strong>chloroplasts</strong>.</p>`
  },
  {
    page: 3,
    tag: "CHAPTER 1",
    title: "Anatomy of the Solar Factory",
    body: `<p>Stepping inside the plant cell, Medha discovered stacked pancake-like membranes called <strong>thylakoids</strong> floating in a dense enzymatic fluid known as the <strong>stroma</strong>.</p>
    <div class="fb-formula-box">
      Overall Reaction:<br>
      6 CO₂ + 6 H₂O + Light → C₆H₁₂O₆ + 6 O₂
    </div>
    <p>In the thylakoid membranes, chlorophyll pigments stand ready like miniature antennas to catch incoming light waves.</p>`
  },
  {
    page: 4,
    tag: "CHAPTER 1 · SPECTRUM",
    title: "The Solar Spectrum Trap",
    body: `<p>"Look at the spectrum dial!" exclaimed Medha. "Chlorophyll loves blue and red light, but lets green light bounce right off!"</p>
    <div class="fb-dialogue">"Exactly," nodded Owl. "Green light is reflected into our eyes. That reflection is why the Earth looks emerald green from outer space."</div>
    <p>High-energy blue photons (430–450 nm) and warm red photons (640–660 nm) provide the exact quantum voltage to excite electrons.</p>`
  },
  {
    page: 5,
    tag: "CHAPTER 2 · GATES",
    title: "Stomata & Guard Cells",
    body: `<p>Medha touched the underside of the leaf and felt thousands of tiny mouth-like valves opening and closing.</p>
    <div class="fb-dialogue">"These are stomata," said Owl. "Surrounded by two kidney-shaped guard cells. When swollen with water, they open to drink in carbon dioxide."</div>
    <p>The plant constantly balances getting CO₂ against losing water vapour through transpiration.</p>`
  },
  {
    page: 6,
    tag: "CHAPTER 3 · WATER",
    title: "Splitting Water (Photolysis)",
    body: `<p>Inside Photosystem II, sunlight strikes with such force that it rips water molecules apart!</p>
    <div class="fb-formula-box">
      Photolysis Reaction:<br>
      2 H₂O ⟶ 4 H⁺ + 4 e⁻ + O₂ ↑
    </div>
    <p>The oxygen gas (O₂) bubbles out into our atmosphere for animals and humans to breathe, while high-energy electrons race down the membrane.</p>`
  },
  {
    page: 7,
    tag: "CHAPTER 3 · ETC",
    title: "The Electron Highway",
    body: `<p>Electrons hop along cytochrome complexes like daredevils on a rollercoaster, pumping protons into the thylakoid lumen.</p>
    <div class="fb-dialogue">"The lumen gets packed with protons (H⁺) until it's pressurized like a shaken soda can!" cheered Medha.</div>
    <p>At the end of the chain, NADP⁺ picks up the electrons to form energised NADPH.</p>`
  },
  {
    page: 8,
    tag: "CHAPTER 3 · ENERGY",
    title: "The ATP Synthase Turbine",
    body: `<p>Pressurized protons burst through the rotary engine of <strong>ATP Synthase</strong>, spinning it at over 100 revolutions per second!</p>
    <div class="fb-formula-box">
      Energy Yield:<br>
      ADP + P_i + Proton Flow ⟶ ATP (Cellular Battery)
    </div>
    <p>Together, ATP and NADPH form the chemical fuel needed for the next great stage: the Calvin Cycle.</p>`
  },
  {
    page: 9,
    tag: "CHAPTER 4 · CYCLES",
    title: "The Calvin Cycle Wheel",
    body: `<p>Medha entered the warm chloroplast stroma where the master enzyme <strong>RuBisCO</strong> was spinning a chemical wheel.</p>
    <div class="fb-dialogue">"RuBisCO grabs CO₂ from the air and fixes it into 3-carbon chains," explained Owl. "It is the most abundant protein on planet Earth!"</div>
    <p>ATP and NADPH power the reduction phase, forging Glyceraldehyde-3-Phosphate (G3P).</p>`
  },
  {
    page: 10,
    tag: "CHAPTER 4 · SUGAR",
    title: "Forging Glucose (C₆H₁₂O₆)",
    body: `<p>For every 6 turns of the Calvin Cycle, the plant combines two G3P molecules into one sweet molecule of <strong>Glucose</strong>!</p>
    <div class="fb-formula-box">
      6 CO₂ + 18 ATP + 12 NADPH ⟶ C₆H₁₂O₆ + 18 ADP + 12 NADP⁺
    </div>
    <p>Glucose is transformed into cellulose for wood, starch for potatoes, and sucrose for sweet fruits.</p>`
  },
  {
    page: 11,
    tag: "CHAPTER 5 · FACTORS",
    title: "Blackman's Limiting Law",
    body: `<p>"What happens if winter arrives or clouds block the Sun?" asked Medha.</p>
    <div class="fb-dialogue">"Blackman's Law tells us the reaction can only go as fast as the scarcest ingredient," replied Owl.</div>
    <p>Whether it is low light, cold temperatures, or scarce CO₂, identifying the bottleneck is the key to mastering plant growth.</p>`
  },
  {
    page: 12,
    tag: "APPLICATIONS",
    title: "Photosynthesis Beyond Earth",
    body: `<p>Medha looked through her telescope at astronauts orbiting Earth. "Scientists are engineering algae bioreactors for Mars bases!"</p>
    <div class="fb-dialogue">"Yes! Plants and algae will recycle oxygen and produce food on long interplanetary voyages," hooted Owl proudly.</div>
    <p>Photosynthesis is the foundation of Earth's biosphere and humanity's future among the stars.</p>`
  },
  {
    page: 13,
    isCover: true,
    tag: "QUEST COMPLETE",
    title: "Medha's Plant Mastery Certificate",
    body: `<div style="text-align:center; padding: 20px 0;">
      <div style="font-size: 48px; margin-bottom: 8px;">🏆🌱</div>
      <h3 style="font-size: 1.35rem; color: #6ee7b7; margin-bottom: 6px;">Quest Master Certified!</h3>
      <p style="color: #cbd5e1; font-size: 0.88rem; max-width: 320px; margin: 0 auto 12px;">
        You have successfully explored all 5 stages of Photosynthesis Adventure with Medha &amp; MedhāVatika!
      </p>
      <div style="background: rgba(16,185,129,0.15); border: 1px solid #10b981; border-radius: 8px; padding: 8px 14px; font-size: 0.82rem; color: #a7f3d0; margin-bottom: 14px;">
        Chlorophyll · Stomata · Photolysis · Calvin Cycle · Blackman's Law
      </div>
      <a href="#ch4" style="display:inline-block; background:linear-gradient(135deg,#10b981,#06b6d4); color:#fff; font-weight:700; padding:8px 18px; border-radius:99px; font-size:0.85rem;">
        Play Sugar Shaper Game ⟶
      </a>
    </div>`
  }
];

const FLIPBOOK_PAGES_HI = [
  {
    page: 1,
    isCover: true,
    tag: "मेधावाटिका सचित्र पुस्तक",
    title: "मेधा का प्रकाश संश्लेषण अभियान",
    body: `<div style="text-align:center; padding: 20px 0;">
      <div style="font-size: 54px; margin-bottom: 12px;">🌿✨</div>
      <h3 style="font-size: 1.5rem; color: #fef08a; margin-bottom: 8px;">प्रकाश संश्लेषण अभियान</h3>
      <p style="color: #cbd5e1; font-size: 0.95rem; max-width: 320px; margin: 0 auto 16px;">
        मेधा और उसके बुद्धिमान उल्लू साथी के साथ पत्ती के भीतर की यात्रा पर चलें और जानें कि सूर्य का प्रकाश भोजन में कैसे बदलता है!
      </p>
      <span style="display:inline-block; background:rgba(245,158,11,0.2); border:1px solid #f59e0b; color:#fef08a; padding:4px 14px; border-radius:99px; font-size:0.8rem; font-weight:700;">
        कक्षा 6–10 जीव विज्ञान
      </span>
    </div>`
  },
  {
    page: 2,
    tag: "प्रस्तावना",
    title: "हरी पत्ती का रहस्य",
    body: `<p>मेधा और उसके साथी उल्लू ने प्राचीन बरगद के पेड़ की विशाल छत्रछाया की ओर देखा। मेधा ने एक चमकता हुआ क्रिस्टल लेंस उठाते हुए पूछा, "उल्लू, एक शांत पत्ती पूरे जंगल को चलाने वाली सारी ऊर्जा कैसे बनाती है?"</p>
    <div class="fb-dialogue">"अपने लेंस से ध्यान से देखो, मेधा," उल्लू ने आवाज दी। "पत्ती केवल हरा रंग नहीं है — यह एक हलचल भरा ब्रह्मांडीय सौर कारखाना है!"</div>
    <p>प्रत्येक सेकंड, हमारे सूर्य से खरबों फोटॉन अंतरिक्ष में 150 मिलियन किलोमीटर की यात्रा करके <strong>क्लोरोप्लास्ट</strong> नामक सूक्ष्म सौर पैनलों से टकराते हैं।</p>`
  },
  {
    page: 3,
    tag: "अध्याय 1",
    title: "सौर कारखाने की आंतरिक संरचना",
    body: `<p>पादप कोशिका के अंदर प्रवेश करते हुए, मेधा ने <strong>स्ट्रोमा</strong> नामक सघन तरल में तैरती हुई <strong>थाइलाकोइड</strong> नामक चपटी झिल्लियों की गड्डियां देखीं।</p>
    <div class="fb-formula-box">
      कुल अभिक्रिया (Overall Reaction):<br>
      6 CO₂ + 6 H₂O + Light → C₆H₁₂O₆ + 6 O₂
    </div>
    <p>थाइलाकोइड झिल्लियों में, क्लोरोफिल वर्णक आने वाली प्रकाश तरंगों को पकड़ने के लिए सूक्ष्म एंटीना की तरह तैयार खड़े रहते हैं।</p>`
  },
  {
    page: 4,
    tag: "अध्याय 1 · स्पेक्ट्रम",
    title: "सौर स्पेक्ट्रम का रहस्य",
    body: `<p>"स्पेक्ट्रम डायल को देखो!" मेधा ने आश्चर्य से कहा। "क्लोरोफिल नीले और लाल प्रकाश को सबसे अधिक अवशोषित करता है, लेकिन हरे प्रकाश को वापस परावर्तित कर देता है!"</p>
    <div class="fb-dialogue">"बिल्कुल सही," उल्लू ने सिर हिलाया। "हरा प्रकाश हमारी आंखों में परावर्तित होता है। इसी परावर्तन के कारण अंतरिक्ष से पृथ्वी पन्ने जैसी हरी दिखाई देती है।"</div>
    <p>उच्च ऊर्जा वाले नीले फोटॉन (430–450 nm) और लाल फोटॉन (640–660 nm) इलेक्ट्रॉनों को उत्तेजित करने के लिए सटीक ऊर्जा प्रदान करते हैं।</p>`
  },
  {
    page: 5,
    tag: "अध्याय 2 · कपाट",
    title: "रंध्र और द्वार कोशिकाएं",
    body: `<p>मेधा ने पत्ती की निचली सतह को छुआ और हजारों छोटे मुख जैसे कपाटों को खुलते और बंद होते देखा।</p>
    <div class="fb-dialogue">"ये रंध्र (स्टोमेटा) हैं," उल्लू ने कहा। "जो दो वृक्काकार द्वार कोशिकाओं से घिरे हैं। जब वे जल से फूल जाते हैं, तो कार्बन डाइऑक्साइड को ग्रहण करने के लिए खुल जाते हैं।"</div>
    <p>पौधा लगातार CO₂ प्राप्त करने और वाष्पोत्सर्जन के माध्यम से जल की हानि को रोकने के बीच संतुलन बनाता है।</p>`
  },
  {
    page: 6,
    tag: "अध्याय 3 · जल",
    title: "जल का प्रकाशीय अपघटन (फोटोलीसिस)",
    body: `<p>फोटोसिस्टम II के अंदर, सूर्य का प्रकाश इतने तीव्र बल से टकराता है कि वह जल के अणुओं को तोड़ देता है!</p>
    <div class="fb-formula-box">
      फोटोलीसिस अभिक्रिया (Photolysis Reaction):<br>
      2 H₂O ⟶ 4 H⁺ + 4 e⁻ + O₂ ↑
    </div>
    <p>ऑक्सीजन गैस (O₂) जीव-जंतुओं और मनुष्यों के सांस लेने के लिए वायुमंडल में मुक्त हो जाती है, जबकि उच्च ऊर्जा वाले इलेक्ट्रॉन झिल्ली में आगे बढ़ते हैं।</p>`
  },
  {
    page: 7,
    tag: "अध्याय 3 · ETC",
    title: "इलेक्ट्रॉन परिवहन शृंखला (ETC)",
    body: `<p>इलेक्ट्रॉन साइटोक्रोम कॉम्प्लेक्स के साथ तेजी से आगे बढ़ते हैं और प्रोटॉनों को थाइलाकोइड ल्यूमेन में पंप करते हैं।</p>
    <div class="fb-dialogue">"ल्यूमेन प्रोटॉनों (H⁺) से इतना भर जाता है कि यह एक हिले हुए सोडा के डिब्बे की तरह दबावयुक्त हो जाता है!" मेधा ने उत्साह से कहा।</div>
    <p>शृंखला के अंत में, NADP⁺ इलेक्ट्रॉनों को ग्रहण करके ऊर्जावान NADPH बनाता है।</p>`
  },
  {
    page: 8,
    tag: "अध्याय 3 · ऊर्जा",
    title: "एटीपी सिंथेस टरबाइन",
    body: `<p>दबावयुक्त प्रोटॉन <strong>ATP Synthase</strong> के रोटरी इंजन से तेजी से बाहर निकलते हैं, जिससे यह प्रति सेकंड 100 से अधिक चक्कर लगाता है!</p>
    <div class="fb-formula-box">
      ऊर्जा उत्पादन (Energy Yield):<br>
      ADP + P_i + Proton Flow ⟶ ATP (Cellular Battery)
    </div>
    <p>ATP और NADPH मिलकर अगले महान चरण: केल्विन चक्र के लिए आवश्यक रासायनिक ईंधन बनाते हैं।</p>`
  },
  {
    page: 9,
    tag: "अध्याय 4 · चक्र",
    title: "केल्विन चक्र का पहिया",
    body: `<p>मेधा क्लोरोप्लास्ट के स्ट्रोमा में पहुंची जहां प्रमुख एंजाइम <strong>RuBisCO</strong> एक रासायनिक चक्र चला रहा था।</p>
    <div class="fb-dialogue">"RuBisCO हवा से CO₂ को पकड़ता है और इसे 3-कार्बन शृंखलाओं में स्थिर करता है," उल्लू ने समझाया। "यह पृथ्वी पर सबसे प्रचुर मात्रा में पाया जाने वाला प्रोटीन है!"</div>
    <p>ATP और NADPH अपचयन चरण को ऊर्जा प्रदान करते हैं, जिससे ग्लिसराल्डिहाइड-3-फॉस्फेट (G3P) बनता है।</p>`
  },
  {
    page: 10,
    tag: "अध्याय 4 · शर्करा",
    title: "ग्लूकोज का निर्माण (C₆H₁₂O₆)",
    body: `<p>केल्विन चक्र के प्रत्येक 6 चक्करों के लिए, पौधा दो G3P अणुओं को मिलाकर <strong>ग्लूकोज</strong> का एक मीठा अणु बनाता है!</p>
    <div class="fb-formula-box">
      6 CO₂ + 18 ATP + 12 NADPH ⟶ C₆H₁₂O₆ + 18 ADP + 12 NADP⁺
    </div>
    <p>ग्लूकोज लकड़ी के लिए सेल्यूलोज, आलू के लिए स्टार्च और मीठे फलों के लिए सुक्रोज में बदल जाता है।</p>`
  },
  {
    page: 11,
    tag: "अध्याय 5 · कारक",
    title: "ब्लैकमैन का सीमांत नियम",
    body: `<p>"यदि सर्दी आ जाए या बादल सूर्य को ढक लें तो क्या होगा?" मेधा ने पूछा।</p>
    <div class="fb-dialogue">"ब्लैकमैन का नियम हमें बताता है कि अभिक्रिया केवल उतनी ही तेजी से हो सकती है जितनी कि सबसे दुर्लभ घटक की गति होती है," उल्लू ने उत्तर दिया।</div>
    <p>चाहे कम प्रकाश हो, ठंडा तापमान हो, या दुर्लभ CO₂, बाधा (bottleneck) की पहचान करना पौधों के विकास को समझने की कुंजी है।</p>`
  },
  {
    page: 12,
    tag: "अनुप्रयोग",
    title: "पृथ्वी से परे प्रकाश संश्लेषण",
    body: `<p>मेधा ने अपने टेलीस्कोप से पृथ्वी की परिक्रमा कर रहे अंतरिक्ष यात्रियों को देखा। "वैज्ञानिक मंगल ग्रह के आवासों के लिए शैवाल बायोरिएक्टर विकसित कर रहे हैं!"</p>
    <div class="fb-dialogue">"हाँ! पौधे और शैवाल लंबी अंतरग्रहीय यात्राओं पर ऑक्सीजन का पुनर्चक्रण करेंगे और भोजन का उत्पादन करेंगे," उल्लू ने गर्व से कहा।</div>
    <p>प्रकाश संश्लेषण पृथ्वी के जीवमंडल और तारों के बीच मानवता के भविष्य का आधार है।</p>`
  },
  {
    page: 13,
    isCover: true,
    tag: "अभियान पूर्ण",
    title: "मेधा का पादप प्रवीणता प्रमाण पत्र",
    body: `<div style="text-align:center; padding: 20px 0;">
      <div style="font-size: 48px; margin-bottom: 8px;">🏆🌱</div>
      <h3 style="font-size: 1.35rem; color: #6ee7b7; margin-bottom: 6px;">अभियान मास्टर प्रमाणित!</h3>
      <p style="color: #cbd5e1; font-size: 0.88rem; max-width: 320px; margin: 0 auto 12px;">
        आपने मेधा और मेधावाटिका के साथ प्रकाश संश्लेषण अभियान के सभी 5 चरणों को सफलतापूर्वक पूरा कर लिया है!
      </p>
      <div style="background: rgba(16,185,129,0.15); border: 1px solid #10b981; border-radius: 8px; padding: 8px 14px; font-size: 0.82rem; color: #a7f3d0; margin-bottom: 14px;">
        क्लोरोफिल · रंध्र · फोटोलीसिस · केल्विन चक्र · ब्लैकमैन का नियम
      </div>
      <a href="#ch4" style="display:inline-block; background:linear-gradient(135deg,#10b981,#06b6d4); color:#fff; font-weight:700; padding:8px 18px; border-radius:99px; font-size:0.85rem;">
        शर्करा निर्माता खेलें ⟶
      </a>
    </div>`
  }
];

let currentFlipPage = 1;
let flipZoom = 1;
let isFlipping = false;

function initFlipbookEngine() {
  const pageInput = document.getElementById('fb-page-num');
  const btnPrev = document.getElementById('fb-prev');
  const btnNext = document.getElementById('fb-next');
  const btnFirst = document.getElementById('fb-first');
  const btnLast = document.getElementById('fb-last');
  const btnToc = document.getElementById('fb-toc-btn');
  const tocModal = document.getElementById('toc-modal');
  const btnZoomIn = document.getElementById('fb-zoom-in');
  const btnZoomOut = document.getElementById('fb-zoom-out');
  const btnFullscreen = document.getElementById('fb-fullscreen');
  const fbContainer = document.getElementById('flipbook-container');
  const sheet = document.getElementById('flipbook-sheet');
  const leftEl = document.getElementById('fb-page-left');
  const rightEl = document.getElementById('fb-page-right');

  function getPageHTML(pageData, side = 'left') {
    if (!pageData) {
      const endText = (currentLang === 'hi') ? 'सचित्र पुस्तक समाप्त' : 'End of Storybook';
      return `<div style="text-align:center; padding: 80px 20px; color:#94a3b8;">${endText}</div>`;
    }
    if (pageData.isCover) {
      return pageData.body;
    }
    const pageWord = (currentLang === 'hi') ? 'पृष्ठ' : 'Page';
    const hintHTML = side === 'left' 
      ? `<span class="fb-corner-hint">◀ ${currentLang === 'hi' ? 'पिछला' : 'Prev'}</span>`
      : `<span class="fb-corner-hint">${currentLang === 'hi' ? 'अगला' : 'Next'} ▶</span>`;

    return `
      <div class="fb-page-header">
        <span>${pageData.tag}</span>
        <h4>${pageData.title}</h4>
      </div>
      <div class="fb-page-body">${pageData.body}</div>
      <div class="fb-page-num">${pageWord} ${pageData.page}</div>
      ${hintHTML}
    `;
  }

  function applyPageToElement(el, pageData, side = 'left') {
    if (!el) return;
    if (!pageData) {
      el.className = `fb-page ${side}`;
      el.innerHTML = getPageHTML(null, side);
      return;
    }
    if (pageData.isCover) {
      el.className = `fb-page ${side} fb-cover-page`;
    } else {
      el.className = `fb-page ${side}`;
    }
    el.innerHTML = getPageHTML(pageData, side);
  }

  function turnToPage(pageNum, animate = true) {
    pageNum = Math.max(1, Math.min(13, pageNum));
    const oldPage = currentFlipPage;
    
    // Clean up any ongoing flipping leaf
    if (sheet) {
      const existingLeaf = sheet.querySelector('.fb-flipping-leaf');
      if (existingLeaf) existingLeaf.remove();
    }

    if (pageNum === oldPage && animate) return;

    const pages = (currentLang === 'hi') ? FLIPBOOK_PAGES_HI : FLIPBOOK_PAGES_EN;
    const newLeftData = pages[pageNum - 1];
    const newRightData = pageNum < 13 ? pages[pageNum] : null;

    currentFlipPage = pageNum;
    window.currentFlipPage = pageNum;
    if (pageInput) pageInput.value = pageNum;

    // Check if dual-page 3D animation can run (screen width > 860px and sheet exists)
    const canAnimate3D = animate && sheet && window.innerWidth > 860;

    if (!canAnimate3D) {
      applyPageToElement(leftEl, newLeftData, 'left');
      applyPageToElement(rightEl, newRightData, 'right');
      isFlipping = false;
      return;
    }

    const isForward = pageNum > oldPage;
    const oldLeftData = pages[oldPage - 1];
    const oldRightData = oldPage < 13 ? pages[oldPage] : null;

    isFlipping = true;

    if (isForward) {
      // 3D Flip Forward: turning leaf flips from right side to left side
      // Immediately set right page background to new right page
      applyPageToElement(rightEl, newRightData, 'right');

      const leaf = document.createElement('div');
      leaf.className = 'fb-flipping-leaf flip-forward';
      leaf.innerHTML = `
        <div class="fb-leaf-face fb-leaf-front ${oldRightData && oldRightData.isCover ? 'fb-cover-page' : ''}">
          ${getPageHTML(oldRightData, 'right')}
        </div>
        <div class="fb-leaf-face fb-leaf-back ${newLeftData && newLeftData.isCover ? 'fb-cover-page' : ''}">
          ${getPageHTML(newLeftData, 'left')}
        </div>
        <div class="fb-leaf-shadow"></div>
      `;
      sheet.appendChild(leaf);

      setTimeout(() => {
        applyPageToElement(leftEl, newLeftData, 'left');
        if (leaf.parentNode) leaf.parentNode.removeChild(leaf);
        isFlipping = false;
      }, 580);

    } else {
      // 3D Flip Backward: turning leaf flips from left side to right side
      // Immediately set left page background to new left page
      applyPageToElement(leftEl, newLeftData, 'left');

      const leaf = document.createElement('div');
      leaf.className = 'fb-flipping-leaf flip-backward';
      leaf.innerHTML = `
        <div class="fb-leaf-face fb-leaf-front ${oldLeftData && oldLeftData.isCover ? 'fb-cover-page' : ''}">
          ${getPageHTML(oldLeftData, 'left')}
        </div>
        <div class="fb-leaf-face fb-leaf-back ${newRightData && newRightData.isCover ? 'fb-cover-page' : ''}">
          ${getPageHTML(newRightData, 'right')}
        </div>
        <div class="fb-leaf-shadow"></div>
      `;
      sheet.appendChild(leaf);

      setTimeout(() => {
        applyPageToElement(rightEl, newRightData, 'right');
        if (leaf.parentNode) leaf.parentNode.removeChild(leaf);
        isFlipping = false;
      }, 580);
    }
  }

  window.renderFlipbookPages = (p) => turnToPage(p, false);

  // Click on Page to turn
  if (rightEl) {
    rightEl.addEventListener('click', (e) => {
      if (e.target.closest('a, button, select, input')) return;
      if (currentFlipPage < 13) {
        turnToPage(currentFlipPage + (currentFlipPage === 1 ? 1 : 2), true);
      }
    });
  }

  if (leftEl) {
    leftEl.addEventListener('click', (e) => {
      if (e.target.closest('a, button, select, input')) return;
      if (currentFlipPage > 1) {
        turnToPage(Math.max(1, currentFlipPage - 2), true);
      }
    });
  }

  // Navigation Handlers
  if (btnPrev) btnPrev.addEventListener('click', () => {
    turnToPage(Math.max(1, currentFlipPage - 2), true);
  });
  if (btnNext) btnNext.addEventListener('click', () => {
    turnToPage(Math.min(13, currentFlipPage + (currentFlipPage === 1 ? 1 : 2)), true);
  });
  if (btnFirst) btnFirst.addEventListener('click', () => turnToPage(1, true));
  if (btnLast) btnLast.addEventListener('click', () => turnToPage(13, true));

  if (pageInput) {
    pageInput.addEventListener('change', (e) => {
      const val = parseInt(e.target.value, 10);
      if (!isNaN(val)) turnToPage(val, true);
    });
  }

  // TOC Modal
  if (btnToc && tocModal) {
    btnToc.addEventListener('click', (e) => {
      e.stopPropagation();
      tocModal.classList.toggle('open');
    });

    document.querySelectorAll('.toc-item').forEach(item => {
      item.addEventListener('click', () => {
        const p = parseInt(item.getAttribute('data-page'), 10);
        if (p) turnToPage(p, true);
        tocModal.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!tocModal.contains(e.target) && e.target !== btnToc) {
        tocModal.classList.remove('open');
      }
    });
  }

  // Zoom Handlers
  if (btnZoomIn) {
    btnZoomIn.addEventListener('click', () => {
      flipZoom = Math.min(1.3, flipZoom + 0.1);
      applyZoom();
    });
  }
  if (btnZoomOut) {
    btnZoomOut.addEventListener('click', () => {
      flipZoom = Math.max(0.85, flipZoom - 0.1);
      applyZoom();
    });
  }

  function applyZoom() {
    if (sheet) sheet.style.transform = `scale(${flipZoom})`;
  }

  // Fullscreen
  if (btnFullscreen && fbContainer) {
    btnFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        fbContainer.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') turnToPage(Math.max(1, currentFlipPage - 2), true);
    if (e.key === 'ArrowRight') turnToPage(Math.min(13, currentFlipPage + (currentFlipPage === 1 ? 1 : 2)), true);
  });

  turnToPage(1, false);
}

/* =========================================================
   4. STAGE 1 — CHLOROPHYLL ABSORPTION SPECTRUM SIMULATOR
   ========================================================= */
function initSpectrumLab() {
  const slider = document.getElementById('spectrum-slider');
  const canvas = document.getElementById('spectrum-canvas');
  if (!slider || !canvas) return;

  const ctx = canvas.getContext('2d');
  const colorNameEl = document.getElementById('spectrum-colorname');
  const absorbEl = document.getElementById('spectrum-absorb');
  const reflectEl = document.getElementById('spectrum-reflect');
  const photonEEl = document.getElementById('spectrum-photon-e');
  const leafColorEl = document.getElementById('spectrum-leafcolor');

  let particles = [];
  for (let i = 0; i < 20; i++) {
    particles.push({
      x: Math.random() * 300,
      y: Math.random() * 180,
      speed: 1 + Math.random() * 2,
      size: 2 + Math.random() * 2
    });
  }

  function getWavelengthColor(wl) {
    let r, g, b;
    if (wl >= 380 && wl < 440) {
      r = -(wl - 440) / (440 - 380); g = 0; b = 1;
    } else if (wl >= 440 && wl < 490) {
      r = 0; g = (wl - 440) / (490 - 440); b = 1;
    } else if (wl >= 490 && wl < 510) {
      r = 0; g = 1; b = -(wl - 510) / (510 - 490);
    } else if (wl >= 510 && wl < 580) {
      r = (wl - 510) / (580 - 510); g = 1; b = 0;
    } else if (wl >= 580 && wl < 645) {
      r = 1; g = -(wl - 645) / (645 - 580); b = 0;
    } else if (wl >= 645 && wl <= 750) {
      r = 1; g = 0; b = 0;
    } else {
      r = 0; g = 0; b = 0;
    }
    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
      rgb: `rgb(${Math.round(r*255)}, ${Math.round(g*255)}, ${Math.round(b*255)})`
    };
  }

  function calcAbsorption(wl) {
    const peakA1 = Math.exp(-Math.pow((wl - 430) / 22, 2)) * 0.95;
    const peakA2 = Math.exp(-Math.pow((wl - 662) / 20, 2)) * 0.88;
    const peakB1 = Math.exp(-Math.pow((wl - 453) / 18, 2)) * 0.85;
    const peakB2 = Math.exp(-Math.pow((wl - 642) / 18, 2)) * 0.70;
    const baseline = 0.05 + 0.08 * Math.exp(-Math.pow((wl - 550) / 70, 2));
    const total = Math.min(0.98, Math.max(0.04, peakA1 + peakA2 + peakB1 + peakB2 + baseline));
    return total;
  }

  function update() {
    const wl = parseInt(slider.value, 10);
    const colorObj = getWavelengthColor(wl);
    const absorbRatio = calcAbsorption(wl);
    const reflectRatio = 1 - absorbRatio;
    const energyEV = (1239.8 / wl).toFixed(2);

    let colName = 'Visible Light';
    if (currentLang === 'hi') {
      if (wl < 430) colName = 'बैंगनी (Violet)';
      else if (wl < 480) colName = 'नीला (Blue)';
      else if (wl < 510) colName = 'सियान (Cyan)';
      else if (wl < 565) colName = 'हरा (Green)';
      else if (wl < 590) colName = 'पीला (Yellow)';
      else if (wl < 625) colName = 'नारंगी (Orange)';
      else colName = 'लाल (Red)';
    } else {
      if (wl < 430) colName = 'Violet';
      else if (wl < 480) colName = 'Blue';
      else if (wl < 510) colName = 'Cyan';
      else if (wl < 565) colName = 'Green';
      else if (wl < 590) colName = 'Yellow';
      else if (wl < 625) colName = 'Orange';
      else colName = 'Red';
    }

    if (colorNameEl) colorNameEl.textContent = `${colName} · ${wl} nm`;
    if (absorbEl) absorbEl.textContent = `${Math.round(absorbRatio * 100)}%`;
    if (reflectEl) reflectEl.textContent = `${Math.round(reflectRatio * 100)}%`;
    if (photonEEl) photonEEl.textContent = `${energyEV} eV`;
    if (leafColorEl) leafColorEl.style.backgroundColor = colorObj.rgb;

    draw();
  }

  window.updateSpectrumLabUI = update;

  function draw() {
    const w = canvas.width = canvas.offsetWidth;
    const h = canvas.height = canvas.offsetHeight;
    ctx.clearRect(0, 0, w, h);

    const wl = parseInt(slider.value, 10);
    const colorObj = getWavelengthColor(wl);

    // Spectrum Background Bar
    const specBarY = h - 26;
    const specGrad = ctx.createLinearGradient(40, 0, w - 20, 0);
    for (let l = 380; l <= 720; l += 20) {
      const pos = (l - 380) / (720 - 380);
      specGrad.addColorStop(pos, getWavelengthColor(l).rgb);
    }
    ctx.fillStyle = specGrad;
    ctx.fillRect(40, specBarY, w - 60, 16);

    // Draw Grid & Axes
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, specBarY);
    ctx.lineTo(w - 20, specBarY);
    ctx.stroke();

    // Axis Labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px Inter, Noto Sans Devanagari';
    const abs100 = (currentLang === 'hi') ? '100% अवशोषण' : '100% Abs';
    const abs0 = (currentLang === 'hi') ? '0% अवशोषण' : '0% Abs';
    const greenDip = (currentLang === 'hi') ? '550nm (हरा गर्त)' : '550nm (Green Dip)';

    ctx.fillText(abs100, 0, 26);
    ctx.fillText(abs0, 8, specBarY - 4);
    ctx.fillText('380nm', 40, h - 4);
    ctx.fillText(greenDip, w * 0.46, h - 4);
    ctx.fillText('720nm', w - 50, h - 4);

    // Absorption Curve for Chlorophyll
    ctx.beginPath();
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 3;
    for (let x = 40; x <= w - 20; x++) {
      const currentWl = 380 + ((x - 40) / (w - 60)) * (720 - 380);
      const abs = calcAbsorption(currentWl);
      const y = (specBarY - 10) - abs * (specBarY - 35);
      if (x === 40) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Current Selected Wavelength Marker
    const targetX = 40 + ((wl - 380) / (720 - 380)) * (w - 60);
    const targetAbs = calcAbsorption(wl);
    const targetY = (specBarY - 10) - targetAbs * (specBarY - 35);

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(targetX, 10);
    ctx.lineTo(targetX, specBarY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Glow dot on curve
    ctx.fillStyle = colorObj.rgb;
    ctx.beginPath();
    ctx.arc(targetX, targetY, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Animated Photons
    particles.forEach(p => {
      p.y += p.speed;
      if (p.y > specBarY - 10) {
        p.y = 20;
        p.x = 40 + Math.random() * (w - 60);
      }
      ctx.fillStyle = colorObj.rgb;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  slider.addEventListener('input', update);
  window.addEventListener('resize', update);
  update();

  function animate() {
    draw();
    requestAnimationFrame(animate);
  }
  animate();
}

/* =========================================================
   5. STAGE 2 — STOMATA & GAS EXCHANGE LAB
   ========================================================= */
function initStomataLab() {
  const lightSlider = document.getElementById('stomata-light');
  const humiditySlider = document.getElementById('stomata-humidity');
  if (!lightSlider || !humiditySlider) return;

  const poreShape = document.getElementById('stomata-pore-shape');
  const guardLeft = document.getElementById('guard-cell-left');
  const guardRight = document.getElementById('guard-cell-right');
  const particleGroup = document.getElementById('stomata-gas-particles');

  const lightValEl = document.getElementById('stomata-light-val');
  const humidityValEl = document.getElementById('stomata-humidity-val');
  const stateEl = document.getElementById('stomata-state');
  const co2El = document.getElementById('stomata-co2');
  const transpEl = document.getElementById('stomata-transpiration');
  const wueEl = document.getElementById('stomata-wue');
  const bioStatusEl = document.getElementById('stomata-bio-status');

  let gasParticles = [];
  for (let i = 0; i < 28; i++) {
    gasParticles.push({
      type: i % 2 === 0 ? 'CO2' : 'H2O',
      x: 60 + Math.random() * 220,
      y: Math.random() * 200,
      speed: 0.8 + Math.random() * 1.2
    });
  }

  function updateStomata() {
    const light = parseInt(lightSlider.value, 10);
    const humidity = parseInt(humiditySlider.value, 10);

    if (lightValEl) lightValEl.textContent = `${light}%`;
    if (humidityValEl) humidityValEl.textContent = `${humidity}%`;

    const lightFactor = light / 100;
    const humidityFactor = Math.pow(humidity / 100, 0.7);

    // Stomatal Pore Radius (r) in micrometers (2.0 μm to 12.0 μm)
    const radiusUm = (2.0 + 10.0 * lightFactor * (0.35 + 0.65 * humidityFactor)).toFixed(1);
    const rNorm = parseFloat(radiusUm) / 12.0;

    const areaRatio = Math.pow(rNorm, 2);
    const co2Flux = (0.2 + 5.6 * areaRatio).toFixed(1);
    const vpd = Math.max(0.08, (100 - humidity) / 100);
    const transpirationRate = (areaRatio * vpd * 3.8).toFixed(2);
    const ratioNum = parseFloat(co2Flux) > 0 ? Math.round((parseFloat(transpirationRate) * 1000 / parseFloat(co2Flux)) * 0.58) : 750;
    const displayRatio = Math.max(140, Math.min(720, ratioNum));

    const rx = Math.max(3, Math.round(3 + rNorm * 35));
    const ry = Math.max(22, Math.round(24 + rNorm * 32));

    if (poreShape) {
      poreShape.setAttribute('rx', rx);
      poreShape.setAttribute('ry', ry);
    }

    if (guardLeft && guardRight) {
      const shift = rNorm * 26;
      const leftTipX = (158 - shift).toFixed(1);
      const leftOuterX = (110 - shift * 1.15).toFixed(1);
      const leftInnerX = (148 - shift * 1.15).toFixed(1);

      const rightTipX = (182 + shift).toFixed(1);
      const rightOuterX = (230 + shift * 1.15).toFixed(1);
      const rightInnerX = (192 + shift * 1.15).toFixed(1);

      guardLeft.setAttribute('d', `M${leftTipX},46 Q${leftOuterX},105 ${leftTipX},164 Q${leftInnerX},105 ${leftTipX},46 Z`);
      guardRight.setAttribute('d', `M${rightTipX},46 Q${rightOuterX},105 ${rightTipX},164 Q${rightInnerX},105 ${rightTipX},46 Z`);
    }

    const openWord = (currentLang === 'hi') ? (rNorm > 0.4 ? 'खुला' : 'संकुचित') : (rNorm > 0.4 ? 'Open' : 'Constricted');

    if (stateEl) stateEl.textContent = `${radiusUm} μm (${openWord})`;
    if (co2El) co2El.textContent = `${co2Flux} μmol/m²·s`;
    if (transpEl) transpEl.textContent = `${transpirationRate} mmol/m²·s`;
    if (wueEl) wueEl.textContent = `${displayRatio} : 1`;

    if (bioStatusEl) {
      if (currentLang === 'hi') {
        if (light < 15) {
          bioStatusEl.textContent = "🌙 रात्रि / विश्राम: K⁺ आयन बाहर निकलते हैं · द्वार कोशिकाएं शिथिल · जल संरक्षण के लिए रंध्र 2μm तक संकुचित।";
        } else if (humidity < 30) {
          bioStatusEl.textContent = `⚠️ कम आर्द्रता / शुष्क वायु: वाष्प दबाव जल खींचता है · ABA हार्मोन सूखे से बचाव के लिए रंध्र को ${radiusUm}μm तक बंद करता है।`;
        } else if (light > 70 && humidity > 60) {
          bioStatusEl.textContent = `☀️ तेज धूप और उच्च आर्द्रता: K⁺ पंप सक्रिय · परासरण से पानी भर जाता है · पूर्ण स्फीति (${radiusUm}μm) · अनुकूलतम CO₂ प्रवाह।`;
        } else {
          bioStatusEl.textContent = `🔬 सक्रिय नियमन: K⁺ स्फीति ${radiusUm}μm रंध्र बनाए रखती है · CO₂ प्रवाह ${co2Flux} μmol/m²·s · वाष्पोत्सर्जन ${transpirationRate} mmol/m²·s।`;
        }
      } else {
        if (light < 15) {
          bioStatusEl.textContent = "🌙 Night/Resting: K⁺ ions diffuse out · Guard cells flaccid · Pore constricted to 2μm to conserve water.";
        } else if (humidity < 30) {
          bioStatusEl.textContent = `⚠️ Low Humidity / Dry Air: High vapor deficit sucks water out · ABA hormone constricts pore to ${radiusUm}μm for drought defense.`;
        } else if (light > 70 && humidity > 60) {
          bioStatusEl.textContent = `☀️ Bright Sun & High Humidity: K⁺ pumps active · Water rushes in by osmosis · Full turgor (${radiusUm}μm) · Optimal CO₂ influx.`;
        } else {
          bioStatusEl.textContent = `🔬 Active Regulation: K⁺ turgor maintains ${radiusUm}μm pore · Fick's CO₂ flux at ${co2Flux} μmol/m²·s · Transpiration at ${transpirationRate} mmol/m²·s.`;
        }
      }
    }

    currentCo2Speed = parseFloat(co2Flux);
    currentH2oSpeed = parseFloat(transpirationRate);
    renderGasParticles();
  }

  window.updateStomataUI = updateStomata;

  let currentCo2Speed = 4.0;
  let currentH2oSpeed = 1.8;

  function renderGasParticles() {
    if (!particleGroup) return;
    particleGroup.innerHTML = '';
    gasParticles.forEach(p => {
      if (p.type === 'CO2') {
        p.y += p.speed * (0.3 + (currentCo2Speed / 6.0) * 1.2);
        if (p.y > 200) p.y = 10;
      } else {
        p.y -= p.speed * (0.3 + (currentH2oSpeed / 3.8) * 1.4);
        if (p.y < 10) p.y = 200;
      }

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', p.x);
      circle.setAttribute('cy', p.y);
      circle.setAttribute('r', p.type === 'CO2' ? '4' : '3.2');
      circle.setAttribute('fill', p.type === 'CO2' ? '#a855f7' : '#22d3ee');
      circle.setAttribute('opacity', '0.75');
      particleGroup.appendChild(circle);
    });
  }

  lightSlider.addEventListener('input', updateStomata);
  humiditySlider.addEventListener('input', updateStomata);
  updateStomata();

  setInterval(() => {
    renderGasParticles();
  }, 40);
}

/* =========================================================
   6. STAGE 3 — LIGHT REACTIONS & ELECTRON TRANSPORT CHAIN
   ========================================================= */
function initLightReactionsLab() {
  const canvas = document.getElementById('etc-canvas');
  const playBtn = document.getElementById('etc-play-btn');
  const resetBtn = document.getElementById('etc-reset-btn');
  const speedSelect = document.getElementById('etc-speed-select');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const atpEl = document.getElementById('etc-atp-val');
  const nadphEl = document.getElementById('etc-nadph-val');
  const o2El = document.getElementById('etc-o2-val');
  const syncPhoton = document.getElementById('sync-bar-photon');
  const syncChem = document.getElementById('sync-bar-chem');

  let isRunning = false;
  let speed = 1.0;
  let t = 0;
  let atpCount = 0;
  let nadphCount = 0;
  let o2Count = 0;

  let electrons = [
    { progress: 0.1, complex: 0 },
    { progress: 0.4, complex: 1 },
    { progress: 0.7, complex: 2 }
  ];

  let protons = [];
  for (let i = 0; i < 18; i++) {
    protons.push({
      x: 40 + Math.random() * 240,
      y: 135 + Math.random() * 50,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6
    });
  }

  function drawETC() {
    const w = canvas.width = canvas.offsetWidth;
    const h = canvas.height = canvas.offsetHeight;
    ctx.clearRect(0, 0, w, h);

    const memY = 100;
    ctx.fillStyle = '#064e3b';
    ctx.fillRect(0, memY - 14, w, 28);
    ctx.fillStyle = '#10b981';
    for (let x = 10; x < w; x += 14) {
      ctx.beginPath();
      ctx.arc(x, memY - 12, 4, 0, Math.PI * 2);
      ctx.arc(x, memY + 12, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.font = '10px Inter, Noto Sans Devanagari';
    ctx.fillStyle = '#94a3b8';
    const stromaText = (currentLang === 'hi') ? 'स्ट्रोमा (pH 8.0) ⟶ NADP⁺ & ADP पूल' : 'STROMA (pH 8.0) ⟶ NADP⁺ & ADP Pool';
    const lumenText = (currentLang === 'hi') ? 'ल्यूमेन (pH 5.0) ⟶ उच्च प्रोटॉन (H⁺) दबाव' : 'LUMEN (pH 5.0) ⟶ High Proton (H⁺) Pressure';

    ctx.fillText(stromaText, 16, 24);
    ctx.fillText(lumenText, 16, h - 14);

    const atpName = (currentLang === 'hi') ? 'ATP सिंथेस' : 'ATP Synthase';
    const complexes = [
      { name: 'PS II (P680)', x: w * 0.18, color: '#10b981' },
      { name: 'Cyt b₆f', x: w * 0.42, color: '#0ea5e9' },
      { name: 'PS I (P700)', x: w * 0.66, color: '#8b5cf6' },
      { name: atpName, x: w * 0.88, color: '#f59e0b' }
    ];

    complexes.forEach((c, idx) => {
      ctx.fillStyle = c.color;
      ctx.beginPath();
      ctx.roundRect(c.x - 22, memY - 26, 44, 52, [8]);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 9px Poppins, Noto Sans Devanagari';
      ctx.textAlign = 'center';
      ctx.fillText(c.name, c.x, memY + 36);

      if (idx === 3 && isRunning) {
        ctx.save();
        ctx.translate(c.x, memY - 10);
        ctx.rotate(t * 3);
        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-10, 0); ctx.lineTo(10, 0);
        ctx.moveTo(0, -10); ctx.lineTo(0, 10);
        ctx.stroke();
        ctx.restore();
      }
    });
    ctx.textAlign = 'left';

    if (isRunning) {
      electrons.forEach(e => {
        e.progress += 0.008 * speed;
        if (e.progress > 1) {
          e.progress = 0;
          nadphCount++;
          if (nadphCount % 2 === 0) atpCount += 3;
          if (nadphCount % 4 === 0) o2Count++;

          if (atpEl) atpEl.textContent = atpCount;
          if (nadphEl) nadphEl.textContent = nadphCount;
          if (o2El) o2El.textContent = o2Count;

          const photonShare = Math.round(50 + Math.sin(t * 2) * 15);
          const chemShare = 100 - photonShare;
          if (syncPhoton) syncPhoton.style.width = `${photonShare}%`;
          if (syncChem) syncChem.style.width = `${chemShare}%`;
        }

        const currentX = w * 0.18 + e.progress * (w * 0.70);
        const currentY = memY - 6 + Math.sin(e.progress * Math.PI * 4) * 8;

        ctx.fillStyle = '#fbbf24';
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(currentX, currentY, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    }

    protons.forEach(p => {
      if (isRunning) {
        p.x += p.vx * speed;
        p.y += p.vy * speed;
        if (p.x < 20 || p.x > w - 20) p.vx *= -1;
        if (p.y < memY + 16 || p.y > h - 25) p.vy *= -1;
      }
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    });

    if (isRunning) t += 0.02;
    requestAnimationFrame(drawETC);
  }

  function updatePlayBtnText() {
    if (!playBtn) return;
    if (currentLang === 'hi') {
      playBtn.textContent = isRunning ? '⏸ अभिक्रिया रोकें' : '▶ अभिक्रिया प्रारंभ करें';
    } else {
      playBtn.textContent = isRunning ? '⏸ Pause Reaction' : '▶ Run Reaction';
    }
  }

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      isRunning = !isRunning;
      updatePlayBtnText();
      playBtn.classList.toggle('primary', !isRunning);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      isRunning = false;
      atpCount = 0; nadphCount = 0; o2Count = 0;
      updatePlayBtnText();
      if (atpEl) atpEl.textContent = '0';
      if (nadphEl) nadphEl.textContent = '0';
      if (o2El) o2El.textContent = '0';
      if (syncPhoton) syncPhoton.style.width = '58%';
      if (syncChem) syncChem.style.width = '42%';
    });
  }

  if (speedSelect) {
    speedSelect.addEventListener('change', (e) => {
      speed = parseFloat(e.target.value) || 1.0;
    });
  }

  drawETC();
}

/* =========================================================
   7. STAGE 4 — CALVIN CYCLE & BUILD-A-SUGAR CHALLENGE
   ========================================================= */
function initCalvinChallenge() {
  const canvas = document.getElementById('calvin-wave-canvas');
  const targetSelect = document.getElementById('calvin-target-select');
  const randomBtn = document.getElementById('calvin-random-btn');
  const resetBtn = document.getElementById('calvin-reset-btn');

  const sliderA = document.getElementById('calvin-a-slider');
  const sliderB = document.getElementById('calvin-b-slider');
  const sliderPhi = document.getElementById('calvin-phi-slider');
  const sliderD = document.getElementById('calvin-d-slider');

  const valA = document.getElementById('calvin-a-val');
  const valB = document.getElementById('calvin-b-val');
  const valPhi = document.getElementById('calvin-phi-val');
  const valD = document.getElementById('calvin-d-val');

  const errorEl = document.getElementById('calvin-error-score');
  const yieldEl = document.getElementById('calvin-yield-score');
  const badgeEl = document.getElementById('calvin-status-badge');

  if (!canvas || !sliderA) return;
  const ctx = canvas.getContext('2d');

  const TARGETS = {
    glucose: { name: '1 Glucose (C₆H₁₂O₆)', A: 6, B: 1.0, phi: 18, D: 25 },
    g3p: { name: '2 G3P (C₃H₇O₆P)', A: 6, B: 0.8, phi: 12, D: 18 },
    sucrose: { name: '1 Sucrose (C₁₂H₂₂O₁₁)', A: 12, B: 1.5, phi: 36, D: 32 },
    starch: { name: 'Starch Polymer (3× Glucose)', A: 18, B: 2.2, phi: 54, D: 38 }
  };

  let currentTarget = TARGETS.glucose;

  function evaluateChallenge() {
    const userA = parseInt(sliderA.value, 10);
    const userB = parseFloat(sliderB.value);
    const userPhi = parseInt(sliderPhi.value, 10);
    const userD = parseInt(sliderD.value, 10);

    const molUnit = (currentLang === 'hi') ? 'मोल' : 'mol';
    if (valA) valA.textContent = `${userA} ${molUnit}`;
    if (valB) valB.textContent = `${userB.toFixed(1)}×`;
    if (valPhi) valPhi.textContent = `${userPhi} ATP`;
    if (valD) valD.textContent = `${userD}°C`;

    const errA = Math.abs(userA - currentTarget.A) / 18;
    const errB = Math.abs(userB - currentTarget.B) / 3.0;
    const errPhi = Math.abs(userPhi - currentTarget.phi) / 54;
    const errD = Math.abs(userD - currentTarget.D) / 35;

    const totalError = (errA * 0.35 + errB * 0.2 + errPhi * 0.3 + errD * 0.15);
    const displayError = (totalError * 10).toFixed(2);
    const yieldPct = Math.max(0, Math.round((1 - totalError) * 100));

    if (errorEl) errorEl.textContent = displayError;
    if (yieldEl) yieldEl.textContent = `${yieldPct}%`;

    if (badgeEl) {
      if (totalError < 0.05) {
        badgeEl.className = 'score-status-badge perfect';
        badgeEl.textContent = (currentLang === 'hi') ? '⭐ उत्तम मिलान!' : '⭐ Perfect Match!';
      } else if (totalError < 0.2) {
        badgeEl.className = 'score-status-badge';
        badgeEl.style.background = 'rgba(245,158,11,0.2)';
        badgeEl.style.color = '#fde68a';
        badgeEl.style.borderColor = '#f59e0b';
        badgeEl.textContent = (currentLang === 'hi') ? 'लगभग पहुँच गए...' : 'Almost There...';
      } else {
        badgeEl.className = 'score-status-badge';
        badgeEl.style.background = 'rgba(239,68,68,0.2)';
        badgeEl.style.color = '#fca5a5';
        badgeEl.style.borderColor = 'rgba(239,68,68,0.4)';
        badgeEl.textContent = (currentLang === 'hi') ? 'प्राचल समायोजित करें' : 'Adjust Parameters';
      }
    }

    drawWave(userA, userB, userPhi, userD);
  }

  window.updateCalvinChallengeUI = evaluateChallenge;

  function drawWave(uA, uB, uPhi, uD) {
    const w = canvas.width = canvas.offsetWidth;
    const h = canvas.height = canvas.offsetHeight;
    ctx.clearRect(0, 0, w, h);

    const midY = h / 2;

    // Grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    for (let y = 20; y < h; y += 30) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    // Dynamic Vertical baseline displacement from Stroma Temperature D (Offset)
    const targetOffset = ((currentTarget.D - 25) / 20) * (h * 0.32);
    const userOffset = ((uD - 25) / 20) * (h * 0.32);
    const targetBaseY = midY - targetOffset;
    const userBaseY = midY - userOffset;

    // 1. Draw Target Temperature Baseline (Dotted Amber)
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.35)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 4]);
    ctx.beginPath();
    ctx.moveTo(0, targetBaseY);
    ctx.lineTo(w, targetBaseY);
    ctx.stroke();

    // 2. Draw User Temperature Baseline (Dashed Cyan/Emerald)
    ctx.strokeStyle = 'rgba(52, 211, 153, 0.4)';
    ctx.lineWidth = 1.2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(0, userBaseY);
    ctx.lineTo(w, userBaseY);
    ctx.stroke();
    ctx.setLineDash([]);

    // 3. Target Curve (Amber Dashed with clear stroke)
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2.5;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    for (let x = 0; x < w; x++) {
      const angle = (x / w) * Math.PI * 4;
      const amp = (currentTarget.A / 18) * (h * 0.28);
      const freq = currentTarget.B;
      const phase = (currentTarget.phi / 54) * Math.PI;
      const y = targetBaseY + Math.sin(angle * freq + phase) * amp;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // 4. Determine Dynamic Thermal State & Color based on user temperature D
    let waveColor = '#34d399';
    let glowColor = '#10b981';
    let thermalStatus = 'Optimum (25°C)';
    let thermalStatusHi = 'अनुकूलतम (25°C)';

    if (uD < 18) {
      waveColor = '#38bdf8';
      glowColor = '#0284c7';
      thermalStatus = `Low Kinetic (${uD}°C)`;
      thermalStatusHi = `अल्प गतिज (${uD}°C)`;
    } else if (uD > 35) {
      waveColor = '#f87171';
      glowColor = '#ef4444';
      thermalStatus = `Thermal Stress (${uD}°C)`;
      thermalStatusHi = `तापीय तनाव (${uD}°C)`;
    } else {
      thermalStatus = `Optimal (${uD}°C)`;
      thermalStatusHi = `अनुकूलतम (${uD}°C)`;
    }

    // 5. User Synthesized Curve (Solid Glowing Wave)
    ctx.strokeStyle = waveColor;
    ctx.shadowColor = glowColor;
    ctx.shadowBlur = 10;
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let x = 0; x < w; x++) {
      const angle = (x / w) * Math.PI * 4;
      const amp = (uA / 18) * (h * 0.28);
      const freq = uB;
      const phase = (uPhi / 54) * Math.PI;
      // High temperature thermal jitter effect
      const jitter = (uD > 36) ? Math.sin(x * 0.35) * ((uD - 35) * 0.35) : 0;
      const y = userBaseY + Math.sin(angle * freq + phase) * amp + jitter;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;

    // 6. Header Legends & Real-time Temperature HUD
    ctx.font = '11px Poppins, Noto Sans Devanagari';
    ctx.fillStyle = '#f59e0b';
    const targetLegend = (currentLang === 'hi') ? `--- लक्ष्य वक्र (D: ${currentTarget.D}°C)` : `--- Target Molecule (D: ${currentTarget.D}°C)`;
    const userLegend = (currentLang === 'hi') ? `— संश्लेषित वक्र (D: ${uD}°C)` : `— Synthesized Wave (D: ${uD}°C)`;

    ctx.fillText(targetLegend, 12, 20);
    ctx.fillStyle = waveColor;
    ctx.fillText(userLegend, 12, 38);

    // Temperature Badge on top right of Canvas
    const badgeText = (currentLang === 'hi') 
      ? `🌡️ स्ट्रोमा: ${uD}°C · ${thermalStatusHi}`
      : `🌡️ Stroma: ${uD}°C · ${thermalStatus}`;
    
    ctx.font = '10px JetBrains Mono, monospace';
    const badgeWidth = ctx.measureText(badgeText).width + 16;
    const badgeX = w - badgeWidth - 12;
    
    ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
    ctx.strokeStyle = glowColor;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(badgeX, 10, badgeWidth, 22, [6]);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = waveColor;
    ctx.fillText(badgeText, badgeX + 8, 25);
  }

  [sliderA, sliderB, sliderPhi, sliderD].forEach(s => {
    s.addEventListener('input', evaluateChallenge);
  });

  if (targetSelect) {
    targetSelect.addEventListener('change', (e) => {
      currentTarget = TARGETS[e.target.value] || TARGETS.glucose;
      evaluateChallenge();
    });
  }

  if (randomBtn) {
    randomBtn.addEventListener('click', () => {
      const keys = Object.keys(TARGETS);
      const randKey = keys[Math.floor(Math.random() * keys.length)];
      if (targetSelect) targetSelect.value = randKey;
      currentTarget = TARGETS[randKey];
      sliderA.value = Math.floor(1 + Math.random() * 17);
      sliderB.value = (0.5 + Math.random() * 2.0).toFixed(1);
      sliderPhi.value = Math.floor(6 + Math.random() * 45);
      sliderD.value = Math.floor(12 + Math.random() * 30);
      evaluateChallenge();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      sliderA.value = currentTarget.A;
      sliderB.value = currentTarget.B;
      sliderPhi.value = currentTarget.phi;
      sliderD.value = currentTarget.D;
      evaluateChallenge();
    });
  }

  window.addEventListener('resize', evaluateChallenge);
  evaluateChallenge();
}

/* =========================================================
   8. STAGE 5 — BLACKMAN'S LIMITING FACTORS LAB
   ========================================================= */
function initLimitingFactorsLab() {
  const lightSlider = document.getElementById('factor-light');
  const co2Slider = document.getElementById('factor-co2');
  const tempSlider = document.getElementById('factor-temp');
  const canvas = document.getElementById('factor-canvas');

  const lightValEl = document.getElementById('factor-light-val');
  const co2ValEl = document.getElementById('factor-co2-val');
  const tempValEl = document.getElementById('factor-temp-val');
  const rateEl = document.getElementById('factor-rate');
  const limiterEl = document.getElementById('factor-limiter');
  const effEl = document.getElementById('factor-efficiency');

  if (!canvas || !lightSlider) return;
  const ctx = canvas.getContext('2d');

  let activeDragFactor = 'light';
  let dragProgress = 0.70;

  function calcTempFactor(t) {
    if (t <= 30) {
      return Math.max(0.08, Math.pow(t / 30, 1.55));
    } else if (t <= 36) {
      return 1.0 - (t - 30) * 0.045;
    } else {
      return Math.max(0.02, 0.73 - Math.pow((t - 36) / 10, 2) * 0.7);
    }
  }

  function updateFactors() {
    const light = parseInt(lightSlider.value, 10);
    const co2 = parseInt(co2Slider.value, 10);
    const temp = parseInt(tempSlider.value, 10);

    if (lightValEl) lightValEl.textContent = `${light}%`;
    if (co2ValEl) co2ValEl.textContent = `${co2}%`;
    if (tempValEl) tempValEl.textContent = `${temp}°C`;

    const lightCap = light / 100;
    const co2Cap = Math.max(0, (co2 - 3) / 97);
    const tempFactor = calcTempFactor(temp);

    // Blackman's Law: Overall rate is limited by the minimum factor
    const overallRate = Math.min(lightCap, co2Cap, tempFactor);
    const overallPct = Math.round(overallRate * 100);

    let bottleneck = (currentLang === 'hi') ? 'संतुलित (अनुकूलतम)' : 'Balanced (Optimal)';
    let bColor = '#34d399';
    let bottleneckType = 'optimal';

    if (tempFactor <= lightCap && tempFactor <= co2Cap) {
      if (temp > 35) {
        bottleneck = (currentLang === 'hi') ? `🌡️ अत्यधिक ताप विकृतीकरण (${temp}°C)` : `🌡️ Heat Denaturation Bottleneck (${temp}°C)`;
        bColor = '#ef4444';
        bottleneckType = 'temp-hot';
      } else {
        bottleneck = (currentLang === 'hi') ? `🌡️ कम तापमान बाधा (${temp}°C)` : `🌡️ Low Temp Kinetics Bottleneck (${temp}°C)`;
        bColor = '#38bdf8';
        bottleneckType = 'temp-cold';
      }
    } else if (lightCap <= co2Cap) {
      bottleneck = (currentLang === 'hi') ? `☀️ प्रकाश तीव्रता बाधा (${light}%)` : `☀️ Light Intensity Bottleneck (${light}%)`;
      bColor = '#fbbf24';
      bottleneckType = 'light';
    } else {
      bottleneck = (currentLang === 'hi') ? `💨 CO₂ सांद्रता बाधा (${co2}%)` : `💨 CO₂ Concentration Bottleneck (${co2}%)`;
      bColor = '#c084fc';
      bottleneckType = 'co2';
    }

    if (rateEl) rateEl.textContent = `${overallPct}%`;
    if (limiterEl) {
      limiterEl.textContent = bottleneck;
      limiterEl.style.color = bColor;
    }
    if (effEl) {
      if (currentLang === 'hi') {
        effEl.textContent = temp >= 22 && temp <= 32 ? 'अनुकूलतम (22–32°C)' : (temp > 35 ? 'विकृतीकरण (हानि)' : 'मंद एंजाइम गतिकी');
      } else {
        effEl.textContent = temp >= 22 && temp <= 32 ? 'Optimal (22–32°C)' : (temp > 35 ? 'Denaturing (Loss)' : 'Slow Enzyme Kinetics');
      }
    }

    drawFactorCurves(light, co2, temp, overallRate, bottleneckType, bColor);
  }

  window.updateFactorsUI = updateFactors;

  function drawFactorCurves(light, co2, temp, overallRate, bottleneckType, bColor) {
    const w = canvas.width = canvas.offsetWidth;
    const h = canvas.height = canvas.offsetHeight;
    ctx.clearRect(0, 0, w, h);

    const padLeft = 46;
    const padBottom = 32;
    const padTop = 26;
    const padRight = 20;

    const plotW = w - padLeft - padRight;
    const plotH = h - padBottom - padTop;

    // 1. Grid & Axes
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 1;
    for (let r = 0; r <= 1.0; r += 0.25) {
      const y = (h - padBottom) - r * plotH;
      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(w - padRight, y);
      ctx.stroke();
    }

    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(padLeft, padTop - 6);
    ctx.lineTo(padLeft, h - padBottom);
    ctx.lineTo(w - padRight, h - padBottom);
    ctx.stroke();

    // Axis Labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px Inter, Noto Sans Devanagari';
    const rateLabel = (currentLang === 'hi') ? '100% दर' : '100% Rate';
    const xLabel = (currentLang === 'hi') ? 'पर्यावरणीय इनपुट (0% → 100%)' : 'Environmental Input Level (0% → 100%)';

    ctx.fillText(rateLabel, 4, padTop + 2);
    ctx.fillText('50%', 18, (h - padBottom) - 0.5 * plotH + 4);
    ctx.fillText('0%', 22, h - padBottom + 2);
    ctx.fillText(xLabel, padLeft + plotW * 0.28, h - 8);

    // 2. Factor 1: Light Saturation Curve (Amber Dashed)
    const lightCap = light / 100;
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.45)';
    ctx.lineWidth = 1.8;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    for (let i = 0; i <= 60; i++) {
      const xNorm = i / 60;
      const lSat = Math.min(lightCap, (xNorm / (xNorm + 0.18)) * 1.18 * lightCap);
      const px = padLeft + xNorm * plotW;
      const py = (h - padBottom) - lSat * plotH;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // 3. Factor 2: CO2 Substrate Carboxylation Curve (Purple Dashed)
    const co2Cap = Math.max(0, (co2 - 3) / 97);
    ctx.strokeStyle = 'rgba(192, 132, 252, 0.45)';
    ctx.lineWidth = 1.8;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    for (let i = 0; i <= 60; i++) {
      const xNorm = i / 60;
      const cSat = Math.max(0, (xNorm - 0.03) / (xNorm + 0.22)) * 1.25 * co2Cap;
      const val = Math.min(co2Cap, cSat);
      const px = padLeft + xNorm * plotW;
      const py = (h - padBottom) - val * plotH;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // 4. Factor 3: Temperature Kinetics Bell Curve (Coral Dashed)
    const tempFactor = calcTempFactor(temp);
    ctx.strokeStyle = 'rgba(251, 146, 60, 0.45)';
    ctx.lineWidth = 1.8;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    for (let i = 0; i <= 60; i++) {
      const xNorm = i / 60;
      const tSim = 5 + xNorm * 45;
      const tVal = calcTempFactor(tSim);
      const px = padLeft + xNorm * plotW;
      const py = (h - padBottom) - tVal * plotH;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // 5. Active Limiting Bottleneck Ceiling Line
    const ceilingY = (h - padBottom) - overallRate * plotH;
    ctx.strokeStyle = bColor;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(padLeft, ceilingY);
    ctx.lineTo(padLeft + plotW, ceilingY);
    ctx.stroke();
    ctx.setLineDash([]);

    // 6. Realized Photosynthetic Rate (Cyan Glowing Curve)
    // As the user drags any slider, the blue curve is drawn progressively up to the drag point
    const maxDrawX = Math.max(0.1, dragProgress);

    // Background track for full envelope (translucent cyan)
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let i = 0; i <= 60; i++) {
      const xNorm = i / 60;
      const lSat = Math.min(lightCap, (xNorm / (xNorm + 0.18)) * 1.18 * lightCap);
      const cSat = Math.min(co2Cap, Math.max(0, (xNorm - 0.03) / (xNorm + 0.22)) * 1.25 * co2Cap);
      const tSim = 5 + xNorm * 45;
      const tSat = calcTempFactor(temp);
      const realized = Math.min(overallRate, Math.min(lSat, cSat, tSat));
      const px = padLeft + xNorm * plotW;
      const py = (h - padBottom) - realized * plotH;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Active Progressive Drawn Blue Line (Glowing Cyan/Electric Blue)
    ctx.strokeStyle = '#22d3ee';
    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = 10;
    ctx.lineWidth = 3.5;
    ctx.beginPath();

    const drawSteps = Math.round(maxDrawX * 60);
    let lastPx = padLeft;
    let lastPy = h - padBottom;

    for (let i = 0; i <= drawSteps; i++) {
      const xNorm = i / 60;
      const lSat = Math.min(lightCap, (xNorm / (xNorm + 0.18)) * 1.18 * lightCap);
      const cSat = Math.min(co2Cap, Math.max(0, (xNorm - 0.03) / (xNorm + 0.22)) * 1.25 * co2Cap);
      const tSat = calcTempFactor(temp);
      const realized = Math.min(overallRate, Math.min(lSat, cSat, tSat));
      const px = padLeft + xNorm * plotW;
      const py = (h - padBottom) - realized * plotH;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);

      if (i === drawSteps) {
        lastPx = px;
        lastPy = py;
      }
    }
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Glowing Cursor Node at the Active Drag Position
    ctx.fillStyle = '#22d3ee';
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(lastPx, lastPy, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // 7. On-Canvas Legend & Bottleneck Status
    ctx.font = '10px Poppins, Noto Sans Devanagari';
    
    // Legend items
    ctx.fillStyle = '#fbbf24';
    ctx.fillText('•• ☀️ Light', padLeft, 14);
    ctx.fillStyle = '#c084fc';
    ctx.fillText('•• 💨 CO₂', padLeft + 68, 14);
    ctx.fillStyle = '#fb923c';
    ctx.fillText('•• 🌡️ Temp', padLeft + 130, 14);
    ctx.fillStyle = '#22d3ee';
    const rateLegend = (currentLang === 'hi') ? '— वास्तविक दर' : '— Realized Rate';
    ctx.fillText(rateLegend, padLeft + 195, 14);

    // Active Bottleneck Badge on Top Right
    const capLabel = (currentLang === 'hi') 
      ? `सीमा: ${Math.round(overallRate * 100)}%`
      : `Cap: ${Math.round(overallRate * 100)}%`;

    ctx.font = 'bold 10px JetBrains Mono, monospace';
    const badgeW = ctx.measureText(capLabel).width + 16;
    const badgeX = w - padRight - badgeW;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
    ctx.strokeStyle = bColor;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(badgeX, 4, badgeW, 18, [4]);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = bColor;
    ctx.fillText(capLabel, badgeX + 8, 17);
  }

  // Event Listeners with Drag Progress Tracking
  lightSlider.addEventListener('input', (e) => {
    activeDragFactor = 'light';
    dragProgress = parseInt(e.target.value, 10) / 100;
    updateFactors();
  });

  co2Slider.addEventListener('input', (e) => {
    activeDragFactor = 'co2';
    dragProgress = parseInt(e.target.value, 10) / 100;
    updateFactors();
  });

  tempSlider.addEventListener('input', (e) => {
    activeDragFactor = 'temp';
    dragProgress = (parseInt(e.target.value, 10) - 5) / 45;
    updateFactors();
  });

  window.addEventListener('resize', updateFactors);
  updateFactors();
}

/* =========================================================
   9. AMBIENT PARTICLES CANVAS
   ========================================================= */
function initAmbientParticles() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h;
  let particles = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1 + Math.random() * 2,
      vy: -(0.2 + Math.random() * 0.5),
      color: Math.random() > 0.5 ? 'rgba(52, 211, 153, 0.4)' : 'rgba(34, 211, 238, 0.35)'
    });
  }

  function tick() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.y += p.vy;
      if (p.y < -10) {
        p.y = h + 10;
        p.x = Math.random() * w;
      }
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(tick);
  }
  tick();
}

/* =========================================================
   10. SCROLL-TO-TOP & NAVBAR ACTIVE STATE
   ========================================================= */
function initScrollTopAndNav() {
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navList = document.querySelector('.mv-nav');
  if (mobileBtn && navList) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navList.classList.toggle('open');
    });

    document.querySelectorAll('.mv-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navList.contains(e.target) && e.target !== mobileBtn) {
        navList.classList.remove('open');
      }
    });
  }

  // Dynamic active section highlight in navbar
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.mv-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      if (scrollTopBtn) scrollTopBtn.classList.add('visible');
    } else {
      if (scrollTopBtn) scrollTopBtn.classList.remove('visible');
    }

    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 140;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
