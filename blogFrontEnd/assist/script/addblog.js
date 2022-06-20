const title = document.getElementById("title");
const body = document.getElementById("body");
const addButton = document.getElementById("add-blog"); // add-blog

addButton.addEventListener("click", async () => {
  try {
    const titleValue = title.value;
    const bodyValue = body.value;

    if (titleValue === "" || bodyValue === "") {
      alert("must be Write a fill blog");
      return;
    }
    const blogObject = JSON.stringify({ title: titleValue, body: bodyValue });

    const request = await fetch("http://localhost:8080/api/v1/blog", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: blogObject,
    });
    const data = await request.json();
    if (request.status == 201) {
      await successAlert(data.message);
      location.href = "/";
    } else {
      errorAlert(data.message);
    }
  } catch (error) {
    console.log(error);
    errorAlert("Something went wrong :(");
  }
});
