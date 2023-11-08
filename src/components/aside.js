// images locales
import mechanic from '../assets/images/mechanic.jpg'
import logo from '../assets/images/logo.svg'

function Aside({garage, children}){
  return (
    <div className="aside">
      <div className="illustration" style={{backgroundImage: `url(${mechanic})`}}></div>
      <img className="logo" src={logo} alt="logo" />
      <h1>{garage}</h1>
      <p>Our garage is the best. Reasonable prices, always on time, we are the best (and fictionnal).</p>
      {children}
    </div>
  )
}

export default Aside
