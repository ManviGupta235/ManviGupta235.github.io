const projects = {
  jatayu: {
    label: "PROJECT 01 / TEAM JATAYU",
    title: "Growing with a BAJA team.",
    story: "I joined Team Jatayu in my first semester of college. At first I was simply a first-year student trying to understand how the team worked. Over time, that turned into technical responsibility, manufacturing responsibility, sponsorship work and, eventually, leading the team as Manager while continuing as Design Lead.",
    problem: "A student BAJA team is not only a design problem. It is a moving target involving vehicle rules, component performance, manufacturability, procurement, deadlines, people and competition preparation.",
    hard: "The hard part changed as my role changed. Early on, it was learning enough to contribute. Later, it was taking ownership of specific systems, coordinating the build, finding sponsors and making decisions across teams. Then came the responsibility of managing the whole team and taking it to an international event in South Korea. Sometimes apparently important things happen at 2 AM — including emails.",
    steps: [
      ["01","First semester — joined Team Jatayu and began learning the vehicle, tools and workflow"],
      ["02","Brake member — took official responsibility for the braking subsystem"],
      ["03","Creative Content Head — worked on the team's communication and creative output"],
      ["04","Manufacturing Head — drove fabrication, procurement, machining and assembly coordination"],
      ["05","Design Lead — designed chassis, brake systems, wheel assemblies and other BAJA components in SolidWorks"],
      ["06","CAE — performed explicit dynamics analysis on the chassis in ANSYS"],
      ["07","Sponsorship Head — led outreach, corporate/CSR communication and funding efforts"],
      ["08","Team Manager — took responsibility for the larger team and competition execution"],
      ["09","International — took the team to Baja Student Korea 2026"]
    ],
    result: "The work grew from learning the team's systems to contributing to design, analysis, manufacturing, sponsorship and team-level execution. Team Jatayu ultimately represented India at Baja Student Korea 2026.",
    learned: "The biggest lesson was that engineering does not happen in isolated departments. A good design has to survive analysis, manufacturing, procurement, people, deadlines and reality."
  },
  cad: {
    label: "PROJECT 02 / SOLIDWORKS",
    title: "Things I model because I want to understand them.",
    story: "This is the personal side of my CAD work — standalone components, mechanisms and designs I build because modelling something forces me to understand how it actually works.",
    problem: "Sometimes the objective is not a competition or an assignment. It is simply to take an idea and make the geometry make sense.",
    hard: "The interesting part is translating an imagined mechanism into constraints, dimensions, interfaces and manufacturable geometry.",
    steps: [
      ["01","Start with a question or object worth understanding"],
      ["02","Break the geometry into components and interfaces"],
      ["03","Build the parts and assembly in SolidWorks"],
      ["04","Check motion, fit and design intent"],
      ["05","Refine the model and document the result"],
      ["06","Add new work as the library grows"]
    ],
    result: "An ongoing library of personal SolidWorks work. More components, mechanisms and the engine currently being designed will be added here over time.",
    learned: "CAD is not just drawing. It is a way of thinking through how something exists in three dimensions."
  },
  daikin: {
    label: "PROJECT 03 / DAIKIN",
    title: "Seeing the system from the inside.",
    story: "My Daikin internship gave me exposure to HVAC products in actual installation, servicing and troubleshooting contexts rather than only through classroom diagrams.",
    problem: "Understanding a product changes when you have to install, service and diagnose it rather than only study its theory.",
    hard: "The challenge was connecting symptoms, components and system behaviour during real servicing and troubleshooting workflows.",
    steps: [
      ["01","Observe system operation and installation"],
      ["02","Work through servicing and diagnostics"],
      ["03","Disassemble and inspect components"],
      ["04","Understand component relationships"],
      ["05","Reassemble using servicing protocols"],
      ["06","Connect practical observations to system design"]
    ],
    result: "Practical exposure to Inverter Split, Cassette and VRV HVAC systems, refrigeration cycles, thermal performance and product-design considerations.",
    learned: "Hands-on exposure changes the way you look at a product. Components stop being names in a diagram and start becoming decisions made by designers and technicians."
  },
  ndt: {
    label: "PROJECT 04 / NDT",
    title: "Finding defects without cutting things open.",
    story: "During my NDT internship, I worked with inspection methods used to evaluate structural components without destroying them.",
    problem: "Structural components can contain defects that are not visible from the outside. Inspection has to reveal problems without destroying the part.",
    hard: "Inspection work carries a different kind of accountability: the quality of the result depends not just on performing the test, but on interpreting and documenting what it means.",
    steps: [
      ["01","Prepare the component for inspection"],
      ["02","Apply the relevant NDT method"],
      ["03","Interpret indications"],
      ["04","Identify and document defects"],
      ["05","Generate inspection reports"],
      ["06","Support quality-assurance decisions"]
    ],
    result: "Hands-on RT and UT testing experience and independent defect reporting used for quality-assurance sign-off.",
    learned: "Engineering is not only about creating new things. Knowing how to verify whether something is safe and sound is just as important."
  }
};

