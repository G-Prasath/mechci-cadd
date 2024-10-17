import React from "react";

const data = [
  {
    id: 1,
    title: "CAESAR II",
    details: [
      { icon: "/experiences.png", text: "5+ years", iconTitle: "Experience" },
      {
        icon: "/experience.png",
        text: "Experience in O&G and Refinery Industry Preferable",
        iconTitle: "Industry Experience",
      },
      { icon: "/notice.png", text: "30 Days", iconTitle: "Notice Period" },
      { icon: "/location.png", text: "Chennai", iconTitle: "Location" },
    ],
    icon: "/requirements.png",
    iconTitle: "Requirements",
    bgColor: "bg-card",
    textColor: "text-muted-foreground",
  },
  {
    id: 2,
    title: "ASPEN HYSYS (ESSENTIAL) & AUTO CAD",
    details: [
      { icon: "/experiences.png", text: "5+ years", iconTitle: "Experience" },
      { icon: "/degree.png", text: "B.E/B.Tech Chemical", iconTitle: "Degree" },
      {
        icon: "/experience.png",
        text: "O&G and Refinery Industry Preferable",
        iconTitle: "Industry Experience",
      },
      { icon: "/notice.png", text: "15-30 Days", iconTitle: "Notice Period" },
      { icon: "/location.png", text: "Chennai", iconTitle: "Location" },
    ],
    icon: "/requirements.png",
    iconTitle: "Requirements",
    bgColor: "bg-card",
    textColor: "text-muted-foreground",
  },
  {
    id: 3,
    title: "STAAD Pro, TEKLA, Steel & Concrete Structure",
    details: [
      { icon: "/experiences.png", text: "5-12 years", iconTitle: "Experience" },
      {
        icon: "/experience.png",
        text: "O&G and Refinery Industry Preferable",
        iconTitle: "Industry Experience",
      },
      { icon: "/notice.png", text: "15 Days", iconTitle: "Notice Period" },
      {
        icon: "/location.png",
        text: "Chennai, Bangalore",
        iconTitle: "Location",
      },
    ],
    icon: "/requirements.png",
    iconTitle: "Requirements",
    bgColor: "bg-card",
    textColor: "text-muted-foreground",
  },
];

const Careercard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className={`${item.bgColor} rounded-lg shadow-lg p-6 card`}
        >
          <div className="flex items-center mb-4 card rounded-lg p-1">
            <img
              src={item.icon}
              alt={item.iconTitle}
              className="w-10 h-10 mr-2"
            />
            <h2 className="text-xl font-bold">{item.title}</h2>
          </div>

          <div className="card p-2 rounded-lg mb-4">
            {item.details.map((detail, index) => (
              <div key={index} className="flex items-center mb-5">
                <img
                  src={detail.icon}
                  alt={detail.iconTitle}
                  className="w-10 h-10 mr-2"
                />
                <p className={`${item.textColor} text-md font-semibold`}>
                  {detail.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Careercard;