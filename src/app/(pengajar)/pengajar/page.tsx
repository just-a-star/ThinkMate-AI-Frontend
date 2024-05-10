// import { GetServerSideProps } from 'next';
// import { decodeToken } from "@/src/app/lib/decodeToken"; // Make sure this path is correct
// import { getToken } from '@/src/app/lib/auth';

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // You must await here since getToken is an asynchronous function.
//   const token = await getToken(); // Pass context to getToken if it needs to access request cookies
//   const pengajar = token ? decodeToken(token) : null;

//   if (!pengajar) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       pengajar,
//     },
//   };
// };