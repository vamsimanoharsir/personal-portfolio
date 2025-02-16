const qualifications = [
  {
    title: "Trainee Software Engineer",
    year: 2022,
    description:
      "Worked as a trainee software engineer, gaining foundational experience in software development.",
    institute: {
      name: "Ivy",
      shortName: "Ivy",
      duration: "September 2021 - October 2022",
    },
    link: "https://ivy.global/",
  },
  {
    title: "Software Engineer",
    year: 2024,
    description:
      "Worked as a software engineer, contributing to various projects and enhancing my skills.",
    institute: {
      name: "Ivy",
      shortName: "Ivy",
      duration: "October 2022 - February 2024",
    },
    link: "https://ivy.global/",
  },
  {
    title: "Software Engineer",
    year: 2024,
    description:
      "Currently working as a software engineer, involved in advanced software development projects.",
    institute: {
      name: "Grid Dynamics",
      shortName: "Grid Dynamics",
      duration: "March 2024 - Present",
    },
    link: "https://www.griddynamics.com/",
  },
];

const parent = document.getElementById("qualification");

const html = qualifications.map(
  (quali) =>
    `<li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <div class="flex items-center">
            <time class="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-blue-500 dark:bg-gray-600">${quali.year}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200">${quali.title}
                <a href=${quali.link} target="_blank" class="ml-3">
                    <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
                </a>
            </h3>
        </div>
        <p class="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">${quali.description}</p>
        <p class="text-base font-light text-gray-800 dark:text-gray-400">
        <span title=${quali.institute.name}>${quali.institute.shortName}</span> &bull; ${quali.institute.duration}
        </p>
    </li>`
);

parent.innerHTML = html.join(" ");
