interface TripData {
    title: string;
    location: string;
    googleMapsUrl: string;
    startDate: string;
    endDate: string;
    description: string;
    imageUrl: string;
  }
  
  const data: TripData[] = [
    {
      title: "UFC 290",
      location: "USA",
      googleMapsUrl: "https://goo.gl/maps/ajLniECoYQ2cagk77",
      startDate: "6 July, 2023",
      endDate: "9 July, 2023",
      description:
        "UFC 290 is an upcoming mixed martial arts event produced by the Ultimate Fighting Championship that will take place on July 8, 2023, at the T-Mobile Arena facility in Paradise, Nevada, part of the Las Vegas Metropolitan Area, United States.",
      imageUrl: "https://i.ytimg.com/vi/k9rf9LzvvEE/maxresdefault.jpg",
    },
    {
      title: "Cayo Coco",
      location: "Cuba",
      googleMapsUrl: "https://goo.gl/maps/8PkrbHLpxJkCsmhk9",
      startDate: "31 Jan, 2023",
      endDate: "7 Feb, 2023",
      description:
        "Cayo Coco is a tropical island in the Jardines del Rey chain, off central Cuba. Known for its white-sand beaches and coral reefs, its northern coast is dotted with all-inclusive resorts.",
      imageUrl:
        "https://www.cayococo.ca/wp-content/uploads/2018/03/melia_cayo_coco_lagoon_bungalows_aerial.jpg",
    },
    {
      title: "Emma Lake",
      location: "Canada",
      googleMapsUrl: "https://goo.gl/maps/PW5EWXWLkd2zB2Qr6",
      startDate: "1 July, 2022",
      endDate: "4 July, 2022",
      description:
        "Emma Lake is a recreational lake in the Canadian province of Saskatchewan. It is located near the southern limit of the boreal forest, about 45 km north of Prince Albert. The lake is within the District of Lakeland No. 521 and east of Prince Albert National Park.",
      imageUrl:
        "https://www.kentbraaten.com/uploads/agent-1/Kent-Braaten-REALTOR-Emma-Lake-Christopher-Lake_(1).png",
    },
  ];
  
  export default data;
  