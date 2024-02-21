import * as path from "path";
import { Actions } from "gatsby";
import { courses } from "./src/data/courses";

export const onCreateWebpackConfig = ({ actions }: any) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "@libs": path.resolve(__dirname, "./src/lib"),
        "@data": path.resolve(__dirname, "./src/data"),
        "@images": path.resolve(__dirname, "./src/images"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@types": path.resolve(__dirname, "./src/@types"),
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
      },
    },
  });
};

const createCoursePages = async ({ actions }: { actions: Actions }) => {
  const { createPage } = actions;

  courses.forEach((course) => {
    createPage({
      path: `/course/${course.slug}`,
      component: path.resolve("./src/templates/course/index.tsx"),
      context: {
        course,
      },
    });
  });
};

export const createPages = async ({ actions }: { actions: Actions }) => {
  await Promise.all([createCoursePages({ actions })]);
};
