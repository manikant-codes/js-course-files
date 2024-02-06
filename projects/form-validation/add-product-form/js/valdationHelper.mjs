export function validateProductID(id) {
  id = id.trim();
  if (id === "") return false;
  return id;
}

export function validateProductTitle(title) {
  title = title.trim();
  if (title === "") return false;
  if (title.length < 2) return false;
  return title;
}

export function validateProductPrice(price) {
  price = Number(price);
  if (Number.isNaN(price) || price === 0) return false;
  return price;
}

export function validateLengthIfExists(str) {
  str = str.trim();
  if (str !== "") {
    if (str.length < 2) {
      return false;
    }
  }
  return str;
}

export function checkIfAllFieldsAreValid(
  id,
  title,
  purchasePrice,
  retailPrice,
  brand,
  manufacturer
) {
  if (id === false) {
    return { isValid: false, errorElement: "id" };
  } else if (title === false) {
    return { isValid: false, errorElement: "title" };
  } else if (purchasePrice === false) {
    return { isValid: false, errorElement: "purchasePrice" };
  } else if (retailPrice === false) {
    return { isValid: false, errorElement: "retailPrice" };
  } else if (brand === false) {
    return { isValid: false, errorElement: "brand" };
  } else if (manufacturer === false) {
    return { isValid: false, errorElement: "manufacturer" };
  }

  return { isValid: true, errorElement: null };
}
