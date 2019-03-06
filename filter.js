$(document).ready(function() {
            $('#onlyMalesFilter').click(function(){
                console.log('onlyMalesFilter Filter executed');
            });

            $('#fullTimeFilter').click(function(){
                console.log('fullTimeFilter Filter executed');
            });

            $('#olderThenFilter').click(function(){
                console.log('olderThenFilter Filter executed');
            });

            $('#ageBetweenFilter').click(function(){
                console.log('ageBetweenFilter Filter executed');
            });

            $('#yearsOfExperienceFilter').click(function(){
                console.log('yearsOfExperienceFilter Filter executed');
            });

            $('#clearFilter').click(function(){
                console.log('clearFilter Filter executed');
            });
});

db.collection("employees").onSnapshot(function(snapShot) {
       snapShot.docChanges.forEach(function(change) {
        if (change.type === "added") {
            console.log("Employee Added ");
        }
        if (change.type === "modified") {
            console.log("Employee Modified ");
        }
        if (change.type === "removed") {
            console.log("Employee Removed ");
        }
    });
    LoadTableData(snapShot);
});

function LoadTableData(querySnapshot){
    var tableRow='';
    querySnapshot.forEach(function(doc) {
        var document = doc.data();
        tableRow +='<tr>';
        tableRow += '<td class="fname">' + document.fName + '</td>';
        tableRow += '<td class="lname">' + document.lName + '</td>';
        tableRow += '<td class="email">' + document.email + '</td>';
        tableRow += '<td class="age">' + document.age + '</td>';
        tableRow += '<td class="gender">' + document.gender + '</td>';
        tableRow += '<td class="yearsofexperience">' + document.yearsOfExperience + '</td>';
        tableRow += '<td class="isfulltime">' + document.isFullTime + '</td>';
        tableRow += '<td class="editEmployee"><i class="fa fa-pencil" aria-hidden="true" style="color:green"></i></td>'
        tableRow += '<td class="deleteEmployee"><i class="fa fa-trash" aria-hidden="true" style="color:red"></i></td>'
        tableRow += '</tr>';
    });
    $('tbody.tbodyData').html(tableRow);
};