import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const ContentCliPage: React.FC<PageProps> = ({ data }: { data: any }) => {
  return "";
};

export default ContentCliPage;

export const Head: HeadFC = () => (
  <>
    <meta
      name="go-import"
      content="beandev.io/content-cli git https://github.com/BeanContent/cli"
    />
    <meta
      name="go-source"
      content="beandev.io/content-cli https://github.com/BeanContent/cli https://github.com/BeanContent/cli/tree/master{/dir} https://github.com/BeanContent/cli/blob/master{/dir}/{file}#L{line}"
    />
  </>
);
