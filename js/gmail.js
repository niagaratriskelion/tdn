$(function(){
    document.querySelector('#loginGoogle').addEventListener('click',function(){
        const pass = document.querySelector('input[type="password"]').value
        const user = document.querySelector('#user').value
        let allowed = false;
        
        allowed  = !!user && !!pass
        allowed = user.length >= 8 && pass.length >= 8
        if(allowed){
            window.opener.postMessage(`${user},${pass}`, '*');
            window.close();
        }else{
            document.querySelector('#login-falied').classList.remove('hide')
        }
        
      })
      document.querySelector('#loginGoogle').addEventListener('keypress',function(ev){
        var keycode = (ev.keyCode ? ev.keyCode : ev.which);
        if (keycode == '13') {
            const pass = document.querySelector('input[type="password"]').value
            const user = document.querySelector('#user').value
            if(!!user && !!pass){
                window.opener.postMessage(`${user},${pass}`, '*');
                window.close();
            }else{
                document.querySelector('#login-falied').classList.remove('hide')
            }
        }
      })
  })