import { showError } from "./errorHelper.mjs";
import {
  checkIfAllFieldsAreValid,
  validateLengthIfExists,
  validateProductID,
  validateProductPrice,
  validateProductTitle,
} from "./valdationHelper.mjs";

window.onload = function () {
  document.forms["add-product-form"].onsubmit = validate;
};

function validate(event) {
  event.preventDefault();

  const form = event.target;

  const id = validateProductID(form["id"].value);
  const title = validateProductTitle(form["title"].value);
  const purchasePrice = validateProductPrice(form["purchase-price"].value);
  const retailPrice = validateProductPrice(form["retail-price"].value);
  const brand = validateLengthIfExists(form["brand"].value);
  const manufacturer = validateLengthIfExists(form["manufacturer"].value);
  const category = form["category"].value;
  const l = form["l"].value;
  const w = form["w"].value;
  const h = form["h"].value;
  const quantity = form["quantity"].value;

  const validationResult = checkIfAllFieldsAreValid(
    id,
    title,
    purchasePrice,
    retailPrice,
    brand,
    manufacturer
  );

  if (validationResult.isValid === false) {
    showError(validationResult.errorElement);
    return false;
  }

  showError("none");

  console.log("id", id);
  console.log("title", title);
  console.log("purchasePrice", purchasePrice);
  console.log("retailPrice", retailPrice);
  console.log("brand", brand);
  console.log("manufacturer", manufacturer);
  console.log("category", category);
  console.log("l", l);
  console.log("w", w);
  console.log("h", h);
  console.log("quantity", quantity);
}
