// 2)  Create your own resume data in JSON format:


const resumeData = {
    Name: "Pavithra E",
    Contact: [
         {
      Email: "egpavithra07@gmail.com",
      Phone: "7868824060",
    },
],
      Address:[
        {
        city:"mayiladuthurai",
        pincode:"609 608",
        landmark:"Government Hospital",
      },
    ],
    
    summary: "To enhance my knowledge and skills to give my best for the growth of the job",
    education: [
      {
        university:"Anna University",
        degree: "Bachelor of Engineering",
        year: 2019-2023,
      },
    ],
    skills: [
        {
             VeryGood:"Javascript,HTML,CSS",
             Good:"React,Node.js,Git",
            },],
    languages: [
        {
            language:"English",
            Fluency:"Excellemt",
            language:"Tamil",
            Fluency:"Excellent",
        },
    ],
    hobbies: ["Listening Music", "Reading", "Painting"],
  };
  
  console.log(JSON.stringify(resumeData, null, 2));
  