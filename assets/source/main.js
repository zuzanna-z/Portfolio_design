const carousel_display = document.getElementById("carousel_img");
const carousel_arrow_left = document.getElementById("carousel_nav_arrow_left");
const carousel_arrow_right = document.getElementById(
  "carousel_nav_arrow_right",
);
const design_button = document.getElementById("project_section_design");
const research_button = document.getElementById("project_section_research");
const see_design_btts_node_list = document.getElementsByClassName("see_design");
const see_design_btts = Array.from(see_design_btts_node_list);
const case_container = document.getElementById("case_article");

const full_design_overlay = document.getElementById("full_design_overlay");
const full_design_overlay_close = document.getElementById("close_overlay");

const image_paths_len = all_paths_carousel_display.length - 1;
let image_idx_control = 1;

let current_case = 0;

carousel_arrow_left.addEventListener("click", (e) => {
  let current_img_path = parseInt(carousel_display.dataset.image_idx, 10);
  if (current_img_path >= 1 && current_img_path <= image_idx_control) {
    image_idx_control = current_img_path;
    new_img_path = parseInt(current_img_path, 10) - 1;
    carousel_display.dataset.image_idx = new_img_path;

    // carousel_display.src = all_paths_carousel_display[new_img_path]["path"];

    carousel_display.style.backgroundImage = `url(${all_paths_carousel_display[new_img_path]["path"]})`;

    carousel_display.alt = all_paths_carousel_display[new_img_path]["alt_txt"];
  } else {
    if (current_img_path == 0) {
      image_idx_control = parseInt(image_paths_len, 10);

      carousel_display.dataset.image_idx = image_paths_len;

      // carousel_display.src =
      //   all_paths_carousel_display[image_paths_len]["path"];

      carousel_display.style.backgroundImage = `url(${all_paths_carousel_display[image_paths_len]["path"]})`;

      carousel_display.alt =
        all_paths_carousel_display[image_paths_len]["alt_txt"];
    } else {
      image_idx_control = parseInt(current_img_path, 10);
      new_img_path = parseInt(image_idx_control, 10) - 1;

      console.log(new_img_path);
      carousel_display.dataset.image_idx = new_img_path;

      // carousel_display.src = all_paths_carousel_display[new_img_path]["path"];

      carousel_display.style.backgroundImage = `url(${all_paths_carousel_display[new_img_path]["path"]})`;

      carousel_display.alt =
        all_paths_carousel_display[new_img_path]["alt_txt"];
    }
  }
});

carousel_arrow_right.addEventListener("click", (e) => {
  let current_img_path = parseInt(carousel_display.dataset.image_idx, 10);
  const up_lim = parseInt(image_paths_len, 10) - 1;
  if (current_img_path <= up_lim && current_img_path >= image_idx_control) {
    image_idx_control = parseInt(current_img_path, 10);
    new_img_path = parseInt(current_img_path, 10) + 1;
    carousel_display.dataset.image_idx = new_img_path;

    // carousel_display.src = all_paths_carousel_display[new_img_path]["path"];

    carousel_display.style.backgroundImage = `url(${all_paths_carousel_display[new_img_path]["path"]})`;

    carousel_display.alt = all_paths_carousel_display[new_img_path]["alt_txt"];
  } else {
    if (current_img_path == image_paths_len) {
      image_idx_control = 0;

      carousel_display.dataset.image_idx = image_idx_control;

      // carousel_display.src =
      //   all_paths_carousel_display[image_idx_control]["path"];

      carousel_display.style.backgroundImage = `url(${all_paths_carousel_display[image_idx_control]["path"]})`;

      carousel_display.alt =
        all_paths_carousel_display[image_idx_control]["alt_txt"];
    } else {
      image_idx_control = parseInt(current_img_path, 10);

      new_img_path = parseInt(image_idx_control) + 1;

      carousel_display.dataset.image_idx = new_img_path;

      // carousel_display.src = all_paths_carousel_display[new_img_path]["path"];

      carousel_display.style.backgroundImage = `url(${all_paths_carousel_display[new_img_path]["path"]})`;

      carousel_display.alt =
        all_paths_carousel_display[new_img_path]["alt_txt"];
    }
  }
});

design_overlay_fun = () => {
  full_design_overlay_close.addEventListener("click", (e) => {
    full_design_overlay.classList.add("hidden_overlay");
    window.scrollTo({
      top: window.innerHeight * 0.75,
      left: 0,
      behavior: "smooth",
    });
  });

  if (current_case == 0) {
    // wikipedia spec
    const front_wiki_page_display = document.getElementById(
      "full_design_front_page_wiki",
    );
    const article_wiki_page_display = document.getElementById(
      "full_design_article_page_wiki",
    );

    front_wiki_page_display.addEventListener("click", (e) => {
      document.getElementById("image_in_overlay").src =
        "assets/images/cases/front_page_wiki.png";
      full_design_overlay.classList.remove("hidden_overlay");
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });

    article_wiki_page_display.addEventListener("click", (e) => {
      console.log("article click");
      document.getElementById("image_in_overlay").src =
        "assets/images/cases/article_page_wiki.png";
      full_design_overlay.classList.remove("hidden_overlay");
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }
};

design_button.addEventListener("click", (e) => {
  e.preventDefault();
  case_container.innerHTML = "";
  case_container.innerHTML = all_case_info[current_case].case_design;
  design_button.classList.toggle("open");
  design_button.disabled = true;
  if (research_button.classList.contains("open")) {
    research_button.classList.toggle("open");
    research_button.disabled = false;
  }
  design_overlay_fun();
});

research_button.addEventListener("click", (e) => {
  e.preventDefault();
  case_container.innerHTML = "";
  case_container.innerHTML = all_case_info[current_case].case_research;
  research_button.classList.toggle("open");
  research_button.disabled = true;
  if (design_button.classList.contains("open")) {
    design_button.classList.toggle("open");
    design_button.disabled = false;
  }
});

see_design_btts.forEach((btt) => {
  btt.addEventListener("click", (e) => {
    e.preventDefault();
    case_container.innerHTML = "";
    case_container.innerHTML = all_case_info[current_case].case_design;
    design_button.classList.toggle("open");
    design_button.disabled = true;
    if (research_button.classList.contains("open")) {
      research_button.classList.toggle("open");
      research_button.disabled = false;
    }
  });
  design_overlay_fun();
});
