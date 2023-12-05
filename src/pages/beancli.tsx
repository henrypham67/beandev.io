import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const ComponentBasePage: React.FC<PageProps> = ({ data }: { data: any }) => {
  return "";
};

export default ComponentBasePage;

export const Head: HeadFC = () => (
  <>
    <meta
      name="go-import"
      content="beandev.io/beancli git https://github.com/BeanProjects/beancli"
    />
    <meta
      name="go-source"
      content="beandev.io/beancli https://github.com/BeanProjects/beancli https://github.com/BeanProjects/beancli/tree/master{/dir} https://github.com/BeanProjects/beancli/blob/master{/dir}/{file}#L{line}"
    />
  </>
);
