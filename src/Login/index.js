import React, { Component } from 'react'

class Login extends Component {
    state = {
      username:'',
      password: '',
      message: '',
      isLogged: false
    }

    handleChange = (e) => {
      this.setState({
        [e.currentTarget.name]: e.currentTarget.value
      })
    }

    componentDidMount() {
      this.redirectIfAdmin()
    }

    redirectIfAdmin = async () => {
      try {
        const responseGetUsers = await fetch('http://localhost:9000/auth')
        console.log(responseGetUsers, ' <--- responseGetUsers')
        if(responseGetUsers.status !== 200) {
          throw Error('404 from server')
        }
        const usersResponse = await responseGetUsers.json();
        console.log(usersResponse, ' <--- usersResponse')
      } catch(err) {
          console.log(err, ' <-- getEmployees...')
          return err
      }
    }

      handleSubmit = async (e) => {
        e.preventDefault()
        const login = await fetch('http://localhost:9000/auth/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
              'Content-Type': 'application/json'
            }
        })
      

      const parsedLogin = await login.json();
      console.log(parsedLogin, ' <---Response from login')
      if(parsedLogin.status.message === 'Users Logged In') {
        this.setState({
          isLogged: true,
          message: ''
        })
      } else {
          console.log('failed login')
          this.setState({
            message: parsedLogin.status.message
          })
      }
    }
   
    render () {
        const { username, password } = this.state
        return (
          <div>
          {
            !this.state.isLogged ? 
            <div>
              <form action="">
                <div class="form-group">
                  <label for="email">Email address:</label>
                  <input type="email" class="form-control" id="email" />
                </div>
                <div class="form-group">
                  <label for="pwd">Password:</label>
                  <input type="password" class="form-control" id="pwd" />
                    </div>
                <div class="form-group form-check">
                  <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" value="Remember me" /> 
                </label>
                </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
            : null
          }
          </div>
        )
    }
}

export default Login