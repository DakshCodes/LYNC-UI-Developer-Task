import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import ReviewCard from '../ui/ReviewCard/ReviewCard';
import SliderCard from '../ui/SliderCard/SliderCard';

const Slider = ({ isCard }) => {


  const sliderdata = [
    {
      title: "Ready Players",
      mainImgsrc: "https://s3-alpha-sig.figma.com/img/0fbb/7420/7c5ddafcd302089a206f32175626e585?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oN~4wGzmovdMjrBLCVf58saXbnDUltMe5WG1dCgC4kuCD7nQ2fRsPMay44MiLSI6dtMjTbk0XVMKfMAanEQXaVY~Fq99vOGlphYgQkuD4aSUA3Q2SSOtgnc~4O8Jb3MkH7NWaR8-U8d5zrntHyM80-L8pyx6kMWvy87a261uwEVNsxLUeJZdge4gOnvLNLAH~CmJTJkwoXlXLk6qWBfqURwS4ktConm5Rl7k40hr-QIWmvsFZQd2Jki-0UR1C8WyY0lttt195IiyXXOFEx8gtZoKuFlwqGI4cjAtNrvVJFj9yqO7-orwECp0hnN8TON8Jl3tLlnmVAmjZchEQqibww__",
    },
    {
      title: "Dragon's Den",
      mainImgsrc: "https://s3-alpha-sig.figma.com/img/0fbb/7420/7c5ddafcd302089a206f32175626e585?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oN~4wGzmovdMjrBLCVf58saXbnDUltMe5WG1dCgC4kuCD7nQ2fRsPMay44MiLSI6dtMjTbk0XVMKfMAanEQXaVY~Fq99vOGlphYgQkuD4aSUA3Q2SSOtgnc~4O8Jb3MkH7NWaR8-U8d5zrntHyM80-L8pyx6kMWvy87a261uwEVNsxLUeJZdge4gOnvLNLAH~CmJTJkwoXlXLk6qWBfqURwS4ktConm5Rl7k40hr-QIWmvsFZQd2Jki-0UR1C8WyY0lttt195IiyXXOFEx8gtZoKuFlwqGI4cjAtNrvVJFj9yqO7-orwECp0hnN8TON8Jl3tLlnmVAmjZchEQqibww__",
    },
    {
      title: "Crippled World",
      mainImgsrc: "https://s3-alpha-sig.figma.com/img/0fbb/7420/7c5ddafcd302089a206f32175626e585?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oN~4wGzmovdMjrBLCVf58saXbnDUltMe5WG1dCgC4kuCD7nQ2fRsPMay44MiLSI6dtMjTbk0XVMKfMAanEQXaVY~Fq99vOGlphYgQkuD4aSUA3Q2SSOtgnc~4O8Jb3MkH7NWaR8-U8d5zrntHyM80-L8pyx6kMWvy87a261uwEVNsxLUeJZdge4gOnvLNLAH~CmJTJkwoXlXLk6qWBfqURwS4ktConm5Rl7k40hr-QIWmvsFZQd2Jki-0UR1C8WyY0lttt195IiyXXOFEx8gtZoKuFlwqGI4cjAtNrvVJFj9yqO7-orwECp0hnN8TON8Jl3tLlnmVAmjZchEQqibww__",
    },
  ]

  return (
    <div className="slider card-slider"  >
      <div className="slider-container">
        {
          sliderdata.map((card, index) => (
            isCard ? (<SliderCard key={index} card={card} />) : (<ReviewCard key={index} />)
          ))
        }

      </div>
      <button className="btn-icon slider-control prev">
        <ChevronLeft color='#fff' />
      </button>

      <button className="btn-icon slider-control next">
        <ChevronRight color='#fff' />
      </button>
    </div>
  )
}

export default Slider
