window.onload = (d)=>{
  d = document;
  let btn = d.getElementById("create");
  btn.onclick = ()=>{
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
    let xhr = new XMLHttpRequest();
    xhr.open("POST","https://bsky.social/xrpc/com.atproto.account.create");
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.send(JSON.stringify(m));
    xhr.onreadychange = () => {
      if(xhr.readystate == XMLHttpReqest.DONE){
        d.getElementById("respMessage").innerText = xhr.responsText
      }
    };
  };
};
