import Link from "next/link";

export default function StoreModal({ store, setModal }) {
  console.log("모달스토어", store);
  return (
    <>
      <div className="bg-white rounded-lg relative shadow-2xl dark:bg-slate-600 dark:text-white">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-5 mx-auto">
            <div
              className="flex justify-end absolute top-2- right-4 p-5 cursor-pointer hover:bg-black hover:text-white dark:bg-slate-600 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white rounded-md ease-in-out duration-300"
              onClick={() => setModal()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <img
                  alt="ecommerce"
                  className="lg:w-full w-full lg:h-auto aspect-square object-cover object-center rounded"
                  src={store?.image}
                />
              </div>
              <div>
                <div className="flex flex-col gap-10 w-full lg:pl-10 lg:py-6 mt-3 ">
                  <h1 className="text-gray-900 text-3xl title-font font-medium font-bold mb-10">
                    {store?.name}
                  </h1>
                  <p className="leading-relaxed dark:text-white">
                    {store?.description}
                  </p>
                  {store?.url && (
                    <Link href={store?.url} className="flex items-center mt-10">
                      <span className="block font-bold">
                        매장 사이트 방문하기
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
