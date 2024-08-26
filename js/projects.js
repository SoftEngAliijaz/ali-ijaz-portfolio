document.addEventListener("DOMContentLoaded", function () {
    mapProjectsData();
});

function mapProjectsData() {
    let projects = [
        {
            "title": "ULTIMATE INVOICER UI",
            "image": "images/projects/ulimate_invoicer.jpeg",
            "type": "Open Source",
            "labels": [
                {
                    "title": "GitHub",
                    "link": "https://github.com/ultimate_invoicer"
                }
            ]
        },
        {
            "title": "JEWEL CRAFT",
            "image": "images/projects/jewel_craft.jpeg",
            "type": "Product",
            "labels": []
        },
        {
            "title": "LITTLE LIBRARY",
            "image": "images/projects/little_library.jpeg",
            "type": "Open Source",
            "labels": []
        },
        {
            "title": "DIGI KHATA",
            "image": "images/projects/digi_khata.jpeg",
            "type": "Open Source",
            "labels": [
                {
                    "title": "GitHub",
                    "link": "https://github.com/digi_khata"
                }
            ]
        },
        {
            "title": "HAIR SALON APP",
            "image": "images/projects/hair_salon.jpeg",
            "type": "Product",
            "labels": []
        },
        {
            "title": "WEATHER APP",
            "image": "images/projects/weather_app.jpeg",
            "type": "Open Source",
            "labels": [
                {
                    "title": "GitHub",
                    "link": "https://github.com/weather_application"
                }
            ]
        },
    ];

    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        var title = project.title;
        var type = project.type;
        var image = project.image;

        var card = document.createElement('div');
        card.className = "project-card";

        var imageDiv = document.createElement('div');
        imageDiv.className = "p-image";
        var projectLabel = document.createElement("div");
        projectLabel.className = "label p-type";
        projectLabel.innerHTML = type;

        var projectImg = document.createElement("img");
        projectImg.className = "p-image-bg";
        projectImg.src = image;
        projectImg.alt = title;

        imageDiv.appendChild(projectLabel);
        imageDiv.appendChild(projectImg);

        var projectName = document.createElement("p");
        projectName.className = "body1 p-title";
        projectName.innerHTML = title;

        var labels = document.createElement("div");
        labels.className = "p-labels";

        for (var j = 0; j < project.labels.length; j++) {
            var title = project.labels[j]["title"];
            var link = project.labels[j]["link"];

            var label = document.createElement('a');
            label.className = "p-label";
            var labelIcon = document.createElement("i");

            if (title == "App") {
                labelIcon.className = "p-label-icon fa fa-apple";
            } else if (title == "Play") {
                labelIcon.className = "p-label-icon fa fa-google";
            } else if (title == "Web") {
                labelIcon.className = "p-label-icon fa fa-globe";
            } else if (title == "GitHub") {
                labelIcon.className = "p-label-icon fa fa-github";
            } else if (title == "Package") {
                labelIcon.className = "p-label-icon material-icons";
                labelIcon.innerHTML = "widgets";
                labelIcon.style.fontSize = "16px";
            }

            var labelText = document.createElement("span");
            labelText.className = "label p-label-text";
            labelText.innerHTML = title;

            label.href = link;
            label.target = "_blank";

            label.appendChild(labelIcon);
            label.appendChild(labelText);

            labels.appendChild(label);
        }


        card.appendChild(projectLabel);
        card.appendChild(projectImg);
        card.appendChild(projectName);
        card.appendChild(labels);

        var projectsDiv = document.getElementById("projects");
        projectsDiv.appendChild(card);
    }
}