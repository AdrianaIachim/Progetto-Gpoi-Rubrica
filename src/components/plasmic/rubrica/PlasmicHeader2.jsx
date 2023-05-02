// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hDnb1e9HU6FSLTm6gTNrXy
// Component: khpp2BaapwX
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_rubrica.module.css"; // plasmic-import: hDnb1e9HU6FSLTm6gTNrXy/projectcss
import sty from "./PlasmicHeader2.module.css"; // plasmic-import: khpp2BaapwX/css
import UsersvgIcon from "./icons/PlasmicIcon__Usersvg"; // plasmic-import: J7WCCLHpj8Ajhn/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: Pu0iNXouDzTi9N/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: RcdW2ObP5Rbvjk/icon
import animalpng7EcAyfUUc from "./images/animalpng.png"; // plasmic-import: 7ecAyfUUc/picture

export const PlasmicHeader2__VariantProps = new Array();

export const PlasmicHeader2__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHeader2__RenderFunc(props) {
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
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox___1Wx6)}>
          {true ? (
            <div className={classNames(projectcss.all, sty.columns__rObm)}>
              <div className={classNames(projectcss.all, sty.column__w5SQi)}>
                <div className={classNames(projectcss.all, sty.freeBox__dMGyg)}>
                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__uxIxB)}
                    >
                      <UsersvgIcon
                        className={classNames(projectcss.all, sty.svg__sLguc)}
                        role={"img"}
                      />

                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          sty.link__bf1Uv
                        )}
                        href={"https://www.plasmic.app/"}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#000000" }}
                          >
                            {"Esci"}
                          </span>
                        </React.Fragment>
                      </a>
                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          sty.link___5IuGt
                        )}
                        href={"https://www.plasmic.app/"}
                      >
                        {"Some link text"}
                      </a>
                    </div>
                  ) : null}
                </div>
                <div
                  className={classNames(projectcss.all, sty.freeBox__aStlk)}
                />
              </div>
              {true ? (
                <div className={classNames(projectcss.all, sty.column___0Hhxb)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__pxjcs)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__yg3J8)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"130px"}
                      loading={"lazy"}
                      src={{
                        src: animalpng7EcAyfUUc,
                        fullWidth: 512,
                        fullHeight: 512,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                </div>
              ) : null}
              <div className={classNames(projectcss.all, sty.column__hl0N)}>
                <div className={classNames(projectcss.all, sty.freeBox__gPkWb)}>
                  <SearchsvgIcon
                    className={classNames(projectcss.all, sty.svg__ehQk)}
                    role={"img"}
                  />
                </div>
              </div>
            </div>
          ) : null}
          <div className={classNames(projectcss.all, sty.columns__pbwY)}>
            <div className={classNames(projectcss.all, sty.column__ruAqu)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___1EKls)}
              >
                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__mKjYw
                  )}
                  href={`/Login`}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__tOymS)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___8UVv0
                    )}
                    onClick={async event => {
                      const $steps = {};
                      $steps["goToHome"] = true
                        ? (() => {
                            const actionArgs = {
                              destination: __wrapUserFunction(
                                {
                                  type: "InteractionArgLoc",
                                  actionName: "navigation",
                                  interactionUuid: "Dr3PNLXiw",
                                  componentUuid: "khpp2BaapwX",
                                  argName: "destination"
                                },
                                () => `/`
                              )
                            };
                            return __wrapUserFunction(
                              {
                                type: "InteractionLoc",
                                actionName: "navigation",
                                interactionUuid: "Dr3PNLXiw",
                                componentUuid: "khpp2BaapwX"
                              },
                              () =>
                                (({ destination }) => {
                                  location.assign(destination);
                                })?.apply(null, [actionArgs]),
                              actionArgs
                            );
                          })()
                        : undefined;
                      if (
                        typeof $steps["goToHome"] === "object" &&
                        typeof $steps["goToHome"].then === "function"
                      ) {
                        $steps["goToHome"] = await __wrapUserPromise(
                          {
                            type: "InteractionLoc",
                            actionName: "navigation",
                            interactionUuid: "Dr3PNLXiw",
                            componentUuid: "khpp2BaapwX"
                          },
                          $steps["goToHome"]
                        );
                      }
                    }}
                  >
                    {"Esci"}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__pvGUg)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>
                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__ecolG
                  )}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__kw1Df)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___3McIb
                    )}
                  >
                    {""}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__byr9G)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>
              </p.Stack>
            </div>
            <div className={classNames(projectcss.all, sty.column__cdcV8)}>
              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__htHb
                )}
                href={`/`}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__hkr4L)}
                  displayHeight={"100%"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"130px"}
                  onClick={async event => {
                    const $steps = {};
                    $steps["goToHome"] = true
                      ? (() => {
                          const actionArgs = {
                            destination: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "navigation",
                                interactionUuid: "Rbf-qVuiP",
                                componentUuid: "khpp2BaapwX",
                                argName: "destination"
                              },
                              () => `/`
                            )
                          };
                          return __wrapUserFunction(
                            {
                              type: "InteractionLoc",
                              actionName: "navigation",
                              interactionUuid: "Rbf-qVuiP",
                              componentUuid: "khpp2BaapwX"
                            },
                            () =>
                              (({ destination }) => {
                                location.assign(destination);
                              })?.apply(null, [actionArgs]),
                            actionArgs
                          );
                        })()
                      : undefined;
                    if (
                      typeof $steps["goToHome"] === "object" &&
                      typeof $steps["goToHome"].then === "function"
                    ) {
                      $steps["goToHome"] = await __wrapUserPromise(
                        {
                          type: "InteractionLoc",
                          actionName: "navigation",
                          interactionUuid: "Rbf-qVuiP",
                          componentUuid: "khpp2BaapwX"
                        },
                        $steps["goToHome"]
                      );
                    }
                  }}
                  src={{
                    src: animalpng7EcAyfUUc,
                    fullWidth: 512,
                    fullHeight: 512,
                    aspectRatio: undefined
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHeader2__ArgProps,
          internalVariantPropNames: PlasmicHeader2__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHeader2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader2";
  } else {
    func.displayName = `PlasmicHeader2.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader2 = Object.assign(
  // Top-level PlasmicHeader2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicHeader2
    internalVariantProps: PlasmicHeader2__VariantProps,
    internalArgProps: PlasmicHeader2__ArgProps
  }
);

export default PlasmicHeader2;
/* prettier-ignore-end */
