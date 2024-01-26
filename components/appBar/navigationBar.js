import React, { useState } from "react";
import PostItem from "../categories/post-item";
import { useTranslation } from "react-i18next";

const NavigationBar = (props) => {
  const { categories } = props;

  const [activeTab, setActiveTab] = useState(categories[0]);

  const { i18n } = useTranslation();

  const currentLocale = i18n.language;

  return (
    <div className="mx-4 my-2 sm:mx-10 sm:my-4 md:mx-20 md:my-6 lg:mx-32 lg:my-8 xl:mx-40 xl:my-10">
      <div className="flex border-b">
        {categories.map((category) => (
          <div
            key={category._id}
            className={`flex-grow p-4 cursor-pointer text-center hover:bg-gray-100 ${
              activeTab._id === category._id
                ? "border-b-2 border-customPink text-customPink"
                : ""
            }`}
            onClick={() => setActiveTab(category)}
          >
            {currentLocale === "en" ? category.name_en : category.name_ar}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-0 m-0 list-none">
          {activeTab.packages.map((packageItem) => (
            <li key={packageItem._id}>
              <PostItem packageItem={packageItem}></PostItem>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
