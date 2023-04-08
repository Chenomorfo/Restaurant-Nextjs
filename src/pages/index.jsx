import Image from "next/image";

import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

import { Galleria } from "primereact/galleria";
import Card from "@/components/Card";
import Link from "next/link";

const myImages = [
  {
    src: "https://scontent.fnld1-1.fna.fbcdn.net/v/t39.30808-6/326215695_1340512896792072_2783669119448734143_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH-gcS35OCUE-fEeQPBl61jSE0Wczoyd1NITRZzOjJ3U4USqI5_3B2IvPhGIZuURK0bzRmE8FGEIMG72SdclmCj&_nc_ohc=eFtRDbLpJ58AX-Kvhm6&_nc_ht=scontent.fnld1-1.fna&oh=00_AfCN98sqHoTY_4fMM5ikzOE3QxRBF-3Bhg1ryFJlTnoQwQ&oe=6430A048",
    alt: "A Description",
    title: "No title",
  },
  {
    src: "https://scontent.fnld1-1.fna.fbcdn.net/v/t39.30808-6/258855008_1409680626101934_8215310013622298556_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHQcZ8slAxaDNUd4zcu0TeOiziYdyF8PwSLOJh3IXw_BBU24L-o36PqJFpJU-sWsOxk99RPFXNl0DxCRhcu2Sk4&_nc_ohc=bAZwLlN7AEwAX-FhGnZ&_nc_ht=scontent.fnld1-1.fna&oh=00_AfD-c2Fq34RsGjJCTD4qQLsCO6CYLRxbvkKFnUjcBulz9g&oe=642F8023",
    alt: "imgA Description",
    title: "No title",
  },
  {
    src: "https://scontent.fnld1-1.fna.fbcdn.net/v/t39.30808-6/337239686_608113117494402_5560812269402600719_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGaKQVf7Gt9BQLW36pp-dIQVvvTMZwD9FJW-9MxnAP0Uhr2H-dJQd--BatOFs5QOWcba6BTSGtoaVQL_lHjt55o&_nc_ohc=BnQGzCx_s2sAX-D8y5e&_nc_ht=scontent.fnld1-1.fna&oh=00_AfBH-JrbtZ58mta962FRcH30qNIB8Hf-WQzTDJJl-fw3Iw&oe=6430562F",
    alt: "A Description",
    title: "No title",
  },
  {
    src: "https://scontent.fnld1-1.fna.fbcdn.net/v/t39.30808-6/337266725_236822912076825_5737762951125372537_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEuTn21liZj_clouDsSor0SS3cF4D3Po-tLdwXgPc-j6yeKjyCWCUYMaAINheSH2IpAK9ciUX3jchJELw6fScTL&_nc_ohc=-gbPVzUSZosAX89AHB6&_nc_ht=scontent.fnld1-1.fna&oh=00_AfA_vyGoFxIlz7VANTdY-jSir_uhpajkEtZf_P8pxtKLCQ&oe=643014DD",
    alt: "A Description",
    title: "No title",
  },
  {
    src: "https://scontent.fnld1-1.fna.fbcdn.net/v/t39.30808-6/337111244_463454335926590_6337801659322712235_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFkl9Lng9nx12WUjyuFzV9AkqSarz5kwPmSpJqvPmTA-ZZQg0dUV9wC9vGcVY7zrIFVTWGaUTFvF2ieakrqnBzA&_nc_ohc=pze4HDXJ5YUAX9B6dpg&_nc_ht=scontent.fnld1-1.fna&oh=00_AfAcNfCuYCRbyIDwuI_9ybHJwHkdSR7I9FNW3J2M3L2AEQ&oe=6430E5A8",
    alt: "A Description",
    title: "No title",
  },
];
const API = "http://localhost:3000/api/catalogo/";

export default function Home() {
  const [Menu, setMenu] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(API)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setMenu(data);
      });
  }, []);

  const itemTemplate = (item) => {
    return (
      <div
        style={{
          height: "475px",
          width: "675px",
          borderTopRightRadius: "20px",
          overflow: "hidden",
        }}
      >
        <img
          src={item.src}
          alt={item.alt}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            margin: "auto",
          }}
        />
      </div>
    );
  };

  const caption = (item) => {
    return (
      <>
        <div className="text-xl mb-2 font-bold">{item.title ?? "Titulo"}</div>
        <p className="text-white">{item.alt ?? "Descripcion"}</p>
      </>
    );
  };

  if (isLoading) return <h1>Loading categories...</h1>;
  return (
    <main className="overflow-auto py-10">
      <div className="w-11/12 mx-auto grid gap-5">
        <section className={styles.exposition}>
          <Image
            style={{
              borderTopLeftRadius: "20px",
            }}
            src={"/SnackNChill.jpg"}
            alt="Logo del negocio/empresa"
            width={475}
            height={475}
          />
          <Galleria
            value={myImages}
            numVisible={5}
            circular
            style={{ maxWidth: "675px" }}
            showItemNavigators
            showItemNavigatorsOnHover
            showThumbnails={false}
            item={itemTemplate}
            thumbnail={null}
            autoPlay
            transitionInterval={2500}
            caption={caption}
          />
        </section>
        {/* Categorias del menu */}
        <section>
          <h1 className="text-4xl m-5">LE OFRECEMOS</h1>
          <div className={styles.categories}>
            {Menu?.map(({ categoria, logo }, i) => (
              <Link
                href={{
                  pathname: "/menu/[pid]",
                  query: { pid: i },
                }}
              >
                <Card
                  className={styles.card}
                  title={categoria}
                  icon={logo}
                  key={categoria}
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
