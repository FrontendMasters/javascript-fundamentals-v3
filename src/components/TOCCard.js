import React from "react";
import Link from "gatsby-link";
import Bg from "../layouts/corner-image.svg";
import * as helpers from "../util/helpers";

const sortFn = helpers.sorter;

const LessonCard = ({ content, title }) => {
  console.log(sortFn);

  const sections = content
    .map((lesson) => lesson.node.frontmatter)
    .sort(sortFn)
    .reduce((acc, lesson) => {
      if (!acc.length) {
        acc.push([lesson]);
        return acc;
      }

      const lastSection = acc[acc.length - 1][0].section.split(",")[0];
      if (lastSection === lesson.section.split(",")[0]) {
        acc[acc.length - 1].push(lesson);
      } else {
        acc.push([lesson]);
      }

      return acc;
    }, []);

  return (
    <div className="main-card">
      <h1 className="lesson-title">{title}</h1>
      <div className="lesson-content">
        <ol className="sections-name">
          {sections.map((section) => (
            <li key={section[0].section}>
              <div class="lesson-details">
                <div className="lesson-preface">
                  <i
                    className={`fas fa-${
                      section[0].icon ? section[0].icon : "dumpster-fire"
                    }`}
                  ></i>
                </div>
                <div className="lesson-text">
                  <h3 className="lesson-section-title">{section[0].section}</h3>
                  <ol>
                    {section.map((lesson) => (
                      <li key={lesson.path}>
                        <Link to={lesson.path}>{lesson.title}</Link>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="details-bg">
                  <Bg />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default LessonCard;