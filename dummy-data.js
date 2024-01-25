export function getAllCategories() {
  return DUMMY_CATEGORIES;
}

export async function getApiAllCategories() {
  const response = await fetch(`${process.env.hostApi}/sii/categories`);
  const data = await response.json();
  const categories = [];

  for (const key in data) {
    categories.push({
      _id: key,
      ...data[key],
    });
  }

  return categories;
}
