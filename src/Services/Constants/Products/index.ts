import * as yup from "yup";

export const productsData = [
  {
    productName: "Product1",
    productId: "ID1",
    image: ["image1.jpg"],
    category: "Category1",
    buyingPrice: "Price1",
    quantity: 10,
    unit: "Unit1",
    expDate: "2024-12-31",
    thresholdValue: 5,
    availablility: "In-stock",
  },
  {
    productName: "Product2",
    productId: "ID2",
    image: ["image2.jpg"],
    category: "Category2",
    buyingPrice: "Price2",
    quantity: 15,
    unit: "Unit2",
    expDate: "2024-11-30",
    thresholdValue: 8,
    availablility: "Out of stock",
  },
  {
    productName: "Product3",
    productId: "ID3",
    image: ["image3.jpg"],
    category: "Category3",
    buyingPrice: "Price3",
    quantity: 20,
    unit: "Unit3",
    expDate: "2024-10-15",
    thresholdValue: 10,
    availablility: "In-stock",
  },
  {
    productName: "Product4",
    productId: "ID4",
    image: ["image4.jpg"],
    category: "Category4",
    buyingPrice: "Price4",
    quantity: 25,
    unit: "Unit4",
    expDate: "2024-09-20",
    thresholdValue: 15,
    availablility: "Low stock",
  },
  {
    productName: "Product5",
    productId: "ID5",
    image: ["image5.jpg"],
    category: "Category5",
    buyingPrice: "Price5",
    quantity: 30,
    unit: "Unit5",
    expDate: "2024-08-05",
    thresholdValue: 18,
    availablility: "Out of stock",
  },
  {
    productName: "Product6",
    productId: "ID6",
    image: ["image6.jpg"],
    category: "Category6",
    buyingPrice: "Price6",
    quantity: 12,
    unit: "Unit6",
    expDate: "2024-07-12",
    thresholdValue: 6,
    availablility: "In-stock",
  },
  {
    productName: "Product7",
    productId: "ID7",
    image: ["image7.jpg"],
    category: "Category7",
    buyingPrice: "Price7",
    quantity: 18,
    unit: "Unit7",
    expDate: "2024-06-25",
    thresholdValue: 9,
    availablility: "In-stock",
  },
  {
    productName: "Product8",
    productId: "ID8",
    image: ["image8.jpg"],
    category: "Category8",
    buyingPrice: "Price8",
    quantity: 22,
    unit: "Unit8",
    expDate: "2024-05-18",
    thresholdValue: 12,
    availablility: "Low stock",
  },
  {
    productName: "Product9",
    productId: "ID9",
    image: ["image9.jpg"],
    category: "Category9",
    buyingPrice: "Price9",
    quantity: 16,
    unit: "Unit9",
    expDate: "2024-04-30",
    thresholdValue: 7,
    availablility: "In-stock",
  },
  {
    productName: "Product10",
    productId: "ID10",
    image: ["image10.jpg"],
    category: "Category10",
    buyingPrice: "Price10",
    quantity: 28,
    unit: "Unit10",
    expDate: "2024-03-15",
    thresholdValue: 14,
    availablility: "In-stock",
  },
  {
    productName: "Product11",
    productId: "ID11",
    image: ["image11.jpg"],
    category: "Category11",
    buyingPrice: "Price11",
    quantity: 14,
    unit: "Unit11",
    expDate: "2024-02-28",
    thresholdValue: 8,
    availablility: "In-stock",
  },
  {
    productName: "Product12",
    productId: "ID12",
    image: ["image12.jpg"],
    category: "Category12",
    buyingPrice: "Price12",
    quantity: 24,
    unit: "Unit12",
    expDate: "2024-01-10",
    thresholdValue: 11,
    availablility: "In-stock",
  },
  {
    productName: "Product13",
    productId: "ID13",
    image: ["image13.jpg"],
    category: "Category13",
    buyingPrice: "Price13",
    quantity: 19,
    unit: "Unit13",
    expDate: "2023-12-05",
    thresholdValue: 9,
    availablility: "Out of stock",
  },
  {
    productName: "Product14",
    productId: "ID14",
    image: ["image14.jpg"],
    category: "Category14",
    buyingPrice: "Price14",
    quantity: 17,
    unit: "Unit14",
    expDate: "2023-11-20",
    thresholdValue: 10,
    availablility: "Out of stock",
  },
  {
    productName: "Product15",
    productId: "ID15",
    image: ["image15.jpg"],
    category: "Category15",
    buyingPrice: "Price15",
    quantity: 21,
    unit: "Unit15",
    expDate: "2023-10-01",
    thresholdValue: 13,
    availablility: "In-stock",
  },
];

export const genderOptions = [
  {
    value: "",
    label: "Select Category",
  },
  {
    value: "category 1",
    label: "Category 1",
  },
  {
    value: "category 2",
    label: "Category 2",
  },
  {
    value: "category 3",
    label: "Category 3",
  },
];

export const formFields = [
  { id: "productName", label: "Product Name", type: "text" },
  { id: "productId", label: "Product ID", type: "text" },
  {
    id: "category",
    label: "Category",
    type: "select",
    options: genderOptions,
  },
  { id: "buyingPrice", label: "Buying Price", type: "number" },
  { id: "quantity", label: "Quantity", type: "number" },
  { id: "unit", label: "Unit", type: "number" },
  { id: "expDate", label: "Expire Date", type: "date" },
  { id: "thresholdValue", label: "Threshold Value", type: "number" },
];

export const validationSchema = yup.object().shape({
  productName: yup.string().required("Product name is required"),
  productId: yup.string().required("Product id is required"),
  image: yup.mixed().test("required", "Image is required", (value: any) => {
    return value.length > 0;
  }),
  category: yup.string().required("Category is required"),
  buyingPrice: yup.number().required("Buying Price is required"),
  quantity: yup.number().required("Quantity is required"),
  unit: yup.number().required("Unit is required"),
  expDate: yup.date().required("Expire date is required"),
  thresholdValue: yup.number().required("Threshold Value is required"),
});

export interface ProductFormValues {
  productName: string;
  productId: string;
  image: string[];
  category: string;
  buyingPrice: number | string;
  quantity: number | string;
  unit: number | string;
  expDate: string;
  thresholdValue: number | string;
  availablility: string;
  [key: string]: string | number | string[];
}

export const initialValues: ProductFormValues = {
  productName: "",
  productId: "",
  image: [],
  category: "",
  buyingPrice: "",
  quantity: "",
  unit: "",
  expDate: "",
  thresholdValue: "",
  availablility: "In-stock",
};

export const tableHeaderArray = [
  "Products",
  "Buying Price",
  "Quantity",
  "Threshold Value",
  "Expiry Date",
  "Availability",
  "Actions",
];

interface InventoryItem {
  title: string;
  type: string;
  values: (number | string)[];
  subValues: string[];
}

export const inventoryData: InventoryItem[] = [
  {
    title: "Categories",
    type: "category",
    values: [14],
    subValues: ["Last 7 days"],
  },
  {
    title: "Total Products",
    type: "product",
    values: [868, "₹12000"],
    subValues: ["Last 7 days", "Revenue"],
  },
  {
    title: "Top Selling",
    type: "selling",
    values: [5, "₹25000"],
    subValues: ["12", "Cost"],
  },
  {
    title: "Low Stock",
    type: "stock",
    values: [12, 2],
    subValues: ["Ordered", "Not in stock"],
  },
];
