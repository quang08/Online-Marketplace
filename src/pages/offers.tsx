import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

const Offers = () => {
  const messages = api.listings.getMessages.useQuery();
  return (
    <>
      <Head>
        <title>Offers</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col gap-12 bg-slate-800 text-white">
        <div className="container mx-auto max-w-screen-xl p-4">
          <h1 className="mb-12 mt-12 text-4xl">Your Offers</h1>

          <div className="relative overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-700 text-xs  uppercase text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    From
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody>
                {messages.data?.map((message) => (
                  <tr
                    key={message.id}
                    className="border-b border-gray-700 bg-gray-800"
                  >
                    <td className="px-6 py-4">{message.fromUser}</td>
                    <td className="px-6 py-4">{message.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Offers;
