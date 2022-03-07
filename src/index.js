import "./styles.css";
import { renderForm } from "@fetchforms/core";

const onComplete = (data) => {
  document.getElementById("result").innerHTML = JSON.stringify(data, null, 2);
};
const onLoad = (data) => {
  document.getElementById("form_name").innerHTML = data.name;
};

renderForm(
  "fcd4ca8b-12d4-4b8c-882d-00144d54d02c",
  "fetch_form",
  onComplete,
  onLoad
);
