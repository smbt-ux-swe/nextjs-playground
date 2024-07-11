type Props = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: Props) {
  return <h1>{params.slug}</h1>;
}

export function generateStaticParams() {
  const products = ["pants", "skirts"];
  return products.map((product) => ({
    slug: product,
  }));
}
