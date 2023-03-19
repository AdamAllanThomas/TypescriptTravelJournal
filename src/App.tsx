import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

interface CardProps {
  imageUrl: string;
  location: string;
  googleMapsUrl: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

export default function App(): JSX.Element {
  const cards: JSX.Element[] = data.map((item: CardProps) => (
    <Card key={item.startDate} {...item} />
  ));

  return (
    <div>
      <Header />
      {cards}
    </div>
  );
}
