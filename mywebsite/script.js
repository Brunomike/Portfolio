isSelected();

let themeDots = document.getElementsByClassName("theme-dot");
for (let i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener("click", (e) => {
    let mode = e.target.dataset.mode;
    console.log("Option clicked: ", mode);
    setTheme(mode);
  });
}

function isSelected() {
  console.log("Called");
  let selectedTheme = localStorage.getItem("myTheme");
  if (selectedTheme != null) {
    setTheme(selectedTheme);
  } else {
    setTheme("light");
  }
}

//console.log(Math.round(47/7));

function setTheme(mode) {
  switch (mode) {
    case "light":
        document.getElementById("theme-style").href = "default.css";
      break;
    case "blue":
        document.getElementById("theme-style").href = "blue.css";
      break;
    case "green":
        document.getElementById("theme-style").href = "green.css";
      break;      
      case "purple":
        document.getElementById("theme-style").href = "purple.css";
          break;
  }
//   if (mode == "light") {
//     document.getElementById("theme-style").href = "default.css";
//   }
//   if (mode == "blue") {
//     document.getElementById("theme-style").href = "blue.css";
//   }
//   if (mode == "green") {
//     document.getElementById("theme-style").href = "green.css";
//   }
//   if (mode == "purple") {
//     document.getElementById("theme-style").href = "purple.css";
//   }
  localStorage.setItem("myTheme", mode);
}

//bucket policy
/**
 * "Version":"2008-10-17"
 * "Statement":[
 *       {
 *           "Sid":"AllowPublicRead",
 *           "Effect":"Allow",
 *           "Principal":{
 *                   "AWS":"*"
 *             },
 *           "Action":"s3:GetObject",
 *           "Resource":"arn:aws:s3:::YOUR-BUCKET-NAME/*"
 *      }]
 */

 let optionalSubjects=[1,4,3]

 let highest=optionalSubjects[0]
 let high=optionalSubjects[0]
 let higher=optionalSubjects[0]
 
     
     optionalSubjects.forEach(subject=>{
        if (subject>highest){
            highest=subject
        }
        if (subject<high){
            high=subject
        }       
     })

     optionalSubjects.forEach(subject=>{
     if (subject>high && subject<highest){
        higher=subject
    }
})
     
     console.log("highest: ",highest);
     console.log("higher: ",higher);
     console.log("high: ",high);
     