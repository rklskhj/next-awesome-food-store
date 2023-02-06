import { useEffect, useState } from "react";
import { api } from "@/shared/apis";

import Head from "next/head";
import Layout from "@/components/Layouy";

import StoreModal from "@/components/StoreModal";
import { motion, AnimatePresence } from "framer-motion";

export default function StoreList() {
  const [stores, setStores] = useState([]);
  const [modal, setModal] = useState(false);
  const [storeId, setStoreId] = useState();
  const getStoreData = async () => {
    try {
      const res = await api.get("/stores");
      console.log("성공", res.data);
      setStores(res?.data);
    } catch (e) {
      console.log("실패", e);
    }
  };

  const handlerModal = (id) => {
    console.log("==>", id);
    setStoreId(id);
    setModal(!modal);
  };

  const animate = {
    initial: {
      opacity: 0,
      transition: `transform 0.33s ease`,
    },
    animate: {
      opacity: 1,
      transition: `transform 0.33s ease`,
    },
    exit: {
      opacity: 0,
      transition: `transform 0.33s ease`,
    },
  };

  useEffect(() => {
    getStoreData();
  }, []);

  return (
    <>
      <Layout>
        <AnimatePresence>
          {!modal ? null : (
            <motion.div
              variants={animate}
              animate="animate"
              initial="initial"
              exit="exit"
              className=" flex justify-center items-center bg-[rgba(0,0,0,0.4)] fixed left-0 right-0 bottom-0 top-0 p-5 z-[100000]"
            >
              {stores &&
                stores.map((store) =>
                  store.id === storeId ? (
                    <StoreModal
                      key={store.id}
                      store={store}
                      setModal={setModal}
                    />
                  ) : null
                )}
            </motion.div>
          )}
        </AnimatePresence>
        <Head>
          <title>퍼플아이오 과제 김혁진</title>
          <mate name="description" content="합격가자" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="text-gray-600 body-font">
          <div className="container px-32 py-24 mx-auto">
            <h1 className="text-[2rem] font-bold">EAT</h1>
            <div className="flex flex-wrap mt-2 -m-4">
              {stores &&
                stores.map((store) => (
                  <div
                    className="lg:w-1/6 md:w-1/4 lg:h-1/6 md:h-1/4 p-4 w-full"
                    key={store.id}
                    onClick={() => handlerModal(store.id)}
                  >
                    <a className="block relative rounded overflow-hidden cursor-pointer">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={store.thumb}
                      />
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
