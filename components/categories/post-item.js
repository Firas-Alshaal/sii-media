import { useTranslation } from "react-i18next";

function PostItem(props) {
  const { i18n } = useTranslation();

  const { t } = useTranslation();

  console.log(props.packageItem);

  const currentLocale = i18n.language;

  const { title_ar, title_en, price, features_en, features_ar } =
    props.packageItem;

  const features = currentLocale === "en" ? features_en : features_ar;

  return (
    <div className="max-w-sm mx-auto h-screen rounded overflow-hidden shadow-lg bg-white p-6 sm:p-8 m-4">
      <div className="flex flex-col h-full">
        <div className="text-gray-900 font-bold text-2xl sm:text-3xl md:text-4xl mb-2 text-center">
          {currentLocale === "en" ? title_en : title_ar}
        </div>
        <button className="my-7 bg-customPink hover:bg-pink-950 text-white font-bold py-2 px-4 rounded-full w-full">
          {price} AED
        </button>
        <div className="custom-scrollbar overflow-y-auto mb-4 flex-grow pb-3">
          <ul>
            {features.map((item) => (
              <li
                key={item._id}
                className={`${
                  currentLocale === "en"
                    ? "flex-row text-left"
                    : "flex-row-reverse text-right"
                } flex items-center text-gray-700 my-2`}
              >
                {item.exists === false ? (
                  <svg
                    className="flex-shrink-0 fill-current w-4 h-4 mx-1 text-red-500 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.348 14.849l-4.19-4.19-4.19 4.19-1.409-1.409 4.19-4.19-4.19-4.19L5.968 3.651l4.19 4.19 4.19-4.19 1.409 1.409-4.19 4.19 4.19 4.19z" />
                  </svg>
                ) : (
                  <svg
                    className="flex-shrink-0 fill-current text-green-500 w-4 h-4 mx-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-3.5-3.5 1.6-1.6L10 12l4.9-5 1.6 1.6L10 15z" />
                  </svg>
                )}
                <span className="flex-1 text-sm sm:text-base md:text-lg">
                  {item.feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
