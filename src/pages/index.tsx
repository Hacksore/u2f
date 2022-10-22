import Head from "next/head";
import Image from "next/image";
import style from "../styles/Home.module.css";
import got from "got";
import React from "react";
import ImageWithFallback from "../components/imageWithFallback";

export async function getServerSideProps() {
  const url = "https://2fa.directory/api/v3/u2f.json";
  const response = await got(url).json();

  return {
    props: {
      sites: response,
    },
  };
}

export default function Home({ sites = [] }) {
  return (
    <div className={style.container}>
      <Head>
        <meta name="title" content="U2F" />
        <meta
          name="description"
          content="A collection of sites that support hardware U2F tokens"
        />
      </Head>
      <h2>Hardware Token Support</h2>
      <div className={style.main}>
        {sites.map((item: any) => {
          const [name, meta] = item;
          const firstChar = meta.domain.substring(0, 1);
          return (
            <a
              target="_blank"
              rel="noreferrer"
              className={style.item}
              key={name}
              href={meta.documentation}
              title={name}
            >
              <ImageWithFallback
                alt="company icon"
                width={32}
                height={32}
                src={`https://2fa.directory/img/${firstChar}/${meta.domain}.svg`}
                fallbackSrc="/404.svg"
              />
              <p className={style.text}>{name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
