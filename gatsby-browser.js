import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './src/styles/global.css';

export const onRouteUpdate = () => {
  AOS.init({
    duration: 1000, // Você pode personalizar as opções do AOS aqui
    once: true,
  });
  AOS.refresh();
};
