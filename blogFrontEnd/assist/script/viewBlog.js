const title = document.getElementById("title");
const body = document.getElementById("body");

const getBlogFromServicr = async() => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const request = await fetch('http://localhost:8080/api/v1/blog/' + id);

  const data = await request.json();

  title.value = data.title;
  body.value = data.body;
};

getBlogFromServicr();