const imageSets = {
  jatayu: {
    categories: [
      {
        title: "THE WORK",
        sections: [
          {
            heading: "SOLIDWORKS",
            type: "gallery",
            photos: [
              ["images/jatayu-chassis.jpg","Chassis"],
              ["images/jatayu-brakes.jpg","Brake system"],
              ["images/jatayu-wheel.jpg","Wheel assembly"]
            ],
            text: "Designed the chassis in accordance with technical regulations and structural requirements, while developing dedicated manufacturing fixtures after studying fixture design and fabrication methodologies. Fixture development emphasized cost, material availability, manufacturability, and ease of assembly."
          },
          {
            heading: "ANALYSIS",
            type: "card",
            photos: [
    ["images/jatayu-analysis-1.jpeg","Chassis impact analysis - 1"],
    ["images/jatayu-analysis-2.jpeg","Chassis impact analysis - 2"],
    ["images/jatayu-analysis-3.jpeg","Chassis impact analysis - 3"],
    ["images/jatayu-analysis-4.jpeg","Chassis impact analysis - 4"],
    ["images/jatayu-analysis-5.jpeg","Chassis impact analysis - 5"],
    ["images/jatayu-analysis-6.jpeg","Chassis impact analysis - 6"]
],
            text: "As Design Lead for BAJA SAE 2027, performed static and explicit dynamics analyses using ANSYS Workbench on the chassis, with load cases based on realistic vehicle conditions.For each case, the worst-case loading was applied to the specific chassis members involved in the impact, while all suspension mounting points were fully constrained in every direction. The vehicle was modelled as a deformable body, and the results were used to identify critical areas and assess the chassis design before manufacturing."
          },
          {
            heading: "MANUFACTURING",
            type: "card",
            photos: [
    ["images/jatayu-manufacturing-1.jpeg","Manufacturing - 1"],
    ["images/jatayu-manufacturing-2.jpeg","Manufacturing - 2"],
    ["images/jatayu-manufacturing-3.jpeg","Manufacturing - 3"],
    ["images/jatayu-manufacturing-4.jpeg","Manufacturing - 4"],
    ["images/jatayu-manufacturing-5.jpeg","Manufacturing - 5"],
    ["images/jatayu-manufacturing-6.jpeg","Manufacturing - 6"]
],
            text: "As Manufacturing & Design Lead, took SolidWorks designs from screen to shop floor, working across CNC machining, lathe and milling operations, fabrication and assembly. Coordinated the manufacturing process while balancing manufacturability, dimensional accuracy, material availability and practical build constraints."
          }
        ]
      },
      {
        title: "TEAM & COMPETITION",
        blurb: "From a first-year student to Team Manager — the people, builds and competitions along the way, year by year.",
        years: [
          { label:"2023", photos: [ ["images/jatayu-2023-1.jpg","2023"] ] },
          { label:"2024", photos: [ ["images/jatayu-2024-1.jpg","2024"] ] },
          { label:"2025", photos: [ ["images/jatayu-2025-1.jpg","2025"] ] },
          { label:"2026 — Baja Student Korea", photos: [ ["images/jatayu-2026-1.jpg","2026"] ] }
        ]
      }
    ]
  },
  cad: [
    ["images/cad-engine.jpg","ENGINE / SOLIDWORKS","Add the engine model later"],
    ["images/cad-parts.jpg","PARTS / MODELS","Add CAD screenshots"],
    ["images/cad-assembly.jpg","ASSEMBLY","Add assembly screenshot"]
  ],
  daikin: [
    ["images/daikin-hvac.jpg","HVAC SYSTEM","Add an approved internship photo if you have one"],
    ["images/daikin-components.jpg","COMPONENTS","Add a component image if permitted"]
  ],
  ndt: [
    ["images/ndt-testing.jpg","NDT / TESTING","Add an approved inspection photo"],
    ["images/ndt-report.jpg","DEFECT REPORT","Add an approved/report-redacted image"]
  ]
};

