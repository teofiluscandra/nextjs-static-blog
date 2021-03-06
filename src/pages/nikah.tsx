import { Banner, MainWedding } from 'modules/wedding/';
import { NextSeo } from 'next-seo';

const Nikah = (): JSX.Element => {
  return (
    <>
      <NextSeo
        title="Pawiwahan Yunita & Teofilus - 3 Juli 2021"
        description="Nuwun wiyosipun manawi Gusti Ingkang Maha Agung amarengaken saha paring kalodhangan ing samudayanipun, kula sanget angajeng-ajeng rawuh panjenengan ing syukuran tuwin pawiwahan dhauping sri penganten anak kula."
        openGraph={{
          url: 'https://teofilus.dev/nikah',
          title: 'Pawiwahan Yunita & Teofilus - 3 Juli 2021',
          description:
            'Nuwun wiyosipun manawi Gusti Ingkang Maha Agung amarengaken saha paring kalodhangan ing samudayanipun, kula sanget angajeng-ajeng rawuh panjenengan ing syukuran tuwin pawiwahan dhauping sri penganten anak kula.',
          site_name: 'teofilus.dev',
          images: [
            {
              url: 'https://teofilus.dev/static/icon-web-nikah.png',
              width: 500,
              height: 500,
              alt: 'Foto Prewed',
            },
          ],
        }}
      />
      <Banner />
      <MainWedding />
    </>
  );
};

export default Nikah;
