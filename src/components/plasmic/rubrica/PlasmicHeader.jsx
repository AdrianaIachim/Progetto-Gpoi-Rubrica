// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hDnb1e9HU6FSLTm6gTNrXy
// Component: HKS-4yiT-Ecwy
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
import sty from "./PlasmicHeader.module.css"; // plasmic-import: HKS-4yiT-Ecwy/css
import UsersvgIcon from "./icons/PlasmicIcon__Usersvg"; // plasmic-import: J7WCCLHpj8Ajhn/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: Pu0iNXouDzTi9N/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: RcdW2ObP5Rbvjk/icon
import animalpng7EcAyfUUc from "./images/animalpng.png"; // plasmic-import: 7ecAyfUUc/picture

export const PlasmicHeader__VariantProps = new Array();

export const PlasmicHeader__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHeader__RenderFunc(props) {
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
        <div className={classNames(projectcss.all, sty.freeBox___1J6Dj)}>
          {true ? (
            <div className={classNames(projectcss.all, sty.columns__amsp4)}>
              <div className={classNames(projectcss.all, sty.column___24Elv)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox___1IDtu)}
                >
                  {true ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___8Ghyf
                      )}
                    >
                      <UsersvgIcon
                        className={classNames(projectcss.all, sty.svg___9YCw8)}
                        role={"img"}
                      />

                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          sty.link___7JJsR
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
                            {"Accedi"}
                          </span>
                        </React.Fragment>
                      </a>
                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          sty.link___84OLn
                        )}
                        href={"https://www.plasmic.app/"}
                      >
                        {"Some link text"}
                      </a>
                    </div>
                  ) : null}
                </div>
                <div
                  className={classNames(projectcss.all, sty.freeBox__ssTU)}
                />
              </div>
              {true ? (
                <div className={classNames(projectcss.all, sty.column__fgMnk)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__pUr5)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___3EOXm)}
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
              <div className={classNames(projectcss.all, sty.column__zqPyA)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox___7G1Ip)}
                >
                  <SearchsvgIcon
                    className={classNames(projectcss.all, sty.svg__o85H5)}
                    role={"img"}
                  />
                </div>
              </div>
            </div>
          ) : null}
          <div className={classNames(projectcss.all, sty.columns__oCoy)}>
            <div className={classNames(projectcss.all, sty.column___9BtGf)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__tcke)}
              >
                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link___9RyUl
                  )}
                  href={`/Login`}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__hexhM)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    className={classNames(projectcss.all, sty.freeBox__i701T)}
                  >
                    <UsersvgIcon
                      className={classNames(projectcss.all, sty.svg__fmnXa)}
                      role={"img"}
                    />
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jYcWa
                    )}
                    onClick={async event => {
                      const $steps = {};
                      $steps["goToLogin"] = true
                        ? (() => {
                            const actionArgs = {
                              destination: __wrapUserFunction(
                                {
                                  type: "InteractionArgLoc",
                                  actionName: "navigation",
                                  interactionUuid: "b5cJWw_ca",
                                  componentUuid: "HKS-4yiT-Ecwy",
                                  argName: "destination"
                                },
                                () => `/Login`
                              )
                            };
                            return __wrapUserFunction(
                              {
                                type: "InteractionLoc",
                                actionName: "navigation",
                                interactionUuid: "b5cJWw_ca",
                                componentUuid: "HKS-4yiT-Ecwy"
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
                        typeof $steps["goToLogin"] === "object" &&
                        typeof $steps["goToLogin"].then === "function"
                      ) {
                        $steps["goToLogin"] = await __wrapUserPromise(
                          {
                            type: "InteractionLoc",
                            actionName: "navigation",
                            interactionUuid: "b5cJWw_ca",
                            componentUuid: "HKS-4yiT-Ecwy"
                          },
                          $steps["goToLogin"]
                        );
                      }
                    }}
                  >
                    {"Accedi"}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__qr0JK)}
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
                    sty.link__mgaxh
                  )}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__rp2Us)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wqcsW
                    )}
                  >
                    {""}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__wwofV)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>
              </p.Stack>
            </div>
            <div className={classNames(projectcss.all, sty.column___5QFxA)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__of9Hq)}
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
                              interactionUuid: "T52vp6PF7",
                              componentUuid: "HKS-4yiT-Ecwy",
                              argName: "destination"
                            },
                            () => `/`
                          )
                        };
                        return __wrapUserFunction(
                          {
                            type: "InteractionLoc",
                            actionName: "navigation",
                            interactionUuid: "T52vp6PF7",
                            componentUuid: "HKS-4yiT-Ecwy"
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
                        interactionUuid: "T52vp6PF7",
                        componentUuid: "HKS-4yiT-Ecwy"
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
            </div>
            <div className={classNames(projectcss.all, sty.column__bPfs0)}>
              <div className={classNames(projectcss.all, sty.freeBox__vFv5M)}>
                {true ? (
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__xi4Ps
                    )}
                    href={"#"}
                  >
                    <SearchsvgIcon
                      className={classNames(projectcss.all, sty.svg__obEd)}
                      onClick={async event => {
                        const $steps = {};
                        $steps["goToContatti"] = true
                          ? (() => {
                              const actionArgs = {
                                destination: __wrapUserFunction(
                                  {
                                    type: "InteractionArgLoc",
                                    actionName: "navigation",
                                    interactionUuid: "Vt6bgpkRM",
                                    componentUuid: "HKS-4yiT-Ecwy",
                                    argName: "destination"
                                  },
                                  () => `/Contatti`
                                )
                              };
                              return __wrapUserFunction(
                                {
                                  type: "InteractionLoc",
                                  actionName: "navigation",
                                  interactionUuid: "Vt6bgpkRM",
                                  componentUuid: "HKS-4yiT-Ecwy"
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
                          typeof $steps["goToContatti"] === "object" &&
                          typeof $steps["goToContatti"].then === "function"
                        ) {
                          $steps["goToContatti"] = await __wrapUserPromise(
                            {
                              type: "InteractionLoc",
                              actionName: "navigation",
                              interactionUuid: "Vt6bgpkRM",
                              componentUuid: "HKS-4yiT-Ecwy"
                            },
                            $steps["goToContatti"]
                          );
                        }
                      }}
                      role={"img"}
                    />
                  </a>
                ) : null}
              </div>
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
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
