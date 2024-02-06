function getErrorMessage(errorElement) {
  switch (errorElement) {
    case "id":
      return "* Invalid ID!";
    case "title":
      return "* Invalid Title!";
    case "purchasePrice":
      return "* Invalid Purchase Price!";
    case "retialPrice":
      return "* Invalid Retail Price!";
    case "brand":
      return "* Invalid Brand!";
    case "manufacturer":
      return "* Invalid Manufacturer!";
    default:
      return "";
  }
}

export function showError(errorElement) {
  const errorPara = document.getElementById("error-para");

  const message = getErrorMessage(errorElement);

  errorPara.innerText = message;
}
