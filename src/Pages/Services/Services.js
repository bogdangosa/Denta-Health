import ServiceCard from '../../Components/Cards/ServiceCard';
import './Services.css';

const Services = () => {
  return (
    <main className="Services">
        <h2 className='service_title'>Our Services</h2>

        <p className='service_description'>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dapibus nunc a lorem pellentesque, a fermentum odio ultrices. Vivamus risus odio, aliquet et gravida elementum, blandit in nisl. Nullam venenatis mattis nisl, eu placerat ipsum viverra blandit. Nullam vitae ante ut justo mattis lacinia. Suspendisse congue molestie facilisis. Suspendisse at tellus eu sapien tempor suscipit. Phasellus maximus orci felis, eu vehicula nisl tempus aliquam. Sed rutrum posuere purus, ut ultrices tellus mollis id. Proin pretium ex lorem, sit amet posuere enim mollis et.</p>

        <div className='services-grid page-service-grid'>
            <ServiceCard title="Implantology">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
            <ServiceCard title="Orthodontics">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
            <ServiceCard title="Prosthetic">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
            <ServiceCard title="Dentistry">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
            <ServiceCard title="Endodontics">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
            <ServiceCard title="Prophylaxis">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
        </div>



    </main>
  );
}

export default Services;
