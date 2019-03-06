//Initialize Cloud Firestore through firebase

var db = firebase.firestore();
var employeesRef = db.collection("employees");

employeesRef.doc("H.Basket").set({
    fName: "Helena",
    lName: "Handbasket",
    email: "h.b@com.com",
    age: 44,
    gender: "female",
    yearsOfExperience: 8,
    isFullTime: true,
});

employeesRef.doc("I.Pee").set({
    fName: "Iwanna",
    lName: "Pee",
    email: "i.p@com.com",
    age: 35,
    gender: "male",
    yearsOfExperience: 2,
    isFullTime: false,
});

employeesRef.doc("G.Outahere").set({
    fName: "Gitmo",
    lName: "Outahere",
    email: "h.b@com.com",
    age: 51,
    gender: "male",
    yearsOfExperience: 11,
    isFullTime: true,
});