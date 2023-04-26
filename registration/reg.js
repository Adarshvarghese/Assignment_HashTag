Locals = window.localStorage;
flag=0;
flag2=0
newusr={name:"",
email:"",
phone:"",
dob:""}
flag1=0
flag2=0
userlist=[]
old_users=[]
if(Locals.getItem('users')==''){
    Locals.setItem('users','[]')
  }
  else{
     old_users=JSON.parse(Locals.getItem('users'))
  }
  storage_length=old_users.length
  
x=JSON.parse(Locals.getItem('users'))
  x.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item.name;
    list.appendChild(li);
  });



function validates() {
    // Get form fields
    const name = document.getElementById("name");
    const email = document.getElementById("mail");
    const phone = document.getElementById("mob");
    const dob = document.getElementById("date");
 
    
    // console.log(name.value)
   nam=name.value
    if(nam.length<3 || nam.length>20){
        document.getElementById("namel").textContent="enter valid name"
        flag++;
    }
     else {
        
        newusr.name=name.value;

    }
  
      if(email.value===""){
        document.getElementById("maill").textContent="enter valid mail"
        flag++
      }
      else{
        newusr.email=email.value
      }
      
  c=phone.value
  c=c.toString()
   if(c.length>10||c.length<10){
    console.log("please check your number")
    document.getElementById("phonel").textContent="enter valid phone number"
   }
   else{
    newusr.phone=phone.value
   }
   
    // Validate date field
    const dobDate = new Date(dob.value);
    const today = new Date();
    var age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
     
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
      age--;
    }
    if (isNaN(dobDate.getTime()) || age < 18) {
      document.getElementById("datel").textContent = "You must be 18 or older to register";
      dob.focus();
      flag++
    } else {
      document.getElementById("datel").textContent = age;
      newusr.dob=dob.value
    } 
    if(flag==0){
        console.log(newusr)
        i=0
        new_mail=newusr.email
        
    
    console.log(JSON.parse(Locals.getItem('users')))
    storage_length=old_users.length
    
    for(i=0;i<storage_length;i++){
          userlist[i]=old_users[i].name
          if(old_users[i].email==new_mail){
            console.log("user already registered");
            flag2=1         //flag2 used to determine uniqueness of mail
          }    }
         
          if(flag2==0){
    old_users.push(newusr)
    Locals.setItem('users',JSON.stringify(old_users))
          }
          else{
            document.getElementById("maill").textContent="mail already registered"
          }
          setTimeout(function(){
            location.reload();
         }, 4000);
          }
    

  }