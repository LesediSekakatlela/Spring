import axios from 'axios'

class AuthenticationService {

    // executeBasicAuthenticationService(username, password) {
    //     return axios.get('http://localhost:8080/basicauth',
    //     { headers: { authorization: this.createBasicAuthToken(username, password) } })
    // }

    // createBasicAuthToken(username, password) {
    //     return 'Basic ' + window.btoa(username + ":" + password)
    // }

    registerSuccessfulLogin(username, password) {
        // let username = 'in28minutes'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) return false;
        return true;
    }
    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) return '';
        return user;
    }

    setupAxiosInterceptors(basicAuthHeader) {
        let username = 'in28minutes'
        let password = 'dummy'

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()