const modal = document.getElementById("projectModal");
const modalGallery = document.getElementById("modalGallery");

function photoHTML(item){
  const label = item[1] || "";
  const note = item[2] || "";
  return `
    <div class="modal-photo">
      <img src="${item[0]}" alt="${label}" onerror="this.style.display='none'">
      <span>${label}${note ? `<small>${note}</small>` : ""}</span>
    </div>
  `;
}

function galleryHTML(key){
  const data = imageSets[key];
  if(!data) return "";

  // Category-box format (currently just Jatayu): two big clickable
  // boxes; clicking one opens a full-screen page with its gallery + blurb.
  if(data.categories){
    return `<div class="category-boxes">${data.categories.map((cat, i) => `
      <div class="category-box" data-index="${i}">
        <h5>${cat.title}</h5>
        <span class="category-cta">View gallery ↗</span>
      </div>
    `).join("")}</div>`;
  }

  // Flat list format (cad, daikin, ndt) — unchanged.
  return `<div class="modal-gallery">${data.map(photoHTML).join("")}</div>`;
}

function bindCategoryBoxes(key){
  const data = imageSets[key];
  if(!data || !data.categories) return;
  document.querySelectorAll(".category-box").forEach(box => {
    box.addEventListener("click", () => openCategory(key, +box.dataset.index));
  });
}

const categoryModal = document.getElementById("categoryModal");

function categoryContentHTML(cat){
  if(cat.sections){
    return cat.sections.map(sec => `
      <div class="${sec.type === 'card' ? 'work-card' : 'work-section'}">
        <h6 class="work-section-heading">${sec.heading}</h6>
        <div class="modal-gallery">${sec.photos.map(photoHTML).join("")}</div>
        <p class="work-section-text">${sec.text}</p>
      </div>
    `).join("");
  }
  if(cat.years){
    return cat.years.map(y => `
      <div class="modal-year-block">
        <span class="modal-year-label">${y.label}</span>
        <div class="modal-gallery">${y.photos.map(photoHTML).join("")}</div>
      </div>
    `).join("");
  }
  return `<div class="modal-gallery">${cat.photos.map(photoHTML).join("")}</div>`;
}

function openCategory(key, i){
  const project = projects[key];
  const cat = imageSets[key].categories[i];
  document.getElementById("categoryModalLabel").textContent = project.label;
  document.getElementById("categoryModalTitle").textContent = cat.title;
  document.getElementById("categoryModalBlurb").textContent = cat.blurb || "";
  document.getElementById("categoryModalGallery").innerHTML = categoryContentHTML(cat);
  categoryModal.classList.add("open");
  categoryModal.setAttribute("aria-hidden","false");
}

function closeCategory(){
  categoryModal.classList.remove("open");
  categoryModal.setAttribute("aria-hidden","true");
}

document.getElementById("categoryModalClose").addEventListener("click", closeCategory);
categoryModal.addEventListener("click", e => { if(e.target === categoryModal) closeCategory(); });

function openProject(key){
  const p = projects[key];
  document.getElementById("modalLabel").textContent = p.label;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalStory").textContent = p.story;
  document.getElementById("modalProblem").textContent = p.problem;
  document.getElementById("modalHard").textContent = p.hard;
  document.getElementById("modalResult").textContent = p.result;
  document.getElementById("modalLearned").textContent = p.learned;
  modalGallery.innerHTML = galleryHTML(key);
  bindCategoryBoxes(key);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
}

function closeProject(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => openProject(card.dataset.project));
});
document.querySelector(".modal-close").addEventListener("click", closeProject);
modal.addEventListener("click", e => { if(e.target === modal) closeProject(); });
document.querySelectorAll("[data-close-modal='true']").forEach(link => {
  link.addEventListener("click", () => closeProject());
});
document.addEventListener("keydown", e => {
  if(e.key !== "Escape") return;
  if(categoryModal.classList.contains("open")){ closeCategory(); return; }
  closeProject();
});
