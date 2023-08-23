//alert("jaifjidsaf");
// const cors = require('cors');
// app.use(cors());

//addnewresult
// document.addEventListener("DOMContentLoaded", function() 
// {
//     const form = document.getElementById("result-form");
//     const clearButton = document.getElementById("clear");
//     const marksInput = document.getElementById("marks");
  
//     clearButton.addEventListener("click", function() {
//       form.reset();
//     });
  
//     marksInput.addEventListener("input", function() {
//       const enteredMarks = parseFloat(marksInput.value);
//       if (enteredMarks < 0) {
//         marksInput.value = 0;
//       } else if (enteredMarks > 100) {
//         marksInput.value = 100;
//       }
//     });
//   });



//teacher login:
// function adminlogin()
// {
//     var url = adminlogin.html;
//     window.location(url);
// }


//ADMIN VERIFY FROM BACKEND
document.getElementById('adminlogin').addEventListener('submit' , async(e) => {
    e.preventDefault();
    const adminName = document.getElementById('adminname').value;
    console.log(adminName);
    const adminEmail = document.getElementById('adminemail').value;
    console.log(adminEmail);

    try{
        const response = await fetch('http://localhost:8080/login/adminlogin', {
            method:"POST",
            headers : {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({adminName , adminEmail})
        });
        console.log("hero");

        if (response.ok){
            window.location.href="displayallrecord.html";
            const data = await response.json();
            console.log(data);
            document.getElementById('message').textContent = data.message;
        }else
        {
            alert("Wrong Admin name or Admin Email")
            // document.getElementById('message').textContent = 'Error Procesing the Request';
        }
    }catch(error)
    {
        document.getElementById('message').textContent = 'An error occurred.'
    }
});




//STUDENT LOGIN VERIFY FROM BACKEND
function stdlogin()
{
    document.getElementById('studentlogin').addEventListener('submit' , async(e) => {
        e.preventDefault();
        // console.log("HERROO");
        const rollno = document.getElementById('rollno').value;
        // console.log(rollno);
        const DOB = document.getElementById('dob').value;
        // console.log(DOB);
        // console.log("HEROO2")

        try{
            const response = await fetch('http://localhost:8080/student/studentresult', {
                method:"POST",
                headers : {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({rollno , DOB})
            });
            // console.log("hero111111111");

            if (response.ok)
            {
                // window.location.href="result.html";
                const data = await response.json();
                console.log(data);
                console.log(data[0].rollno);
                // data.js
                //window.location.href="http://localhost:8080/result/studentres/"+ data[0].rollno;

                const jsonData = JSON.stringify(data[0]);
                const encodedData = encodeURIComponent(jsonData);

                window.location.href='result.html?data='+encodedData;
                localStorage.setItem("data1",data);
                document.getElementById('message').textContent = data.message;
            }
            else
            {
                alert("Student not exist");
                document.getElementById('message').textContent = 'Error Procesing the Request';
            }
        }catch(error)
        {
            document.getElementById('message').textContent = 'An error occurred.'
            console.log("after catch");
        }
    });

}




//Adding new Student from backend:
function addresult()
{
    document.getElementById('result-form').addEventListener('click' , async(e) => {
        e.preventDefault();
        // console.log("HERROO");
        const rollno = document.getElementById('rollno').value;
        console.log(rollno);
        const name = document.getElementById('name').value;
        console.log(name);
        const DOB = document.getElementById('dob').value;
        console.log(DOB);
        const marks = document.getElementById('marks').value;
        console.log(marks);
        // console.log("HEROO2")

        try{
            const response = await fetch('http://localhost:8080/addstudent/add', {
                method:"POST",
                headers : {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({rollno , name, DOB, marks})
            });
            console.log("hero111111111");

            if (response.ok){
                window.location.href="displayallrecord.html";
                const data = await response.json();
                console.log(data);
                document.getElementById('message').textContent = data.message;
            }else{
                document.getElementById('message').textContent = 'Error Procesing the Request';
            }
        }catch(error)
        {
            document.getElementById('message').textContent = 'An error occurred.'
        }
    });
}




//HANDLING ATIONS BUTTON:

//handling edit
function editresult()
{
    document.getElementById('edit-form').addEventListener('click' , async(e) => {
        e.preventDefault();
        console.log("HERROO");
        const rollno = document.getElementById('rollno').value;
        console.log(rollno);
        const name = document.getElementById('name').value;
        console.log(name);
        const DOB = document.getElementById('dob').value;
        console.log(DOB);
        const marks = document.getElementById('marks').value;
        console.log(marks);
        console.log("HEROO2")

        try{
            const response = await fetch('http://localhost:8080/editstudent/edit', {
                method:"POST",
                headers : {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({rollno , name, DOB, marks})
            });
            console.log("hero111111111");

            if (response.ok){
                //window.location.href="displayallrecord.html";
                const data = await response.json();
                console.log(data);
                console.log(data.rollno);
                console.log(data.DOB);
                console.log(data.name);
                console.log(data.marks);
                
                document.getElementById('message').textContent = data.message;
            }else{
                document.getElementById('message').textContent = 'Error Procesing the Request';
            }
        }catch(error)
        {
            document.getElementById('message').textContent = 'An error occurred.'
        }
    });
}
