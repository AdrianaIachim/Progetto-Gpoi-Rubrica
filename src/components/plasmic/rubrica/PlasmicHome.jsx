// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hDnb1e9HU6FSLTm6gTNrXy
// Component: Tdonqa4iUaLQ1
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: HKS-4yiT-Ecwy/component
import { useScreenVariants as useScreenVariantsvjiKuatFCmk0Eg } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: vjiKuatFCmk0EG/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_rubrica.module.css"; // plasmic-import: hDnb1e9HU6FSLTm6gTNrXy/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: Tdonqa4iUaLQ1/css

export const PlasmicHome__VariantProps = new Array();

export const PlasmicHome__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHome__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsvjiKuatFCmk0Eg()
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"defaultSite"}
          data-plasmic-override={overrides.defaultSite}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.defaultSite
          )}
        >
          <nav
            data-plasmic-name={"nav"}
            data-plasmic-override={overrides.nav}
            className={classNames(projectcss.all, sty.nav)}
          >
            {true ? (
              <Header
                data-plasmic-name={"homepage"}
                data-plasmic-override={overrides.homepage}
                className={classNames("__wab_instance", sty.homepage)}
              />
            ) : null}
          </nav>
          {true ? (
            <section className={classNames(projectcss.all, sty.section__cukr6)}>
              <div className={classNames(projectcss.all, sty.freeBox__zWf1H)}>
                <div
                  data-plasmic-name={"columns"}
                  data-plasmic-override={overrides.columns}
                  className={classNames(projectcss.all, sty.columns)}
                >
                  <div
                    data-plasmic-name={"column"}
                    data-plasmic-override={overrides.column}
                    className={classNames(projectcss.all, sty.column)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__um31F)}
                    >
                      <h1
                        data-plasmic-name={"h1"}
                        data-plasmic-override={overrides.h1}
                        className={classNames(
                          projectcss.all,
                          projectcss.h1,
                          projectcss.__wab_text,
                          sty.h1
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "We started with humble beginnings"
                          : "Rubrica Telefonica"}
                      </h1>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ojnyw
                        )}
                      >
                        {"Per gli smemorati"}
                      </div>
                    </p.Stack>
                  </div>
                </div>
              </div>
            </section>
          ) : null}
          <section className={classNames(projectcss.all, sty.section___4U4Lv)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__a82Rj)}
            >
              <h2
                data-plasmic-name={"h2"}
                data-plasmic-override={overrides.h2}
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "Top Collections"
                  : "Aggiungi tutti i tuoi amici nel modo più facile possibile!"}
              </h2>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xCnu6
                )}
              >
                {
                  "Potrai aggiungere gli amici solo con un CLICK alla tua rubrica, visualizzare il loro compleanno e vedere tante altre informazioni per non fare brutta figura nel caso ti scordassi qualche loro informazione semplice!!!"
                }
              </div>
            </p.Stack>
          </section>
          <div className={classNames(projectcss.all, sty.freeBox__ejXVi)} />
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  defaultSite: [
    "defaultSite",
    "nav",
    "homepage",
    "columns",
    "column",
    "h1",
    "h2"
  ],

  nav: ["nav", "homepage"],
  homepage: ["homepage"],
  columns: ["columns", "column", "h1"],
  column: ["column", "h1"],
  h1: ["h1"],
  h2: ["h2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHome__ArgProps,
          internalVariantPropNames: PlasmicHome__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "defaultSite") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("defaultSite"),
  {
    // Helper components rendering sub-elements
    nav: makeNodeComponent("nav"),
    homepage: makeNodeComponent("homepage"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    h1: makeNodeComponent("h1"),
    h2: makeNodeComponent("h2"),
    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Rubrica telefonica",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
