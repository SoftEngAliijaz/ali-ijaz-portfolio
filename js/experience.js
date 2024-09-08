document.addEventListener("DOMContentLoaded", function () {
  mapExperienceData();
});

function mapExperienceData() {
  let exp = [
    {
      org: "SolidCheck - United Kingdom",
      position: "Flutter Developer - (Remote)",
      duration: "May 2024 - Present",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "REST APIs",
        "Front-End & Back-End",
        "Cross-Platform Development",
        "Building Dart packages",
      ],
      details: [
        "Design, develop, and maintain mobile applications & Cross Platform Applications using Flutter.",
        "Collaborate with cross-functional teams to define, design, and ship new features.",
        "Ensure the performance, quality, and responsiveness of applications.",
        "Identify fix bugs.",
        "Continuously discover, evaluate, and implement new technologies to maximize development efficiency.",
      ],
    },
    {
      org: "Omnilink Pvt. Ltd. - Sahiwal",
      position: "Flutter Developer - (On-Site)",
      duration: "March 2023 - May 2023",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "REST APIs",
        "Front-End & Back-End",
      ],
      details: [
        "Design, develop, and maintain mobile applications using Flutter.",
        "Ensure the performance, quality, and responsiveness of applications.",
        "Identify fix bugs.",
      ],
    },
    {
      org: "Shaheen Business Network - Sahiwal",
      position: "Flutter Developer / Trainer - (On-Site)",
      duration: "August 2022 - Feburary 2023",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "REST APIs",
        "Front-End & Back-End",
      ],
      details: [
        "In my role as a Flutter Mobile App Developer / trainer at Shaheen Business Network, I've empowered junior developers by imparting comprehensive lessons on writing clean code—from foundational principles to advanced techniques. Through hands-on instruction, I not only educated them but also facilitated their active participation in real-time collaborative projects, fostering a dynamic and growth-oriented learning environment.",
      ],
    },
    {
      org: "Jam Jugglers IT Center - Sahiwal",
      position: "Flutter Developer - (On-Site)",
      duration: "August 2021 - July 2022",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "REST APIs",
        "Front-End & Back-End",
      ],
      details: [
        "During my tenure at Jam Jugglers, I specialized in developing diverse e-commerce applications and engaged in various projects encompassing a wide range of functionalities. Additionally, I contributed to the creation of a music app and explored the dynamic realm of Flutter Web development. My versatile experience reflects a commitment to delivering innovative solutions across multiple domains within the tech landscape.",
      ],
    },
  ];

  for (var i = 0; i < exp.length; i++) {
    var expCard = document.createElement("div");
    expCard.className = "exp-card";

    var expMetaDiv = document.createElement("div");
    expMetaDiv.className = "exp-meta";

    var orgName = document.createElement("h2");
    orgName.className = "heading2 exp-org";
    orgName.innerHTML = exp[i]["org"];

    var position = document.createElement("span");
    position.className = "label exp-position";
    position.innerHTML = exp[i]["position"];

    var session = document.createElement("p");
    session.className = "body2 exp-session";
    session.innerHTML = exp[i]["duration"];

    var technologiesHeading = document.createElement("span");
    technologiesHeading.className = "body2 exp-tech";
    technologiesHeading.innerHTML = "Technologies";

    var technologiesList = document.createElement("ul");
    technologiesList.className = "exp-tech-list";

    for (var k = 0; k < exp[i]["technologies"].length; k++) {
      var techName = document.createElement("li");
      techName.className = "body2 exp-tech-item";
      techName.innerHTML = exp[i]["technologies"][k];
      technologiesList.appendChild(techName);
    }
    expMetaDiv.appendChild(orgName);
    expMetaDiv.appendChild(position);
    expMetaDiv.appendChild(session);
    expMetaDiv.appendChild(technologiesHeading);
    expMetaDiv.appendChild(technologiesList);
    expCard.appendChild(expMetaDiv);

    var detailsList = document.createElement("ul");
    detailsList.className =
      "exp-detail d-flex flex-column justify-content-center";

    for (var k = 0; k < exp[i]["details"].length; k++) {
      var detail = document.createElement("li");
      detail.className = "body2 exp-detail-item";
      detail.innerHTML = exp[i]["details"][k];
      detailsList.appendChild(detail);
    }

    expCard.appendChild(detailsList);

    var experiences = document.getElementById("exp");
    experiences.appendChild(expCard);
  }
}
