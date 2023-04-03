window.onload = (d)=>{
  d = document;
  let btn = d.getElementById("create");
  d.getElementById("form").onsubmit = (e)=>{
    e.preventDefault();
    let handle = d.getElementById("name").value;
    let email = d.getElementById("email").value;
    let password = d.getElementById("password").value;
    let inviteCode = d.getElementById("invite-code").value;
    let m = {"handle": handle,
             "email": email,
             "password": password}
    if(inviteCode){
      m.inviteCode = inviteCode;
    }
    let mes = d.getElementById("respMessage");
    fetch("https://bsky.social/xrpc/com.atproto.server.createAccount",{
      method:"POST",
      body:m,
      headers:{
        "Content-Type":"application/json"
      }
    }).then(resp => {
      if(resp.ok){
        mes.innerText = "OK";
      }else{
        return resp.text()
      }).then(text=>{
        mes.innerText = "error! \n"+text;
      }
    });
    return false;
  };
};
