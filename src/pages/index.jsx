import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export const runtime = 'experimental-edge';

export default function Home(audiovisuals) {
  const { t } = useTranslation("home")
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-24 flex justify-center">
        <h1 className="text-3xl font-bold">{t("welcome")} </h1>
      </div>
      <div className="max-w-7xl mx-4 xl:mx-auto">
        <div className="grid grid-cols-1 gap-4 my-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {audiovisuals.audiovisuals.data.attributes.works.map(work => (
            <div key={work.id}>
              <h1 >{work.title}</h1>
              <div className="relative w-64 h-64 mt-6">
                <img
                  src={work.featured_image?.data?.attributes?.url}
                  alt={work.title}
                  className="object-cover object-center" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {


  const audiovisualResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/audiovisual-work?populate[2]=works.featured_image`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
      },
    }
  );
  const audiovisuals = await audiovisualResponse.json();

  return {
    props: {
      audiovisuals,
    },
  };
};