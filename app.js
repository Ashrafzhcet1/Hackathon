const url = "http://127.0.0.1:5000/summarize";

const getSumary = async (text) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  const data = await response.json();

  return data;
};

const button = document.querySelector(".btn");

button.addEventListener("click", async () => {
  const input = document.querySelector(".originalText").value;

  getSumary(input).then((data) => {
    console.log(data);
    document.querySelector(".summary_text").innerHTML =
      data?.data[0].summary_text;
  });
});
