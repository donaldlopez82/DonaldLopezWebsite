const form = document.getElementById('login')
          form.addEventListener('submit', login)
        
        async function registerUser(event) {
          event.preventDefault()
          const username = document.getElementById('username').value
          const password = document.getElementById('password').value
          
          const result = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username,
              password
            })
          }).then((res) => res.json())

          if(result.status === 'ok'){
            
            console.log('Got the token ', result.data)
            alert('Succcess')
          } else {
            alert(resut.error)
          }
        }