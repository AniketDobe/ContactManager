if(localStorage.getItem("contacts") == undefined){
    localStorage.setItem("contacts", "[]");
}

let result = "";
let contacts = JSON.parse(localStorage.getItem("contacts"));

for(i=0; i< contacts.length; i++){
    //    result += "name: "+ contacts[i].name;    
    result += `
    <div class="contact-item">
        <i class="fa fa-user fa-2x color-primary"></i>
            <div class="contact-item-info">
                <h4>${contacts[i].name}</h4>
                <p>${contacts[i].phone}</p>
            </div>
        <i class="fa fa-times-circle color-primary" onClick="deleteContact('${contacts[i].id}')"></i>
    </div>
    `
}

document.getElementsByClassName("contact-body")[0].innerHTML = result;

function submitContact(e){

    e.preventDefault();
    let contactName = document.getElementById("name").value;
    let contactNumber = document.getElementById("number").value;

    


        let contacts = JSON.parse(localStorage.getItem("contacts"));

        let contact  = {
            name: contactName,
            id: Math.random().toString(36).substr(2, 9),
            phone: contactNumber
        }

        
        contacts.unshift(contact);

        localStorage.setItem("contacts", JSON.stringify(contacts));

        document.getElementById("name").value = "";
        document.getElementById("number").value = "";
            
            
        location.reload();
    
}

function deleteContact(id){
    let contacts = JSON.parse(localStorage.getItem("contacts"));

    contacts = contacts.filter(function(contact){
        return contact.id != id;
    });

    localStorage.setItem("contacts", JSON.stringify(contacts));
    location.reload();
}


function val(){
    if(frm.phone.value==""){
        alert("please Enter Correct phone No");
        frm.phone.focus();
        return false;
    }
    if(isNaN(frm.phone.value)){
        alert("Invalid phone no");
        frm.phone.focus();
        return false;
    }
    if((frm.phone.value).length<10){
        alert("Phone No Shuould be Minimum 10 Digits");
        frm.phone.focus();
        return false;
    }
    return true;  
}
