import AboutCard from '../../Components/Cards/AboutCard';
import './About.css';

const About = () => {
  return (
    <div className="About">
        <h2>About Us</h2>
        <div className='about-top'>
          <div className='about-top-text'>
            <h2 className='mini-title'>Who we are</h2>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dapibus nunc a lorem pellentesque, a fermentum odio ultrices. Vivamus risus odio, aliquet et gravida elementum, blandit in nisl. Nullam venenatis mattis nisl, eu placerat ipsum viverra blandit. Nullam vitae ante ut justo mattis lacinia. Suspendisse congue molestie facilisis. Suspendisse at tellus eu sapien tempor suscipit. Phasellus maximus orci felis, eu vehicula nisl tempus aliquam. Sed rutrum posuere purus, ut ultrices tellus mollis id. Proin pretium ex lorem, sit amet posuere enim mollis et. Vivamus tristique maximus eros, id faucibus felis iaculis et. Pellentesque aliquet odio id dictum eleifend.</p>
          </div>
          <div className='about-team-image'>
            <img src='/about_team_image.png'></img>
            <div className='about-team-image-overlay'></div>
          </div>          

        </div>
        <h2 className='mini-title'>Meet the team</h2>

        <div className='team-grid'>
          <AboutCard image='./about_dentist.png' name='Dr David Prost' description='Integer semper nisi urna, nec dictum elit feugiat vel.'></AboutCard>
          <AboutCard image='./about_dentist.png' name='Dr David Prost' description='Integer semper nisi urna, nec dictum elit feugiat vel.'></AboutCard>
          <AboutCard image='./about_dentist.png' name='Dr David Prost' description='Integer semper nisi urna, nec dictum elit feugiat vel.'></AboutCard>
          <AboutCard image='./about_dentist.png' name='Dr David Prost' description='Integer semper nisi urna, nec dictum elit feugiat vel.'></AboutCard>
          <AboutCard image='./about_dentist.png' name='Dr David Prost' description='Integer semper nisi urna, nec dictum elit feugiat vel.'></AboutCard>
          <AboutCard image='./about_dentist.png' name='Dr David Prost' description='Integer semper nisi urna, nec dictum elit feugiat vel.'></AboutCard>
        </div>
    </div>
  );
}

export default About;
