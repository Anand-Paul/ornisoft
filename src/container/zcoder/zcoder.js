import React from "react";

import frameRight from "../../images/Frame-right.png";
import aboutImage from "../../images/zcoder.jpg";

const ZCoder = () => {
  return (
    <div className="product-detail">
      <img
        className="product-detail__shapes product-detail__shapes_right"
        src={frameRight}
        alt="Right asset"
      />
      <div className="container d-flex flex-column flex-lg-row justify-content-between">
        <div className="product-detail__content">
          <figure className="product-detail__figure mb-3 mb-sm-5 mb-lg-3 flex-shrink-0 flex-grow-0 float-start">
            <img
              className="w-100 h-100 product-detail__img"
              src={aboutImage}
              alt="about"
            />
          </figure>
          <h2 className="product-detail__overtitle mb-0">PRODUCTS</h2>
          <h3 className="product-detail__title">ZCODER</h3>
          <div className="product-detail__desc">
            <p>
              ZCoder, OrniSoft’s flagship product is an Application Development
              Enhancement Utility that generates 80-90% of the total source code
              required for a Database Application in almost all the current
              technologies. Quite simply, it is a multiplatform ML (AI) based
              application that does the majority of the coding work for you in a
              bug free and swift manner. A realization of a beautiful dream that
              began 8 years ago, ZCoder stands apart in every way when compared
              with other code generators that are commonly used around the world
              today.
            </p>
            <p>
              ZCoder allows a programmer to generate templates for a web based
              or mobile based application in the language he/she prefers thereby
              significantly reducing the time taken to complete a project. It
              not only makes his/her work easy and fast, but also results in
              error free coding hence, giving the coder confidence to even take
              on complicated projects that were otherwise beyond his/her realm
              of expertise.
            </p>
            <p>
              Essentially ZCoder works using Ornisoft’s Zero Markup Language
              (ZML). Considered the heart of ZCoder, ZML is a powerful variation
              of the common HTML with over a hundred commands. However,it is
              easy to learn and replicate for someone familiar with HTML. By
              design, ZCoder is mainly divided into four modules, Definition,
              Solution, JIT Compiler and Learning Center.
            </p>
            <h3>Prominent Features</h3>
            <h4>Your Code. Your Way</h4>
            <p>
              One of the most fascinating features of ZCoder is that it helps
              generate codes based on templates created by the programmers
              themselves using a text-file based source code of their choice. Be
              it C#, .Net, Java, PHP, etc. In that way, they can generate
              templates which they are familiar with, responding to them in the
              same language they use. In other words, ZCoder is one such unique
              application, which can be trained by a programmer depending on
              his/her need and expertise, thereby offering complete control in
              the process. And so, this feature helps to make the program easy
              to make changes or to debug in the future.
            </p>
            <h4>Multi-User Multi-Project</h4>
            <p>
              ZCoder facilitates multiple users to work on a single project or
              even a single user to work on multiple projects at the same time.
              It is a feature that is truly the need of the hour, especially for
              companies that develop multiple projects at the same time. In
              addition, the backup and restore facility allows the users to take
              a snapshot of their development which can be later restored if
              necessary and thereby overwrite undesired modifications to the
              application. Hence, this method reduces the total time taken for
              any development by more than 90 percent. Also, a security module
              is included in order to invoke and provoke user rights. Using this
              module, the administrator can specify user access.
            </p>
            <h4>On the wings of AI</h4>
            <p>
              In addition to employing Artificial Intelligence (AI) to scan the
              database, ZCoder also makes use of ML (AI) algorithms to eliminate
              mistakes in the codes generated and to provide you with swift,
              error-free results. From on-the-fly bug fixing to implementing the
              declared interfaces, to importing all the modules, the AI provides
              the application with a unique edge. Further courtesy the AI,
              ZCoder is capable of detecting security vulnerabilities that other
              tools fail to find and thus ensures no security bugs go into
              production.
            </p>
            <h4>Cross-Platform Adaptability</h4>
            <p>
              Suppose you need to convert your web application to an android
              based application. When conventional programming requires a lot of
              work to achieve that, ZCoder performs the same task with just a
              single click. Without changing a single line of code, the web
              application can be generated for a mobile based platform.
            </p>
            <h4>Debugging Made Easy</h4>
            <p>
              In case an error is found in a code generated by ZCoder, it takes
              only a few steps to fix it. The corresponding solution where the
              bug is found is fixed and all the projects that use that template
              can be regenerated. So, when other code generators focus on a
              specific part, here, the code of the whole application will be
              regenerated. And the regenerated source will have the bug fixed.
              This feature is especially effective for huge projects like ERPs.
              It cuts down the debugging time significantly thus allowing the
              programmer to focus on development instead of bug fixing.
            </p>
            <h4>Licensing</h4>
            <p>
              In order to use the application, the client must opt for either
              ZCoder’s Infrastructure licensing or Subscription based licensing.
              In the former, the application shall be installed on their server
              after which training shall be given on how to create the solutions
              and use the schemas. In subscription licensing, on a paid basis,
              the user can access the application. In this case, the training
              shall be provided online. In addition, we provide consulting
              solutions to help the clients get a better understanding of the
              product and how it can be used.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZCoder;
