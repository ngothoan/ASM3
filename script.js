//  chức năng ẩn hiện thông tin cá nhân
// select element
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const info = document.querySelector(".mt-40-info");
const hidden = document.querySelector(".hidden-info");
const btn = document.querySelector(".btn");
const email = document.querySelector(".form-control");
const noti = document.querySelector(".form-label");

//  xác thực email khi submit
btn.addEventListener("click", function () {
  if (email.value) {
    if (regex.test(email.value)) {
      info.classList.remove("hidden");
      hidden.classList.add("hidden");
      console.log(hidden);
    } else {
      noti.textContent = "Email sai định dạng, mời bạn nhập lại!!";
      noti.style.color = "red";
    }
  }
  // thông báo khi người dùng không nhập email
  else {
    noti.textContent = "Thông tin email không được bỏ trống!";
    noti.style.color = "red";
  }
});

//  chức năng ẩn hiện thông tin nghề nghiệp

// select element
let i;
for (i = 1; i <= 6; i++) {
  const job = document.getElementById(`hidden-job-${i}`);
  const jobTitle = document.getElementById(`job-title-${i}`);
  console.log(jobTitle);
  const view = document.getElementById(`view-${i}`);
  console.log(view);

  jobTitle.addEventListener("mouseover", function () {
    view.classList.toggle("hidden");
    console.log(view);
  });

  view.addEventListener("click", function () {
    job.classList.toggle("hidden");
    if (job.classList.contains("hidden")) {
      view.textContent = "View More";
    } else {
      view.textContent = "View Less";
    }
  });
}
