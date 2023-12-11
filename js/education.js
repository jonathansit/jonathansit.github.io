// duration of degree
// degree name
// institute name
// graduation status? description?
window.education = [
    {
        startDate: new Date(2023, 6),
        endDate: new Date(2025, 5),
        degreeName: "Diploma",
        instituteName: "Seneca Polytechnic College",
        programName: "Computer Programming",
        note: ""
    },
    {
        startDate: new Date(2017, 10),
        endDate: new Date(2021, 5),
        degreeName: "Bachelor of Science (Honours)",
        instituteName: "Toronto Metropolitan University",
        programName: "Computer Science",
        note: ""
    },
    {
        startDate: new Date(2010, 10),
        endDate: new Date(2016, 5),
        degreeName: "Pursued Bachelor of Applied Science",
        instituteName: "University of Waterloo",
        programName: "Electrical Engineering",
        note: "Withdrawn due to medical reasons"
    }
];

function getDegreeElements () {
    var degreeElement = document.createElement("div");
    education.forEach(degree => {
        var degreeTable = document.createElement("table");
        degreeTable.classList.add("degree");
        
        var tableRowOne = degreeTable.insertRow();
        
        // Compile institute name
        var tableCell = tableRowOne.insertCell();
        var instituteName = document.createElement("h3");
        instituteName.innerText = degree.instituteName;
        tableCell.appendChild(instituteName);

        // Compile duration
        tableCell = tableRowOne.insertCell();
        var degreeDuration = document.createElement("div");
        degreeDuration.classList.add("degree-duration");
        var startDate = degree.startDate.getFullYear();
        var endDate = degree.endDate.getFullYear() > new Date().getFullYear() ? "present" : degree.endDate.getFullYear();
        degreeDuration.innerText = startDate + " - " + endDate;
        tableCell.appendChild(degreeDuration);

        var tableRowTwo = degreeTable.insertRow();
        
        // Compile degree name
        tableCell = tableRowTwo.insertCell();
        var degreeName = document.createElement("div");
        degreeName.classList.add("degree-name");
        degreeName.innerText = degree.degreeName + " - " + degree.programName;
        tableCell.appendChild(degreeName);

        // Compile note
        if (degree.note != "") {
            var tableRowThree = degreeTable.insertRow();
            tableCell = tableRowThree.insertCell();
            var note = document.createElement("div");
            note.innerText = degree.note;
            tableCell.appendChild(note);
        }

        degreeElement.appendChild(degreeTable);
    });
    return degreeElement;
}