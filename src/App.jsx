import './App.css'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

function App() {


  return (

    <div className='bg-dark vh-100'>
      <div className='container h-100'>
        <div className='row align-items-center h-100'>
          <div className='col-12 col-md-6 offset-md-3 col lg-4 offset-lg-4 text-white'>
            
            {/* <LoginForm /> */}
            <RegisterForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
