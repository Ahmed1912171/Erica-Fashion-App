import { redirect } from "react-router-dom";
import customFetch from "../axios/custom";

interface SearchActionRequest {
  request: {
    formData: () => Promise<FormData>;
  };
}

interface CheckoutFormAction {
  request: {
    formData: () => Promise<FormData>;
  };
}

export const searchAction = async ({ request }: SearchActionRequest) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  return redirect(`/search?query=${data?.searchInput || ""}`);
};

export const checkoutAction = async ({ request }: CheckoutFormAction) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  // Await the response and use it
  const response = await customFetch.post("/orders", data);
  
  console.log(response); // Use or log the response as needed
  
  return redirect('/'); // Redirect to the home page or desired location
};
