// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hDnb1e9HU6FSLTm6gTNrXy
// Component: Soagzd45Lm
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: HKS-4yiT-Ecwy/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_rubrica.module.css"; // plasmic-import: hDnb1e9HU6FSLTm6gTNrXy/projectcss
import sty from "./PlasmicContatti.module.css"; // plasmic-import: Soagzd45Lm/css
import UsersvgIcon from "./icons/PlasmicIcon__Usersvg"; // plasmic-import: J7WCCLHpj8Ajhn/icon

export const PlasmicContatti__VariantProps = new Array();

export const PlasmicContatti__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicContatti__RenderFunc(props) {
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
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__vr7Yr)}>
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___0666E)}>
            <div
              data-plasmic-name={"contatti"}
              data-plasmic-override={overrides.contatti}
              className={classNames(projectcss.all, sty.contatti)}
            >
              <div className={classNames(projectcss.all, sty.column__yRwps)}>
                <div className={classNames(projectcss.all, sty.freeBox__ms1VU)}>
                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__hIhGq)}
                    >
                      <UsersvgIcon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        className={classNames(projectcss.all, sty.svg)}
                        role={"img"}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__k3TNv
                        )}
                      >
                        {" Nome"}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__p1LZz)}>
                <div className={classNames(projectcss.all, sty.freeBox__u3O5O)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__gnMi2
                    )}
                  >
                    {"contatto"}
                  </div>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__oRgn1)}>
                <div className={classNames(projectcss.all, sty.freeBox__bJcIn)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___3GRmu
                    )}
                  >
                    {"Indirizzo"}
                  </div>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column___8PyF2)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox___1KyAb)}
                >
                  <a
                    data-plasmic-name={"link"}
                    data-plasmic-override={overrides.link}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link
                    )}
                    href={"https://www.plasmic.app/"}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#000000" }}
                      >
                        {"Eventuale sito"}
                      </span>
                    </React.Fragment>
                  </a>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__jmQuq)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox___7QyOh)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rvkRe
                    )}
                  >
                    {"Note"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "header", "contatti", "svg", "link"],
  header: ["header"],
  contatti: ["contatti", "svg", "link"],
  svg: ["svg"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicContatti__ArgProps,
          internalVariantPropNames: PlasmicContatti__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicContatti__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContatti";
  } else {
    func.displayName = `PlasmicContatti.${nodeName}`;
  }
  return func;
}

export const PlasmicContatti = Object.assign(
  // Top-level PlasmicContatti renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    contatti: makeNodeComponent("contatti"),
    svg: makeNodeComponent("svg"),
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicContatti
    internalVariantProps: PlasmicContatti__VariantProps,
    internalArgProps: PlasmicContatti__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContatti;
/* prettier-ignore-end */