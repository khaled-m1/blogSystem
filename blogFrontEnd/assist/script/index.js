const listItems = document.getElementById("list-items");

const getAllBlogs = async () => {
  try {
    const request = await fetch("http://localhost:8080/api/v1/blog");

    const data = await request.json();

    if (request.status == 200) {
      const dataMap = data.map(
        (blog) => `<li class="list-group-item">
        <a href="/viewBlog.html?id=${blog.id}">
        ${blog.title}
        </a>
        </li>`
      );
      listItems.innerHTML = dataMap.join("");
    } else {
      errorAlert(data.message);
    }
  } catch (e) {
    console.log(e);
    errorAlert("Error service");
  }
};
getAllBlogs();
