"use client";
import { getApiAllCategories } from "@/dummy-data";

import { useEffect, useState } from "react";
import NavigationBar from "../appBar/navigationBar";
import { useTranslation } from "react-i18next";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const { i18n } = useTranslation();

  const { t } = useTranslation();

  async function fetchCategories() {
    try {
      const response = await getApiAllCategories();

      setCategories(response);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full my-8 h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className="flex justify-center items-center my-5">
        <p className="text-center max-w-md mx-auto p-4 bg-yellow-100 text-yellow-800 rounded-md shadow-lg">
          There is not any category
        </p>
      </div>
    );
  }
  return (
    <>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight mt-20 mb-4 text-center">
        {t("plan")}
      </h2>
      <NavigationBar categories={categories}></NavigationBar>
    </>
  );
}
