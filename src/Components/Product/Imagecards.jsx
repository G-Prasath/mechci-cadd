import React from 'react';
const Imagecards = () => {
    const cards = [
      {
        imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample62.jpg',
        title: 'Mechanical',
      },
      {
        imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample65.jpg',
        title: 'Piping',
      },
      {
        imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample31.jpg',
        title: 'Structural',
      },
      {
        imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample31.jpg',
        title: 'Instrumentation',
      },
      {
        imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample31.jpg',
        title: 'Technical Safety Studies',
      },
      {
        imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample31.jpg',
        title: 'Process Safety(HSE)',
      },
      {
        imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample31.jpg',
        title: 'Electrical',
      },
      {
        imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample31.jpg',
        title: 'Process',
      },
      {
        imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample31.jpg',
        title: 'Structural',
      },      {
        imgSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample31.jpg',
        title: 'Mechanical',
      },
    ];


  
const Card = ({ imgSrc, title }) => {
  return (
    <figure className="relative overflow-hidden m-2 min-w-[220px] max-w-[310px] max-h-[220px] w-full bg-white text-black text-center rounded-lg ">
      <img src={imgSrc} alt={title} className="w-full transition-opacity duration-600 ease-linear " />
      <figcaption className="absolute top-0 w-full h-1/2 overflow-hidden transition-all duration-350 ease-linear">
        <h2 className="m-0 absolute w-full left-0 opacity-0 p-8 font-normal uppercase bottom-0 transform translate-y-full transition-all duration-500 ease-linear delay-0">
          {title}
        </h2>
      </figcaption>
      <a href="javascript:;" className="absolute inset-0"></a>
    </figure>
  );
};


  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <Card key={index} imgSrc={card.imgSrc} title={card.title} />
      ))}
    </div>
  );
};

export default Imagecards;