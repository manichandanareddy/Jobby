import { Link } from 'react-router-dom';
import "./index.css"
import { useNavigate } from 'react-router-dom';
function Header(){
    const navigate = useNavigate();
    return(
        <>
            <div className='main'>
                <div onClick={()=>{navigate('/home')}}><img src="https://assets.ccbp.in/frontend/react-js/logo-img.png"/></div>
                <div className='box'>
                    <Link className='icons' to="/home" >Home</Link>
                    <Link className="icons" to="/jobs">Jobs</Link>
                </div>
                <div>
                    <Link to="/"><button>Logout</button></Link>
                </div>
            </div>
        </>
    )
}
export default Header