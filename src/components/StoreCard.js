export default function StoreCard({ store }) {
  return (
    <>
      <div className="lg:w-1/6 md:w-1/4 lg:h-1/6 md:h-1/4 p-4 w-full ">
        <a className="block relative rounded overflow-hidden cursor-pointer">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={store.thumb}
          />
        </a>
      </div>
    </>
  );
}
