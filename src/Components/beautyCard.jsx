/* eslint-disable react/prop-types */
export default function Card({ title, imageSrc, altText }) {
  return (
    <div className=" flex flex-col m-2 overflow-hidden justify-center items-center w-40 ">
      <img src={imageSrc} alt={altText} className="rounded-full h-24 w-24" />
      <div className="flex justify-center items-center">
        <h3 className="text-lg font-semibold text-center">{title}</h3>
      </div>
    </div>
  );
}
